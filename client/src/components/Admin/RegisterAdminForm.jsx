import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles, Grid, Button, TextField, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from "../themeStyle";
import GoogleLogin from "react-google-login";
import styles from "./RegisterAdmin.module.css"


const CreateUserForm = ({ input, setInput, allBuildings, handleSubmit }) => {

	const responseGoogle = (response) => {
		console.log(response);
		setInput({
			name: response.dt.Ve,
			email: response.dt.Nt
		})
	}

	const handleChange = (e, change) => {
		setInput({ ...input, [change]: e.target.value })
	}

	return (
		<ThemeProvider theme={theme}>
			<div className='extContCAF'>
				<h1>
					Registrarse como administrador:
				</h1>
			</div>
			<div className={styles.form}>
				<GoogleLogin
					clientId="882826335564-thsrmpgsm8cdn7hl576nq2uqiuq1ku10.apps.googleusercontent.com"
					buttonText="Carga los datos de tu cuenta"
					onSuccess={responseGoogle}
					onFailure={responseGoogle}
					cookiePolicy={'single_host_origin'} />
				<form onSubmit={handleSubmit}>
					<TextField value={input.name} onChange={(e) => handleChange(e, "name")} label="Nombre" variant="outlined" />
					<TextField value={input.email} onChange={(e) => handleChange(e, "email")} label="Email" variant="outlined" />
					<TextField value={input.contact} onChange={(e) => handleChange(e, "contact")} label="Contacto" variant="outlined" />
					<TextField value={input.password} onChange={(e) => handleChange(e, "password")} label="Contraseña" variant="outlined" />
					<Button variant="contained" color="secondary" onClick={handleSubmit} style={{ fontWeight: 1000 }}>
						Registrarse
					</Button>
				</form>
			</div>
		</ThemeProvider>
	)
}
export default CreateUserForm;
