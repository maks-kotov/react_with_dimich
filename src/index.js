import reportWebVitals from './reportWebVitals';
import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));

const rerenderEntireTree = () => {
  root.render(
    <React.StrictMode>
      <App store={store} state={store.getState()}/>
    </React.StrictMode>
  );
}
rerenderEntireTree()

store.subscribe(rerenderEntireTree)


reportWebVitals();
