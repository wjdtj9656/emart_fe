import { useEffect, useState } from "react";
import "./App.css";
import Goods from "./components/Goods/Goods";
import HomeMenu from "./components/HomeMenu/HomeMenu";
import HomeTitle from "./components/HomeTitle/HomeTitle";
import Navbar from "./components/Navbar/Navbar";

function App() {
  //menu state
  const [menu, setMenu] = useState<string>("전체");

  //scroll state
  const [num, setNum] = useState(0);
  const [prev, setPrevNum] = useState(0);
  const [scrollState, setScrollState] = useState(true);

  const getMenu: (menu: string) => void = (menu: string) => {
    setMenu(menu);
    console.log(menu);
  };

  //이전 스크롤 위치와 현재 스크롤 위치 비교
  const handleScroll = () => {
    setNum((prev) => {
      setPrevNum(prev);
      return window.scrollY;
    });
  };

  //스크롤의 방향을 정하는 side
  useEffect(() => {
    if (prev >= num) setScrollState(true);
    else setScrollState(false);
  }, [num]);

  //스크롤 이벤트 감시
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
