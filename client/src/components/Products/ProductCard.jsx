import {React, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom'
// Desde la línea 3 a la 9 se pueden poner todos los componentes importados en una sola línea. 
//
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/products/productActions';
import SearchBar from './SearchBar';

const useStyles = makeStyles({
  root: {
    
    minWidth: 250,
    
    height: 550,
    margin: 25,
    
  },
  media: {
    width: 250,
    height: 300,
    margin: 'auto',
  },
  wrapped: {
    
    justifyContent:'center',
   
    display:'flex',
    flexWrap: 'wrap',
    backgroundColor:'#f1f1f1',
    margin: 50
  },
  name: {
   position:'relative',
    textAlign:"center",
    width:218,
    height:50,
    marginBottom:'10px'
    
  },
  btn: {
    position: 'absolut',
    top: '40px'
  },
  space: {
    display:'flex',
    justifyContent:'center'
  },
  price : {
    fontFamily:'Roboto',
    fontWeight:'bold',
    fontSize:'30px',
  }
});

export default function ProductCard() {

  const classes = useStyles();

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [])
 

  const product = useSelector(state => state.foundProducts)
  return (
      <div className={classes.wrapped}>
        <SearchBar/>
        
        {product?.map(p => {
          return (
            <Link to={`/products/${p.id}`} style={{color:'black', textDecoration:'none'}}>
            <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={p.image}
          title={p.name}
        />
        <CardContent >
          <div className={classes.name}>
            <h2>{p.name.toUpperCase()}</h2>
          </div>
          <Typography className={classes.price} component="h3">
            $ {p.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.space}>
        <Button  className={classes.btn} size="small" color="primary">
          Add to cart
        </Button>
        <Button className={classes.btn} size="small" color="primary">
          Add to favs
        </Button>
      </CardActions>
    </Card>
    </Link>
          )
        })}
      </div>
    
  );
}
