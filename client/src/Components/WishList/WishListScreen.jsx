import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  Paper,
  Typography,
  Divider,
  Grid,
  List,
  Button,
  Hidden,
} from "@material-ui/core";
import {
  addToWishList,
  removeFromWishList,
} from "../../redux/wishlist/actionsWishList";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import swal from 'sweetalert';
import { getProducts } from "../../redux/products/productActions";
import { addOrderProduct } from "../../redux/orderProducts/orderProductActions";


export default function WishListScreen(props) {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.userReducer);
  const orderId = currentUser?.order?.id;
  const productId = props.match.params.id;
  //si no le pasamos una propiedad qty nos da 1 por defecto
  
  const wishList = useSelector((state) => state.wishList);
  const { wishListItems } = wishList;
  //estado local de la wishList

  useEffect(() => {
    if (productId) {
      dispatch(addToWishList(productId));
    }
    //despacho a cartAction
  }, [dispatch, productId]);

  const removeFromWishListHandler = (id) => {
    dispatch(removeFromWishList(id));
  };

  const addToCartHandler = async(id) => {
    /* props.history.push(`/cart/${id}${1}`); */
    const orderProduct = {
      productId: id,
      orderId: orderId,
    };

    await dispatch(addOrderProduct(orderProduct));
    await swal({
      title: "Carrito de compras",
      text: "El producto fue añadido",
      icon: "success",
      button: "Volver"
    })
    await dispatch(getProducts());
    dispatch(removeFromWishList(id));
  };

  return (
    <div>
      <NavBar/>
      <Hidden only={["xs", "sm"]}>
        <div style={{ minHeight: "100vh", margin: "auto" }}>
          <Paper
            elevation={3}
            style={{
              margin: "50px auto",
              width: "80vw",
              marginTop: "10vh",
              padding: "50px",
            }}
          >
            <Typography variant="h6">Tu Lista de Deseos</Typography>

            <Divider />
            {wishListItems.length === 0 ? (
              <Typography
                variant="h5"
                style={{
                  marginTop: "20px",
                  marginBottom: "20px",
                  textAlign: "center",
                }}
              >
                Tu Lista de Deseos está vacía.{" "}
                <Link to="/" style={{ color: "black", textDecoration: "none" }}>
                  Presiona aquí para ver más productos
                </Link>
              </Typography>
            ) : (
              <List>
                {wishListItems.map((item) => (
                  <List item key={item.product}>
                    <Grid container>
                      <Grid item xs={3} style={{ margin: "auto" }}>
                        <img
                          src={item.image}
                          alt={item.name}
                          width="150px"
                          height="100px"
                        />
                      </Grid>

                      <Grid item xs={3} style={{ margin: "auto" }}>
                        <Link
                          to={`/product/${item.product}`}
                          style={{ color: "black", textDecoration: "none" }}
                        >
                          {item.name}
                        </Link>
                      </Grid>
                      <Grid item xs={3} style={{ margin: "auto" }}>
                      
                      { (item.countInStock<1)?
                        (<Button
                            variant="contained"
                            color="primary"
                            type="button"
                        >
                          Sin stock
                        </Button>) :                     
                        (<Button
                          variant="contained"
                          color="primary"
                          type="button"
                          onClick={() => addToCartHandler(item.product)}
                        >
                          Enviar al carrito
                        </Button>)
                        }
                      </Grid>
                      <Grid item xs={2} style={{ margin: "auto" }}>
                        <Button
                          variant="contained"
                          color="primary"
                          type="button"
                          onClick={() =>
                            removeFromWishListHandler(item.product)
                          }
                        >
                          Eliminar
                        </Button>
                      </Grid>
                    </Grid>
                  </List>
                ))}
              </List>
            )}
            <Divider />
            <Grid container>
              <Grid item xs={12}>
                <List>
                  <List
                    style={{
                      position: "relative",
                      left: "45vw",
                      marginTop: "20px",
                    }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      href="/"
                      style={{ marginRight: "30px" }}
                    >
                      Ver más productos
                    </Button>
                    {/* <Button
                      variant="contained"
                      color="primary"
                      href="/cart"
                      disable={wishListItems.length === 0}
                    >
                      Ir al carrito
                    </Button> */}
                  </List>
                </List>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </Hidden>
      <Hidden only={["md", "lg", "xl"]}>
        <div style={{ minHeight: "100vh", margin: "auto", display:"flex" }}>
          <Paper
            elevation={3}
            style={{
              margin: "auto",
              width: "60vw",
              marginTop: "10vh",
              marginBottom: "10vh",
              padding: "40px",
            }}
          >
            <Typography variant="h6">Tu Lista de Deseos</Typography>

            <Divider style={{ margin: "20px 0" }} />
            {wishListItems.length === 0 ? (
              <Typography
                variant="h5"
                style={{
                  marginTop: "20px",
                  marginBottom: "20px",
                  textAlign: "center",
                }}
              >
                Tu Lista de Deseos está vacía.{" "}
                <Link to="/" style={{ color: "black", textDecoration: "none" }}>
                  Presiona aquí para ver más productos
                </Link>
              </Typography>
            ) : (
              <List>
                {wishListItems.map((item) => (
                  <List item key={item.product}>
                    <Grid
                      container
                      style={{
                        padding: "10px",
                        justifyContent: "center",
                      }}
                    >
                      <Grid
                        item
                        style={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          width="150px"
                          height="90px"
                          style={{ margin: "auto" }}
                        />
                        <br />
                        <Link
                          to={`/product/${item.product}`}
                          style={{
                            color: "inherit",
                            textDecoration: "none",
                            textAlign: "center",
                          }}
                        >
                          {item.name}
                        </Link>
                        <br />

                        <br />
                        { (item.countInStock<1)?
                          (<Button
                            variant="contained"
                            color="primary"
                            type="button"
                          >
                          Sin stock
                          </Button>) :  
                          (<Button
                            variant="contained"
                            color="primary"
                            type="button"
                            onClick={() => addToCartHandler(item.product)}
                          >
                          Enviar al carrito
                        </Button>)
                        }
                        <br />
                        <Button
                          variant="contained"
                          style={{ width: "220px" }}
                          color="primary"
                          onClick={() =>
                            removeFromWishListHandler(item.product)
                          }
                        >
                          Eliminar
                        </Button>
                      </Grid>
                    </Grid>
                  </List>
                ))}
              </List>
            )}
            <Divider style={{ margin: "20px 0" }} />
            <Grid container>
              <Grid item xs={12}>
                <Hidden only={"xs"}>
                  <List
                    style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      marginTop: "20px",
                    }}
                  >
                    <Button variant="contained" color="primary" href="/">
                      Ver más productos
                    </Button>
                  </List>
                </Hidden>
                <Hidden only={"sm"}>
                  <List
                    style={{
                      margin:"auto",
                      
                      marginTop: "20px",
                    }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      href="/"
                      style={{ minWidth: "190px", display:"flex", margin: "auto" }}
                    >
                      Ver más productos
                    </Button>
                    <br />
                  </List>
                </Hidden>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </Hidden>
      <Footer />
    </div>
  );
}
