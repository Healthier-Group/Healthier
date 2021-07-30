import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  makeStyles,
  Grid,
  Paper,
  Typography,
  Button,
  Hidden,
} from "@material-ui/core";
import { getProductById } from "../../redux/products/productActions";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import { Link } from 'react-router-dom';
import { addOrderProduct } from "../../redux/orderProducts/orderProductActions";

const useStyles = makeStyles({
  root: {
    margin: "auto",
    // marginBottom: "20px",
    // marginTop: "70px",
    justifyContent: "center",
  },
  card: {
    width: "300px",
    height: "400px",
  },
  cont1: {
    display: "flex",
    marginTop: "100px",
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
    padding: "20px 10px",
    margin: "30px 0",
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

const ProductDetail = (props) => {
  const classes = useStyles();
  const id = props.match.params.id;
  const dispatch = useDispatch();

  const { currentUser } = useSelector((state) => state.userReducer);
  const orderId = currentUser?.order?.id;
  let qty = 1;
  const addToCartHandler = async () => {
    if (!currentUser) {
      props.history.push(`/cart/${id}?qty=${qty}`);
    } else {
      //si el usuario si está login debo pasarle esta info quantity, productId, orderId

      console.log(
        "Estoy login pasando productos al carrito",
        "id producto",
        id,
        "id order",
        orderId
      );
      const orderProduct = {
        productId: id,
        orderId: orderId,
      };
      await dispatch(addOrderProduct(orderProduct));
      props.history.push(`/cart`);
    }
  };

  useEffect(() => {
    dispatch(getProductById(id));
  }, [dispatch, id]);

  const product = useSelector((state) => state.productReducer.productDetail);


  const addToWishListHandler = () => {
    props.history.push(`/wishlist/${id}`);
  };
  return (
    <div className={classes.bg}>
      <NavBar />
      {product?.map((p) => {
        return (
          <div
            key={p.id}
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "auto",
              minHeight: "100vh",
            }}
          >
            <Hidden only={["sm", "xs"]}>
              <Paper
                elevation={3}
                style={{
                  margin: "auto",

                  width: "80vw",
                  padding: "50px 20px",
                }}
              >
                <div
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <img
                    src={p.image}
                    alt="Not found"
                    width="400px"
                    height="400px"
                    style={{ margin: "auto", borderRadius: "50%" }}
                  />
                  <Paper
                    elevation={3}
                    style={{
                      margin: "auto",
                      height: "fit-content",
                      padding: "30px",
                      width: "30vw",
                    }}
                  >
                    <Typography variant="h4">{p.name}</Typography>
                    <br />
                    <Typography>{p.brand}</Typography>
                    <br />
                    <Typography variant="h5">
                      <b>$ {p.price}</b>
                    </Typography>
                    <br />
                    <br />
                    {p.stock > 0 ? (
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={addToCartHandler}
                        style={{
                          width: "25vw",
                          display: "flex",
                          margin: "auto",
                          color: "black",
                          backgroundColor: "#41D26C",
                        }}
                      >
                        Comprar
                      </Button>
                    ) : (
                      <Button
                        variant="contained"
                        color="primary"
                        disabled
                        style={{
                          width: "25vw",
                          display: "flex",
                          margin: "auto",
                          color: "black",
                          backgroundColor: "#CE2323",
                        }}
                      >
                        Sin stock
                      </Button>
                    )}
                    <br />
                    {p.stock > 0 ? (
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={addToWishListHandler}
                        style={{
                          width: "25vw",
                          display: "flex",
                          margin: "auto",
                          color: "black",
                          backgroundColor: "#41D26C",
                        }}
                      >
                        Favoritos
                      </Button>
                    ) : (
                      <Button
                        variant="contained"
                        color="primary"
                        style={{
                          width: "25vw",
                          display: "flex",
                          margin: "auto",
                          color: "black",
                          backgroundColor: "#41D26C",
                        }}
                      >
                        Favoritos
                      </Button>
                    )}
                    <br/>
                    {

                      <Link to={`/addreview/${p.id}`}> 
                        <Button
                          variant="contained"
                          color="primary"
                          style={{
                            width: "25vw",
                            display: "flex",
                            margin: "auto",
                            color: "black",
                            backgroundColor: "#41D26C",
                          }}
                        >
                          Dejar una opinión
                        </Button>
                        </Link> 
                    }
                  </Paper>
                </div>
                <Paper
                  elevation={3}
                  style={{
                    margin: "20px auto",
                    width: "60vw",
                    padding: "20px",
                  }}
                >
                  <Typography>
                    <b>Descripción.</b>
                  </Typography>
                  <Typography>{p.description}</Typography>
                </Paper>
              </Paper>
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
                      <Typography>{p.brand}</Typography>
                      <Typography className={classes.price}>
                        ${p.price}
                      </Typography>

                      <Button
                        className={classes.btnMobile}
                        variant="contained"
                        color="primary"
                        onClick={addToCartHandler}
                      >
                        Enviar a tu carrito
                      </Button>
                      <br />
                      <Button
                        className={classes.btnMobile}
                        variant="contained"
                        onClick={addToWishListHandler}
                      >
                        Favoritos
                      </Button>
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

      <Footer />
    </div>
  );
};

export default ProductDetail;
