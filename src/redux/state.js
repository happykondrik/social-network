let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 15},
                {id: 2, message: 'It\'s my first post', likesCount: 7},
                {id: 3, message: 'I\'m fine. And you?', likesCount: 25},
                {id: 4, message: 'I\'m fine.', likesCount: 33},
                {id: 5, message: 'Hi, how are you?', likesCount: 15},
                {id: 6, message: 'It\'s my first post', likesCount: 7},
                {id: 7, message: 'I\'m fine. And you?', likesCount: 25},
                {id: 8, message: 'I\'m fine.', likesCount: 33},
                {id: 9, message: 'Hi, how are you?', likesCount: 15},
                {id: 10, message: 'It\'s my first post', likesCount: 7},
                {id: 11, message: 'I\'m fine. And you?', likesCount: 25},
                {id: 12, message: 'I\'m fine.', likesCount: 33},
                {id: 13, message: 'Hi, how are you?', likesCount: 15},
                {id: 14, message: 'It\'s my first post', likesCount: 7},
                {id: 15, message: 'I\'m fine. And you?', likesCount: 25},
                {id: 16, message: 'I\'m fine.', likesCount: 33}
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Aleksey'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Yuliya'},
                {id: 4, name: 'Pavel'},
                {id: 5, name: 'Ryslana'},
                {id: 6, name: 'Andrey'},
                {id: 7, name: 'Victoriya'},
                {id: 8, name: 'Dariya'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'I\'m fine. And you?'},
                {id: 4, message: 'I\'m fine.'}
            ],
            newMessageText: 'I am new message text'
        }
    },
    _callSubscriber () {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer; //наблюдатель, это паттерн
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 17,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type ==='UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === 'ADD-MESSAGE') {
            let newMessage = {
                id: 5,
                message: this._state.dialogsPage.newMessageText
            };

            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }
    }

}

export default store;

window.state = store;