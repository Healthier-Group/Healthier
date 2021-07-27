import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, TextField, makeStyles, Grid } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from '../../utils/Theme';
// import ValidateCategory from "../../utils/ValidateCategory";

import {
  getReviewById,
  updateReview,
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

export function UpdateReview(handleSubmit) {
  const { id } = useParams();
  //console.log("Aca hay ID", id);
  const reviewDetail = useSelector(
    (state) => state.productReducer.reviewDetail
  );
  const dispatch = useDispatch();
  const classes = useStyles();

  const [input, setInput] = useState({
    title: "",
    description: "",
    calification: 0,
  });

//   const handleSubmit = (e) => {
//     dispatch(updateReview(input)); // const id = this.props.match.params.id;
//   };

  useEffect(() => {
    if (reviewDetail !== undefined) {
      setInput({
        id: id,
        title: reviewDetail[0]?.title,
        description: reviewDetail[0]?.description,
        calification: reviewDetail[0]?.calification
      });
      console.log("a ver el input", input);
    } else {
      dispatch(getReviewById(id));
    }
  }, [dispatch, id, reviewDetail]);
  //console.log('a ver el id aca', id)

  useEffect(() => {
    dispatch(getReviewById(id));
  }, []);
  useEffect(() => {}, [input, setInput]);

  const [error, setError] = useState({
    //Control the error red border of the inputs
    title: false,
    description: false,
    calification: false,
  });
  const [helperText, setHelperText] = useState({
    //Control the warning message
    title: "Ingrese un título",
    description: "Ingrese una descripción",
  });

  const handleInputChange = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    // ValidateCategory(e.target, error, setError, helperText, setHelperText);
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
            <Grid item xs={12}>
              <Grid
                container
                spacing={1}
                alignItems="center"
                justifyContent="center"
              >
                <Grid item xs={8}>
                  <TextField
                    error={error["title"]}
                    helperText={[helperText["title"]]}
                    id="title"
                    label="Título"
                    name="title"
                    value={input?.title ? input.title : ""}
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
export default UpdateReview;
