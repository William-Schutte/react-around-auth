// ###########################  API Class  ########################################################

class Api {
    constructor(options) {
      this.options = options;
    }
  
    // Function replaced by getUser in auth
    getUserInfo(token) {
        return fetch(`${this.options.baseUrl}/user`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
        })
          .then(res => {
            if (res.status === 200) {
                return res.json().data;
            } else {
                return Promise.reject(`Error: ${res.status}`);
            }
          });
    }

    patchUserInfo({ name: newName, about: newAbout, token }) {
        return fetch(`${this.options.baseUrl}/user/me`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({ "name": newName, "about": newAbout })
        })
            .then(res => {
                if (res.status === 200) {
                    return res.json();
                } else {
                    return Promise.reject(`Error: ${res.status}`);
                }
            });
    }

    patchUserPic({ avatar: newUrl, token }) {
        return fetch(`${this.options.baseUrl}/user/me/avatar`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({ "avatar": newUrl })
        })
            .then(res => {
                if (res.status === 200) {
                    return res.json();
                } else {
                    return Promise.reject(`Error: ${res.status}`);
                }
            });
    }

    getInitialCards(token) {
        return fetch(`${this.options.baseUrl}/cards`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
        })
          .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                return Promise.reject(`Error: ${res.status}`);
            }
          });
    }

    addNewCard({ name: newName, link: newLink, token }) {
        return fetch(`${this.options.baseUrl}/cards`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({ name: newName, link: newLink })
          })
            .then(res => {
              if (res.ok) {
                  return res.json();
              } else {
                  return Promise.reject(`Error: ${res.status}`);
              }
            });
    }

    deleteCard({ cardId, token }) {
        return fetch(`${this.options.baseUrl}/cards/${cardId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    return Promise.reject(`Error: ${res.status}`);
                }
            });
    }

    // And thus working here too
    likeCard({ card, isLiked, token }) {
        // If the card is already liked by the user, the like is removed, else a like is added
        if (isLiked) {
            return fetch(`${this.options.baseUrl}/cards/${card._id}/likes`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
            })
                .then(res => {
                    if (res.ok) {
                        return res.json();
                    } else {
                        return Promise.reject(`Error: ${res.status}`);
                    }
                });
        } else {
            return fetch(`${this.options.baseUrl}/cards/${card._id}/likes`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
            })
                .then(res => {
                    if (res.ok) {
                        return res.json();
                    } else {
                        return Promise.reject(`Error: ${res.status}`);
                    }
                });
        }
        
    }
}

const api = new Api({
    baseUrl: "https://api.ws.p15.students.nomoreparties.site",
});

// const api = new Api({
//     baseUrl: "https://around.nomoreparties.co/v1/group-1",
//     headers: {
//         authorization: "b3ddd9c8-cc64-4470-93b1-0840e92522c5",
//         "Content-Type": "application/json"
//     }
// });

export default api;