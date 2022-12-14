import React, { useState } from "react";
import styles from "./HomeMenu.module.css";
interface MenuProps {
  getMenu: (menuName: string) => void;
  nowMenu: string;
}
const HomeMenu = ({ getMenu, nowMenu }: MenuProps) => {
  const [selectedMenu, setSelectedMenu] = useState(nowMenu);

  //카테고리
  const items = [
    "전체",
    "건강한",
    "제철과일",
    "시원한",
    "달콤한",
    "맛있는",
    "가성비좋은",
    "신선한",
    "여름과일",
  ];

  const sendMenuState = (item: string) => {
    return (event: React.MouseEvent) => {
      getMenu(item);
      setSelectedMenu(item);
    };
  };

  return (
    <>
      <ul className={styles.menuBox}>
        {items.map((item, index) => (
          <li className={styles.item} key={index}>
            <button
              className={selectedMenu === item ? styles.menuBtnSelected : styles.menuBtn}
              onClick={sendMenuState(item)}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
export default HomeMenu;
