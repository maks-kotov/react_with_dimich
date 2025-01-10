import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const postData = [
  {myText: 'today is 05.01.2025', countLikes: '1', id: 0},
  {myText: 'i cheepful now', countLikes: '2', id: 1},
  {myText: 'i am coder', countLikes: '999', id: 2}
]
const names = [
  {name: 'Andrew', id: 1, path: '/messages/andrew'},
  {name: 'Dmitry', id: 2, path: '/messages/dmitry'},
  {name: 'Sasha', id: 3, path: '/messages/sasha'},
  {name: 'Sveta', id: 4, path: '/messages/sveta'},
  {name: 'Valera', id: 5, path: '/messages/valera'},
  {name: 'Victor', id: 6, path: '/messages/victor'},
  {name: 'Mason', id: 7, path: '/messages/mason'},
  {name: 'Oleg', id: 8, path: '/messages/oleg'},]

root.render(
  <React.StrictMode>
    
    <App postsss={postData} namess={names}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
