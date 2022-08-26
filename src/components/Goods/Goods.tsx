import styles from "./Goods.module.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { useEffect, useState } from "react";
import itemDataApi from "../../api/ItemDataAPI";
const Goods = () => {
  const [nowItmes, setNowItems] = useState([]);
  useEffect(() => {
    itemDataApi.get("dummy/itemData.json").then((item) => setNowItems(item.data.itemList));
  }, []);
  return (
    <>
      <div className={styles.goodsBox}>
        {nowItmes.map((item) => (
          <div className={styles.goods}>
            <img src={item.image} className={styles.goodsImage} />
            <div className={styles.explanation}>
              <div className={styles.goodsPricePrev}>{item.prevPrice}</div>
              <div className={styles.goodsPriceNext}>{item.nextPrice}</div>
              <h3 className={styles.goodsTitle}>{item.title}</h3>
              <button className={styles.goodsEvent}>
                신세계 포인트 적립시 {item.discount} 할인
              </button>
              <div className={styles.sideBtnGroup}>
                <FavoriteIcon className={styles.heartBtn}></FavoriteIcon>
                <h6 className={styles.btnText}>{item.heartNum}</h6>
                <ChatBubbleOutlineIcon className={styles.chatBtn}></ChatBubbleOutlineIcon>
                <h6 className={styles.btnText}>{item.chatNum}</h6>
              </div>
            </div>
          </div>
        ))}
        {/* <div className={styles.goods}>
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
        </div> */}
      </div>
    </>
  );
};
export default Goods;
