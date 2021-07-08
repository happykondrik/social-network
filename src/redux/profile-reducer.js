const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
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
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            let newPost = {
                id: 17,
                message: state.newPostText,
                likesCount: 0
            };

            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({
    type: ADD_POST
})

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})

export default profileReducer;