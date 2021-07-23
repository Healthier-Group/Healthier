import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles, 
         Grid, 
         Paper, 
         Card, 
         Typography, 
         CardContent, 
         CardActionArea, 
         Button, 
         CardActions, 
         Hidden} from "@material-ui/core";
import { getProductById } from "../../redux/products/productActions";
import NavBar from "../NavBar/NavBar";
import { addOrderProduct } from "../../redux/orderProducts/orderProductActions";

const useStyles = makeStyles({
  root:{
    margin: "auto",
    marginBottom: "20px",
    marginTop: "70px",
    justifyContent: "center",
  },
  card:{
    width: "300px",
    height: "400px",
  },
  cont1:{
    display: "flex",
    marginTop:'100px',
    minWidth: "60vw",
    justifyContent: "space-between",
    margin: 20,
  },
  fav:{
    textAlign: "center",
    marginTop: "25px",
    marginBottom: "25px",
  },
  btn:{
    width: "280px",
    margin: "auto",
  },
  btnMobile:{
    width: "80vw",
    display: "flex",
    margin: "auto",
  },
  name:{
    fontSize: "25px",
    fontFamily: "Roboto",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "20px",
  },
  price:{
    fontSize: "25px",
    fontWeight: "bold",
    marginBottom: "30px",
  },
  p:{
    fontSize: "20px",
    fontFamily: "Roboto",
    backgroundColor: "lightblue",
    width: "fit-content",
    margin: "auto",
    padding: "10px",
  },
  favMobile:{
    marginTop: "25px",
  },
  cont1Mobile:{
    height: "fit-content",
    padding: 10,
  },
  root1:{
    margin: "auto",
    marginTop: 20,
    marginBottom: 10,
    justifyContent: "center",
  },
  bg:{
    backgroundColor: "#f1f1f1",
  },
  description:{
    padding: 20,
  },
})

const ProductDetail = (props) => {
  const classes = useStyles();
  const id = props.match.params.id;
  const dispatch = useDispatch();
  const {currentUser} = useSelector(state => state.userReducer);
  const orderId = currentUser?.order?.id;
  let qty=1
  const addToCartHandler = async () => {
    
    if(!currentUser){
      props.history.push(`/cart/${id}?qty=${qty}`);
    } else {
      //si el usuario si está login debo pasarle esta info quantity, productId, orderId
      
      console.log("Estoy login pasando productos al carrito", "id producto",id,"id order",orderId );
      const orderProduct={
        productId:id,
        orderId: orderId
      }
      await dispatch(addOrderProduct(orderProduct));
      props.history.push(`/cart`);
    }
  };

  useEffect(() => {
    dispatch(getProductById(id));
  }, [dispatch,id]);

  const product = useSelector((state) => state.productReducer.productDetail);
  
    
  

  const addToWishListHandler = () => {

    props.history.push(`/wishlist/${id}`);
        
  };
  return (
    <div className={classes.bg}>
      {product?.map((p) => {
        return (
          <div className = {classes.bg}>
          
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
                            onClick={addToCartHandler}
                          >
                            Enviar a tu carrito
                          </Button>
                        </CardActions>

                        <div className={classes.fav}>
                          <i class="far fa-heart" onClick={addToWishListHandler}>Añadir a favoritos</i>
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
                        onClick={addToCartHandler}
                      >
                        Enviar a tu carrito
                      </Button>
                      <div className={classes.favMobile}>
                        <p className={classes.p}>
                          <i class="far fa-heart" onClick={addToWishListHandler} > Agregar a favoritos</i>
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
