import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
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

class App extends React.Component {
    constructor() {
        super();
        this.state={
            isLoggedIn: null,
            userEmail: '',
            currentUser: {},
            isEditProfileOpen: false,
            isAddPlaceOpen: false,
            isEditAvatarOpen: false,
            isInfoToolTipOpen: false,
            regSuccess: false,
            selectedCard: null,
            cards: [],
        };
        this.handleEditAvatarClick = this.handleEditAvatarClick.bind(this);
        this.handleEditProfileClick = this.handleEditProfileClick.bind(this);
        this.handleAddPlaceClick = this.handleAddPlaceClick.bind(this);
        this.handleAuthRegClick = this.handleAuthRegClick.bind(this);
        this.closeAllPopups = this.closeAllPopups.bind(this);
        this.handleCardClick = this.handleCardClick.bind(this);
        this.handleUpdateUser = this.handleUpdateUser.bind(this);
        this.handleUpdateAvatar = this.handleUpdateAvatar.bind(this);
        this.handleCardLike = this.handleCardLike.bind(this);
        this.handleCardDelete = this.handleCardDelete.bind(this);
        this.handleAddPlace= this.handleAddPlace.bind(this);
        this.handleSetLoggedIn = this.handleSetLoggedIn.bind(this);
    }

    componentDidMount() {
        // Get user info for profile section
        api.getUserInfo().then((res) => { 
            this.setState({ currentUser: res}); 
        }).catch((err) => { 
            console.log(err) 
        });
        
        // Get initial cards
        api.getInitialCards().then((res) => { 
            this.setState({ cards: res}); 
        }).catch((err) => { 
            console.log(err) 
        });

        // Check if user has jwt token
        const jwt = localStorage.getItem('jwt');
        if (jwt) {
            auth.getUser(jwt).then((res) => {
                if (res) {
                    this.setState({ 
                        isLoggedIn: true,
                        userEmail: res.data.email
                    });
                }
            }).then(() => {
                this.props.history.push('/'); ;
            });
        }   
    }

    handleSetLoggedIn({loggedIn, email}) {
        this.setState({
            isLoggedIn: loggedIn,
            userEmail: email
        })
    }

    handleEditAvatarClick() {
        this.setState({ isEditAvatarOpen: true });
    }

    handleEditProfileClick() {
        this.setState({ isEditProfileOpen: true });
    }

    handleAddPlaceClick() {
        this.setState({ isAddPlaceOpen: true });
    }

    handleAuthRegClick(result) {
        this.setState({
            regSuccess: result,
            isInfoToolTipOpen: true
        });
    }

    closeAllPopups() {
        this.setState({
            isEditAvatarOpen: false,
            isEditProfileOpen: false,
            isAddPlaceOpen: false,
            isInfoToolTipOpen: false,
            selectedCard: null
        });
    }

    handleCardClick(card) {
        this.setState({ selectedCard: card });
    }

    handleUpdateUser(newInfo) {
        api.patchUserInfo(newInfo)
            .then((res) => { this.setState({ currentUser: res })})
            .catch((err) => { console.log(err) });
    }

    handleUpdateAvatar(avatar) {
        api.patchUserPic(avatar)
            .then((res) => { this.setState({ currentUser: res })})
            .catch((err) => { console.log(err) });
    }

    handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === this.state.currentUser._id);
        api.likeCard(card, isLiked)
            .then((res) => {
                const newCards = this.state.cards.map((c) => c._id === card._id ? res : c);
                this.setState({ cards: newCards });
            })
            .catch((err) => { console.log(err) });
    }

    handleCardDelete(card) {
        api.deleteCard(card._id)
            .then(() => {
                const newCards = this.state.cards.filter((c) => c._id !== card._id);
                this.setState({ cards: newCards });
            });
    }

    handleAddPlace(card) {
        api.addNewCard(card)
            .then((res) => {
                const newCards = [...this.state.cards, res];
                this.setState({ cards: newCards });
            });
    }

    render() {
        return (
            <CurrentUserContext.Provider value={this.state.currentUser}>
                <Switch>
                    <ProtectedRoute exact path="/" component={Main} loggedIn={this.state.isLoggedIn} userEmail={this.state.userEmail} 
                        onEditProfile={this.handleEditProfileClick} onAddPlace={this.handleAddPlaceClick} onEditAvatar={this.handleEditAvatarClick}
                        onCardClick={this.handleCardClick} onClose={this.closeAllPopups} cards={this.state.cards} onCardLike={this.handleCardLike} 
                        onCardDelete={this.handleCardDelete} setLoggedIn={this.handleSetLoggedIn}/>
                    <Route path='/signup'>
                        <Register onClick={this.handleAuthRegClick} />
                    </Route>
                    <Route path='/signin'>
                        <Login onClick={this.handleAuthRegClick} setLoggedIn={this.handleSetLoggedIn} />
                    </Route>
                    <Route path='*'>
                        <Redirect to="/signin" />
                    </Route>
                </Switch>
                
                {/* Popup ToolTip for Registration/Login */}
                <InfoToolTip isOpen={this.state.isInfoToolTipOpen} success={this.state.regSuccess} onClose={this.closeAllPopups} />    

                {/* Popup Edit User Info Form */}
                <EditProfilePopup isOpen={this.state.isEditProfileOpen} onClose={this.closeAllPopups} onUpdateUser={this.handleUpdateUser} />

                {/* Popup Edit User Pic Form */}
                <EditAvatarPopup isOpen={this.state.isEditAvatarOpen} onClose={this.closeAllPopups} onUpdateAvatar={this.handleUpdateAvatar} />

                {/* Popup Add Form */}
                <AddPlacePopup isOpen={this.state.isAddPlaceOpen} onClose={this.closeAllPopups} onAddPlace={this.handleAddPlace} />

                {/* Popup Delete Form */}
                <PopupWithForm name="form-delete" title="Are you sure?" isOpen={null} btnText="Yes" onClose={this.closeAllPopups} />

                {/* Image Popup */}
                <ImagePopup card={this.state.selectedCard} onClose={this.closeAllPopups} />

            </CurrentUserContext.Provider>
        );
    }
}

export default withRouter(App);