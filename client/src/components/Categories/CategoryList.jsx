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
import { getCategories } from "../../redux/products/productActions";

const CategoryList = () => {
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

  const category = useSelector((state) => state.productReducer.foundCategories);
  console.log(category);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const columns = [
    { field: "id", headerName: "#", width: 90 },
    { field: "name", headerName: "Nombre", width: 250 },
    { field: "description", headerName: "Descripción", width: 550 },
    {
      field: "Edit", // CAMBIAR LINK AL PUT FORM DE CATEGORY
      headerName: "Editar",
      sortable: false,
      width: 120,
      headerAlign: "center",
      disableClickEventBubbling: true,
      renderCell: (params) => {
        return (
          <ThemeProvider theme={theme}>
            <Link
              to={`/private/updatecategory/${params.id}`}
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
      field: "Delete", // CAMBIAR LINK al delete form de cats
      headerName: "Eliminar",
      sortable: false,
      width: 120,
      headerAlign: "center",
      disableClickEventBubbling: true,
      renderCell: (params) => {
        return (
          <ThemeProvider theme={theme}>
            <Link
              to={`/private/updatecategory/${params.id}`}
              style={{ textDecoration: "none" }}
            >
              <Button
                style={{ fontWeight: 1000 }}
                variant="contained"
                color="secondary"
              >
                Eliminar
              </Button>
            </Link>
          </ThemeProvider>
        );
      },
    },
  ];

  return (
    <div>
      {category ? (
        <div>
          <ThemeProvider theme={theme}>
            <Container
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <h1>Categorías</h1>
              <Link to="/private/catform" style={{ textDecoration: "none" }}>
                <Button variant="contained" color="secondary">
                  Agregar Nueva
                </Button>
              </Link>
            </Container>

            <Container style={{ height: 400, width: "90%" }}>
              <Container style={{ display: "flex", height: "100%" }}>
                <DataGrid rows={category} columns={columns} />
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
export default CategoryList;
