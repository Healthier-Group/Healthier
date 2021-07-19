export default function ValidateCategory(
    field,
    error,
    setError,
    helperText,
    setHelperText
  ) {
    switch (field.name) {
      case "name":
        if (!/^[A-Za-z .'-\W]{3,255}$/.test(field.value)) {
          setError({ ...error, name: true });
          if (field.value.length < 3) {
            setHelperText({ ...helperText, name: "Es muy corto" });
          } else if (field.value.length > 255) {
            setHelperText({ ...helperText, name: "Es muy largo" });
          } else {
            setHelperText({
              ...helperText,
              name: "No se permiten caracteres especiales",
            });
          }
        } else {
          setError({ ...error, name: false });
          setHelperText({ ...helperText, name: "" });
        }
        break;
      case "description":
        if (!/^.{3,255}$/.test(field.value)) {
          setError({ ...error, description: true });
          if (field.value.length < 3) {
            setHelperText({ ...helperText, description: "Es muy corto" });
          } else if (field.value.length > 255) {
            setHelperText({ ...helperText, description: "Es muy largo" });
          } else {
            setHelperText({ ...helperText, description: "" });
          }
        } else {
          setError({ ...error, description: false });
          setHelperText({ ...helperText, description: "" });
        }
        break;
      default:
        break;
    }
  }
  