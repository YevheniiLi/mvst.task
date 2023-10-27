import "./styles.css";
import Header from "./component/Header/Header.tsx";
import Hero from "./component/Hero/Hero";
import Sidebar from "./component/Sidebar/Sidebar";

function App() {
  return (
    <div className="app-container"> 
      <Header />
      <div className="outline"></div>
      <div className="main-container">
        <Sidebar />
        <Hero />
      </div>
    </div>
  );
}

export default App;