import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import Hidden from "@material-ui/core/Hidden";
import { getProductById } from "../../redux/products/productActions";


const useStyles = makeStyles({
  root: {
    margin: "auto",
    marginBottom: "20px",
    
    justifyContent: "center",
  },
  card: {
    width: "300px",
    height: "400px",
  },
  cont1: {
    display: "flex",
    marginTop:'100px',
    minWidth: "60vw",
    justifyContent: "space-between",
    margin: 20,
  },
  fav: {
    textAlign: "center",
    marginTop: "25px",
    marginBottom: "25px",
  },
  btn: {
    width: "280px",
    margin: "auto",
  },
  btnMobile: {
    width: "80vw",
    display: "flex",
    margin: "auto",
  },
  name: {
    fontSize: "25px",
    fontFamily: "Roboto",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "20px",
  },
  price: {
    fontSize: "25px",
    fontWeight: "bold",
    marginBottom: "30px",
  },
  p: {
    fontSize: "20px",
    fontFamily: "Roboto",
    backgroundColor: "lightblue",
    width: "fit-content",
    margin: "auto",
    padding: "10px",
  },
  favMobile: {
    marginTop: "25px",
  },
  cont1Mobile: {
    height: "fit-content",
    padding: 10,
  },
  root1: {
    margin: "auto",
    marginTop: 20,
    marginBottom: 10,
    justifyContent: "center",
  },

  bg: {
    backgroundColor: "#f1f1f1",
  },
  description: {
    padding: 20,
  },
});

const ProductDetail = ({ match }) => {
  const classes = useStyles();
  const { id } = match.params;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductById(id));
  }, []);

  const product = useSelector((state) => state.productDetail);
  //console.log('STATE ACA', product )

  return (
    <div className={classes.bg}>
      {product?.map((p) => {
        return (
          <div>
            <Hidden only={["sm", "xs"]}>
              <Grid container spacing={1} className={classes.root}>
                <Grid container className={classes.root}>
                  <Grid item>
                    <Paper className={classes.cont1}>
                      <img
                        src={p.image}
                        alt="Not Found"
                        style={{ display: "flex", margin: "auto" }}
                        width="400px"
                        height="400px"
                      />
                      <Card className={classes.card}>
                        <CardActionArea>
                          <CardContent>
                            <Typography className={classes.name}>
                              {p.name}
                            </Typography>
                            <Typography>{p.brand}</Typography>
                            <Typography>{p.size}</Typography>

                            <Typography className={classes.price}>
                              ${p.price}
                            </Typography>
                            <Typography>
                              Antes ${Math.ceil(p.price * 1.15)}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                        <CardActions>
                          <Button
                            className={classes.btn}
                            variant="contained"
                            color="primary"
                          >
                            Comprar
                          </Button>
                        </CardActions>

                        <div className={classes.fav}>
                          <i class="far fa-heart"></i>
                        </div>
                      </Card>
                    </Paper>
                  </Grid>
                </Grid>
                <Grid item xs={6}>
                  <Paper className={classes.description}>
                    <label>
                      <b>Descripción:</b>
                    </label>

                    <Typography>{p.description}</Typography>
                  </Paper>
                </Grid>
              </Grid>
            </Hidden>

            <Hidden only={["md", "lg", "xl"]}>
              
              <Grid container className={classes.root}>
                <Grid container className={classes.root1}>
                  <Grid item xs={11}>
                    <Paper className={classes.cont1Mobile}>
                      <Typography className={classes.name}>{p.name}</Typography>
                      <Hidden only="sm">
                        <img
                          src={p.image}
                          alt="Not Found"
                          width="100%"
                          height="300px"
                        />
                      </Hidden>
                      <Hidden only="xs">
                        <img
                          src={p.image}
                          alt="Not Found"
                          style={{ display: "flex", margin: "auto" }}
                          width="70%"
                          height="300px"
                        />
                      </Hidden>
                      <Typography>{p.marca}</Typography>
                      <Typography>{p.peso}</Typography>

                      <Typography className={classes.price}>
                        ${p.price}
                      </Typography>
                      <Typography>
                        Antes ${Math.ceil(p.price * 1.15)}
                      </Typography>

                      <Button
                        className={classes.btnMobile}
                        variant="contained"
                        color="primary"
                      >
                        Comprar
                      </Button>
                      <div className={classes.favMobile}>
                        <p className={classes.p}>
                          <i class="far fa-heart"> Agregar a favoritos</i>
                        </p>
                      </div>
                    </Paper>
                  </Grid>
                </Grid>
                <Grid item xs={11}>
                  <Paper className={classes.cont1Mobile}>
                    <label>
                      <b>Descripción:</b>
                    </label>
                    <Typography className={classes.descMobile}>
                      {p.description}
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </Hidden>
          </div>
        );
      })}
    </div>
  );
};

export default ProductDetail;
