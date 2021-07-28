import { ThemeProvider } from '@material-ui/core'
<<<<<<< HEAD
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
=======
import {BrowserRouter, Route, Switch,Redirect} from 'react-router-dom';
>>>>>>> 882e615a7e86eb4037a567e4d9fb31e23c7de724
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
