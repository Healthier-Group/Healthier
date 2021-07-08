import { useState } from 'react';
import { useDispatch } from 'react-redux'
import CreateUserForm from './CreateUserForm'
import {createUser} from '../../../redux/users/userActions'

import swal from "sweetalert";

const CreateUser = () => {

	const dispatch = useDispatch();

	const [input, setInput] = useState({
		name: '',
		username: '',
		email:'',
		password: '',
		contact: ''
	});

	const handleSubmit = e => {
		dispatch(createUser(input));
		swal('Usuario creado exitosamente', "Gracias!", "success");
	};

	return (
		<>
			<CreateUserForm input={input} setInput={setInput} handleSubmit={handleSubmit} />
		</>
	);
};

export default CreateUser;
