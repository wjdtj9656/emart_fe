import styles from "./NavLeft.module.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
const NavLeft = () => {
  return (
    <div className={styles.navLeft}>
      <ArrowBackIcon className={styles.navBackBtn} />
      <HomeOutlinedIcon className={styles.navHomeBtn} />
    </div>
  );
};
export default NavLeft;
