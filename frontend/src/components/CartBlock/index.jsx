import React from "react";
import styles from "./cartBlock.module.scss";
import CartItem from "../CartItem";
import { Link } from "react-router-dom";

function CartBlock() {
  return (
    <div className={styles.wrapPage}>
      <div className={styles.contentWrap}>
        <div className={styles.title}>
          <h1>
            <img src="/img/cart.svg" alt="decorPic" />
            Кошик:
          </h1>
          <h3>
            <img src="/img/delete.svg" alt="decorPic" />
            Очистити кошик
          </h3>
        </div>
        <div className={styles.wrap}>
          <CartItem />
          <CartItem />
        </div>
        <div className={styles.result}>
          <p>
            Усього товару: <b>5 шт.</b>
          </p>
          <p>
            Сума замовлення: <b>1000 &#8372;</b>
          </p>
        </div>
        <div className={styles.btnBlock}>
          <button>&#9668;Назад</button>
          <button>Сплатити зараз&#9658;</button>
        </div>
      </div>
      {/* <div className={styles.emptyBlock}>
        <h1>На жаль, зараз у вас немає товару :(</h1>
        <Link to="/">
          <img src="/img/goShopping.svg" alt="go Shopping" />
          <h3>Перейти до продукції</h3>
        </Link>
      </div> */}
    </div>
  );
}

export default CartBlock;
