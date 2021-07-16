import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useHistory } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import {Grid, Button, TextField} from '@material-ui/core'
import { Email, VpnKey } from '@material-ui/icons';
import {loginUser,logOutUser} from '../../../redux/users/userActions'
import useFormStyles from '../../../utils/FormStyles'
import axios from 'axios'

export default function UserLogin() {
    const classes = useFormStyles()
    const dispatch = useDispatch();
    const history = useHistory();

    const {currentUser} = useSelector(state => state.userReducer);

    const [input,setInput] = useState({
        email: '',
        password: ''
    })

    useEffect(() => {
        console.log('useEffect Login');
        if(currentUser) {currentUser?.isAdmin ? history.push('/private/panel') : history.push('/')}
    },[currentUser])

    const handleInputChange = async (e) => {
		await setInput({
			...input,
			[e.target.name]: e.target.value, 
		});
	};

    const handleLogIn = (e) => {
		dispatch(loginUser(input))
	};

    return (
        <div>
            <h1 className={classes.title}>Iniciar Sesión</h1>
            <form noValidate autoComplete="off" > 
            <Grid container direction="row" justifyContent="space-around" alignItems="center" className={`componentDataBox ${classes.root}`} spacing={1}>
                <Grid>
                    <Grid container spacing={1} alignItems="center">
                        <Grid item>
                            <Email />
                        </Grid>
                        <Grid item>
                            <TextField
                                helperText='Ingrese su Email'  
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
                                helperText='Ingrese su Contraseña'
                                id="password" 
                                label="Contraseña" 
                                name='password'
                                value={input.password}
                                onChange={handleInputChange}
                            />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" justifyContent="center" alignItems="center">
                        <Grid item>
                            <Button style={{fontWeight: 1000, marginTop: 50}} color="secondary" onClick={handleLogIn} variant="contained">Entrar</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            </form>
        </div>
    )
}
