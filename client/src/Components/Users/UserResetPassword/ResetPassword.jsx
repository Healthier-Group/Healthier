import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, TextField, Grid, makeStyles } from '@material-ui/core';
import { Email, VpnKey } from '@material-ui/icons';
import {sendEmail,resetPass} from '../../../redux/users/userActions'
import swal from 'sweetalert'

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

export const ResetPassword = ({location}) => {
   const token = new URLSearchParams(window.location.search).get('token')
   const classes = useStyles();
   const [input, setInput] = useState({
      email: "",
      password: "",
   })
   const dispatch = useDispatch();
   
   const handleInputChange = async (e) => {
      await setInput({
         ...input,
         [e.target.name]: e.target.value,
      })
   }

   const handleReset = () => {
      dispatch(sendEmail(input.email,"passwordreset"))
      swal('En los proximos 10 min recibira el link.','Por favor revise su correo','success')
   }

   const handleChange = () => {
      dispatch(resetPass(token,input.password))
   }

   const renderReset = () => {
      return(
         <fragment>
            <h1>Solicitud de nueva contraseña</h1>
            <Grid container direction="row" justifyContent="space-around" alignItems="center" className={`componentDataBox ${classes.root}`} spacing={1}>
               <Grid container spacing={1} alignItems="center" justifyContent="center">
                  <Grid item>
                     <Email />
                  </Grid>
                  <Grid item>
                     <TextField
                        id="email" 
                        label="Correo" 
                        name='email'
                        value={input.email || ''}
                        onChange={handleInputChange}
                     />
                  </Grid>
               </Grid>
               <Grid container direction="row" justifyContent="center" alignItems="center">
                  <Grid item>
                     <Button style={{fontWeight: 1000, marginTop: 50}} color="secondary" onClick={handleReset} variant="contained">Solicitar</Button>
                  </Grid>
               </Grid>
            </Grid>
         </fragment>
      )
   }

   const renderChange = () => {
      return(
         <fragment>
            <h1>Ingrese la nueva contraseña</h1>
            <Grid container direction="row" justifyContent="space-around" alignItems="center" className={`componentDataBox ${classes.root}`} spacing={1}>
               <Grid container spacing={1} alignItems="center" justifyContent="center">
                  <Grid item>
                     <VpnKey />
                  </Grid>
                     <Grid item>
                        <TextField
                           id="password" 
                           label="Contraseña" 
                           name='password'
                           type="password"
                           value={input.password || ''}
                           onChange={handleInputChange}
                        />
                  </Grid>
               </Grid>
               <Grid container direction="row" justifyContent="center" alignItems="center">
                  <Grid item>
                     <Button style={{fontWeight: 1000, marginTop: 50}} color="secondary" onClick={handleChange} variant="contained">Guardar Contraseña</Button>
                  </Grid>
               </Grid>
            </Grid>
         </fragment>
      )
   }

   return (
      <fragment>
         {token
         ? renderChange()
         : renderReset()}
      </fragment>
   )
}

export default ResetPassword;
