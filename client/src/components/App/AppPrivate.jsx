import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router';
import Container from '@material-ui/core/Container';
import LandingPage from '../LandingPage/LandingPage'
import Navigation from '../NavBar/Navigation'
import CreateUser from '../Users/UserAdd/CreateUser';
import UpdateUser from '../Users/UserUpdate/UpdateUser';

function AppPrivate() {
	return (
		<Container className="App">
			<BrowserRouter>
				
				<Route path="/" component={Navigation} />
				<Route exact path="/" component={LandingPage} />
				<Route exact path="/private/createuser" component={CreateUser} />
                <Route exact path="/private/updateuser/:id" component={UpdateUser} />
                //ver todos los usuarios y sus detalles

            </BrowserRouter>
		</Container>
	);
}

export default AppPrivate;