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
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../themeStyle";
import Validate from "../../utils/Validate";

import swal from "sweetalert";
import { getProductById } from "../../redux/products/productActions";

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
      dispatch(getProductById(id));
    }
  }, [dispatch, id, productDetail]);

  useEffect(() => {
    dispatch(getProductById(id));
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
    description: "Ingrese una descripción",
    ingredients: "Ingrese los ingredientes",
    size: "Ingrese un tamaño de presentación",
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
                <Grid></Grid>
                <Grid item>
                  <TextField
                    error={error["name"]}
                    helperText={[helperText["name"]]}
                    id="name"
                    label="Nombre"
                    name="name"
                    value={input?.name ? input.name : ""}
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
                <Grid item>{/* <DescriptionIcon /> */}</Grid>
                <Grid item>
                  <TextField
                    error={error["description"]}
                    helperText={[helperText["description"]]}
                    id="description"
                    label="Descripción"
                    name="description"
                    value={input?.description || ""}
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
                <Grid item></Grid>
                <Grid item>
                  <TextField
                    error={error["ingredients"]}
                    helperText={[helperText["ingredients"]]}
                    id="ingredients"
                    label="Ingredientes"
                    name="ingredients"
                    value={input?.ingredients || ""}
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
                </Grid>
                <Grid item>
                  <TextField
                    error={error["size"]}
                    helperText={[helperText["size"]]}
                    id="size"
                    name="size"
                    label="Tamaño"
                    value={input?.size || ""}
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
                </Grid>
                <Grid item>
                  <TextField
                    error={error["brand"]}
                    helperText={[helperText["brand"]]}
                    id="brand"
                    name="brand"
                    label="Marca"
                    value={input?.brand || ""}
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
                </Grid>
                <Grid item>
                  <TextField
                    error={error["price"]}
                    helperText={[helperText["price"]]}
                    id="price"
                    name="price"
                    label="Precio"
                    value={input?.price || ""}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid
                  container
                  spacing={1}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Grid item>{/* <ImageIcon /> */}</Grid>
                  <Grid item>
                    <TextField
                      error={error["image"]}
                      helperText={[helperText["image"]]}
                      id="image"
                      name="image"
                      label="Imagen"
                      value={input?.image || ""}
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
                  <Grid item>{/* <DocumentScannerIcon /> */}</Grid>
                  <Grid item>
                    <TextField
                      error={error["sku"]}
                      helperText={[helperText["sku"]]}
                      id="sku"
                      name="sku"
                      label="SKU"
                      value={input?.sku || ""}
                      onChange={handleInputChange}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            {/* <Grid
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
            </Grid> */}
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
export default ProductUpdate;
