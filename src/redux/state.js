import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";

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
            newPostText: ""
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Алексей'},
                {id: 2, name: 'Андрей'},
                {id: 3, name: 'Юлия'},
                {id: 4, name: 'Павел'},
                {id: 5, name: 'Руслана'},
                {id: 6, name: 'Андрей'},
                {id: 7, name: 'Виктория'},
                {id: 8, name: 'Дарья'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'I\'m fine. And you?'},
                {id: 4, message: 'I\'m fine.'}
            ],
            newMessageText: ""
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; //наблюдатель, это паттерн
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }

}

export default store;

window.state = store;