import { useState } from 'react';
import { ThemeProvider } from '@material-ui/core'
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import AppPrivate from './components/App/AppPrivate.jsx';
import AppPublic from './components/App/AppPublic.jsx';
import theme from './utils/Theme';

const AppGlobal = () => {

	const [currentUser, setCurrentUser] = useState({isAdmin: true});

	
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Switch> 
					<Route 
						path="/private"
						component={ () => (
							( (currentUser && currentUser?.isAdmin) )
							? ( <AppPrivate /> )
							: ( <Redirect to="/logging" /> )
						)}
					/>
					
					<Route path="/" component={ () => <AppPublic />}/>
				</Switch>
			</BrowserRouter>
		</ThemeProvider>
	)
}

export default AppGlobal;
