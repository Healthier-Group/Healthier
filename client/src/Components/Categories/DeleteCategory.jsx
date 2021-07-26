import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Button,
  makeStyles,
  Grid,
  Textfield,
  Typography,
  TextField,
} from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from '../../utils/Theme';

import swal from "sweetalert";
import {
  getCategoryById,
  deleteCategory,
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

export function DeleteCategory() {
  const { id } = useParams();
  //console.log("Aca hay ID", id);
  const categoryDetail = useSelector(
    (state) => state.productReducer.categoryDetail
  );
  const dispatch = useDispatch();
  const classes = useStyles();

  const [data, setData] = useState({
    name: "",
    description: "",
  });

  const handleSubmit = (e) => {
    dispatch(deleteCategory(data)); // const id = this.props.match.params.id;
  };

  useEffect(() => {
    if (categoryDetail !== undefined) {
      setData({
        id: id,
        name: categoryDetail[0]?.name,
        description: categoryDetail[0]?.description,
      });
      console.log("a ver la data", data);
    } else {
      dispatch(getCategoryById(id));
    }
  }, [dispatch, id, categoryDetail]);
  //console.log('a ver el id aca', id)

  useEffect(() => {
    dispatch(getCategoryById(id));
  }, []);
  useEffect(() => {}, [data, setData]);

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
                <Grid item xs={8}></Grid>
              </Grid>
              <Grid
                container
                spacing={1}
                alignItems="center"
                justifyContent="center"
              >
                <Grid item xs={8}>
                  <h2> ¿Desea borrar la categoría {`"${data.name}"`} ?</h2>
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
                <Link to={"/private/categorylist"}>
                  <Button
                    style={{ fontWeight: 1000, marginTop: 50 }}
                    color="secondary"
                    onClick={handleSubmit}
                    variant="contained"
                  >
                    Sí, borrar
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </>
    </ThemeProvider>
  );
}
export default DeleteCategory;
