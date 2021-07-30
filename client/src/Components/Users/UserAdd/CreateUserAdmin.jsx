import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import CreateUserForm from "./CreateUserForm";
import { createUser } from "../../../redux/users/userActions";

import swal from "sweetalert";

const CreateUser = (props) => {
  const search = useLocation().search;
  const next = new URLSearchParams(search).get("next");

  const dispatch = useDispatch();
  const { userDetail } = useSelector((state) => state.userReducer);
  console.log("que llega aca?user paso 1:", userDetail);

  var wipedInput = {
    name: "",
    username: "",
    email: "",
    password: "",
    contact: "",
  };

  const [input, setInput] = useState(wipedInput);

  const handleSubmit = (e) => {
    dispatch(createUser(input));
    swal("Usuario creado exitosamente", "¡Bienvenido!", "success").then(() => {
      window.location.href = "/login";
    });
  };

  useEffect(
    () => {
      if (typeof userDetail === "string") {
        let aux = userDetail
          .replace("Validation error", "Error de validación")
          .split(",")[0];
        console.log("esto es aux swal paso 2:", aux);
        if (aux.includes("llave duplicada")) {
          aux.includes("email")
            ? swal(
                "El email ya esta en uso",
                "Intente con otra dirección de email",
                "error"
              )
            : swal(
                "El usuario ya esta en uso",
                "Intente con otro nombre de usuario",
                "error"
              );
        } else {
          swal(aux, "Vuelva a intentarlo", "error");
        }
      } else if (typeof (userDetail !== "undefined")) {
        setInput(wipedInput);

        if (Boolean(next)) {
          console.log("redirigir");
        }
      }
    },
    // eslint-disable-next-line
    [userDetail]
  );

  return (
    <div>
      
      <div>
        <CreateUserForm
          input={input}
          setInput={setInput}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default CreateUser;