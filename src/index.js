import reportWebVitals from './reportWebVitals';
import state from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {addPost, addSymbolToMessage, addSymbolToPost, subscribe} from './redux/state';


const root = ReactDOM.createRoot(document.getElementById('root'));

const rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} addSymbolToPost={addSymbolToPost} addSymbolToMessage={addSymbolToMessage}/>
    </React.StrictMode>
  );
}
subscribe(rerenderEntireTree)


rerenderEntireTree(state)

reportWebVitals();
