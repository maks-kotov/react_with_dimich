import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));

const rerenderEntireTree = () => {
  root.render(
    <React.StrictMode>
      <App
        dispatch={store.dispatch.bind(store)}
        state={store.getState()}
      />
    </React.StrictMode>
  );
}
rerenderEntireTree()

store.subscribe(rerenderEntireTree)


reportWebVitals();
