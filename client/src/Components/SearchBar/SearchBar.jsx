import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductByName } from "../../redux/products/productActions";
import { Hidden, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Autocomplete } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  margin: {
    marginTop: "20px",
    backgroundColor: "#f1f1f1",
    borderRadius: 4,
  },
  marginMobile: {
    backgroundColor: "#f1f1f1",
    borderRadius: 4,
  },
}));

const SearchBar = () => {
  const classes = useStyles();
  const [input, setInput] = useState("");

  const handleChange = (q) => {
    setInput(q);
  };

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getProductByName(input));
  }


  

  useEffect(
    () => {
      dispatch(getProductByName(input));
    },
    //eslint-disable-next-line
    [input]

  );

  const product = useSelector((state) => state.productReducer.foundProducts);

  return (
    <div>
      <Hidden only={["xs", "sm"]}>
        <form onSubmit={handleSubmit}>
          <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            options={product}
            getOptionLabel={(option) => option.name}
            style={{ minWidth: "42vw" }}
            renderInput={(params) => (
              <TextField
                className={classes.margin}
                {...params}
                placeholder="Busca tu producto"
                variant="outlined"
                onChange={(e) => handleChange(e.target.value)}
              />
            )}
          />
        </form>
      </Hidden>
      <Hidden only={["md", "lg", "xl"]}>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
          }}
        >
          <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            options={product}
            getOptionLabel={(option) => option.name}
            style={{ minWidth: "52vw", alignItems:"center" }}
            renderInput={(params) => (
              <TextField
                className={classes.marginMobile}
                {...params}
                placeholder="Busca tu producto"
                variant="standard"
                onChange={(e) => handleChange(e.target.value)}
              />
            )}
          />
        </form>
      </Hidden>
    </div>
  );
};

export default SearchBar;
