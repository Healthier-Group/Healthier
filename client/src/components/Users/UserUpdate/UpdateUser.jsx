import { useState } from 'react';
import { useDispatch } from 'react-redux'
import UpdateUserForm from './UpdateUserForm'
import {updateUser} from '../../../redux/users/userActions'

import swal from "sweetalert";

const UpdateUser = () => {

	const dispatch = useDispatch();

	const [input, setInput] = useState({
		name: '',
		username: '',
		email:'',
		password: '',
		contact: ''
	});

	const handleSubmit = e => {
		dispatch(updateUser(input));
        swal('Usuario actualizado exitosamente', "Gracias!", "success");
	};

	return (
		<>
			<UpdateUserForm input={input} setInput={setInput} handleSubmit={handleSubmit} />
		</>
	);
};

export default UpdateUser;