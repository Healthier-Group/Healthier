import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import {
  orderAZ,
  orderZA,
  priceHigh,
  priceLower,
  getCategories,
  getProducts,
  getFilterCategory,
  filter,
} from "../../redux/products/productActions";
import { useDispatch, useSelector } from "react-redux";

const style = makeStyles((theme) => ({
  view: {
    display: "flex",
    flexDirection: "column",
  },
  spans: {
    margin: "10%",
    cursor: "pointer",
  },
}));

const OrderFilter = () => {
  const dispatch = useDispatch();

  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredCategory, setFilteredCategory] = useState([]);
  useEffect(() => {
    dispatch(getCategories());
  }, []);

  // useEffect(() => {
  //   dispatch(getProducts());
  // }, []);

  function orderAsc(e) {
    e.preventDefault();
    dispatch(orderAZ());
  }
  function orderDesc(e) {
    e.preventDefault();
    dispatch(orderZA());
  }
  function orderLow(e) {
    e.preventDefault();
    dispatch(priceLower());
  }
  function orderHigh(e) {
    e.preventDefault();
    dispatch(priceHigh());
  }
  function handleChange(e) {
    setSelectedCategory(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setFilteredCategory([...filteredCategory, selectedCategory]);
    handleClick();
  }
  function handleClick() {
    let data = [];
    products?.map((p) => {
      p.categories.map((c) => {
        return c.name === selectedCategory ? data.push(p) : null;
      });
    });
    dispatch(filter(data));
  }

  const classes = style();
  const categories = useSelector(
    (state) => state.productReducer.foundCategories
  );
  const products = useSelector((state) => state.productReducer.foundProducts);
  return (
    <div className={classes.view}>
      <span onClick={(e) => orderAsc(e)} className={classes.spans}>
        Ordenar <span style={{ color: "#999" }}>(A - Z)</span>
      </span>
      <span onClick={(e) => orderDesc(e)} className={classes.spans}>
        Ordenar <span style={{ color: "#999" }}>(Z - A)</span>
      </span>
      <span onClick={(e) => orderLow(e)} className={classes.spans}>
        Precio Mínimo
      </span>
      <span onClick={(e) => orderHigh(e)} className={classes.spans}>
        Precio Máximo
      </span>
      <form onSubmit={handleSubmit}>
        <h4>Elegí una categoría</h4>
        <select
          onChange={handleChange}
          name="categories"
          value={selectedCategory}
        >
          <option value="all">Todas</option>
          {categories?.map((c) => (
            <option value={c.name} key={c.id}>
              {c.name}
            </option>
          ))}
        </select>
        <button type="submit">Filtrar</button>
      </form>
    </div>
  );
};

export default OrderFilter;
