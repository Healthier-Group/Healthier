import axios from "axios";
import React, { useState } from "react";
import { REVIEW_URL } from "../../utils/Constants";
import {
  makeStyles,
  Hidden,
  Button,
  TextField,
  Typography,
  
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";

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
    calification: 1,
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
        alert("Review created successfully");
      })
      .catch((error) => alert("Some error ocurred, please try again"));
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
            {/* <InputLabel id="calification">Calificación</InputLabel>
            <Select name="calification" labelId="calification" id="select" value={input.calification} onChange={handleInputChange}>
              <MenuItem value="1">Poor</MenuItem>
              <MenuItem value="2">Average</MenuItem>
              <MenuItem value="3">Good</MenuItem>
              <MenuItem value="4">Great</MenuItem>
              <MenuItem value="5">Excellent</MenuItem>
            </Select> */}
            <Rating
              name="calification"
              value={input.calification}
              onChange={(event, newValue) => {
                setInput(newValue);
              }}
            />
            <TextField
              id="standard-basic"
              name="title"
              value={input.title}
              onChange={handleInputChange}
              label="Titulo"
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
            Enviar
          </Button>
        </form>
      </Hidden>
    </div>
  );
};

export default CreateReview;
