import styles from "./Goods.module.css";
import { useEffect, useState } from "react";
import itemDataApi from "../../api/ItemDataAPI";
import { useInView } from "react-intersection-observer";
import Good from "./Good";
import { Item } from "../../model/Item";
interface GoodsProps {
  nowMenu: string;
}
const Goods = ({ nowMenu }: GoodsProps) => {
  const [Items, setItems] = useState<Item[]>([]);
  const [nowItems, setNowItems] = useState<Item[]>([]);
  const [itemIndex, setItemIndex] = useState(0);

  //infinite scroll state
  const [ref, inView] = useInView();

  //아이템 무한 스크롤링
  const showMoreItem = () => {
    let index = itemIndex;
    let jum = switchMax();
    for (let i = index; i < index + jum; i++) {
      if (Items.length === 0) {
        return;
      }
      //더 이상 아이템이 없을 때
      if (!Items[i]) {
        setItemIndex(Infinity);
        return;
      }
      //카테고리
      if (nowMenu === "전체" || Items[i].tag.indexOf(nowMenu) >= 0) nowItems.push(Items[i]);
      else index++;
    }
    setItemIndex(index + jum);
    setNowItems([...nowItems]);
  };

  //화면 크기별 아이템 개수 설정
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

  //아이템 load
  const itemLoad = () => {
    itemDataApi
      .get("dummy/itemData.json")
      .then((item) => {
        setItems(item.data.itemList);
      })
      .catch((error) => {
        if (error.response) console.log("item load response Error");
        else if (error.request) console.log("item load request Error");
        else console.log("item load" + error.message);
      });
  };

  //item load
  useEffect(() => {
    itemLoad();
  }, []);
  //아이템 로딩이 끝난 후, 로직 수행을 위한 side
  useEffect(() => {
    showMoreItem();
  }, [Items]);
  //다른 메뉴 선택시 side
  useEffect(() => {
    setNowItems([]);
    setItemIndex(0);
    window.scrollTo(0, 0);
  }, [nowMenu]);
  //무한 스크롤을 위한 side
  useEffect(() => {
    if (inView) {
      showMoreItem();
    }
  }, [inView]);
  //초기에 화면을 채위기 위한 side
  useEffect(() => {
    if (inView && nowItems.length < switchMax()) {
      showMoreItem();
    }
  }, [nowItems]);
  return (
    <>
      <div className={styles.goodsBox}>
        {nowItems.map((item: Item, index) => (
          <div className={styles.goods}>
            <Good item={item} key={index} />
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
