import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {ThemeProvider} from '@material-ui/core/styles'
import theme from './utils/Theme.js'
import Navigation from './components/NavBar/Navigation';
import LandingPage from './components/LandingPage/LandingPage'
import CreateProductForm from './components/Products/CreateProductForm';
import ProductCard from './components/Products/ProductCard';
import ProductDetail from './components/Products/ProductDetail';

function AppGlobal() {
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Switch> 
					<Route path='/nav' component={Navigation}/>
					<Route exact path='/' component={LandingPage}/>
					<Route path='/form' component={CreateProductForm}/>
					<Route path ='/home'  component={ProductCard} />
					<Route path ='/products/:id'  component={ProductDetail} />
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