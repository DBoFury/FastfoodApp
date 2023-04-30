import styles from "./product.module.scss";
import React from "react";

import OpenedCard from "../OpenedCard";

function Product({
  title,
  imgUrl,
  description,
  price,
  // type,
  // size,
  // category,
}) {
  const [ItemCount, setItemCount] = React.useState(0);
  const [openItem, setOpenItem] = React.useState(false);
  const [selectedSizeId, setSelectedSizeId] = React.useState(0);
  const [selectedTypeId, setSelectedTypeId] = React.useState(0);

  //Если будет скролл - будет дергаться при открытие фул информации
  React.useEffect(() => {
    document.body.style.overflow = openItem ? "hidden" : "unset";
  }, [openItem]);

  return (
    <>
      {openItem && (
        <OpenedCard
          setOpenItem={setOpenItem}
          selectedSizeId={selectedSizeId}
          onSelectedSize={(id) => setSelectedSizeId(id)}
          selectedTypeId={selectedTypeId}
          onSelectedType={(id) => setSelectedTypeId(id)}
          {
            ...{
              // title,
              // imgUrl,
              // description,
              // price,
              // type,
              // size,
              // category,
            }
          }
        />
      )}
      <div className={styles.wrapp}>
        <img
          src={imgUrl}
          alt="Product image"
          onClick={() => {
            setOpenItem(true);
          }}
        />
        <h3>{title}</h3>
        <h5>{description}</h5>
        <div className={styles.addBlock}>
          <h3>вiд {price[0]} &#8372;</h3>
          <button
            className={styles.add}
            onClick={() => {
              setItemCount(ItemCount + 1);
            }}>
            Додати
            {ItemCount ? (
              <span
                style={{ pointerEvents: "none" }}
                className={styles.counter}>
                {ItemCount}
              </span>
            ) : null}
          </button>
        </div>
      </div>
    </>
  );
}

export default Product;
