import {useState, useEffect} from 'react';
import {
	FormControl,
	Button,
	TextField,
	makeStyles,
	Grid,
} from '@material-ui/core';
import {useSelector, useDispatch} from 'react-redux';
import {getUser} from '../../redux/users/userActions';
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {ThemeProvider} from '@material-ui/core/styles';
import theme from '../themeStyle';

const useStyles = makeStyles(theme => ({
	root: {
		marginTop: 50,
		marginBottom: 30,
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
		width: 500,
	},
	title: {
		fontSize: 30,
	},
	last: {
		padding: 30,
	},
}));

export function UserProfile(props) {
	const classes = useStyles();

	const {userDetail} = useSelector(state => state.userReducer);

	const {id} = useParams();

	const dispatch = useDispatch();

	const [user, setUser] = useState({});

	useEffect(() => {
		dispatch(getUser(id));
	}, [dispatch, id]);

	useEffect(() => {}, [userDetail]);

	const handleInputChange = function (e) {
		switch (e.target.name) {
			case 'cata_apartment':
				break;
			case 'mt2':
				break;
			case 'number_apartment':
				break;
			default:
				break;
		}
	};

	const handleSubmit = function (e, id, data) {};

	return (
		<ThemeProvider theme={theme}>
			<div className="extContCAF">
				<h1>{userDetail.name || ''}</h1>
				<FormControl className={classes.root}>
					<Grid
						container
						direction="row"
						justify="space-between"
						alignItems="center"
					>
						<Grid style={{marginRigth: '50px'}}>
							<FormControl>
								<TextField
									style={{marginTop: '20px'}}
									variant="outlined"
									label="Un Catastral:"
									name="cata_apartment"
									value={userDetail.email}
									onChange={handleInputChange}
									error={!/^[A-Za-z ,.'-]{3,20}$/.test(userDetail.email)}
								/>
							</FormControl>
							<br />
							<FormControl>
								<TextField
									style={{marginTop: '20px'}}
									variant="outlined"
									label="Mt2:"
									name="mt2"
									value={userDetail.password}
									onChange={handleInputChange}
									error={!/^[+]*[-\s/0-9]{3,20}$/.test(userDetail.password)}
								/>
							</FormControl>
							<br />
							<FormControl>
								<TextField
									style={{marginTop: '20px'}}
									variant="outlined"
									label="N° Departamento:"
									name="number_apartment"
									value={userDetail.contact}
									onChange={handleInputChange}
									error={!/^[A-Za-z0-9,.'-]{1,20}$/.test(userDetail.contact)}
								/>
							</FormControl>
							<br />
						</Grid>
					</Grid>
					<Link className={classes.last}>
						<Button
							style={{fontWeight: 1000}}
							variant="contained"
							color="secondary"
							onClick={e => handleSubmit(e, id, user)}
						>
							Guardar Cambios
						</Button>
					</Link>
				</FormControl>
			</div>
		</ThemeProvider>
	);
}

export default UserProfile;
