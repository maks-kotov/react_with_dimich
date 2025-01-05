import "./App.css";
import Header from "./components/header/header";
import Aside from "./components/aside/aside";
import Main from "./components/main/main";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="asideAndMain">
        <Aside />
        <Main />
      </div>
    </div>
  );
};

export default App;
