import { ThemeProvider } from '@material-ui/core'
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import AppPrivate from './Components/App/AppPrivate';
import AppPublic from './Components/App/AppPublic';
import theme from './utils/Theme';

const AppGlobal = () => {
	const currentUser = (JSON.parse(localStorage.getItem('profile')));
	const adminAllowed = (JSON.parse(localStorage.getItem('adminAllowed')))
	
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Switch> 			
					<Route 
						path="/private"
						component={ () => (
							( (currentUser && adminAllowed) )
							? ( <AppPrivate /> )
							: ( <Redirect to="/login" /> )
						)}
					/>
					
					 {/* <Route path="/private" component={ () => <AppPrivate />}/> */}
					<Route path="/" component={ () => <AppPublic />}/>
				</Switch>
			</BrowserRouter>
		</ThemeProvider>
	)
}

export default AppGlobal;
