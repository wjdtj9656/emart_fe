import "./App.css";
import Goods from "./components/Goods/Goods";
import HomeMenu from "./components/HomeMenu/HomeMenu";
import HomeTitle from "./components/HomeTitle/HomeTitle";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomeTitle />
      <HomeMenu />
      <Goods />
    </div>
  );
}

export default App;
