import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  TextField,
  makeStyles,
  Grid,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@material-ui/core";
import { Person, Email, VpnKey, Phone } from "@material-ui/icons";
import { readUser } from "../../../redux/users/userActions";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../../themeStyle";
import Validate from "../../../utils/Validate";

import swal from "sweetalert";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 100,
    marginBottom: 30,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: 500,
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
  },
  last: {
    padding: 30,
  },
}));

export function ProductUpdate({ input, setInput, handleSubmit }) {
  const { id } = useParams();
  const { productDetail } = useSelector((state) => state.productReducer); //action y reducer pdte
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (productDetail !== undefined) {
      setInput({
        id: id,
        // username: userDetail.username,
        // email: userDetail.email,
        // password: "",
        // contact: userDetail.contact,
        name: productDetail.name,
        description: productDetail.description,
        ingredients: productDetail.ingredients,
        size: productDetail.size,
        brand: productDetail.brand,
        price: productDetail.price,
        image: productDetail.image,
        sku: productDetail.sku,
      });
    } else {
      dispatch(readUser(id));
    }
  }, [dispatch, id, userDetail]);

  useEffect(() => {
    dispatch(readUser(id));
  }, []);
  useEffect(() => {}, [input, setInput]);

  const [error, setError] = useState({
    //Control the error red border of the inputs
    name: false,
    description: false,
    ingredients: false,
    size: false,
    brand: false,
    price: false,
    image: false,
    sku: false,
  });
  const [helperText, setHelperText] = useState({
    //Control the warning message
    name: "Ingrese un nombre de producto",
    description: "Ingrese una descripcion",
    ingredients: "Ingrese los ingredientes",
    size: "Ingrese un tamaño de presentacion",
    brand: "Ingrese la marca del producto",
    price: "Ingrese un precio",
    image: "Ingrese una imagen",
    sku: "Ingrese un SKU alfanumerico",
  });

  const handleInputChange = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    Validate(e.target, error, setError, helperText, setHelperText);
  };

  const handleRadio = function (e) {
    switch (e.target.name) {
      case "isAdmin":
        setInput({
          ...input,
          isAdmin: e.target.value === "YES" ? true : false,
        });
        break;
      case "isReseller":
        setInput({
          ...input,
          isReseller: e.target.value === "YES" ? true : false,
        });
        break;
      case "isDeleted":
        setInput({
          ...input,
          isDeleted: e.target.value === "BANNED" ? true : false,
        });
        break;
      default:
        break;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <form noValidate autoComplete="off">
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
            className={`componentDataBox ${classes.root}`}
            spacing={1}
          >
            <Grid item xs={6}>
              <Grid
                container
                spacing={1}
                alignItems="center"
                justifyContent="center"
              >
                <Grid>
                  <Person />
                </Grid>
                <Grid item>
                  <TextField
                    error={error["username"]}
                    helperText={[helperText["username"]]}
                    id="username"
                    label="Usuario"
                    name="username"
                    value={input.username ? input.username : ""}
                    onChange={handleInputChange}
                  />
                </Grid>
              </Grid>

              <Grid
                container
                spacing={1}
                alignItems="center"
                justifyContent="center"
              >
                <Grid item>
                  <Email />
                </Grid>
                <Grid item>
                  <TextField
                    error={error["email"]}
                    helperText={[helperText["email"]]}
                    id="email"
                    label="Correo"
                    name="email"
                    value={input.email || ""}
                    onChange={handleInputChange}
                  />
                </Grid>
              </Grid>
              <Grid
                container
                spacing={1}
                alignItems="center"
                justifyContent="center"
              >
                <Grid item>
                  <VpnKey />
                </Grid>
                <Grid item>
                  <TextField
                    error={error["password"]}
                    helperText={[helperText["password"]]}
                    id="password"
                    label="Contraseña"
                    name="password"
                    value={input.password || ""}
                    onChange={handleInputChange}
                  />
                </Grid>
              </Grid>
              <Grid
                container
                spacing={1}
                alignItems="center"
                justifyContent="center"
              >
                <Grid item>
                  <Phone />
                </Grid>
                <Grid item>
                  <TextField
                    error={error["contact"]}
                    helperText={[helperText["contact"]]}
                    id="contact"
                    name="contact"
                    label="Nº Telefono"
                    value={input.contact || ""}
                    onChange={handleInputChange}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <RadioGroup
                name="isAdmin"
                value={input.isAdmin ? "YES" : "NO"}
                onChange={handleRadio}
              >
                <FormControlLabel
                  value={"YES"}
                  control={<Radio />}
                  label="ADMINISTRADOR"
                />
                <FormControlLabel
                  value={"NO"}
                  control={<Radio />}
                  label="CLIENTE"
                />
              </RadioGroup>
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <RadioGroup
                name="isReseller"
                value={input.isReseller ? "YES" : "NO"}
                onChange={handleRadio}
              >
                <FormControlLabel
                  value={"YES"}
                  control={<Radio />}
                  label="MAYORISTA"
                />
                <FormControlLabel
                  value={"NO"}
                  control={<Radio />}
                  label="MINORISTA"
                />
              </RadioGroup>
              <RadioGroup
                name="isDeleted"
                value={input.isDeleted ? "BANNED" : "ALLOWED"}
                onChange={handleRadio}
              >
                <FormControlLabel
                  value={"ALLOWED"}
                  control={<Radio />}
                  label="PERMITIDO"
                />
                <FormControlLabel
                  value={"BANNED"}
                  control={<Radio />}
                  label="BANNEADO"
                />
              </RadioGroup>
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item>
                <Button
                  style={{ fontWeight: 1000, marginTop: 50 }}
                  color="secondary"
                  onClick={handleSubmit}
                  variant="contained"
                >
                  Guardar Cambios
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </>
    </ThemeProvider>
  );
}
export default UserUpdate;
