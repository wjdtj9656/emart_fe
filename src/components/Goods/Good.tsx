import styles from "./Good.module.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { Item } from "../../model/Item";
interface GoodProps {
  item: Item;
}
//타이틀이 너무 길 때 ...으로 대체
const cutLongTitle = (text: string) => {
  if (text.length > 20) {
    return text.slice(0, 20) + "...";
  }
  return text;
};
const Good = ({ item }: GoodProps) => {
  return (
    <>
      <img src={item.image} className={styles.goodsImage} alt="itemImage" />
      <div className={styles.explanation}>
        <div className={styles.goodsPricePrev}>{item.prevPrice}</div>
        <div className={styles.goodsPriceNext}>{item.nextPrice}</div>
        <h3 className={styles.goodsTitle}>{cutLongTitle(item.title)}</h3>
        <button className={styles.goodsEvent}>신세계 포인트 적립시 {item.discount} 할인</button>
        <div className={styles.sideBtnGroup}>
          <FavoriteIcon className={styles.heartBtn}></FavoriteIcon>
          <h6 className={styles.btnText}>{item.heartNum}</h6>
          <ChatBubbleOutlineIcon className={styles.chatBtn}></ChatBubbleOutlineIcon>
          <h6 className={styles.btnText}>{item.chatNum}</h6>
        </div>
      </div>
    </>
  );
};
export default Good;
