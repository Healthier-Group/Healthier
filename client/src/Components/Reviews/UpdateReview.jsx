import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UpdateReviewForm from "./UpdateReviewForm";
import { updateReview } from "../../redux/products/productActions";

import swal from "sweetalert";

const UpdateReview = () => {
  const dispatch = useDispatch();
  const { reviewDetail } = useSelector((state) => state.productReducer);

  const [input, setInput] = useState({
    name: "",
    description: "",
    calification: 0,
  });

  const handleSubmit = (e) => {
    dispatch(updateReview(input)); // const id = this.props.match.params.id;
  };

  useEffect(() => {
    if (typeof reviewDetail === "string") {
      let aux = reviewDetail
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
      typeof reviewDetail !== "undefined" &&
        reviewDetail.success &&
        swal("Actualizado", "Review actualizada exitosamente", "");
    }
  }, [reviewDetail]); // check this line

  return (
    <>
      <UpdateReviewForm
        input={input}
        setInput={setInput}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default UpdateReview;
