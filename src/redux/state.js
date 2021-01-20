import {rerenderEntireTree} from "./../render";

let state = {
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
        ]
    }
}

export let addPost = () => {
    let newPost = {
        id: 17,
        message: state.profilePage.newPostText,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export let addMessage = (messageMessage) => {
    let newMessage = {
        id: 5,
        message: 'ok, everything worked out'
    };
    state.dialogsPage.messages.push(newMessage);
}

export default state;