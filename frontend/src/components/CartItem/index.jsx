import styles from "./cartItem.module.scss";

import React from "react";

function CartItem() {
  return (
    <div className={styles.wrap}>
      <img
      className={styles.itemPic}
        src="https://dodopizza-a.akamaihd.net/static/Img/Products/3deea5573fc64c28a64ff83477f55eed_292x292.webp"
        alt=""
      />
      <div className={styles.title}>
        <h2>Додо Микс</h2>
        <h3>Традиционное, 36см.</h3>
      </div>
      <div className={styles.count}>
        <img src="/img/minus.svg" alt="subtrahend" />
        <p>5</p>
        <img src="/img/plus.svg" alt="added" />
      </div>
      <div className={styles.price}>
        1200 &#8372;
      </div>
      <img src="/img/clearSearch.svg" alt="" />
    </div>
  );
}

export default CartItem;
