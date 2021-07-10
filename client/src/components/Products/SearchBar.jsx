import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProductByName } from "../../redux/products/productActions";

const SearchBar = () => {
  const [input, setInput] = useState("");
  
  const handleChange = (q) => {
    setInput(q);
  };

  const dispatch = useDispatch()

  function handleSubmit(e){
      e.preventDefault()
      dispatch(getProductByName(input))
  }

  useEffect(() => {
     dispatch(getProductByName(input))
  }, [input])


  return (
    <div>
      <form onSubmit={(e)=>{handleSubmit(e)}}>
        <input type="text" placeholder="Busca el producto" onChange={(e)=>handleChange(e.target.value)} />
        <button id = "SearchButton" type="submit">Buscar</button>
      </form>
    </div>
  );
};

export default SearchBar;
