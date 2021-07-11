import {React, useEffect} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Card, 
        CardActionArea, 
        CardActions, 
        CardContent, 
        CardMedia, 
        Button, 
        Typography
} from '@material-ui/core'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {getProducts} from '../../redux/products/productActions'
import NavBar from '../NavBar/NavBar'

const useStyles = makeStyles({
  root:{
    minWidth: 250,
    height: 550,
    margin: 25,
  },
  media:{
    width: 250,
    height: 300,
    margin: 'auto',
  },
  wrapped:{
    justifyContent:'center',
    display:'flex',
    flexWrap: 'wrap',
    backgroundColor:'#f1f1f1',
    margin: 50,
    marginTop: '5%'
  },
  name:{
    position:'relative',
    textAlign:"center",
    width:218,
    height:50,
    marginBottom:'10px'
  },
  btn:{
    position: 'absolut',
    top: '40px'
  },
  space:{
    display:'flex',
    justifyContent:'center'
  },
  price:{
    fontFamily:'Roboto',
    fontWeight:'bold',
    fontSize:'30px',
  }
})

export default function ProductCard(){

  const classes = useStyles()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [])
 
  const product = useSelector(state => state.foundProducts)
  return (
      <div>
        <NavBar />
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
      </div>
  )
}
