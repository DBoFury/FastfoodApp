import React from "react";
// import axios from "axios";
import styles from "../styles/main.module.scss";

import Header from "../components/Header";
import Categories from "../components/Categories";
import SearchBlock from "../components/SearchBlock";
import Product from "../components/Product";
import Skeleton from "../components/Product/Skeleton";

export const Home = ({ instanceApi }) => {
  //property =db.property
  const sortArr = [
    { name: "Популярністю", property: "rating" },
    { name: "Популярністю Desc", property: "-rating" },
    { name: "Ціною", property: "price" },
    { name: "Ціною Desc", property: "-price" },
    { name: "Алфавітом", property: "title" },
    { name: "Алфавітом Desc", property: "-title" },
  ];
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoadnig] = React.useState(true);
  const [selectedCategory, setSelectedCategory] = React.useState({});
  const [selectedSort, setSelectedSort] = React.useState(sortArr[0]);
  const [Language, setLanguage] = React.useState("ukr");

  React.useEffect(() => {
    instanceApi
      .get("/api/products")
      .then((res) => {
        setItems(res.data);
        setIsLoadnig(false);
      })
      .catch((er) => console.log(er));
  }, []);

  // React.useEffect(() => {
  //   setIsLoadnig(true);
  //   const sortBy = selectedSort.property.replace("-", "");
  //   const orderBy = selectedSort.property.includes("-") ? "desc" : "asc";
  //   const category =
  //     selectedCategory.eng === "all" ? "" : `category=${selectedCategory.eng}`;
  //   axios
  //     .get(
  //       `https://643ae6514477945573508095.mockapi.io/Products?${category}&sortBy=${sortBy}&order=${orderBy}`
  //     )
  //     .then((res) => {
  //       setItems(res.data);
  //       setIsLoadnig(false);
  //     });
  //   window.scrollTo(0, 0);
  // }, [selectedCategory, selectedSort]);

  return (
    <>
      <Header />
      <Categories
        value={selectedCategory}
        onClickCategory={(id) => setSelectedCategory(id)}
      />
      <SearchBlock
        value={selectedSort}
        onClickSort={(id) => setSelectedSort(id)}
        sortArr={sortArr}
      />

      <div className={styles.wrapperContent}>
        {isLoading
          ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => <Product {...obj} key={obj.id} />)}
      </div>
    </>
  );
};
