import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {ThemeProvider} from '@material-ui/core/styles'
import theme from './utils/Theme.js'
// import Navigation from './components/NavBar/Navigation';
import LandingPage from './components/LandingPage/LandingPage'
import CreateUserForm from './components/Users/UserAdd/CreateUserForm';

function AppGlobal() {
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Switch> 
					{/* <Route path='/' component={Navigation}/> */}
					<Route path='/createuser' component={CreateUserForm}/>
					<Route exact path='/' component={LandingPage}/>
				</Switch>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default AppGlobal;

/*
Index
		AppGlobal
				App private
						Componentes
				App public
						Componentes
*/