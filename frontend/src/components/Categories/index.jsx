import styles from "./categories.module.scss";
import React from "react";

function Categories({ value, onClickCategory }) {
  //eng = db.category.name
  const categories = [
    { ukr: "Усе", eng: "all" },
    { ukr: "Піца", eng: "pizza" },
    { ukr: "Салати", eng: "salads" },
    { ukr: "Перші страви", eng: "firstCourses" },
    { ukr: "Другі страви", eng: "mainCourses" },
    { ukr: "Випічка", eng: "bakery" },
    { ukr: "Напої", eng: "drinks" },
    { ukr: "Снеки", eng: "snacks" },
  ];

  React.useEffect(() => onClickCategory(categories[0]), []);

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {categories.map((el, index) => (
          <li
            key={index}
            onClick={() => onClickCategory(el)}
            className={value.eng === el.eng ? styles.active : null}
          >
            {el.ukr}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Categories;
