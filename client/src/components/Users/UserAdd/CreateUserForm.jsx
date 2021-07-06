import React, { useEffect, useState } from "react";
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
    padding: "20px",
    borderRadius: "20px",
  },
  input1: {
    display: "flex",
    justifyContent: "space-between",
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

const CreateUserForm = () => {
  const [input, setInput] = useState({});
  const [error, setError] = useState({
    //Control the error red border of the inputs
    name: false,
    username: false,
    email: false,
    password: false,
    contact: false,
    isDeleted: false,
  });

  const [helperText, setHelperText] = useState({
    //Control the warning message
    name: "Ingrese un Nombre",
    username: "Ingrese un nombre de usuario válido",
    email: "Ingrese un email válido",
    password: "Debe contener al menos un numero, una mayuscula y 8 caracteres",
    contact: "Numero de Telefono",
    isDeleted: "Ingrese un is deleted",
  });

  const validate = (field) => {
    switch (field.name) {
      case "username":
        if (!/^([A-Za-z0-9]){4,20}$/.test(field.value)) {
          setError({ ...error, username: true });
          if (field.value.length < 4) {
            setHelperText({
              ...helperText,
              username: "Nombre de usuario muy corto",
            });
          } else if (field.value.length > 20) {
            setHelperText({
              ...helperText,
              username: "Nombre de usuario demasiado largo",
            });
          } else {
            setHelperText({
              ...helperText,
              username: "Contiene caracteres no aceptados",
            });
          }
        } else {
          setError({ ...error, username: false });
          setHelperText({ ...helperText, username: "" });
        }
        break;

      case "name":
        if (!/^[A-Za-z .'-]{3,20}$/.test(field.value)) {
          setError({ ...error, name: true });
          if (field.value.length < 3) {
            setHelperText({ ...helperText, name: "Es muy corto" });
          } else if (field.value.length > 20) {
            setHelperText({ ...helperText, name: "Es muy largo" });
          } else {
            setHelperText({
              ...helperText,
              name: "No se permiten caracteres especiales",
            });
          }
        } else {
          setError({ ...error, name: false });
          setHelperText({ ...helperText, name: "" });
        }
        break;
      case "email":
        if (
          !/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
            field.value
          )
        ) {
          setError({ ...error, name: true });
          if (field.value.length < 3) {
            setHelperText({ ...helperText, email: "Es muy corto" });
          } else if (field.value.length > 40) {
            setHelperText({ ...helperText, email: "Es muy largo" });
          } else {
            setHelperText({
              ...helperText,
              email: "Ingrese un email válido",
            });
          }
        } else {
          setError({ ...error, email: false });
          setHelperText({ ...helperText, email: "" });
        }
        break;
      case "password":
        if (
          !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,60}$/.test(
            field.value
          )
        ) {
          setError({ ...error, password: true });
          if (field.value.length < 8) {
            setHelperText({ ...helperText, password: "Es muy corto" });
          } else if (field.value.length > 60) {
            setHelperText({ ...helperText, password: "Es muy largo" });
          } else {
            setHelperText({
              ...helperText,
              password: "Password",
            });
          }
        } else {
          setError({ ...error, password: false });
          setHelperText({ ...helperText, password: "" });
        }
        break;
    }
  };

  useEffect(() => {
    validate("email");
  }, [error]);

  const handleInputChange = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    validate(e.target);
  };
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <Hidden only={["sm", "xs"]}>
        <form className={classes.root}>
          <div className={classes.input1}>
            <TextField
              id="standard-basic"
              label="Nombre"
              name="name"
              className={classes.inputs}
              autoComplete="new"
              value={input.name}
              onChange={handleInputChange}
              error={error["name"]}
              helperText={[helperText["name"]]}
            />

            <TextField
              id="standard-basic"
              label="Nombre de usuario"
              name="username"
              className={classes.inputs}
              value={input.username}
              autoComplete="new"
              onChange={handleInputChange}
              error={error["username"]}
              helperText={[helperText["username"]]}
            />
          </div>

          <TextField
            id="standard-basic"
            name="email"
            label="Email"
            className={classes.inputs}
            error={error["email"]}
            value={input.email}
            autoComplete="off"
            onChange={handleInputChange}
            helperText={[helperText["email"]]}
          />

          <div className={classes.input1}>
            <TextField
              id="standard-basic"
              label="Contraseña"
              type="password"
              name="password"
              className={classes.inputs}
              value={input.password}
              onChange={handleInputChange}
              error={error["password"]}
              helperText={[helperText["password"]]}
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
            name="name"
            className={classes.inputs}
            autoComplete="new"
            value={input.name}
            onChange={handleInputChange}
            error={error["name"]}
            helperText={[helperText["name"]]}
          />

          <TextField
            id="standard-basic"
            name="username"
            label="Nombre de usuario"
            className={classes.inputs}
            value={input.username}
            autoComplete="new"
            onChange={handleInputChange}
            error={error["username"]}
            helperText={[helperText["username"]]}
          />

          <TextField
            id="standard-basic"
            label="Email"
            name="email"
            autoComplete="new"
            className={classes.inputs}
            error={error["email"]}
            value={input.email}
            autoComplete="off"
            onChange={handleInputChange}
            helperText={[helperText["email"]]}
          />

          <TextField
            id="standard-basic"
            label="Contraseña"
            name="password"
            type="password"
            className={classes.inputs}
            value={input.password}
            onChange={handleInputChange}
            error={error["password"]}
            helperText={[helperText["password"]]}
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
