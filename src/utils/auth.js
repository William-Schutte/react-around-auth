const BASE_URL = 'https://register.nomoreparties.co';

export const register = (email, password) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "password": password, "email": email })
    }).then((res) => {
        if (res.status === 201) {
            return res.json();
        } else {
            throw new Error('Unsuccessful registration');
        }
    });
};

export const authorize = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "password": password, "email": email })
    }).then((res) => {
        if (res.status === 200) {
            return res.json();
        } else {
            throw new Error('Unsuccessful login');
        }
    }).then((data) => {
        localStorage.setItem('jwt', data.token)
        return true;
    });
};

export const getUser = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }).then((res) => {
        if (res.status === 200) {
            return res.json();
        }
    })
}