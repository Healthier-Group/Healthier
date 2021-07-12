import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../../redux/cart/cartActions";
import MessageBox from "./MessageBox";
import {
  Paper,
  Typography,
  Divider,
  Grid,
  List,
  Button,
} from "@material-ui/core";

export default function CartScreen(props) {
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;
  const cart = useSelector((state) => state.cartReducer);
  const { cartItems } = cart;
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    } else {
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    props.history.push("/signin?redirect=shipping");
  };

  return (
    // <div>you arrrr in the carritusss</div>
    // <div className='row top'>
    //   <div className='col-2'>
    //     <h1>Shopping Cart</h1>
    //     {cartItems.length === 0 ? (
    //       <MessageBox>
    //         Cart is empty. <Link to='/'>Go Shopping</Link>
    //       </MessageBox>
    //     ) : (
    //       <ul>
    //         {cartItems.map((item) => (
    //           <li key={item.product}>
    //             <div className='row'>
    //               <div>
    //                 <img src={item.image} alt={item.name} className='small' />
    //               </div>
    //               <div className='min-30'>
    //                 <Link to={`/product/${item.product}`}>{item.name}</Link>
    //               </div>
    //               <div>
    //                 <select
    //                   value={item.qty}
    //                   onChange={(e) =>
    //                     dispatch(
    //                       addToCart(item.product, Number(e.target.value))
    //                     )
    //                   }
    //                 >
    //                   {[...Array(item.countInStock).keys()].map((x) => (
    //                     <option key={x + 1} value={x + 1}>
    //                       {x + 1}
    //                     </option>
    //                   ))}
    //                 </select>
    //               </div>
    //               <div>
    //                 <button
    //                   type='button'
    //                   onClick={() => removeFromCartHandler(item.product)}
    //                 >
    //                   Delete
    //                 </button>
    //               </div>
    //             </div>
    //           </li>
    //         ))}
    //       </ul>
    //     )}
    //   </div>
    //   <div className='col-1'>
    //     <div className='card card-body'>
    //       <ul>
    //         <li>
    //           <h2>
    //             Subtotal({cartItems.reduce((a, c) => a + c.qty, 0)} items) : $
    //             {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
    //           </h2>
    //         </li>
    //         <li>
    //           <button
    //             type='button'
    //             onClick={checkoutHandler}
    //             className='primary block'
    //             disable={cartItems.length === 0}
    //           >
    //             Proceed to Checkout
    //           </button>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>
    <div style={{height:'100vh'}}>
      <Paper
      elevation={3}
        style={{
          margin: "auto",
          width: "80vw",
          marginTop: "10vh",
          padding: "50px",
        }}
      >
        <Typography variant="h6">Tu carrito</Typography>
        <Divider />
        {cartItems.length === 0 ? (
          <Typography variant="h5" style={{marginTop:'20px', marginBottom:'20px', textAlign:'center'}}>
            Cart is empty  <Link to="/" style={{color:'black', textDecoration:'none'}}>click here to go shopping</Link>
          </Typography>
        ) : (
          <List>
            {cartItems.map((item) => (
              <List item key={item.product}>
                <Grid container>
                  <Grid item xs={3} style={{margin:'auto'}}>
                    <img src={item.image} alt={item.name} width="150px" height="100px" />
                  </Grid>

                  <Grid item xs={6} style={{margin:'auto'}}>
                    <Link to={`/product/${item.product}`} style={{color:'black', textDecoration:'none'}}>{item.name}</Link>
                  </Grid>
                  <Grid item xs={2} style={{margin:'auto'}}>
                    <select
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </Grid>
                  <Grid xs={1} style={{margin:'auto'}}>
                    <Button
                      variant="contained"
                      color="primary"
                      type="button"
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      Delete
                    </Button>
                  </Grid>
                </Grid>
              </List>
            ))}
          </List>
        )}
        <Divider />
        <Grid container >
         <Grid item xs={12} >
          <List>
           <List style={{position:'relative', left:'50vw'}}>
               <h2>
                 Total con envio ({cartItems.reduce((a, c) => a + c.qty, 0)} items) : $
                 {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
               </h2>
             </List>
             <Divider/>
             <List style={{position:'relative', left:'65vw', marginTop:'20px'}}>
               <Button
               variant="contained"
               color="primary"
                type='button'
                onClick={checkoutHandler}
                className='primary block'
                disable={cartItems.length === 0}
              >
                Proceed to Checkout
              </Button>
            </List>
          </List>
        </Grid>
      </Grid>
      </Paper>
    </div>
  );
}
