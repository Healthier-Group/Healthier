import React, { useEffect, useState } from "react";
import { Button, Hidden, MenuItem, Paper, Select } from "@material-ui/core";
import {
  orderAZ,
  orderZA,
  priceHigh,
  priceLower,
  getCategories,
  getProducts,
  filter,
} from "../../redux/products/productActions";
import { useDispatch, useSelector } from "react-redux";

const OrderFilter = () => {
  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(getCategories());
    },
    // eslint-disable-next-line
    []
  );

  useEffect(
    () => {
      dispatch(getProducts());
    },
    // eslint-disable-next-line
    []
  );

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
      return p.categories.map((c) => {
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          
        }}
      >
        <Hidden only={["xs", "sm"]}>
          <Paper
            elevation={3}
            style={{
              width: "fit-content",
              padding: "20px",
              margin: "auto",
              position: "fixed",
              left: "0",
              bottom: "40vh",
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
        </Hidden>
        {/* Mobile screen */}
        <Hidden only={["md", "lg", "xl"]}>
          <Paper
            elevation={3}
            style={{
              width: "50vw",
              padding: "20px",
              margin: "auto",
              marginBottom: "5vh",
              
            }}
          >
            <span
              onClick={(e) => orderAsc(e)}
              style={{cursor: "pointer", display:"flex", justifyContent:"center" }}
            >
              Ordenar <span style={{ color: "#999" }}>(A - Z)</span>
            </span>
            <br />
            <span
              onClick={(e) => orderDesc(e)}
              style={{cursor: "pointer", display:"flex", justifyContent:"center" }}
            >
              Ordenar <span style={{ color: "#999" }}>(Z - A)</span>
            </span>
            <br />
            <span
              onClick={(e) => orderLow(e)}
              style={{cursor: "pointer", display:"flex", justifyContent:"center" }}
            >
              Precio Mínimo
            </span>
            <br />
            <span
              onClick={(e) => orderHigh(e)}
              style={{cursor: "pointer", display:"flex", justifyContent:"center" }}
            >
              Precio Máximo
            </span>
          </Paper>
          <Paper
            style={{
              width: "50vw",
              padding: "20px",
              margin: "auto",
              
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
        </Hidden>
      </div>
    </div>
  );
};

export default OrderFilter;
