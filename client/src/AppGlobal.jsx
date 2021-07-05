import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {ThemeProvider} from '@material-ui/core/styles'
import theme from './utils/Theme.js'
import { NavBar } from './components/NavBar/NavBar';

function AppGlobal() {
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Switch> 
					<Route path='/' component={NavBar}/>
				</Switch>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default AppGlobal;
