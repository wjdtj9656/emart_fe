import { useCallback, useEffect, useState } from "react";
import "./App.css";
import Goods from "./components/Goods/Goods";
import HomeMenu from "./components/HomeMenu/HomeMenu";
import HomeTitle from "./components/HomeTitle/HomeTitle";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [menu, setMenu] = useState<string>("전체");
  const [num, setNum] = useState(0);
  const [prev, setPrevNum] = useState(0);
  const [scrollState, setScrollState] = useState(true);
  const getMenu: (menu: string) => void = (menu: string) => {
    setMenu(menu);
    console.log(menu);
  };

  const handleScroll = () => {
    setNum((prev) => {
      setPrevNum(prev);
      return window.scrollY;
    });
  };
  useEffect(() => {
    if (prev >= num) setScrollState(true);
    else setScrollState(false);
  }, [num]);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); //clean up
    };
  }, []);
  return (
    <div className="App">
      <Navbar />
      <HomeTitle />
      {scrollState && <HomeMenu getMenu={getMenu} nowMenu={menu} />}
      <Goods nowMenu={menu} />
    </div>
  );
}

export default App;
