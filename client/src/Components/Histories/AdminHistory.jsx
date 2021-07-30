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

import swal from 'sweetalert'
import { getHistories, updateHistory } from "../../redux/historyOrders/historyOrderActions";

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

  const product = useSelector((state) => state.historyReducer.histories);
  const despachar = product[0].id
  console.log(product[0].id);

  // eslint-disable-next-line
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(product)
    dispatch(getHistories());
  }, 


  // eslint-disable-next-line
  [product]);
  




  async function handleDispatch(id) {
   
    console.log("Hola", id)
    const history = { shippingState: "Dispatched" }
    await dispatch(updateHistory(id, history ));
    await dispatch(getHistories())
    await swal("Despachada", "La orden fue despachada", "success")
    .then(()=>{ window.location.href="/private/adminhistory"})
  }

  const columns = [
    { field: "id", headerName: "#", width: 90 },
    { field: "fullName", headerName: "Destinatario", width: 200 },
    { field: "address", headerName: "Dirección", width: 160 },
    { field: "city", headerName: "Ciudad", width: 135 },
    { field: "postalCode", headerName: "Código Postal", width: 135 },
    { field: "products", headerName: "Productos", width: 200 },
    { field: "shippingState", headerName: "Estado", width: 115 },
    {
      field: "-",
      headerName: "-",
      sortable: false,
      width: 120,
      headerAlign: "center",
      disableClickEventBubbling: true,
      renderCell: () => {
        return (
          <ThemeProvider theme={theme}>
              <Button
                style={{ fontWeight: 1000 }}
                variant="contained"
                color="secondary"
                onClick={()=>handleDispatch(despachar)}
              >
                Despachar
              </Button>
          </ThemeProvider>
        );
      },
    }
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
              <h1>Órdenes</h1>
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