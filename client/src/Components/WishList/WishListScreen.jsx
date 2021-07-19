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
import { addToWishList, removeFromWishList } from "../../redux/wishlist/actionsWishList";

export default function WishListScreen(props) {
  console.log("wl", props);
  
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  //si no le pasamos una propiedad qty nos da 1 por defecto
  let qty=1
  const wishList = useSelector((state) => state.wishList);
  const{wishListItems}=wishList
  //estado local de la wishList
    
  console.log("wishList", wishList);
  useEffect(() => {
    if (productId) {
      dispatch(addToWishList(productId));
    }
    //despacho a cartAction
  }, [dispatch, productId]);

  const removeFromWishListHandler = (id) => {
    dispatch(removeFromWishList(id));
  };

  
  const addToCartHandler = (id) => {
    props.history.push(`/cart/${id}?qty=${qty}`);
    dispatch(removeFromWishList(id));
  };
  
  

  return (
    <div style={{ minHeight: "100vh" }}>
      <Hidden only={["xs", "sm"]}>
        <Paper
          elevation={3}
          style={{
            margin: "auto",
            width: "80vw",
            marginTop: "10vh",
            padding: "50px",
          }}
        >
          <Typography variant='h6'>Tu Lista de Deseos</Typography>

          <Divider />
          {wishListItems.length === 0 ? (
            <Typography
              variant='h5'
              style={{
                marginTop: "20px",
                marginBottom: "20px",
                textAlign: "center",
              }}
            >
              Tu Lista de Deseos está vacía.{" "}
              <Link to='/' style={{ color: "black", textDecoration: "none" }}>
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
                        width='150px'
                        height='100px'
                      />
                    </Grid>

                    <Grid item xs={5} style={{ margin: "auto" }}>
                      <Link
                        to={`/product/${item.product}`}
                        style={{ color: "black", textDecoration: "none" }}
                      >
                        {item.name}
                      </Link>
                    </Grid>
                    <Grid item xs={2} style={{ margin: "auto" }}>
                    <Button
                        variant='contained'
                        color='primary'
                        type='button'
                        onClick={() => addToCartHandler(item.product)}
                      >
                        Enviar al carrito
                      </Button>
                    </Grid>
                    <Grid xs={2} style={{ margin: "auto" }}>
                      <Button
                        variant='contained'
                        color='primary'
                        type='button'
                        onClick={() => removeFromWishListHandler(item.product)}
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
                    left: "65vw",
                    marginTop: "20px",
                  }}
                >
                  <Button
                    variant='contained'
                    color='primary'
                    type='button'
                    href='/'
                    className='primary block'
                    >
                    Ver más productos
                  </Button>
                  <Button
                    variant='contained'
                    color='primary'
                    type='button'
                    href='/cart'
                    className='primary block'
                    disable={wishListItems.length === 0}
                  >
                    Ir al carrito
                  </Button>
                </List>
              </List>
            </Grid>
          </Grid>
        </Paper>
      </Hidden>
      <Hidden only={["md", "lg", "xl"]}>
        <Paper
          elevation={3}
          style={{
            margin: "auto",
            width: "60vw",
            marginTop: "10vh",
            padding: "40px",
          }}
        >
          <Typography variant='h6'>Tu Lista de Deseos</Typography>

          <Divider style={{ margin: "20px 0" }} />
          {wishListItems.length === 0 ? (
            <Typography
              variant='h5'
              style={{
                marginTop: "20px",
                marginBottom: "20px",
                textAlign: "center",
              }}
            >
              Tu Lista de Deseos está vacía.{" "}
              <Link to='/' style={{ color: "black", textDecoration: "none" }}>
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
                        width='150px'
                        height='90px'
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
                      <Button
                        variant='contained'
                        style={{ width: "220px" }}
                        color='primary'
                        type='button'
                        onClick={() => addToCartHandler(item.product)}
                      >
                        Enviar al carrito
                      </Button>
                      <Button
                        variant='contained'
                        style={{ width: "220px" }}
                        color='primary'
                        type='button'
                        onClick={() => removeFromWishListHandler(item.product)}
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
              <List>
                <List
                  style={{
                    position: "relative",
                    left: "20vw",
                    marginTop: "20px",
                  }}
                >
                  <Button
                    variant='contained'
                    color='primary'
                    type='button'
                    href='/'
                    className='primary block'
                    >
                    Ver más productos
                  </Button>
                  <Button
                    variant='contained'
                    color='primary'
                    type='button'
                    href='/cart'
                    className='primary block'
                    >
                    Ir al carrito
                  </Button>
                </List>
              </List>
            </Grid>
          </Grid>
        </Paper>
      </Hidden>
    </div>
  );
}
