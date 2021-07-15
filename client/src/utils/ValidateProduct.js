export default function ValidateProduct(field,error,setError,helperText,setHelperText) {
    switch (field.name){
        case "name":
            if(!/^[A-Za-z .'-]{3,255}$/.test(field.value)) {
                setError({...error, name: true})
                if(field.value.length < 3) {setHelperText({...helperText, name: "Es muy corto"})}
                else if (field.value.length > 255) {setHelperText({...helperText, name: "Es muy largo"})}
                else{setHelperText({...helperText, name: "No se permiten caracteres especiales"})}
            }else{
                setError({...error, name: false})
                setHelperText({...helperText, name: ""})
            }
            break;
        case "description":
            if(!/^.{3,255}$/.test(field.value)) {
                setError({...error, description: true})
                if(field.value.length < 3) {setHelperText({...helperText, description: "Es muy corto"})}
                else if (field.value.length > 255) {setHelperText({...helperText, description: "Es muy largo"})}
                else{setHelperText({...helperText, description: ""})}
            }else{
                setError({...error, description: false})
                setHelperText({...helperText, description: ""})
            }
            break;
        case "ingredients":
            if(!/^.{3,255}$/.test(field.value)) {
                setError({...error, ingredients: true})
                if(field.value.length < 3) {setHelperText({...helperText, ingredients: "Es muy corto"})}
                else if (field.value.length > 255) {setHelperText({...helperText, ingredients: "Es muy largo"})}
                else{setHelperText({...helperText, ingredients: ""})}
            }else{
                setError({...error, ingredients: false})
                setHelperText({...helperText, ingredients: ""})
            }
            break;
        case "size":
            if(!/^[a-zA-Z0-9]{2,25}$/.test(field.value)) {
                setError({...error, size: true})
                if(field.value.length < 2) {setHelperText({...helperText, size: "Es muy corto"})}
                else if (field.value.length > 25) {setHelperText({...helperText, size: "Es muy largo"})}
                else{setHelperText({...helperText, size: "No puede tener espacios"})}
            }else{
                setError({...error, size: false})
                setHelperText({...helperText, size: ""})
            }
            break;
        case "brand":
            if(!/^.{2,25}$/.test(field.value)) {
                setError({...error, brand: true})
                if(field.value.length < 2) {setHelperText({...helperText, brand: "Es muy corto"})}
                else if (field.value.length > 25) {setHelperText({...helperText, brand: "Es muy largo"})}
                else{setHelperText({...helperText, brand: ""})}
            }else{
                setError({...error, brand: false})
                setHelperText({...helperText, brand: ""})
            }
            break;
        case "price":
            if(!/^[0-9,.]{2,9}$/.test(field.value)) {
                setError({...error, price: true})
                if(field.value.length < 2) {setHelperText({...helperText, price: "Es muy corto"})}
                else if (field.value.length > 9) {setHelperText({...helperText, price: "Es muy largo"})}
                else{setHelperText({...helperText, price: ""})}
            }else{
                setError({...error, price: false})
                setHelperText({...helperText, price: ""})
            }
            break;
            case "sku":
            if(!/^[0-9a-zA-Z]{2,12}$/.test(field.value)) {
                setError({...error, sku: true})
                if(field.value.length < 2) {setHelperText({...helperText, sku: "Es muy corto"})}
                else if (field.value.length > 9) {setHelperText({...helperText, sku: "Es muy largo"})}
                else{setHelperText({...helperText, sku: ""})}
            }else{
                setError({...error, sku: false})
                setHelperText({...helperText, sku: ""})
            }
            break;
        default:
            break;
    }
}