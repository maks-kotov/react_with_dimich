import "./App.css";
import Header from "./components/header/header";
import Aside from "./components/aside/aside";
import Main from "./components/main/main";
import Messages from "./components/messages/messages";
import News from "./components/news/news";
import Music from "./components/music/music";
import Settings from "./components/settings/settings";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ContainerMessages from "./components/messages/containerMessages";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <div className="asideAndMain">
          <Aside asidePage={props.state.asidePage} />
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  state={props.state}
                  dispatch={props.dispatch}
                  addSymbolToPost={props.addSymbolToPost}
                  addPost={props.addPost}
                />
              }
            />
            <Route
              path="/main"
              element={<Main dispatch={props.dispatch} state={props.state} />}
            />
            <Route
              path="/messages"
              element={
                <ContainerMessages dispatch={props.dispatch} state={props.state} />
              }
            />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />

            <Route
              path="/messages/andrew"
              element={
                <Messages
                  names={props.state.messagesPage.names}
                  dispatch={props.dispatch}
                  state={props.state}
                />
              }
            />

            <Route
              path="/messages/dmitry"
              element={
                <Messages dispatch={props.dispatch} state={props.state} />
              }
            />

            <Route
              path="/messages/sasha"
              element={
                <Messages dispatch={props.dispatch} state={props.state} />
              }
            />
            <Route
              path="/messages/sveta"
              element={
                <Messages dispatch={props.dispatch} state={props.state} />
              }
            />
            <Route
              path="/messages/valera"
              element={
                <Messages dispatch={props.dispatch} state={props.state} />
              }
            />
            <Route
              path="/messages/victor"
              element={
                <Messages dispatch={props.dispatch} state={props.state} />
              }
            />
            <Route
              path="/messages/mason"
              element={
                <Messages dispatch={props.dispatch} state={props.state} />
              }
            />
            <Route
              path="/messages/oleg"
              element={
                <Messages dispatch={props.dispatch} state={props.state} />
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
