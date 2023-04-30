import styles from "./searchBlock.module.scss";

import React from "react";

function SearchBlock({ value, onClickSort, sortArr }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className={styles.content}>
      <div className={styles.title}>
        <h3>Сортувати за:</h3>
        <div className={styles.sort}>
          <h3 onClick={() => setIsOpen(!isOpen)}>{value.name}</h3>
          {isOpen && (
            <ul>
              {sortArr.map((el, index) => (
                <li
                  key={index}
                  onClick={() => {
                    onClickSort(el);
                    setIsOpen(!isOpen);
                  }}
                  className={
                    value.property === el.property ? styles.active : null
                  }
                >
                  {el.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className={styles.search}>
        <img className={styles.search} src="/img/searchIcon.svg" alt="Search" />
        <input type="text" placeholder="Пошук..." />
        <img
          className={styles.clear}
          src="/img/clearSearch.svg"
          alt="clear Input"
        />
      </div>
    </div>
  );
}

export default SearchBlock;
