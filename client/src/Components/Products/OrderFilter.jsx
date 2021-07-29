import React, { useEffect, useState } from "react";
import { Button, InputLabel, MenuItem, Paper, Select } from "@material-ui/core";
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

const OrderFilter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredCategory, setFilteredCategory] = useState([]);

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

  const categories = useSelector(
    (state) => state.productReducer.foundCategories
  );
  const products = useSelector((state) => state.productReducer.foundProducts);
  return (
    <div>
      {/* <span onClick={(e) => orderAsc(e)} className={classes.spans}>
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
      </form> */}

      <div>
        <Paper
          elevation={3}
          style={{
            width: "fit-content",
            padding: "20px",
            margin: "auto",
            position: "fixed",
            left: "0",
            zIndex: "100",
          }}
        >
          <span
            onClick={(e) => orderAsc(e)}
            style={{ margin: "auto", cursor: "pointer" }}
          >
            Ordenar <span style={{ color: "#999" }}>(A - Z)</span>
          </span>
          <br />
          <span
            onClick={(e) => orderDesc(e)}
            style={{ margin: "auto", cursor: "pointer" }}
          >
            Ordenar <span style={{ color: "#999" }}>(Z - A)</span>
          </span>
          <br />
          <span
            onClick={(e) => orderLow(e)}
            style={{ margin: "auto", cursor: "pointer" }}
          >
            Precio Mínimo
          </span>
          <br />
          <span
            onClick={(e) => orderHigh(e)}
            style={{ margin: "auto", cursor: "pointer" }}
          >
            Precio Máximo
          </span>
        </Paper>
        <Paper
          style={{
            width: "fit-content",
            padding: "20px",
            position: "fixed",
            left: "0",
            top: "65vh",
            zIndex: "100",
          }}
        >
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              minWidth: "120px",
            }}
          >
            <label>Elige una categoría</label>
            <br />
            <Select
              // id="demo-simple-select"
              onChange={handleChange}
              name="categories"
              value={selectedCategory}
            >
              <MenuItem value="all">Todas</MenuItem>
              {categories?.map((c) => (
                <MenuItem value={c.name} key={c.id}>
                  {c.name}
                </MenuItem>
              ))}
            </Select>
            <br />
            <Button variant="contained" color="secondary" type="submit">
              Filtrar
            </Button>
          </form>
        </Paper>
      </div>
    </div>
  );
};

export default OrderFilter;
