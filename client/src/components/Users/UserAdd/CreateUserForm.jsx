import {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import {makeStyles, Grid, Button, TextField, FormControl, InputLabel, Select, MenuItem} from '@material-ui/core'
import { Fingerprint, Person, Email, VpnKey, Phone } from '@material-ui/icons';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../themeStyle';

const useStyles = makeStyles((theme)=>({
    root: {
		marginTop: 50,
		marginBottom: 30,
		border:5,
		display:'flex'
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
		width:500,
	},
	last: {
		padding: 8,
	}
}));

const CreateUserForm = ({ input, setInput, handleSubmit }) => {
	
	const dispatch = useDispatch();
	
	const classes = useStyles();

	const [error, setError] = useState({//Control the error red border of the inputs
		name: false,
		username: false,
        email: false,
		password: false,
		contact: false,
        isDeleted:false
    })
	const [helperText, setHelperText] = useState({//Control the warning message
		name: "Ingrese un Nombre",
		username: "Ingrese un Usuario",
        email: "Ingrese un Correo",
        password: "Ingrese un Password",
		contact: "Numero de Telefono",
        isDeleted:"Ingrese un is deleted"
    })

	useEffect(() => {
		Validate("name")
		Validate("username")
		Validate("email")
		Validate("password")
		Validate("contact")
	}, [error])
	

	const Validate = (field) => {
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
					setError({...error, name: false})
					setHelperText({...helperText, name: ""})
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
	const handleInputChange = function (e) {
		setInput({
			...input,
			[e.target.name]: e.target.value, 
		});
		Validate(e.target)
	};

    return (
		<ThemeProvider theme={theme}>
        <div className= 'extContCAF'>
            <h1>
				Crear Usuario
			</h1>
			<form noValidate autoComplete="off" >
			<Grid container direction="row" justify="space-around" alignItems="center" className={`componentDataBox ${classes.root}`} spacing={1}>
                <Grid >
                    <Grid container spacing={1} alignItems="center">
                        <Grid item >
                            <Fingerprint />
                        </Grid>
                        <Grid item >
                            <TextField 
								error={error["name"]}
								helperText={[helperText["name"]]}
								id="name" 
								label="Nombre" 
								name="name"
								value={input.name}
								onChange={handleInputChange} 
							/>
                        </Grid>
                    </Grid>

					<Grid container spacing={1} alignItems="center">
                        <Grid item >
                            <Person />
                        </Grid>
                        <Grid item >
                            <TextField 
								error={error["username"]}
								helperText={[helperText["username"]]}
								id="username" 
								label="Usuario" 
								name="username"
								value={input.username}
								onChange={handleInputChange} 
							/>
                        </Grid>
                    </Grid>
					
					<Grid container spacing={1} alignItems="center">
                        <Grid item>
                            <Email />
                        </Grid>
                        <Grid item>
                            <TextField
								error={error["email"]}
								helperText={[helperText["email"]]}  
								id="email" 
								label="Correo" 
								name='email'
								value={input.email}
								onChange={handleInputChange}
							/>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} alignItems="center">
                        <Grid item>
							<VpnKey />
                        </Grid>
                        <Grid item>
                            <TextField
								error={error["password"]}
								helperText={[helperText["password"]]}  
								id="password" 
								label="Contraseña" 
								name='password'
								value={input.password}
								onChange={handleInputChange}
							/>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} alignItems="center">
                        <Grid item>
							<Phone />
                        </Grid>
                        <Grid item>
                            <TextField
								error={error["contact"]}
								helperText={[helperText["contact"]]}
								id="contact"
								name="contact"
								label="Nº Telefono" 
								value={input.contact}
								onChange={handleInputChange}
							/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item>
                        <Button style={{fontWeight: 1000, marginTop: 50}} color="secondary" onClick={handleSubmit} variant="contained">Agregar Usuario</Button>
                    </Grid>
                </Grid>
			</Grid>
        </form>
		</div>
		</ThemeProvider>
    )
}
export default CreateUserForm;
