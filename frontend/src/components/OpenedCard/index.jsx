import styles from "./openedCard.module.scss";
import React from "react";

function OpenedCard({
  setOpenItem,
  selectedSizeId,
  onSelectedSize,
  selectedTypeId,
  onSelectedType,
  title,
  imgUrl,
  description,
  price,
  type,
  size,
  category,
}) {
  //нужен useContext
  const pizzaType = ["Традиційне", "Тонке"];

  function correctPrice(price, selectedSize, category) {
    if (category === 'snacks' && selectedTypeId !== 0) {
      return price[selectedSize] + 5;
    }
    if (selectedTypeId !== 0) {
      return price[selectedSize] + 10;
    }
    return price[selectedSize];
  }

  function correctTypeItem(category, elMap, typeArr) {
    return category === 'snacks' ? elMap : typeArr[elMap]
  }

  function correctSize(category, elem) {
    let size = '';
    if (category === 'drinks') {
      size = 'L';
    }
    if (category === 'pizza') {
      size = 'cм.';
    }
    if (category === 'bakery' || category === 'salads') {
      size = 'гр.'
    }
    return `${elem}${size}`;
  }

  return (
    <div className={styles.wrappOpened}>
      <div
        className={styles.background}
        onClick={() => setOpenItem(false)}
      ></div>
      <div className={styles.content}>
        <img
          onClick={() => setOpenItem(false)}
          className={styles.close}
          src="/img/closeOpenCard.svg"
          alt="Close"
        />
        <img src={imgUrl} alt="Product" />
        <div className={styles.info}>
          <div className={styles.mainProperties}>
            <h1>{title}</h1>
            <h3>{description}</h3>
          </div>
          <div className={styles.anotherProperties}>
            {type.length === 0 ? null : (
              <ul>
                {type.map((el, index) => (
                  <li
                    key={index}
                    onClick={() => onSelectedType(index)}
                    className={selectedTypeId === index ? styles.active : null}
                  >
                    {correctTypeItem(category, el, pizzaType)}
                  </li>
                ))}
              </ul>
            )}
            <ul>
              {size.map((el, index) => (
                <li
                  key={index}
                  onClick={() => onSelectedSize(index)}
                  className={selectedSizeId === index ? styles.active : null}
                >
                  {correctSize(category, el)}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.buy}>
            <h3>Додати до кошику:</h3>
            <button className={styles.cart}>
              <p className={styles.price}>
                {correctPrice(price, selectedSizeId, category)} &#8372;
              </p>
              <img src="/img/cartIcon.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OpenedCard;
