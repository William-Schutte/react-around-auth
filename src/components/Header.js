import React from 'react';
import { Link } from 'react-router-dom';
import headerLogo from '../images/header-logo.svg';

function Header(props) {
    
    const handleClick = (e) => {
        localStorage.removeItem('jwt');
        props.setLoggedIn({ loggedIn: false, email: null });
    }

    return (
        <header className="header">
            <img className="header__logo" src={headerLogo} alt="Around the U.S. Logo" />
            {props.linkText && <Link className="header__link btn-animate" to={props.linkTo}>{props.linkText}</Link>}
            {props.userEmail && 
                <>
                    <p className="header__link">{props.userEmail}</p>
                    <Link className="header__sign-out btn-animate" onClick={handleClick} to='/'>Log Out</Link>
                </>}
        </header>
    )
}

export default Header;