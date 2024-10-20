import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";

// Components
import NavbarComps from "./components/Navbar";

// MainScreens
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import Footer from "./components/Footer";
import WishListScreen from "./screens/WishListScreen";

function App() {
  return (
    <Router>
      <NavbarComps />
      <main className="app" data-testId="app">
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/min/:min/max/:max" component={HomeScreen} />
          <Route
            exact
            path="/min/:min/max/:max/order/:order"
            component={HomeScreen}
          />
          <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/cartItems" component={CartScreen} />
          <Route exact path="/wishItems" component={WishListScreen} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
