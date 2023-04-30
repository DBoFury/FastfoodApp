import React from "react";
import styles from "./styles/main.module.scss";

import { Cart } from "./pages/Cart";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

function App() {
  // const instanceApi = axios.create({
  //   baseURL: "https://nomadic-autumn-384716.ew.r.appspot.com",
  // });

  const instanceApi = axios.create({
    baseURL: "http://localhost:8000",
  });

  const instanceApiAdmin = axios.create({
    baseURL: `${instanceApi}/Jzxl1uOKY9w042MU7MA7LIYCikN9vLShh5DAWGgCmLUzFoyPh`,
  });

  return (
    <div className={styles.mainWrapp}>
      <div className={styles.wrapper}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home instanceApi={instanceApi} />
              </>
            }
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
