import axios from "axios";
import React, { useState } from "react";
import { REVIEW_URL } from "../../utils/Constants";
import {
  makeStyles,
  Hidden,
  Button,
  TextField,
  Typography,
  Box,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import swal from "sweetalert";

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
    marginTop: "10%",
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
    backgroundColor: "#8FBF26",
  },
  title: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Roboto",
    fontSize: "24px",
  },
}));

export const CreateReview = () => {
  //   const [value, setValue] = React.useState(2);
  const [input, setInput] = useState({
    title: "",
    description: "",
    calification: 3,
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
      .post(REVIEW_URL, input)
      .then((r) => {
        e.target.reset();
        setInput({
          title: "",
          description: "",
        });
        swal("Creado", "Review creada con éxito", "success");
      })
      .catch((error) => swal("Error", error, "error"));
  }

  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Hidden only={["sm", "xs"]}>
        <form onSubmit={handleSubmit} className={classes.root}>
          <Typography variant="h6" className={classes.title}>
            ¡Dejanos tu opinión!
          </Typography>
          <div className={classes.input1}>
            <Box component="fieldset" mb={3} borderColor="transparent">
              <Typography component="legend">Calificación</Typography>
              <Rating
                id="simple-controlled"
                name="calification"
                value={input.calification}
                onChange={handleInputChange}
              />
            </Box>
            <br />
            <TextField
              id="standard-basic"
              name="title"
              value={input.title}
              onChange={handleInputChange}
              label="Titulo"
              className={classes.inputs}
              required={true}
              width={3}
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
            Enviar
          </Button>
        </form>
      </Hidden>
    </div>
  );
};

export default CreateReview;
