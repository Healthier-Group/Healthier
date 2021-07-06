import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core";
import { Hidden, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
  },
  root: {
    display: "flex",
    height: "fit-content",
    width: "fit-content",
    backgroundColor: "#00000033",
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
    backgroundColor: "orange",
  },
}));

export const CreateUserForm = () => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Hidden only={["sm", "xs"]}>
        <form className={classes.root}>
          <div className={classes.input1}>
            <TextField
              id="standard-basic"
              label="Nombre"
              className={classes.inputs}
              color="secondary"
            />

            <TextField
              id="standard-basic"
              label="Nombre de usuario"
              className={classes.inputs}
            />
          </div>

          <TextField
            id="standard-basic"
            label="Email"
            className={classes.inputs}
          />

          <div className={classes.input1}>
            <TextField
              id="standard-basic"
              label="Contraseña"
              type="password"
              className={classes.inputs}
            />
            <TextField
              id="standard-multiline-flexible"
              label="Repetir contraseña"
              type="password"
              className={classes.inputs}
            />
          </div>
          <Button
            variant="contained"
            color="primary"
            size="medium"
            className={classes.btn}
          >
            Crear
          </Button>
        </form>
      </Hidden>
      <Hidden only={["md", "lg", "xl"]}>
        <form className={classes.root}>
          <TextField
            id="standard-basic"
            label="Nombre"
            className={classes.inputs}
            color="secondary"
          />

          <TextField
            id="standard-basic"
            label="Nombre de usuario"
            className={classes.inputs}
          />

          <TextField
            id="standard-basic"
            label="Email"
            className={classes.inputs}
          />

          <TextField
            id="standard-basic"
            label="Contraseña"
            type="password"
            className={classes.inputs}
          />
          <TextField
            id="standard-multiline-flexible"
            label="Repetir contraseña"
            type="password"
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

export default CreateUserForm;
