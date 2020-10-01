import React from 'react';
import PopupWithForm from './PopupWithForm.js';
import CurrentUserContext from '../contexts/CurrentUserContext.js';

function EditAvatarPopup(props) {

    // Import of context value from provider
    const currentUser = React.useContext(CurrentUserContext);

    // Ref refers to input field DOM node
    const avatarUrl = React.useRef();

    function handleSubmit(e) {
        e.preventDefault();
        props.onUpdateAvatar({ avatar: avatarUrl.current.value });
        props.onClose();
        avatarUrl.current.value = null;
    }

    return (
        <PopupWithForm name="form-pic" title="Change userpic" isOpen={props.isOpen} btnText="Save" onClose={props.onClose} onSubmit={handleSubmit}>
            <label className="form__input-field">
                <input ref={avatarUrl} id="form-name" name="primary" className="form__name form__input" type="url" placeholder={currentUser.avatar} required />
                <span id="form-name-error" className="form__error"></span>
            </label>
        </PopupWithForm>
    );
}

export default EditAvatarPopup;