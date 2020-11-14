import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import { connect } from "react-redux";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Shop from "./pages/Shop";

function App() {
  return (
    <ToastProvider placement='top-left'>
      <Router>
        <Switch>
          <Route path='/wishlist' exact component={Wishlist} />
          <Route path='/cart' exact component={Cart} />
          <Route path='/about-us' exact component={About} />
          <Route path='/contact-us' exact component={Contact} />
          <Route path='/shop' exact component={Shop} />
          <Route path='/' exact component={Home} />
        </Switch>
      </Router>
    </ToastProvider>
  );
}

export default connect()(App);
