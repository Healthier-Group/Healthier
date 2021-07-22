import { useState } from "react";
import { makeStyles, Grid, Button, TextField } from "@material-ui/core";
import { Fingerprint, Person, Email, VpnKey, Phone } from "@material-ui/icons";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../../themeStyle";
import Validate from "../../../utils/Validate";
import { Paper } from "@material-ui/core";
import NavBar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 50,
    marginBottom: 30,
    border: 5,
    display: "flex",
  },
  title: {
    display: "flex",
    justifyContent: "center",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: 500,
  },
  last: {
    padding: 8,
  },
}));

const CreateUserForm = ({ input, setInput, handleSubmit, match }) => {
  const classes = useStyles();

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
    username: "Ingrese un Usuario",
    email: "Ingrese un Correo",
    password: "Ingrese un Password",
    contact: "Numero de Telefono",
    isDeleted: "Ingrese un is deleted",
  });

  const handleInputChange = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    Validate(e.target, error, setError, helperText, setHelperText);
  };

  return (
    <div className="extContCAF">
		<NavBar/>
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={3}
          style={{
            width: "fit-content",
            height: "fit-content",
            padding: "50px",
			margin:"50px auto"
          }}
        >
          <form noValidate autoComplete="off">
            <h1 style={{textAlign:"center"}}>
              {window.location.href.includes("register")
                ? "Registrate"
                : "Crear Usuario"}
            </h1>
            <br />
            <TextField
			style={{padding:"2px", display:"flex", margin:"auto"}}
              error={error["name"]}
              helperText={[helperText["name"]]}
              id="name"
              label={<Fingerprint />}
              name="name"
              value={input.name}
              onChange={handleInputChange}
            />
            <br />
            <TextField
			style={{padding:"2px", display:"flex", margin:"auto"}}
              error={error["username"]}
              helperText={[helperText["username"]]}
              id="username"
              label={<Person />}
              name="username"
              value={input.username}
              onChange={handleInputChange}
            />
            <br />
            <TextField
			style={{padding:"2px", display:"flex", margin:"5px 0"}}
              error={error["email"]}
              helperText={[helperText["email"]]}
              id="email"
              label={<Email />}
              name="email"
              value={input.email}
              onChange={handleInputChange}
            />
            <br />
            <TextField
			style={{padding:"2px", display:"flex", margin:"auto"}}
              error={error["password"]}
              helperText={[helperText["password"]]}
              id="password"
              label={<VpnKey />}
              name="password"
              type="password"
              value={input.password}
              onChange={handleInputChange}
            />
            <br />
            <TextField
			style={{padding:"2px", display:"flex", margin:"auto"}}
              error={error["contact"]}
              helperText={[helperText["contact"]]}
              id="contact"
              name="contact"
              label={<Phone />}
              value={input.contact}
              onChange={handleInputChange}
            />
            <br />
            <Button
              style={{ display:"flex", margin:"auto", marginTop:"30px" }}
              color="secondary"
              onClick={handleSubmit}
              variant="contained"
            >
              Agregar Usuario
            </Button>
          </form>
        </Paper>
      </div>
	  <Footer/>
    </div>
  );
};
export default CreateUserForm;
