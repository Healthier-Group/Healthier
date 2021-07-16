import axios from "axios"
import React, { useState } from "react"
import { CATEGORY_URL } from "../../utils/Constants"
import {
  makeStyles,
  Hidden,
  Button,
  TextField,
  Typography,
} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: "-10%", //quit if it isnt needed
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
    minWidth: "70vw",
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

export const CreateCategoryForm = () => {
  const [input, setInput] = useState({
    name: "",
    description: ""
  });
    

  function handleInputChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    return axios
      .post(CATEGORY_URL, input)
      .then((r) => {
        e.target.reset();
        setInput({
          name: "",
          description: "",
        });        
        alert("Category created successfully");
      })
      .catch((error) => alert("Some error ocurred, please try again"));
  }

  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Hidden only={["sm", "xs"]}>
        
        <form onSubmit={handleSubmit} className={classes.root}>
          <Typography variant="h6" className={classes.title}>
            Crear Categoría
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
            name="description"
            onChange={handleInputChange}
            label="Descripción"
            className={classes.inputs}
            multiline
            variant="outlined"
          />
          <Button variant="contained" color="primary" className={classes.btn}>
            Crear
          </Button>
        </form>
      </Hidden>
    </div>
  );
};

export default CreateCategoryForm