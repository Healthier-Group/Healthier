import { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { makeStyles, Grid, Button, FormControl, InputLabel, Select, MenuItem, Container } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles';
import {DataGrid} from '@material-ui/data-grid';
import theme from '../../themeStyle';
import {Link} from 'react-router-dom';
import { getAllUsers } from '../../../redux/users/userActions'

const UserList = () => {
	const useStyles = makeStyles((theme)=>({
		root: {
			marginTop: 100,
			marginBottom: 30,
			border:5
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

	const {users} = useSelector(state => state.userReducer)
	const classes = useStyles();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllUsers())
	},[])

    const columns = [
        {field: 'id', headerName: '#', width: 90 },
		{field: 'name', headerName: 'Nombre', width: 160},
		{field: 'email', headerName: 'Email', width: 180},
		{field: 'contact', headerName: 'Contacto', width: 150 },
		{
			field: 'isDeleted', headerName: 'Estado', width: 130, renderCell: params => {
				return (
					<ThemeProvider theme={theme}>
					{params.row.isDeleted ? 'Deshabilitado' : 'Habilitado'}
					</ThemeProvider>
		)} },
		{
			field: 'Edit',
			headerName: 'EDITAR',
			sortable: false,
			width: 120,
			disableClickEventBubbling: true,
			renderCell: params => {
				return (
					<ThemeProvider theme={theme}>
					<Link to={`/private/updateuser/${params.id}`} style={{textDecoration:'none'}}>
						<Button style={{fontWeight: 1000}} variant="contained" color="secondary">Editar</Button>
					</Link>
					</ThemeProvider>
				);
			},
		},
		{
			field: 'Detail',
			headerName: 'DETALLES',
			sortable: false,
			width: 120,
			disableClickEventBubbling: true,
			renderCell: params => {
				return (
					<ThemeProvider theme={theme}>
					<Link to={`/private/userdetail/${params.id}`} style={{textDecoration:'none'}}>
						<Button style={{fontWeight: 1000}} variant="contained" color="secondary">Detalles</Button>
					</Link>
					</ThemeProvider>
				);
			},
		},
	];

    return(
        <>  
            <ThemeProvider theme={theme}>

					<Container style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
						<h1 >
							Usuarios:
						</h1>
						<Link to="/private/createuser" style={{textDecoration:'none'}}>
							<Button variant="contained" color="secondary" >
								Agregar Nuevo
							</Button>
						</Link>
					</Container>

				<Container style={{height: 400, width: '90%'}}>
					<Container style={{display: 'flex', height: '100%'}}>
						<DataGrid rows={users} columns={columns} />
					</Container>
				</Container>

			</ThemeProvider>
        </>
    )

}
export default UserList;