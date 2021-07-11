import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./utils/Theme.js";
import Container from "./Components/Container/Container";
import ProductCard from "./Components/Products/ProductCard";
import ProductDetail from "./Components/Products/ProductDetail";
import CreateProductForm from "./Components/Products/CreateProductForm";
import Recipes from "./Components/Recipes/Recipes";


function AppGlobal() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Container} />
          <Route path="/recipes" exact component={Recipes} />
          <Route path="/products/:id" component={ProductDetail} />
          <Route path="/products" component={ProductCard} />
          <Route path="/form" component={CreateProductForm} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default AppGlobal;
