import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getProductByName } from "../../redux/products/productActions";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { makeStyles } from "@material-ui/core/styles";


import { Button, Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  search: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#f1f1f1",
    padding: "0px 0",
    marginRight: " 20px",
    marginLeft: " 20px",
    minWidth: "40vw",
    borderRadius: "5px",
    margin: "auto",
    minHeight: "36px",
  },
  input: {
    minWidth: "34vw",
    padding: "0 10px",
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

 

  return (
    <form className={classes.search} onSubmit={handleSubmit}>
      <InputBase
        placeholder="Busca tu producto"
        className={classes.input}
        onChange={(e) => handleChange(e.target.value)}
      />
      <Divider orientation="vertical" flexItem />
      <Button
        type="submit"
        onSubmit={handleSubmit}
        style={{ minWidth: "6vw", justifyContent: "center", display: "flex" }}
      >
        <SearchIcon />
      </Button>
    </form>
  );
};

export default SearchBar;
