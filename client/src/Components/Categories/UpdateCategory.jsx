import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UpdateCategoryForm from "./UpdateProductsForm";
import { updateCategory } from "../../redux/products/productActions";

import swal from "sweetalert";

const UpdateCategory = () => {
  const dispatch = useDispatch();
  const { categoryDetail } = useSelector((state) => state.productReducer);

  const [input, setInput] = useState({
    name: "",
    description: ""
  });



  useEffect(() => {
    if (typeof categoryDetail === "string") {
      let aux = categoryDetail
        .replace("Validation error", "Error de validación")
        .split(",")[0];
      if (aux.includes("llave duplicada")) {
        aux.includes("nombre")
          ? swal("Ese nombre ya está registrado", "Lo sentimos!", "error")
          : swal(
              "El nombre de la categoría ya está registrado",
              "Lo sentimos!",
              "error"
            );
      } else {
        swal(aux, "Lo sentimos!", "error");
      }
    } else {
      typeof categoryDetail !== "undefined" &&
        categoryDetail.success &&
        swal("Categoría actualizada exitosamente", "Bienvenido!", "success");
    }
  }, [userDetail]); // check this line

  return (
    <>
      <UpdateCategoryForm
        input={input}
        setInput={setInput}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default UpdateCategory;
