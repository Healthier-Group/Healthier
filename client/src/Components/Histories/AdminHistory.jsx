import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  makeStyles,
  Button,
  Container,
} from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { DataGrid } from "@material-ui/data-grid"; //test xgrid: SC & JMN
import theme from '../../utils/Theme';
import { Link } from "react-router-dom";
import { getHistories } from "../../redux/historyOrders/historyOrderActions";

const AdminHistory = () => {
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

  const product = useSelector((state) => state.historyOrderReducer.histories);
  console.log(product);
  // eslint-disable-next-line
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHistories());
  }, 
  // eslint-disable-next-line
  []);

  const columns = [
    { field: "id", headerName: "#", width: 90 },
    { field: "fullName", headerName: "Destinatario", width: 200 },
    { field: "address", headerName: "Dirección", width: 180 },
    { field: "city", headerName: "Ciudad", width: 135 },
    { field: "postalCode", headerName: "Código Postal", width: 120 },
    { field: "products", headerName: "Productos", width: 120 },
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
        <img src="https://thumbs.gfycat.com/CompleteZanyIlsamochadegu-small.gif" alt="Not found"/>
      )}
    </div>
  );
};
export default AdminHistory;
