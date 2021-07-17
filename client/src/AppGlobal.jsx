import {useState} from 'react'
import { ThemeProvider } from '@material-ui/core'
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import AppPrivate from './Components/App/AppPrivate';
import AppPublic from './Components/App/AppPublic';
import theme from './utils/Theme';

const AppGlobal = () => {
// eslint-disable-next-line
	const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('profile')));
	
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Switch> 
				{/* <Route 
					path="/passwordreset" 
					component = {ResetPassword}
				/> */}
				
				
					<Route 
						path="/private"
						component={ () => (
							( (currentUser && currentUser.isAdmin) )
							? ( <AppPrivate /> )
							: ( <Redirect to="/login" /> )
						)}
					/>
					
					<Route path="/" component={ () => <AppPublic />}/>
				</Switch>
			</BrowserRouter>
		</ThemeProvider>
	)
}

export default AppGlobal;
