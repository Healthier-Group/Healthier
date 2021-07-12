import axios from "axios"
import React, { useState } from "react"
import { PRODUCTSPOST_URL } from "../../utils/Constants"
import {
  makeStyles,
  Hidden,
  Button,
  TextField,
  Typography,
} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
  },
  root: {
    marginTop: '10%',
    display: "flex",
    height: "fit-content",
    width: "fit-content",
    /* backgroundColor: "#E01111", */
    flexDirection: "column",
    margin: "20px",
    boxShadow: "0 4px 5px black",
    padding: "50px",
    borderRadius: "20px",
  },
  input1: {
    display: "flex",
  },
  inputs: {
    margin: "20px",
    minWidth: "25vw",
  },
  btn: {
    marginTop: "40px",
    /* backgroundColor: "orange", */
    backgroundColor: '#8FBF26'
  },
  title: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Roboto",
    fontSize: "24px",
  },
}));

export const CreateProductForm = () => {
  const [input, setInput] = useState({
    name: "",
    sku: "",
    description: "",
    ingredients: "",
    inventory: 0,
    price: 0,
    image: "",
  });
    

  function handleInputChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("SUBMIT");
    return axios
      .post(PRODUCTSPOST_URL, input)
      .then((r) => {
        e.target.reset();
        setInput({
          name: "",
          sku: "",
          description: "",
          ingredients: "",
          inventory: 0,
          price: 0,
          image: "",
        });        
        console.log("State", input);
        alert("Product created successfully");
      })
      .catch((error) => alert("Some error ocurred, please try again"));
  }

  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Hidden only={["sm", "xs"]}>
        
        <form onSubmit={handleSubmit} className={classes.root}>
          <Typography variant="h6" className={classes.title}>
            Crear producto
          </Typography>
          <div className={classes.input1}>
            <TextField
              id="standard-basic"
              name="name"
              onChange={handleInputChange}
              label="Nombre"
              className={classes.inputs}
              required={true}
            />

            <TextField
              id="standard-basic"
              name="sku"
              onChange={handleInputChange}
              label="SKU"
              className={classes.inputs}
              required={true}
            />
          </div>

          <TextField
            id="standard-basic"
            label="Descripción"
            name="description"
            onChange={handleInputChange}
            className={classes.inputs}
            multiline
            variant="outlined"
          />

          <TextField
            id="standard-basic"
            label="Ingredientes"
            name="ingredients"
            onChange={handleInputChange}
            className={classes.inputs}
            multiline
            variant="outlined"
          />

          <div className={classes.input1}>
            <TextField
              id="standard-basic"
              name="inventory"
              onChange={handleInputChange}
              label="Inventario"
              type="number"
              className={classes.inputs}
            />
            <TextField
              id="standard-multiline-flexible"
              name="price"
              onChange={handleInputChange}
              label="Precio"
              type="number"
              className={classes.inputs}
              required={true}
            />
            <TextField
              id="standard-multiline-flexible"
              name="image"
              onChange={handleInputChange}
              label="Imagen"
              type="url"
              placeholder="URL"
              className={classes.inputs}
            />
          </div>
          <Button
            variant="contained"
            color="primary"
            size="medium"
            className={classes.btn}
            type="submit"
          >
            Crear
          </Button>
        </form>
      </Hidden>
      <Hidden only={["md", "lg", "xl"]}>
        <form className={classes.root}>
          <TextField
            id="standard-basic"
            name="name"
            onChange={handleInputChange}
            label="Nombre"
            className={classes.inputs}
          />

          <TextField
            id="standard-basic"
            name="sku"
            onChange={handleInputChange}
            label="SKU"
            className={classes.inputs}
          />
          <TextField
            id="standard-basic"
            name="description"
            onChange={handleInputChange}
            label="Descripción"
            className={classes.inputs}
            multiline
            variant="outlined"
          />
          <TextField
            id="standard-basic"
            name="ingredients"
            onChange={handleInputChange}
            label="Ingredientes"
            className={classes.inputs}
            multiline
            variant="outlined"
          />
          <TextField
            id="standard-basic"
            name="inventory"
            onChange={handleInputChange}
            label="Inventario"
            type="number"
            className={classes.inputs}
          />
          <TextField
            id="standard-multiline-flexible"
            name="price"
            onChange={handleInputChange}
            label="Precio"
            type="number"
            className={classes.inputs}
          />
          <TextField
            id="standard-multiline-flexible"
            name="image"
            onChange={handleInputChange}
            label="Imagen"
            type="url"
            placeholder="URL"
            className={classes.inputs}
          />

          <Button variant="contained" color="primary" className={classes.btn}>
            Crear
          </Button>
        </form>
      </Hidden>
    </div>
  );
};

export default CreateProductForm