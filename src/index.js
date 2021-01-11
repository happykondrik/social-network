import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

let dialogs = [
    {id: 1, name: 'Aleksey'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Yuliya'},
    {id: 4, name: 'Pavel'},
    {id: 5, name: 'Ryslana'},
    {id: 6, name: 'Andrey'},
    {id: 7, name: 'Victoriya'},
    {id: 8, name: 'Dariya'},
]

let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'I\'m fine. And you?'},
    {id: 4, message: 'I\'m fine.'}
]

let posts = [
    {id: 1, message: 'Hi, how are you?', likesCount: 15},
    {id: 2, message: 'It\'s my first post', likesCount: 7},
    {id: 3, message: 'I\'m fine. And you?', likesCount: 25},
    {id: 4, message: 'I\'m fine.', likesCount: 33},
    {id: 1, message: 'Hi, how are you?', likesCount: 15},
    {id: 2, message: 'It\'s my first post', likesCount: 7},
    {id: 3, message: 'I\'m fine. And you?', likesCount: 25},
    {id: 4, message: 'I\'m fine.', likesCount: 33},
    {id: 1, message: 'Hi, how are you?', likesCount: 15},
    {id: 2, message: 'It\'s my first post', likesCount: 7},
    {id: 3, message: 'I\'m fine. And you?', likesCount: 25},
    {id: 4, message: 'I\'m fine.', likesCount: 33},
    {id: 1, message: 'Hi, how are you?', likesCount: 15},
    {id: 2, message: 'It\'s my first post', likesCount: 7},
    {id: 3, message: 'I\'m fine. And you?', likesCount: 25},
    {id: 4, message: 'I\'m fine.', likesCount: 33}
]

export {dialogs};
export {messages};
export {posts};


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
