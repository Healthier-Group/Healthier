import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage'

function AppGlobal() {
	return (
		<BrowserRouter>

			<Switch> 
        <Route path='/' component={LandingPage}/>
			</Switch>
			
		</BrowserRouter>
	);
}

export default AppGlobal;
