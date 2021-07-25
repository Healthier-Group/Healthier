import React , { useState, useEffect } from "react";
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
import ValidateProduct from "../../utils/ValidateProduct";
import { getCategories } from '../../redux/products/productActions'

import swal from "sweetalert";
import {
  getProductById,
  updateProduct,
} from "../../redux/products/productActions";

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

export function ProductUpdate() {
  const { id } = useParams();
  
  useEffect(()=>{
    dispatch(getCategories())
    },[])
  const category = useSelector((state) => state.productReducer.foundCategories);
  const productDetail = useSelector(
    (state) => state.productReducer.productDetail
  );
  console.log(category)
  const dispatch = useDispatch();
  const classes = useStyles();

  const [input, setInput] = useState({
    name: "",
    description: "",
    ingredients: "",
    size: "",
    brand: "",
    price: 0,
    image: "",
    sku: "",
  });

  const handleSubmit = (e) => {
    dispatch(updateProduct(input)); // const id = this.props.match.params.id;
  };

  useEffect(() => {
    if (productDetail !== undefined) {
      setInput({
        id: id,
        name: productDetail[0]?.name,
        description: productDetail[0]?.description,
        ingredients: productDetail[0]?.ingredients,
        size: productDetail[0]?.size,
        brand: productDetail[0]?.brand,
        price: productDetail[0]?.price,
        image: productDetail[0]?.image,
        sku: productDetail[0]?.sku,
        category: productDetail[0]?.category,
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
    ValidateProduct(e.target, error, setError, helperText, setHelperText);
  };

  //manejo del select

  function handleSelect(e) {
    if (input.category?.includes(parseInt(e.target.value))) {
      alert("Ya se eligió esta categoría. Seleccione otras.");
    } else if (input.category?.length >= 5) {
      alert("Se pueden elegir hasta 3 categorías.");
    } else {
      setInput((prev) => (
        { ...prev, category: [...prev.category, parseInt(e.target.value)]}))
    }
  }

  //obtener los nombres y mostrarlos

  function getNames(arr) {
    let names = [];
    category?.forEach((t) => {
      arr.forEach((id) => {
        if (parseInt(id) === t.id) {
          names.push(t.name);
        }
      });
    });
    return names;
  }

  //eliminar las categorias seleccionadas
  function deleteTemp(e, c) {
    setInput((prev) => ({
      ...prev,
      category: prev.category.filter((cat) => cat !== parseInt(c)),
    }));
  }


//        productDetail[0].categories.length? { map {productDetail[0].categories} con los P } : {<p>Este producto no tiene categorías seleccionadas aún</p>}


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
            <Grid item xs={12}>
              <Grid
                container
                spacing={1}
                alignItems="center"
                justifyContent="center"
              >
                <Grid item xs={8}>
                  <TextField
                    error={error["name"]}
                    helperText={[helperText["name"]]}
                    id="name"
                    label="Nombre"
                    name="name"
                    value={input?.name ? input.name : ""}
                    onChange={handleInputChange}
                    fullWidth={true}
                  />
                </Grid>
              </Grid>
              <Grid
                container
                spacing={1}
                alignItems="center"
                justifyContent="center"
              >
                <Grid item xs={8}>
                  <TextField
                    error={error["description"]}
                    helperText={[helperText["description"]]}
                    id="description"
                    label="Descripción"
                    name="description"
                    value={input?.description || ""}
                    onChange={handleInputChange}
                    fullWidth={true}
                  />
                </Grid>
              </Grid>
              <Grid
                container
                spacing={1}
                alignItems="center"
                justifyContent="center"
              >
                <Grid item xs={8}>
                  <TextField
                    error={error["ingredients"]}
                    helperText={[helperText["ingredients"]]}
                    id="ingredients"
                    label="Ingredientes"
                    name="ingredients"
                    value={input?.ingredients || ""}
                    onChange={handleInputChange}
                    fullWidth={true}
                  />
                </Grid>
              </Grid>
              <Grid
                container
                spacing={1}
                alignItems="center"
                justifyContent="center"
              >
                <Grid item xs={8}>
                  <TextField
                    error={error["size"]}
                    helperText={[helperText["size"]]}
                    id="size"
                    name="size"
                    label="Tamaño"
                    value={input?.size || ""}
                    onChange={handleInputChange}
                    fullWidth={true}
                  />
                </Grid>
              </Grid>
              <Grid
                container
                spacing={1}
                alignItems="center"
                justifyContent="center"
              >
                <Grid item xs={8}>
                  <TextField
                    error={error["brand"]}
                    helperText={[helperText["brand"]]}
                    id="brand"
                    name="brand"
                    label="Marca"
                    value={input?.brand || ""}
                    onChange={handleInputChange}
                    fullWidth={true}
                  />
                </Grid>
              </Grid>
              <Grid
                container
                spacing={1}
                alignItems="center"
                justifyContent="center"
              >
                <Grid item xs={8}>
                  <TextField
                    error={error["price"]}
                    helperText={[helperText["price"]]}
                    id="price"
                    name="price"
                    label="Precio"
                    value={input?.price || ""}
                    onChange={handleInputChange}
                    fullWidth={true}
                  />
                </Grid>
                <Grid
                  container
                  spacing={1}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Grid item xs={8}>
                    <TextField
                      error={error["image"]}
                      helperText={[helperText["image"]]}
                      id="image"
                      name="image"
                      label="Imagen"
                      value={input?.image || ""}
                      onChange={handleInputChange}
                      fullWidth={true}
                    />
                  </Grid>
                </Grid>
                <Grid
                  container
                  spacing={1}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Grid item xs={8}>
                    <TextField
                      error={error["sku"]}
                      helperText={[helperText["sku"]]}
                      id="sku"
                      name="sku"
                      label="SKU"
                      value={input?.sku || ""}
                      onChange={handleInputChange}
                      fullWidth={true}
                    />

                    <select
                      name="category"
                      onChange={(e) => handleSelect(e)}
                      value={input.category}
                      className={classes.inputs}
                      required
                    >
                      <option> select</option>
                      {category?.map((c) => {
                        return (
                          <option value={c.id} key={c.id}>
                            {c.name}
                          </option>
                        );
                      })}
                    </select>
                    <div>
                      {input.category?.map((c) => (
                        <p id={c}>
                          {getNames([c])}
                          <button onClick={(e) => deleteTemp(e, c)}>x</button>
                        </p>
                      ))}
                    </div>
                  </Grid>
                </Grid>
              </Grid>
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
export default ProductUpdate;