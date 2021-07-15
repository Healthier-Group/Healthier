import {useEffect,useState} from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from '@material-ui/core'
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import AppPrivate from './components/App/AppPrivate';
import AppPublic from './components/App/AppPublic';
import theme from './utils/Theme';
import useStickyState from './utils/useStickyState';

const AppGlobal = () => {

	const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('profile')));
	
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Switch> 
					<Route 
						path="/private"
						component={ (props) => (
							( (currentUser && currentUser.isAdmin) )
							? ( <AppPrivate { ...props } /> )
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
//<Redirect to="/login" /> ( <AppPrivate { ...props } /> )