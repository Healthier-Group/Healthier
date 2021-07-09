import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router';
import Container from '@material-ui/core/Container';
import LandingPage from '../LandingPage/LandingPage'
import Navigation from '../NavBar/Navigation'
import CreateUser from '../Users/UserAdd/CreateUser';

function AppPublic() {
	return (
		<Container className="App">
			<BrowserRouter>

				<Route path="/" component={Navigation} />
				<Route exact path="/" component={LandingPage} />
				<Route exact path="/register" component={CreateUser} />
                //update de datos propios de
                //leer su perfil

            </BrowserRouter>
		</Container>
	);
}

export default AppPublic;
