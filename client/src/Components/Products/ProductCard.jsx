import { React, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
  Hidden,
} from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/products/productActions";
import OrderFilter from "./OrderFilter";
import Footer from "../Footer/Footer";

const useStyles = makeStyles({
  root: {
    minWidth: 250,
    height: 530,
    margin: 20,
  },
  media: {
    width: 250,
    height: 300,
    margin: "auto",
  },
  wrapped: {
    justifyContent: "center",
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: "#f1f1f1",
    margin: 50,
    marginTop: "10%",
  },
  name: {
    position: "relative",
    textAlign: "center",
    fontSize:"18px",
    fontWeight:"bold",
    width: 218,
    height: 50,
    marginBottom: "25px",
  },
  btn: {
    position: "absolut",
    top: "10px",
  },
  space: {
    display: "flex",
    justifyContent: "center",
  },
  price: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: "30px",
  },
  view: {
    backgroundColor: "#f1f1f1",
    height: "100%",
  },
  viewItem: {
    textAlign: "center",
    position: "relative",
    top: "200px",
  },
});

export default function ProductCard() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const product = useSelector((state) => state.productReducer.foundProducts);
  return (
    <div className={classes.view}>
      <Grid container spacing={1}>
        <Hidden only={["xs", "sm"]}>
          <Grid item xs={2} className={classes.viewItem}>
            <OrderFilter />
          </Grid>
        </Hidden>
        {/* desktop only */}
        <Hidden only={["xs", "sm"]}>
          <Grid item xs={10}>
            <div className={classes.wrapped}>
              {product?.map((p) => {
                return (
                  <Link
                    to={`/products/${p.id}`}
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <Card className={classes.root}>
                      <CardActionArea>
                        <CardMedia
                          className={classes.media}
                          image={p.image}
                          title={p.name}
                        />
                        <CardContent>
                          <div>
                            <p className={classes.name}>{p.name}</p>
                          </div>

                          <Typography component="h3" className={classes.price}>
                            $ {p.price}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions className={classes.space}>
                        <Button
                          className={classes.btn}
                          size="small"
                          color="primary"
                        >
                          <AddShoppingCartIcon /> Lo quiero
                        </Button>
                        <Button
                          className={classes.btn}
                          size="small"
                          color="primary"
                        >
                          Favoritos <FavoriteBorderIcon />
                        </Button>
                      </CardActions>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </Grid>
        </Hidden>
        <Hidden only={["md", "lg", "xl"]}>
          <Grid item xs={12}>
            <div className={classes.wrapped}>
              {product?.map((p) => {
                return (
                  <Link
                    to={`/products/${p.id}`}
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <Card className={classes.root}>
                      <CardActionArea>
                        <CardMedia
                          className={classes.media}
                          image={p.image}
                          title={p.name}
                        />
                        <CardContent>
                          <div>
                            <p className={classes.name}>{p.name}</p>
                          </div>

                          <Typography component="h3" className={classes.price}>
                            $ {p.price}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions className={classes.space}>
                        <Button
                          className={classes.btn}
                          size="small"
                          color="primary"
                        >
                          <AddShoppingCartIcon /> Lo quiero
                        </Button>
                        <Button
                          className={classes.btn}
                          size="small"
                          color="primary"
                        >
                          Favoritos <FavoriteBorderIcon />
                        </Button>
                      </CardActions>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </Grid>
        </Hidden>
      </Grid>
    </div>
  );
}
