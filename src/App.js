import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import { connect } from "react-redux";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Compare from "./pages/Compare";
import Profile from "./pages/Profile";
import LoginRegister from "./pages/Login-Register";
import Checkout from "./pages/Checkout";
import PageNotFound from "./pages/PageNotFound";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <ToastProvider placement='top-left'>
      <Router>
        <Switch>
          <Route path='/product/:id' exact component={ProductDetails} />
          <Route path='/wishlist' exact component={Wishlist} />
          <Route path='/cart' exact component={Cart} />
          <Route path='/checkout' exact component={Checkout} />
          <Route path='/about-us' exact component={About} />
          <Route path='/contact-us' exact component={Contact} />
          <Route path='/compare' exact component={Compare} />
          <Route path='/login-register' exact component={LoginRegister} />
          <Route path='/profile' exact component={Profile} />
          <Route path='/shop' exact component={Shop} />
          <Route path='/' exact component={Home} />
          <Route exact component={PageNotFound} />
        </Switch>
      </Router>
    </ToastProvider>
  );
}

export default connect()(App);
