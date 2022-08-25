import styles from "./Navbar.module.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ReorderIcon from "@mui/icons-material/Reorder";
const Navbar = () => {
  return (
    <>
      <div className={styles.navBlock}>
        <div className={styles.navLeft}>
          <ArrowBackIcon className={styles.navBackBtn} />
          <HomeOutlinedIcon className={styles.navHomeBtn} />
        </div>

        <div className={styles.navCenter}>금주의 전단광고</div>

        <div className={styles.navRight}>
          <ReorderIcon className={styles.navMenuBtn} />
        </div>
      </div>
    </>
  );
};
export default Navbar;
