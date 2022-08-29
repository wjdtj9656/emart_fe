import styles from "./Navbar.module.css";
import NavLeft from "./NavLeft/NavLeft";
import NavRight from "./NavRight/NavRight";
const Navbar = () => {
  return (
    <>
      <div className={styles.navBlock}>
        <NavLeft />
        <div className={styles.navCenter}>금주의 전단광고</div>
        <NavRight />
      </div>
    </>
  );
};
export default Navbar;
