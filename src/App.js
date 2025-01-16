import "./App.css";
import Header from "./components/header/header";
import Aside from "./components/aside/aside";
import Main from "./components/main/main";
import Messages from "./components/messages/messages";
import News from "./components/news/news";
import Music from "./components/music/music";
import Settings from "./components/settings/settings";
import { Route, Routes, BrowserRouter } from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <div className="asideAndMain">
          <Aside aside={props.store._state.permEls.aside}/>
          <Routes>
            <Route path="/" element={<Main 
              state={props.state}
              store={props.store}
            />}/>
            <Route path="/main" element={<Main 
              state={props.state}
              store={props.store}
            />}/>
            <Route path="/messages" 
            element={<Messages 
              store={props.store}
              state={props.state}
            />}/>
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />

            
            <Route path='/messages/andrew' element={<Messages names={props.store._state.messagesPage.names} messages = {props.store._state.messagesPage.messages[0]} addSymbolToMessage={props.store.addSymbolToMessage}/>}/>
            <Route path='/messages/dmitry' element={<Messages names={props.store._state.messagesPage.names} messages = {props.store._state.messagesPage.messages[1]} addSymbolToMessage={props.store.addSymbolToMessage}
            />}/>
            <Route path='/messages/sasha' element={<Messages names={props.store._state.messagesPage.names} messages = {props.store._state.messagesPage.messages[2]} addSymbolToMessage={props.store.addSymbolToMessage}
            />}/>
            <Route path='/messages/sveta' element={<Messages names={props.store._state.messagesPage.names}  messages = {props.store._state.messagesPage.messages[3]} addSymbolToMessage={props.store.addSymbolToMessage}
            />}/>
            <Route path='/messages/valera' element={<Messages names={props.store._state.messagesPage.names} messages = {props.store._state.messagesPage.messages[4]} addSymbolToMessage={props.store.addSymbolToMessage}
            />}/>
            <Route path='/messages/victor' element={<Messages names={props.store._state.messagesPage.names} messages = {props.store._state.messagesPage.messages[5]} addSymbolToMessage={props.store.addSymbolToMessage}
            />}/>
            <Route path='/messages/mason' element={<Messages names={props.store._state.messagesPage.names} messages = {props.store._state.messagesPage.messages[6]} addSymbolToMessage={props.store.addSymbolToMessage}
            />}/>
            <Route path='/messages/oleg' element={<Messages names={props.store._state.messagesPage.names} messages = {props.store._state.messagesPage.messages[7]} addSymbolToMessage={props.store.addSymbolToMessage}
            />}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
