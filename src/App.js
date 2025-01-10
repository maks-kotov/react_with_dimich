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
            <Route path="/" element={<Main postss={props.postsss}/>} />
            <Route path="/main" element={<Main postss={props.postsss}/>} />
            <Route path="/messages" element={<Messages names={props.namess}/>} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />

            


           
            <Route path='/messages/andrew' element={<Messages names={props.namess} 
            text1='I am a normal popower and i can have text and everything'
            text2='I am a normal pBlabllbl i can have text and everything'
            text3='I am a normal popower and i can have text and everything'
            text4='I am a normal popower and i can have text and everything'
            name1='Andrew'
            name2='Me'
            name3='Me'
            name4='Andrew'/>}/>
            <Route path='/messages/dmitry' element={<Messages names={props.namess} 
            text1='я диман'
            text2='вуссап'
            text3='я масон'
            text4='ай эм сэд'
            name1='Dmitry'
            name2='Me'
            name3='Me'
            name4='Dmitry'/>}/>
            <Route path='/messages/sasha' element={<Messages names={props.namess} 
            text1='я sasha'
            text2='вуссап'
            text3='я масоnnn'
            text4="i'm sad"
            name1='Sasha'
            name2='Me'
            name3='Me'
            name4='Sasha'/>}/>
            <Route path='/messages/sveta' element={<Messages names={props.namess} 
            text1='hello'
            text2='nice to meet you'
            text3='how are you?'
            text4="i'm fine"
            name1='Sveta'
            name2='Me'
            name3='Me'
            name4='Sveta'/>}/>
            <Route path='/messages/valera' element={<Messages names={props.namess} 
            text1='валер'
            text2='чё'
            text3='валер'
            text4="настало твоё время"
            name1='Valera'
            name2='Me'
            name3='Me'
            name4='Valera'/>}/>
            <Route path='/messages/victor' element={<Messages names={props.namess} 
            text1='здарова масон'
            text2='здарова виктор'
            text3='как оно'
            text4="i am fine niga"
            name1='Victor'
            name2='Me'
            name3='Me'
            name4='Victor'/>}/>
            <Route path='/messages/mason' element={<Messages names={props.namess} 
            text1='я пизжю сам с собой?'
            text2='дану'
            text3='как это возмонжо'
            text4="nyaaaa"
            name1='Mason'
            name2='Me'
            name3='Me'
            name4='Mason'/>}/>
            <Route path='/messages/oleg' element={<Messages names={props.namess} 
            text1='здарова'
            text2='привет'
            text3='как дела?'
            text4="щас расскажу охуеешь"
            name1='Oleg'
            name2='Me'
            name3='Me'
            name4='Oleg'/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
