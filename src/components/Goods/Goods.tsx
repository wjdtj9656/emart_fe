import styles from "./Goods.module.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
const Goods = () => {
  return (
    <>
      <div className={styles.goodsBox}>
        <div className={styles.goods}>
          <img src="/assets/images/grape.PNG" className={styles.goodsImage} />
          <div>
            <div className={styles.goodsPricePrev}>17000</div>
            <div className={styles.goodsPriceNext}>17000</div>
            <h3 className={styles.goodsTitle}>대부도/송산 컴벨포도</h3>
            <button className={styles.goodsEvent}>신세계 포인트 적립시 3천원 할인</button>
            <div className={styles.sideBtnGroup}>
              <FavoriteIcon className={styles.heartBtn}>heart</FavoriteIcon>
              <h6 className={styles.btnText}>50</h6>
              <ChatBubbleOutlineIcon className={styles.chatBtn}>chat</ChatBubbleOutlineIcon>
              <h6 className={styles.btnText}>50</h6>
            </div>
          </div>
        </div>
        <div className={styles.goods}>
          <img src="/assets/images/grape.PNG" className={styles.goodsImage} />
          <div>
            <div className={styles.goodsPricePrev}>17000</div>
            <div className={styles.goodsPriceNext}>17000</div>
            <h3 className={styles.goodsTitle}>대부도/송산 컴벨포도</h3>
            <button className={styles.goodsEvent}>신세계 포인트 적립시 3천원 할인</button>
            <div className={styles.sideBtnGroup}>
              <FavoriteIcon className={styles.heartBtn}>heart</FavoriteIcon>
              <h6 className={styles.btnText}>50</h6>
              <ChatBubbleOutlineIcon className={styles.chatBtn}>chat</ChatBubbleOutlineIcon>
              <h6 className={styles.btnText}>50</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Goods;
