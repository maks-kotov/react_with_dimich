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
          <Aside aside={props.state.permEls.aside}/>
          <Routes>
            <Route path="/" element={<Main 
            postss={props.state.mainPage.postData} 
            info={props.state.mainPage.info[0]}
            addPost={props.addPost}
            postValue={props.state.mainPage.postValue}
            addSymbol={props.addSymbol}
            />}/>
            <Route path="/main" element={<Main 
            postss={props.state.mainPage.postData} 
            info={props.state.mainPage.info[0]}
            addPost={props.addPost}
            postValue={props.state.mainPage.postValue}
            addSymbol={props.addSymbol}
            />} />
            <Route path="/messages" element={<Messages names={props.state.messagesPage.names} messages = {props.state.messagesPage.messages[8]}/>} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />

            
            <Route path='/messages/andrew' element={<Messages names={props.state.messagesPage.names} messages = {props.state.messagesPage.messages[0]} />}/>
            <Route path='/messages/dmitry' element={<Messages names={props.state.messagesPage.names} messages = {props.state.messagesPage.messages[1]}
            />}/>
            <Route path='/messages/sasha' element={<Messages names={props.state.messagesPage.names} messages = {props.state.messagesPage.messages[2]} 
            />}/>
            <Route path='/messages/sveta' element={<Messages names={props.state.messagesPage.names}  messages = {props.state.messagesPage.messages[3]}
            />}/>
            <Route path='/messages/valera' element={<Messages names={props.state.messagesPage.names} messages = {props.state.messagesPage.messages[4]}
            />}/>
            <Route path='/messages/victor' element={<Messages names={props.state.messagesPage.names} messages = {props.state.messagesPage.messages[5]}
            />}/>
            <Route path='/messages/mason' element={<Messages names={props.state.messagesPage.names} messages = {props.state.messagesPage.messages[6]}
            />}/>
            <Route path='/messages/oleg' element={<Messages names={props.state.messagesPage.names} messages = {props.state.messagesPage.messages[7]}
            />}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
