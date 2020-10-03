import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Main from './Main.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import api from '../utils/api.js';
import CurrentUserContext from '../contexts/CurrentUserContext.js';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import AddPlacePopup from './AddPlacePopup.js';
import ProtectedRoute from './ProtectedRoute';
import Register from './Register';
import Login from './Login';
import InfoToolTip from './InfoToolTip'
import * as auth from '../utils/auth.js';

function App() {

    // State variable fot the current user's info
    const [currentUser, setCurrentUser] = React.useState({});
    // The effect hook with an empty second parameter will update once upon mounting,
    // i.e. one update after the API call
    React.useEffect(() => {
        api.getUserInfo()
            .then((res) => { setCurrentUser(res); })
            .catch((err) => { console.log(err) });
    }, []);

    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    React.useEffect(() => {
        const jwt = localStorage.getItem('jwt');
        if (jwt) {
            auth.getUser(jwt).then((res) => {
                if (res) {
                    console.log('Made it to the token check on mount')
                    console.log(isLoggedIn);
                }
            }).then(() => {
                setIsLoggedIn(true);
            });
        }
        
    });

    // Declaration of three hooks that act as state variables for the visibility of each form
    const [isEditProfileOpen, setIsEditProfileOpen] = React.useState(false);
    const [isAddPlaceOpen, setIsAddPlaceOpen] = React.useState(false);
    const [isEditAvatarOpen, setIsEditAvatarOpen] = React.useState(false);
    const [isInfoToolTipOpen, setIsInfoToolTipOpen] = React.useState(false);
    const [regSuccess, setRegSuccess] = React.useState(false);

    // Selected card hook for state of Image Popup
    const [selectedCard, setSelectedCard] = React.useState(null);

    function handleEditAvatarClick() {
        setIsEditAvatarOpen(true);
    }

    function handleEditProfileClick() {
        setIsEditProfileOpen(true);
    }

    function handleAddPlaceClick() {
        setIsAddPlaceOpen(true);
    }

    function handleAuthRegClick(result) {
        setRegSuccess(result);
        setIsInfoToolTipOpen(true);
    }

    function closeAllPopups() {
        setIsEditAvatarOpen(false);
        setIsEditProfileOpen(false);
        setIsAddPlaceOpen(false);
        setIsInfoToolTipOpen(false);
        setSelectedCard(null);
    }

    function handleCardClick(card) {
        setSelectedCard(card);
    }

    function handleUpdateUser(newInfo) {
        api.patchUserInfo(newInfo)
            .then((res) => { setCurrentUser(res) })
            .catch((err) => { console.log(err) });
    }

    function handleUpdateAvatar(avatar) {
        api.patchUserPic(avatar)
            .then((res) => { setCurrentUser(res) })
            .catch((err) => { console.log(err) });
    }

    // Card variables and functions

    // Declaration of hooks that act as state variables for cards
    const [cards, setCards] = React.useState([]);

    // Effect hook for updating of user info and cards
    React.useEffect(() => {
        api.getInitialCards()
            .then((res) => { setCards(res); })
            .catch((err) => { console.log(err) });
    }, []);

    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        api.likeCard(card, isLiked)
            .then((res) => {
                const newCards = cards.map((c) => c._id === card._id ? res : c);
                setCards(newCards);
            })
            .catch((err) => { console.log(err) });
    }

    function handleCardDelete(card) {
        api.deleteCard(card._id)
            .then(() => {
                const newCards = cards.filter((c) => c._id !== card._id);
                setCards(newCards);
            });
    }

    function handleAddPlace(card) {
        api.addNewCard(card)
            .then((res) => {
                const newCards = [...cards, res];
                setCards(newCards);
            });
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <Switch>
                <ProtectedRoute exact path="/" component={Main} loggedIn={isLoggedIn} userEmail={isLoggedIn} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick}
                    onCardClick={handleCardClick} onClose={closeAllPopups} cards={cards} onCardLike={handleCardLike} onCardDelete={handleCardDelete} />
                <Route path='/signup'>
                    <Register onClick={handleAuthRegClick} />
                </Route>
                <Route path='/signin'>
                    <Login onClick={handleAuthRegClick} setUser={setIsLoggedIn} />
                </Route>
                <Route path='*'>
                    <Redirect to="/signin" />
                </Route>
            </Switch>
            
            {/* Popup ToolTip for Registration/Login */}
            <InfoToolTip isOpen={isInfoToolTipOpen} success={regSuccess} onClose={closeAllPopups} />    

            {/* Popup Edit User Info Form */}
            <EditProfilePopup isOpen={isEditProfileOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />

            {/* Popup Edit User Pic Form */}
            <EditAvatarPopup isOpen={isEditAvatarOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />

            {/* Popup Add Form */}
            <AddPlacePopup isOpen={isAddPlaceOpen} onClose={closeAllPopups} onAddPlace={handleAddPlace} />

            {/* Popup Delete Form */}
            <PopupWithForm name="form-delete" title="Are you sure?" isOpen={null} btnText="Yes" onClose={closeAllPopups} />

            {/* Image Popup */}
            <ImagePopup card={selectedCard} onClose={closeAllPopups} />

        </CurrentUserContext.Provider>
    );
}

export default App;