import styles from "./Goods.module.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { useEffect, useState } from "react";
import itemDataApi from "../../api/ItemDataAPI";
import { useInView } from "react-intersection-observer";
interface Item {
  id: number;
  image: string;
  prevPrice: string;
  nextPrice: string;
  title: string;
  tag: string;
  discount: string;
  heartNum: number;
  chatNum: number;
  stock: number;
}
const Goods = () => {
  const [Items, setItems] = useState<Item[]>([]);
  const [nowItems, setNowItems] = useState<Item[]>([]);
  const [itemIndex, setItemIndex] = useState(0);

  const [ref, inView] = useInView();
  const showMoreItem = () => {
    for (let i = itemIndex; i < itemIndex + 10; i++) {
      nowItems.push(Items[i]);
    }
    setItemIndex(itemIndex + 10);
    setNowItems([...nowItems]);
  };
  useEffect(() => {
    itemDataApi.get("dummy/itemData.json").then((item) => {
      setItems(item.data.itemList);
    });
  }, []);
  useEffect(() => {
    if (Items.length > 0) showMoreItem();
  }, [Items]);
  useEffect(() => {
    if (nowItems.length > 0 && inView) {
      showMoreItem();
      console.log(inView);
    }
  }, [inView]);
  return (
    <>
      <div className={styles.goodsBox}>
        {nowItems.map((item: Item, index) => (
          <div className={styles.goods} key={item.id}>
            {nowItems.length - 1 === index && (
              <img src={item.image} className={styles.goodsImage} alt="itemImage" ref={ref} />
            )}
            {nowItems.length - 1 !== index && (
              <img src={item.image} className={styles.goodsImage} alt="itemImage" />
            )}
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
        <button onClick={showMoreItem}>zzzzzzzzzz</button>
      </div>
    </>
  );
};
export default Goods;
