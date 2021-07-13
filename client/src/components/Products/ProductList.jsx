import { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { makeStyles, Grid, Button, FormControl, InputLabel, Select, MenuItem, Container } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles';
import { DataGrid } from '@material-ui/data-grid';
import theme from '../themeStyle';
import {Link} from 'react-router-dom';
import { getProducts } from '../../redux/products/productActions'

const ProductList = () => {
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

	const {products} = useSelector(state => state.productReducer)
	const classes = useStyles();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProducts())
	},[])

    const columns = [
        {field: 'id', headerName: '#', width: 90 },
		{field: 'name', headerName: 'Nombre', width: 160},
		{field: 'sku', headerName: 'SKU', width: 180},
		{field: 'price', headerName: 'Precio', width: 150 },
		{
			field: 'Edit',
			headerName: 'EDITAR',
			sortable: false,
			width: 120,
			disableClickEventBubbling: true,
			renderCell: params => {
				return (
					<ThemeProvider theme={theme}>
					<Link to={`/private/updateproduct/${params.id}`} style={{textDecoration:'none'}}>
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
					<Link to={`/product/${params.id}`} style={{textDecoration:'none'}}>
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
							Lista de productos
						</h1>
						<Link to="/private/form" style={{textDecoration:'none'}}>
							<Button variant="contained" color="secondary" >
								Agregar Nuevo
							</Button>
						</Link>
					</Container>

				<Container style={{height: 400, width: '90%'}}>
					<Container style={{display: 'flex', height: '100%'}}>
						<DataGrid rows={products} columns={columns} />
					</Container>
				</Container>

			</ThemeProvider>
        </>
    )

}
export default ProductList;