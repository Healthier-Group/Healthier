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

//import Footer from "../Footer/Footer";
import { addToWishList } from "../../redux/wishlist/actionsWishList";
import { addToCart } from "../../redux/cart/cartActions";
import swal from "sweetalert";
import { addOrderProduct } from "../../redux/orderProducts/orderProductActions";
import OrderFilter from "./OrderFilter";

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
  useEffect(
    () => {
      dispatch(getProducts());
    },
    // eslint-disable-next-line
    []
  );

  const product = useSelector((state) => state.productReducer.foundProducts);
  const filteredProducts = useSelector((state) => state.productReducer?.filter);
  //const array = product ? product : filteredProducts;
  // const day = new Date()
  const { currentUser } = useSelector((state) => state.userReducer);
  const orderId = currentUser?.order?.id;
  const {orderProducts}= useSelector((state)=>state.orderProductReducer)
  console.log("orderproducts en productCard", orderProducts);

  const addToWishListHandler = async (id) => {
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
    if (!currentUser) {
      //si el usuario no esta login
      await dispatch(addToCart(id));
      swal({
        title: "Carrito de compras",
        text: "Tu producto fue añadido",
        icon: "success",
        button: "Volver",
      });
      await dispatch(getProducts());
    } else {
      //si el usuario si está login debo pasarle esta info quantity, productId, orderId
      const orderProduct = {
        productId: id,
        orderId: orderId,
      };
      await dispatch(addOrderProduct(orderProduct));
      swal({
        title: "Carrito de compras",
        text: "El producto fue añadido",
        icon: "success",
        button: "Volver",
      });
      await dispatch(getProducts());
    }
  };

  //const product = useSelector((state) => state.productReducer.products);

  function displayProducts(array) {
    return array?.map((p) => {
      const productId = p.id;

      return (
        <div key={p.id}>
          <Card className={classes.root}>
            <CardActionArea>
              <Link
                to={`/products/${p.id}`}
                style={{
                  color: "black",
                  textDecoration: "none",
                }}
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
                  <Typography component="h3" className={classes.price}>
                    $ {p.price}
                  </Typography>
                </CardContent>
              </Link>
            </CardActionArea>
            <CardActions className={classes.space}>
              {p.stock > 0 ? (
                <Button
                  className={classes.btn}
                  size="small"
                  color="primary"
                  onClick={() => addToCartHandler(productId)}
                >
                  <AddShoppingCartIcon /> Lo quiero
                </Button>
              ) : (
                <Button
                  className={classes.btn}
                  size="small"
                  color="primary"
                  disabled
                >
                  Sin stock
                </Button>
              )}
              {p.stock > 0 ? (
                <Button
                  className={classes.btn}
                  size="small"
                  color="primary"
                  //tenemos que mandarlo a la WL
                  id={p.id}
                  onClick={() => addToWishListHandler(productId)}
                >
                  Favoritos <FavoriteBorderIcon />
                </Button>
              ) : (
                <Button
                  className={classes.btn}
                  size="small"
                  color="primary"
                  //tenemos que mandarlo a la WL
                  id={p.id}
                >
                  Favoritos <FavoriteBorderIcon />
                </Button>
              )}
            </CardActions>
          </Card>
        </div>
      );
    });
  }

  return (
    <div>
      <div>
        <div className={classes.view}>
          <Grid container spacing={1}>
            <Hidden only={["xs", "sm"]}>
              <Grid item xs={2}>
                <OrderFilter />
              </Grid>
              <Grid item xs={10}>
                <div className={classes.wrapped}>
                  {filteredProducts?.length > 0
                    ? displayProducts(filteredProducts)
                    : displayProducts(product)}
                </div>
              </Grid>
            </Hidden>
          </Grid>
        </div>
      </div>
      <div>
        <Hidden only={["md", "lg", "xl"]}>
          <Grid container spacing={1}>
            <Grid item xs={2} style={{display:"flex",margin:"auto", justifyContent:"center"}}>
              <OrderFilter />
            </Grid>
            <Grid item xs={12}>
              <div className={classes.wrapped}>
                {filteredProducts?.length > 0
                  ? displayProducts(filteredProducts)
                  : displayProducts(product)}
              </div>
            </Grid>
          </Grid>
        </Hidden>
      </div>
    </div>
  );
}
