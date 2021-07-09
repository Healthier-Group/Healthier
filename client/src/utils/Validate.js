export default function Validate(field,error,setError,helperText,setHelperText) {
    switch (field.name){
        case "name":
            if(!/^[A-Za-z .'-]{3,20}$/.test(field.value)) {
                setError({...error, name: true})
                if(field.value.length < 3) {setHelperText({...helperText, name: "Es muy corto"})}
                else if (field.value.length > 20) {setHelperText({...helperText, name: "Es muy largo"})}
                else{setHelperText({...helperText, name: "No se permiten caracteres especiales"})}
            }else{
                setError({...error, name: false})
                setHelperText({...helperText, name: ""})
            }
            break;
        case "username":
            if(!/^[A-Za-z0-9]{3,20}$/.test(field.value)) {
                setError({...error, username: true})
                if(field.value.length < 3) {setHelperText({...helperText, username: "Es muy corto"})}
                else if (field.value.length > 20) {setHelperText({...helperText, username: "Es muy largo"})}
                else{setHelperText({...helperText, username: "Solo números y letras"})}
            }else{
                setError({...error, username: false})
                setHelperText({...helperText, username: ""})
            }
            break;
        case "email":
            if(!/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(field.value)) {
                setError({...error, email: true})
                if(field.value.length < 3) {setHelperText({...helperText, email: "Es muy corto"})}
                else if(field.value.length > 20) {setHelperText({...helperText, email: "Es muy largo"})}
                else{setHelperText({...helperText, email: "Contiene caracteres no aceptados"})}
            }
            else{
                setError({...error, email: false})
                setHelperText({...helperText, email: ""})
            }
            break;
        case "password":
            if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,60}$/.test(field.value)) {
                setError({...error, password: true})
                if(field.value.length < 8) {setHelperText({...helperText, password: "Es muy corto"})}
                else if(field.value.length > 60) {setHelperText({...helperText, password: "Es muy largo"})}
                else{setHelperText({...helperText, password: "1 nro, 1 mayus y 1 min"})}
            }
            else{
                setError({...error, password: false})
                setHelperText({...helperText, password: ""})
            }
            break;
        case "contact":
            if(!/^[+0-9-]{8,20}$/.test(field.value)) {
                setError({...error, contact: true})
                if(field.value.length < 8) {setHelperText({...helperText, contact: "Es muy corto"})}
                else if(field.value.length > 20) {setHelperText({...helperText, contact: "Es muy largo"})}
                else{setHelperText({...helperText, contact: "Solo se permiten numeros"})}
            }
            else{
                setError({...error, contact: false})
                setHelperText({...helperText, contact: ""})
            }
            break;
        default:
            break;
    }
}