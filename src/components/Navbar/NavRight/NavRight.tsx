import ReorderIcon from "@mui/icons-material/Reorder";
import styles from "./NavRight.module.css";
const NavRight = () => {
  return (
    <div className={styles.navRight}>
      <ReorderIcon className={styles.navMenuBtn} />
    </div>
  );
};
export default NavRight;
