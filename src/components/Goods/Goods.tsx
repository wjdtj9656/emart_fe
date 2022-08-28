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
    let jum = switchMax();
    for (let i = index; i < index + jum; i++) {
      if (Items.length === 0) {
        return;
      }
      if (!Items[i]) {
        setItemIndex(Infinity);
        return;
      }
      if (nowMenu === "전체" || Items[i].tag.indexOf(nowMenu) >= 0) nowItems.push(Items[i]);
      else index++;
    }
    setItemIndex(index + jum);
    setNowItems([...nowItems]);
  };
  const switchMax = () => {
    let max = 10;
    if (window.innerWidth > 1500 && window.innerWidth < 2000) max = 20;
    else if (window.innerWidth >= 2000 && window.innerWidth < 2500) max = 30;
    else if (window.innerWidth >= 2500 && window.innerWidth < 3000) max = 40;
    else if (window.innerWidth >= 3000 && window.innerWidth < 5000) max = 70;
    else if (window.innerWidth >= 5000 && window.innerWidth < 7000) max = 200;
    else if (window.innerWidth >= 7000) max = 400;
    return max;
  };
  const itemLoad = () => {
    itemDataApi
      .get("dummy/itemData.json")
      .then((item) => {
        setItems(item.data.itemList);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    itemLoad();
  }, []);
  useEffect(() => {
    showMoreItem();
  }, [Items]);
  useEffect(() => {
    setNowItems([]);
    setItemIndex(0);
    window.scrollTo(0, 0);
  }, [nowMenu]);

  useEffect(() => {
    if (inView) {
      showMoreItem();
    }
  }, [inView]);
  useEffect(() => {
    if (inView && nowItems.length < switchMax()) {
      showMoreItem();
    }
  }, [nowItems]);
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
        {isFinite(itemIndex) && (
          <button className={styles.scrollingBtn} onClick={showMoreItem} ref={ref} />
        )}
      </div>
    </>
  );
};
export default Goods;
