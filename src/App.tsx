import { useState } from "react";
import "./App.css";
import Goods from "./components/Goods/Goods";
import HomeMenu from "./components/HomeMenu/HomeMenu";
import HomeTitle from "./components/HomeTitle/HomeTitle";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [menu, setMenu] = useState<string>("전체");
  const getMenu: (menu: string) => void = (menu: string) => {
    setMenu(menu);
    console.log(menu);
  };
  return (
    <div className="App">
      <Navbar />
      <HomeTitle />
      <HomeMenu getMenu={getMenu} />
      <Goods nowMenu={menu} />
    </div>
  );
}

export default App;
