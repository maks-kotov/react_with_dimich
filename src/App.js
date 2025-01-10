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
          <Aside />
          <Routes>
            <Route path="/" element={<Main postss={props.state.mainPage.postData}/>} info={props.state.mainPage.info[0]} />
            <Route path="/main" element={<Main postss={props.state.mainPage.postData} info={props.state.mainPage.info[0]}/>} />
            <Route path="/messages" element={<Messages names={props.state.messagesPage.names}/>} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />

            


           
            <Route path='/messages/andrew' element={<Messages names={props.state.messagesPage.names} 
            text1={props.state.messagesPage.messages[0].text1}
            text2={props.state.messagesPage.messages[0].text2}
            text3={props.state.messagesPage.messages[0].text3}
            text4={props.state.messagesPage.messages[0].text4}
            name1={props.state.messagesPage.messages[0].name1}
            name2={props.state.messagesPage.messages[0].name2}
            name3={props.state.messagesPage.messages[0].name3}
            name4={props.state.messagesPage.messages[0].name4}/>}/>
            <Route path='/messages/dmitry' element={<Messages names={props.state.messagesPage.names} 
            text1={props.state.messagesPage.messages[1].text1}
            text2={props.state.messagesPage.messages[1].text2}
            text3={props.state.messagesPage.messages[1].text3}
            text4={props.state.messagesPage.messages[1].text4}
            name1={props.state.messagesPage.messages[1].name1}
            name2={props.state.messagesPage.messages[1].name2}
            name3={props.state.messagesPage.messages[1].name3}
            name4={props.state.messagesPage.messages[1].name4}/>}/>
            <Route path='/messages/sasha' element={<Messages names={props.state.messagesPage.names} 
            text1={props.state.messagesPage.messages[2].text1}
            text2={props.state.messagesPage.messages[2].text2}
            text3={props.state.messagesPage.messages[2].text3}
            text4={props.state.messagesPage.messages[2].text4}
            name1={props.state.messagesPage.messages[2].name1}
            name2={props.state.messagesPage.messages[2].name2}
            name3={props.state.messagesPage.messages[2].name3}
            name4={props.state.messagesPage.messages[2].name4}/>}/>
            <Route path='/messages/sveta' element={<Messages names={props.state.messagesPage.names} 
            text1={props.state.messagesPage.messages[3].text1}
            text2={props.state.messagesPage.messages[3].text2}
            text3={props.state.messagesPage.messages[3].text3}
            text4={props.state.messagesPage.messages[3].text4}
            name1={props.state.messagesPage.messages[3].name1}
            name2={props.state.messagesPage.messages[3].name2}
            name3={props.state.messagesPage.messages[3].name3}
            name4={props.state.messagesPage.messages[3].name4}/>}/>
            <Route path='/messages/valera' element={<Messages names={props.state.messagesPage.names} 
            text1={props.state.messagesPage.messages[4].text1}
            text2={props.state.messagesPage.messages[4].text2}
            text3={props.state.messagesPage.messages[4].text3}
            text4={props.state.messagesPage.messages[4].text4}
            name1={props.state.messagesPage.messages[4].name1}
            name2={props.state.messagesPage.messages[4].name2}
            name3={props.state.messagesPage.messages[4].name3}
            name4={props.state.messagesPage.messages[4].name4}/>}/>
            <Route path='/messages/victor' element={<Messages names={props.state.messagesPage.names} 
            text1={props.state.messagesPage.messages[5].text1}
            text2={props.state.messagesPage.messages[5].text2}
            text3={props.state.messagesPage.messages[5].text3}
            text4={props.state.messagesPage.messages[5].text4}
            name1={props.state.messagesPage.messages[5].name1}
            name2={props.state.messagesPage.messages[5].name2}
            name3={props.state.messagesPage.messages[5].name3}
            name4={props.state.messagesPage.messages[5].name4}/>}/>
            <Route path='/messages/mason' element={<Messages names={props.state.messagesPage.names} 
            text1={props.state.messagesPage.messages[6].text1}
            text2={props.state.messagesPage.messages[6].text2}
            text3={props.state.messagesPage.messages[6].text3}
            text4={props.state.messagesPage.messages[6].text4}
            name1={props.state.messagesPage.messages[6].name1}
            name2={props.state.messagesPage.messages[6].name2}
            name3={props.state.messagesPage.messages[6].name3}
            name4={props.state.messagesPage.messages[6].name4}/>}/>
            <Route path='/messages/oleg' element={<Messages names={props.state.messagesPage.names} 
            text1={props.state.messagesPage.messages[7].text1}
            text2={props.state.messagesPage.messages[7].text2}
            text3={props.state.messagesPage.messages[7].text3}
            text4={props.state.messagesPage.messages[7].text4}
            name1={props.state.messagesPage.messages[7].name1}
            name2={props.state.messagesPage.messages[7].name2}
            name3={props.state.messagesPage.messages[7].name3}
            name4={props.state.messagesPage.messages[7].name4}/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
