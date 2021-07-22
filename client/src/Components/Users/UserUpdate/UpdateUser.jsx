import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import UpdateUserForm from './UpdateUserForm'
import {updateUser} from '../../../redux/users/userActions'

import swal from "sweetalert";

const UpdateUser = () => {

	const dispatch = useDispatch();
	const {userDetail} = useSelector(state => state.userReducer);

	const [input, setInput] = useState({
		name: '',
		username: '',
		email:'',
		password: '',
		contact: ''
	});

	const handleSubmit = e => {
		dispatch(updateUser(input));
	};

	useEffect(() => {
		if(typeof(userDetail) === "string"){
			let aux = userDetail.replace('Validation error', 'Error de validación').split(',')[0]
			if(aux.includes('llave duplicada')){
				aux.includes('email') ? swal('El email ya esta en uso', 'Intente con otra dirección de email', 'error') : swal('El usuario ya esta en uso', 'Lo sentimos!', 'error')
			}else{
				swal(aux, 'Vuelva a intentarlo', 'error')
			}
		} else {
			(typeof(userDetail) !== 'undefined' && userDetail.success) && swal('Usuario actualizado exitosamente', ' ', 'success')
		}
	},[userDetail])

	return (
		<>
			<UpdateUserForm input={input} setInput={setInput} handleSubmit={handleSubmit} />
		</>
	);
};

export default UpdateUser;