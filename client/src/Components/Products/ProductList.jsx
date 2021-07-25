import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  makeStyles,
  Grid,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Container,
} from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { DataGrid } from "@material-ui/data-grid"; //test xgrid: SC & JMN
import theme from "../themeStyle";
import { Link } from "react-router-dom";
import { getProducts } from "../../redux/products/productActions";

const ProductList = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      marginTop: 100,
      marginBottom: 30,
      border: 5,
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

  const product = useSelector((state) => state.productReducer.foundProducts);
  console.log(product);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const columns = [
    { field: "id", headerName: "#", width: 90 },
    { field: "name", headerName: "Nombre", width: 200 },
    { field: "brand", headerName: "Marca", width: 180 },
    { field: "size", headerName: "Tamaño", width: 135 },
    { field: "price", headerName: "Precio", width: 120 },
    { field: "sku", headerName: "SKU", width: 110 },
    {
      field: "Edit",
      headerName: "Editar",
      sortable: false,
      width: 120,
      headerAlign: "center",
      disableClickEventBubbling: true,
      renderCell: (params) => {
        return (
          <ThemeProvider theme={theme}>
            <Link
              to={`/private/updateproduct/${params.id}`}
              style={{ textDecoration: "none" }}
            >
              <Button
                style={{ fontWeight: 1000 }}
                variant="contained"
                color="secondary"
              >
                Editar
              </Button>
            </Link>
          </ThemeProvider>
        );
      },
    },
    {
      field: "Details",
      headerName: "Detalles",
      sortable: false,
      width: 120,
      headerAlign: "center",
      disableClickEventBubbling: true,
      renderCell: (params) => {
        return (
          <ThemeProvider theme={theme}>
            <Link
              to={`/products/${params.id}`}
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                style={{ fontWeight: 1000 }}
                variant="contained"
                color="secondary"
              >
                Ver
              </Button>
            </Link>
          </ThemeProvider>
        );
      },
    },
  ];

  return (
    <div>
      {product ? (
        <div>
          <ThemeProvider theme={theme}>
            <Container
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <h1>Productos</h1>
              <Link to="/private/form" style={{ textDecoration: "none" }}>
                <Button variant="contained" color="secondary">
                  Agregar Nuevo
                </Button>
              </Link>
            </Container>

            <Container style={{ height: 400, width: "90%" }}>
              <Container style={{ display: "flex", height: "100%" }}>
                <DataGrid rows={product} columns={columns} />
              </Container>
            </Container>
          </ThemeProvider>
        </div>
      ) : (
        <img src="https://thumbs.gfycat.com/CompleteZanyIlsamochadegu-small.gif" />
      )}
    </div>
  );
};
export default ProductList;
