import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import CreateUserForm from './CreateUserForm'
import {createUser} from '../../../redux/users/userActions'

import swal from "sweetalert";

const CreateUser = () => {

	const dispatch = useDispatch();
	const {userDetail} = useSelector(state => state.userReducer);

	var wipedInput = {
		name: '',
		username: '',
		email:'',
		password: '',
		contact: ''
	}

	const [input, setInput] = useState(wipedInput);

	const handleSubmit = e => {
		dispatch(createUser(input))
	};

	useEffect(() => {
		if(typeof(userDetail) === "string"){
			let aux = userDetail.replace('Validation error', 'Error de validación').split(',')[0]
			if(aux.includes('llave duplicada')){
				aux.includes('email') ? swal('El email ya esta en uso', 'Lo sentimos!', 'error') : swal('El usuario ya esta en uso', 'Lo sentimos!', 'error')
			}else{
				swal(aux, 'Lo sentimos!', 'error')
			}
		} else {
			typeof(userDetail) !== 'undefined' && swal('Usuario creado exitosamente', 'Bienvenido!', 'success')
		}
	},[userDetail])

	return (
		<>
			<CreateUserForm input={input} setInput={setInput} handleSubmit={handleSubmit} />
		</>
	);
};

export default CreateUser;
