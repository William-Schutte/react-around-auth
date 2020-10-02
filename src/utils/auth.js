
const BASE_URL = 'https://register.nomoreparties.co';

export const register = (email, password) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "password": password, "email": email })
    }).then((res) => {
        return res.json;
    }).catch((err) => console.log(err));
};

export const authorize = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "password": password, "email": email })
    }).then((res) => {
        return res.json;
    }).then((data) => {
        if (data.user) {
            localStorage.setItem('token', data.token)
        }
    }).catch((err) => console.log(err));
};
