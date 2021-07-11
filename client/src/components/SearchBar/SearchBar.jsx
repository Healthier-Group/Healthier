import React, {useState, useEffect} from "react"
import {useDispatch} from "react-redux"
import {getProductByName} from "../../redux/products/productActions"
import SearchIcon from '@material-ui/icons/Search'
import InputBase from '@material-ui/core/InputBase'
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    searchIcon:{
      padding: theme.spacing(0, 2.5),
      height: '100%',
      position: 'absolute',
      marginTop: '0.6%'
    },
    inputRoot:{
      color: 'inherit',
    },
    inputInput:{
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      }
    }
}))

  const SearchBar = () => {
  const classes = useStyles()
  const [input, setInput] = useState("")
  const handleChange = (q) => {
    setInput(q)
  }

  const dispatch = useDispatch()

  function handleSubmit(e){
      e.preventDefault()
      dispatch(getProductByName(input))
  }

  useEffect(() => {
     dispatch(getProductByName(input))
  }, [input])

  return (
      <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            onChange={(e)=>handleChange(e.target.value)}
            /* onSubmit={(e)=>{handleSubmit(e)}} */
          />
      </div>
  )
}

export default SearchBar
