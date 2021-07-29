import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Button,
  makeStyles,
  Grid,
} from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from '../../utils/Theme';


import {
  getReviewById,
  deleteReview,
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

export function DeleteReview() {
  const { id } = useParams();
  //console.log("Aca hay ID", id);
  const reviewDetail = useSelector(
    (state) => state.productReducer.reviewDetail //cambiar a review post hacer redux
  );
  const dispatch = useDispatch();
  const classes = useStyles();

  const [data, setData] = useState({
    title: "",
    description: "",
    calification: "",
  });

  const handleSubmit = (e) => {
    dispatch(deleteReview(data)); // const id = this.props.match.params.id;
  };

  useEffect(() => {
    if (reviewDetail !== undefined) {
      setData({
        id: id,
        title: reviewDetail[0]?.title,
        description: reviewDetail[0]?.description,
        calification: reviewDetail[0]?.calification
      });
      console.log("a ver la data", data);
    } else {
      dispatch(getReviewById(id));
    }
  },
  // eslint-disable-next-line
  [dispatch, id, reviewDetail]);

  useEffect(() => {
    dispatch(getReviewById(id));
  }, 
  // eslint-disable-next-line
  []);
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
                  <h2> ¿Desea borrar la review {`"${data.title}"`} ?</h2>
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
                <Link to={"/private/reviewlist"}>
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
export default DeleteReview;
