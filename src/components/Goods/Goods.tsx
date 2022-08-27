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
interface GoodsProps {
  nowMenu: string;
}
const Goods = ({ nowMenu }: GoodsProps) => {
  const [Items, setItems] = useState<Item[]>([]);
  const [nowItems, setNowItems] = useState<Item[]>([]);
  const [itemIndex, setItemIndex] = useState(0);

  const [ref, inView] = useInView();
  const showMoreItem = () => {
    let index = itemIndex;
    for (let i = index; i < index + 10; i++) {
      if (nowMenu === "전체" || Items[i].tag.indexOf(nowMenu) >= 0) nowItems.push(Items[i]);
      else index++;
    }
    setItemIndex(index + 10);
    setNowItems([...nowItems]);
  };
  useEffect(() => {
    itemDataApi.get("dummy/itemData.json").then((item) => {
      setItems(item.data.itemList);
    });
  }, []);
  useEffect(() => {
    setNowItems([]);
    setItemIndex(0);
  }, [nowMenu]);
  // useEffect(() => {
  //   if (Items.length > 0) showMoreItem();
  // }, [Items]);
  useEffect(() => {
    if (nowItems.length !== 0 && Items.length > 0) {
      showMoreItem();
    } else if (inView && Items.length > 0) {
      showMoreItem();
    }
  }, [inView, Items]);
  return (
    <>
      <div className={styles.goodsBox}>
        {nowItems.map((item: Item, index) => (
          <div className={styles.goods} key={index}>
            <img src={item.image} className={styles.goodsImage} alt="itemImage" />
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
        <button className={styles.scrollingBtn} ref={ref} />
      </div>
    </>
  );
};
export default Goods;
