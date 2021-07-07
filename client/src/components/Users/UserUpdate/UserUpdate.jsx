import {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux';
import { Button, TextField, makeStyles,Grid, Radio, RadioGroup, FormControlLabel } from '@material-ui/core';
import { Person, Home, MeetingRoom, Email, VpnKey, Phone } from '@material-ui/icons';
import {readUserr, updateUser} from '../../../redux/users/userActions';
import { Link, useHistory } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../themeStyle';

import swal from "sweetalert";

const useStyles = makeStyles((theme)=>({
    root: {
		marginTop: 100,
		marginBottom: 30,
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
		width:500,
        justifyContent: 'center',
	},
	title:{
		fontSize: 30,
	},
	last: {
		padding: 30,
	}
}));

export function UserUpdate() {
    const {id} = useParams();
    const {userDetail} = useSelector(state => state.userReducer);
    const dispatch = useDispatch();
    const classes = useStyles();
	const history = useHistory();


    const [input, setInput] = useState({})

    useEffect(() => {
        if(userDetail !== undefined){
            setInput({
                id: id,
                name : userDetail.name,
                email : userDetail.email,
                password : userDetail.password,
                contact : userDetail.contact,
                isDeleted : userDetail.isDeleted
            })
        }else{
            dispatch(getUser(id))
		}	
    },[dispatch, id, userDetail])

	useEffect(() => {
		dispatch(getUser(id))
	},[])
    useEffect(() => {

    },[input,setInput])

    const [error, setError] = useState({//Control the error red border of the inputs
		name: false,
        email: false,
		password: false,
		contact: false,
        isDeleted:false
    })
	const [helperText, setHelperText] = useState({//Control the warning message
		name: "Ingrese un Nombre",
        email: "Ingrese un Correo",
        password: "Ingrese un Password",
		contact: "Numero de Telefono",
        isDeleted:"Ingrese un is deleted"
    })
    

    const handleInputChange = e => {
        Validate(e.target)
        setInput({
            ...input,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = e => {
		dispatch(updateUser(input));
        swal('Usuario actualizado exitosamente', "Gracias!", "success");
		//add redirect
		//history.push('/userDetail')
		history.goBack()
	};

    const handleRadio = function (e) {
        setInput({
            ...input,
            isDeleted: e.target.value === "BANNED" ? true : false,
        })
    }

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

	function cancelHandle (){
        history.goBack()
    }


	

    return(
		<ThemeProvider theme={theme}>
        <>
            <form noValidate autoComplete="off" >
			<Grid container direction="row" justify="space-around" alignItems="center" className={`componentDataBox ${classes.root}`} spacing={1}>
                <Grid item xs={6}>
                    <Grid container spacing={1} alignItems="center" justify="center">
                        <Grid>
                            <Person />
                        </Grid>
                        <Grid item>
                            <TextField 
								error={error["name"]}
								helperText={[helperText["name"]]}
								id="name" 
								label="Nombre" 
								name="name"
								value={input.name || ''}
								onChange={handleInputChange} 
							/>
                        </Grid>
                    </Grid>
					
					<Grid container spacing={1} alignItems="center" justify="center">
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
								value={input.email || ''}
								onChange={handleInputChange}
							/>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} alignItems="center" justify="center">
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
								value={input.password || ''}
								onChange={handleInputChange}
							/>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} alignItems="center" justify="center">
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
								value={input.contact || ''}
								onChange={handleInputChange}
							/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container direction="row" justify="center" alignItems="center">
                    <RadioGroup value={input.isDeleted ? "BANNED" : "ALLOWED"} onChange={handleRadio} >
                        <FormControlLabel value={"ALLOWED"} control={<Radio/>} label="PERMITIDO"/>
                        <FormControlLabel value={"BANNED"} control={<Radio/>} label="BANNEADO"/>
                    </RadioGroup>
                </Grid>
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item>
                        <Button style={{fontWeight: 1000, marginTop: 50}} color="secondary" onClick={handleSubmit} variant="contained">Guardar Cambios</Button>
                    </Grid>
					<Grid item>
						<Button style={{ fontWeight: 1000 }} color="secondary" variant="contained" onClick={cancelHandle}>Cancelar</Button>
                    </Grid>
                </Grid>
			</Grid>
        </form>
        </>
		</ThemeProvider>
    )
}
export default UserUpdate;