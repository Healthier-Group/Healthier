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

const useStyles = makeStyles({
  root: {
    
    minWidth: 250,
    margin: 25
    
  },
  media: {
    width: 250,
    height: 140,
    margin: 'auto',
  },
  wrapped: {
    display:'flex',
    flexWrap: 'wrap',
    margin: 50
  },
  name: {
    textAlign:"center",
    // display:'none',
    // '&:hover': {
    //   display:'block',
    // },
    width:218
    
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
        <CardContent>
          <Typography gutterBottom variant="p" component="h2" className={classes.name}>
            {p.name.toUpperCase()}
          </Typography>
          <Typography gutterBottom variant="h6" component="h3">
            $ {p.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Add to cart
        </Button>
        <Button size="small" color="primary">
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
