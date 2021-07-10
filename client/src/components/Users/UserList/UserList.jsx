import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../../redux/users/userActions'
import { makeStyles, Menu, Grid, Button, FormControl, InputLabel, Select, MenuItem, Container } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles';
import { DataGrid } from '@material-ui/data-grid';
import theme from '../../themeStyle';
import { Link } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import './UserList.css';

const UserList = () => {
	const useStyles = makeStyles((theme)=>({
		root: {
			marginTop: 100,
			marginBottom: 30,
			border: 5
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

	const dispatch = useDispatch();
	const classes = useStyles();

	const users = useSelector(state => state.users);

	useEffect(() => {
        dispatch(getAllUsers())
    }, []);
	


	const [anchorEl, setAnchorEl] = useState(null);

	const handleClick = (event) => {
	  setAnchorEl(event.currentTarget);
	};
  
	const handleClose = () => {
	  setAnchorEl(null);
	};

    return(
        <>  
            <ThemeProvider theme={theme}>
				<h1> Holaaaaaa </h1>
				{
					users?users.map( user => {
						return(
							<div> 
								{user.username}
							</div>
						)
					}):<p>No users</p>
				}
	
			</ThemeProvider>
        </>
    )

}
export default UserList;