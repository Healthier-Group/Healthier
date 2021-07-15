import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UpdateProductForm from "./UpdateProductsForm";
import { updateProduct } from "../../redux/products/productActions";

import swal from "sweetalert";

const UpdateProduct = () => {
  const dispatch = useDispatch();
  const { productDetail } = useSelector((state) => state.productReducer);

  const [input, setInput] = useState({
    name: "",
    description: "",
    ingredients: "",
    size: "",
    brand: "",
    price: 0,
    image: "",
    sku: "",
  });



  useEffect(() => {
    if (typeof productDetail === "string") {
      let aux = productDetail
        .replace("Validation error", "Error de validación")
        .split(",")[0];
      if (aux.includes("llave duplicada")) {
        aux.includes("sku")
          ? swal("Ese SKU ya está registrado", "Lo sentimos!", "error")
          : swal(
              "El nombre del producto ya está registrado",
              "Lo sentimos!",
              "error"
            );
      } else {
        swal(aux, "Lo sentimos!", "error");
      }
    } else {
      typeof productDetail !== "undefined" &&
        productDetail.success &&
        swal("Producto actualizado exitosamente", "Bienvenido!", "success");
    }
  }, [userDetail]);

  return (
    <>
      <UpdateProductForm
        input={input}
        setInput={setInput}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default UpdateProduct;
