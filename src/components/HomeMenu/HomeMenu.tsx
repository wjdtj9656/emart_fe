import styles from "./HomeMenu.module.css";
const HomeMenu = () => {
  const items = [
    "전체",
    "든든하고 건강하게",
    "가을 과일",
    "피코크",
    "신선한 과일",
    "육류",
    "생선",
    "안ㅁ",
  ];
  return (
    <>
      <ul className={styles.menuBox}>
        {items.map((item, index) => (
          <li className={styles.item} key={index}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};
export default HomeMenu;
