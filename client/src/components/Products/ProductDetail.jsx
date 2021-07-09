import {React, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea  from '@material-ui/core/CardActionArea';
import Button from '@material-ui/core/Button'
import CardActions from '@material-ui/core/CardActions'
import {getProductById} from '../../redux/products/productActions'


const useStyles= makeStyles({
  root:{
    margin:'auto',
    justifyContent:'center',
  },
    card: {
        width: '300px',
        height: '400px'
    },
    cont1: {
        display:'flex',
        justifyContent:'space-between',
        margin:20
    },
    fav : {
      textAlign:'center',
      marginTop: '25px'
      
    },
    btn: {
      width: '280px',
      margin: 'auto'
    
    },
    name: {
      fontSize:'25px',
      fontFamily:'Roboto',
      fontWeight:'bold',
      textAlign:'center',
      marginBottom:'20px'

      
    },
    price: {
      fontSize:'25px',
      fontWeight:'bold',
      marginBottom:'30px'
    }
  
})

const ProductDetail = ({match}) => {
    const classes = useStyles()
    const { id } = match.params

const dispatch = useDispatch()

useEffect(() => {
 dispatch(getProductById(id))
}, [])

const product = useSelector(state=> state.productDetail)
//console.log('STATE ACA', product )

    return (
      <div>
           {product?.map(p => {
           return (
            <Grid container spacing={1} className={classes.root} >
            <Grid item xs={10}>
                  <Paper>ESTA ES LA BARRA DE NAVEGACION</Paper>
            </Grid>
              <Grid container className={classes.root}>
                  <Grid item xs={6}>
                      <Paper className={classes.cont1}>
                      <img src={p.image} alt="Not Found" width="400px" height="400px" />
                        <Card className={classes.card}>
                              <CardActionArea>
                              
                       <CardContent>
                       
                       <Typography className={classes.name}>{p.name}</Typography>
                       <Typography ><b>Marca:  </b>Nestlé</Typography>
                       <Typography > 100gr.</Typography>
                       
                       <Typography className={classes.price}>${p.price}</Typography>
                       <Typography >Antes ${Math.ceil(p.price*(1.15))}</Typography>

                       </CardContent>
                              </CardActionArea>
                              <CardActions>
                              
                                  <Button className={classes.btn} variant="contained" color="primary">
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
                <Paper>
              <Typography>DESCRIPCION {p.description}</Typography>

                </Paper>

              </Grid>
  
          </Grid>
           )
       })}
      </div>
        
    )
}

export default ProductDetail
