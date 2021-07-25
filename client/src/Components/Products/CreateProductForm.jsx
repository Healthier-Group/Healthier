import axios from "axios"
import React, { useState, useEffect } from "react"
import { useDispatch, useSelector} from 'react-redux'
import { getCategories } from '../../redux/products/productActions'
import { PRODUCTSPOST_URL } from "../../utils/Constants"
import {
  makeStyles,
  Hidden,
  Button,
  TextField,
  Typography,
  Select,
} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
  },
  root: {
    marginTop: '10%',
    display: "flex",
    height: "fit-content",
    width: "fit-content",
    /* backgroundColor: "#E01111", */
    flexDirection: "column",
    margin: "20px",
    boxShadow: "0 4px 5px black",
    padding: "50px",
    borderRadius: "20px",
  },
  input1: {
    display: "flex",
  },
  inputs: {
    margin: "20px",
    minWidth: "25vw",
  },
  btn: {
    marginTop: "40px",
    /* backgroundColor: "orange", */
    backgroundColor: '#8FBF26'
  },
  title: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Roboto",
    fontSize: "24px",
  },
}));

export const CreateProductForm = () => {
  const [input, setInput] = useState({
    name: "",
    sku: "",
    description: "",
    ingredients: "",
    stock: 0,
    price: 0,
    image: "",
    category: []
  });
    
  const dispatch = useDispatch()

  useEffect(()=>{
  dispatch(getCategories())
  },[])

  const category = useSelector(state => state.productReducer.foundCategories)

  function handleInputChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    return axios
      .post(PRODUCTSPOST_URL, input)
      .then((r) => {
        e.target.reset();
        setInput({
          name: "",
          sku: "",
          description: "",
          ingredients: "",
          stock: 0,
          price: 0,
          image: "",
          category: []
        });        
        alert("Product created successfully");
      })
      .catch((error) => alert("Some error ocurred, please try again"));
  }

  


  //manejo del select

  function handleSelect(e) {
    if (input.category.includes(parseInt(e.target.value))) {
        alert('You already selected this Category. Try again.')
    } else if (input.category.length >= 5) {
        alert('You can select up to 3 cats.')
    } else {
        setInput((prev) => ({ ...prev, category: [...prev.category, parseInt(e.target.value)] }))
    }
}

//obtener los nombres y mostrarlos 

function getNames(arr) {
  let names = [];
  category?.forEach((t) => {
      arr.forEach((id) => {
          if (parseInt(id) === t.id) {
              names.push(t.name)
          }
      });
  })
  return names;
}


//eliminar las categorias seleccionadas 
function deleteTemp(e, c) {
  setInput((prev) => ({ ...prev, category: prev.category.filter(cat => cat !== parseInt(c)) }))
}





  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Hidden only={["sm", "xs"]}>
        
        <form onSubmit={handleSubmit} className={classes.root}>
          <Typography variant="h6" className={classes.title}>
            Crear producto
          </Typography>
          <div className={classes.input1}>
            <TextField
              id="standard-basic"
              name="name"
              onChange={handleInputChange}
              label="Nombre"
              className={classes.inputs}
              required={true}
            />

            <TextField
              id="standard-basic"
              name="sku"
              onChange={handleInputChange}
              label="SKU"
              className={classes.inputs}
              required={true}
            />
          </div>

          <TextField
            id="standard-basic"
            label="Descripción"
            name="description"
            onChange={handleInputChange}
            className={classes.inputs}
            multiline
            variant="outlined"
          />

          <TextField
            id="standard-basic"
            label="Ingredientes"
            name="ingredients"
            onChange={handleInputChange}
            className={classes.inputs}
            multiline
            variant="outlined"
          />

          <div className={classes.input1}>
            <TextField
              id="standard-basic"
              name="stock"
              onChange={handleInputChange}
              label="Inventario"
              type="number"
              className={classes.inputs}
            />
            <TextField
              id="standard-multiline-flexible"
              name="price"
              onChange={handleInputChange}
              label="Precio"
              type="number"
              className={classes.inputs}
              required={true}
            />
            
            <TextField
              id="standard-multiline-flexible"
              name="image"
              onChange={handleInputChange}
              label="Imagen"
              type="url"
              placeholder="URL"
              className={classes.inputs}
            />
          </div>


          <select
              name="category"
              onChange={(e) => handleSelect(e)}
              value={input.category}
              className={classes.inputs}
              required
            >

              <option> select</option>
              {category?.map(c => {
                return (
                <option value={c.id} key={c.id}>{c.name}</option>
              )})
              }
            </select>
            <div>
               {
              input.category?.map((c) => (
                 <p id={c} >
                    {getNames([c])}
                <button onClick={(e) => deleteTemp(e, c)}>x</button>
                </p>
               ))
            }
            </div>


          <Button
            variant="contained"
            color="primary"
            size="medium"
            className={classes.btn}
            type="submit"
          >
            Crear
          </Button>
        </form>
      </Hidden>
      <Hidden only={["md", "lg", "xl"]}>
        <form className={classes.root}>
          <TextField
            id="standard-basic"
            name="name"
            onChange={handleInputChange}
            label="Nombre"
            className={classes.inputs}
          />

          <TextField
            id="standard-basic"
            name="sku"
            onChange={handleInputChange}
            label="SKU"
            className={classes.inputs}
          />
          <TextField
            id="standard-basic"
            name="description"
            onChange={handleInputChange}
            label="Descripción"
            className={classes.inputs}
            multiline
            variant="outlined"
          />
          <TextField
            id="standard-basic"
            name="ingredients"
            onChange={handleInputChange}
            label="Ingredientes"
            className={classes.inputs}
            multiline
            variant="outlined"
          />
          <TextField
            id="standard-basic"
            name="inventory"
            onChange={handleInputChange}
            label="Inventario"
            type="number"
            className={classes.inputs}
          />
          <TextField
            id="standard-multiline-flexible"
            name="price"
            onChange={handleInputChange}
            label="Precio"
            type="number"
            className={classes.inputs}
          />
          <TextField
            id="standard-multiline-flexible"
            name="image"
            onChange={handleInputChange}
            label="Imagen"
            type="url"
            placeholder="URL"
            className={classes.inputs}
          />

          <Button onClick={handleSubmit} variant="contained" color="primary" className={classes.btn}>
            Crear
          </Button>
        </form>
      </Hidden>
    </div>
  );
};

export default CreateProductForm