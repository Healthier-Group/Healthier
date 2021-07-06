import { useState } from 'react';
import { useDispatch } from 'react-redux';
import CreateUserForm from './CreateUserForm'
import { createUser } from '../../../redux/users/userActions';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import swal from "sweetalert";

const CreateUser = () => {

	const dispatch = useDispatch();

	const [input, setInput] = useState({
		isReseller: '',
		name: '',
		username: '',
		email:'',
		password: '',
		contact: '',
		firstLogging: ''
	});

	const handleSubmit = e => {
		dispatch(createUser(input));
        setInput({
            isReseller: '',
            name: '',
            username: '',
            email:'',
            password: '',
            contact: '',
            firstLogging: ''
        })
		swal('Usuario creado exitosamente', "Gracias!", "success");
	};

	return (
		<>  
            <Typography align='center' display="inline"> 
                <Link to = "/"> Back </Link>
            </Typography>
			<CreateUserForm id="createUserForm" input={input} setInput={setInput} handleSubmit={handleSubmit}/>
		</>
	);
};

export default CreateUser;
