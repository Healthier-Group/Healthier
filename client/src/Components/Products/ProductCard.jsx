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
//import Footer from "../Footer/Footer";
import { addToWishList } from "../../redux/wishlist/actionsWishList";
import { addToCart } from "../../redux/cart/cartActions";
import swal from 'sweetalert'

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
    fontSize: "18px",
    fontWeight: "bold",
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
  },
});

export default function ProductCard() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const addToWishListHandler = async (id) => {
    console.log("item_id: " + id);
    await dispatch(addToWishList(id));
   
    swal({
      title: "Lista de deseos",
      text: "Tu producto fue añadido",
      icon: "success",
      button: "Volver",
    });
    await dispatch(getProducts());
  };
  const addToCartHandler = async (id) => {
    console.log("item_id: " + id);
    await dispatch(addToCart(id));
    swal({
      title: "Carrito de compras",
      text: "Tu producto fue añadido",
      icon: "success",
      button: "Volver",
    });
    await dispatch(getProducts());
  };
  const product = useSelector((state) => state.productReducer.foundProducts);
  //const product = useSelector((state) => state.productReducer.products);

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
                const productId = p.id;

                return (
                  <Card className={classes.root}>
                    <CardActionArea>
                      <Link
                        to={`/products/${p.id}`}
                        style={{ color: "black", textDecoration: "none" }}
                      >
                        <CardMedia
                          className={classes.media}
                          image={p.image}
                          title={p.name}
                          id={p.id}
                        />
                        <CardContent>
                          <div>
                            <p className={classes.name}>{p.name}</p>
                          </div>

                          <Typography component='h3' className={classes.price}>
                            $ {p.price}
                          </Typography>
                        </CardContent>
                      </Link>
                    </CardActionArea>
                    <CardActions className={classes.space}>
                      <Button
                        className={classes.btn}
                        size='small'
                        color='primary'
                        onClick={() => addToCartHandler(productId)}
                      >
                        <AddShoppingCartIcon /> Lo quiero
                      </Button>
                      <Button
                        className={classes.btn}
                        size='small'
                        color='primary'
                        //tenemos que mandarlo a la WL
                        id={p.id}
                        onClick={() => addToWishListHandler(productId)}
                      >
                        Favoritos <FavoriteBorderIcon />
                      </Button>
                    </CardActions>
                  </Card>
                );
              })}
            </div>
          </Grid>
        </Hidden>
        <Hidden only={["md", "lg", "xl"]}>
          <Grid item xs={12}>
            <div className={classes.wrapped}>
              {product?.map((p) => {
                const productId = p.id;
                return (
                  <Card className={classes.root}>
                    <Link
                      to={`/products/${p.id}`}
                      style={{ color: "black", textDecoration: "none" }}
                    >
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

                          <Typography component='h3' className={classes.price}>
                            $ {p.price}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Link>
                    <CardActions className={classes.space}>
                      <Button
                        className={classes.btn}
                        size='small'
                        color='primary'
                        onClick={() => addToCartHandler(productId)}
                      >
                        <AddShoppingCartIcon /> Lo quiero
                      </Button>
                      <Button
                        className={classes.btn}
                        size='small'
                        color='primary'
                        onClick={() => addToWishListHandler(productId)}
                      >
                        Favoritos <FavoriteBorderIcon />
                      </Button>
                    </CardActions>
                  </Card>
                );
              })}
            </div>
          </Grid>
        </Hidden>
      </Grid>
    </div>
  );
}
