import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import { connect } from "react-redux";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import About from "./pages/About";

function App() {
  return (
    <ToastProvider placement='top-left'>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about-us' exact component={About} />
          <Route path='/wishlist' exact component={Wishlist} />
          <Route path='/cart' exact component={Cart} />
          <Route path='/contact-us' exact component={Contact} />
        </Switch>
      </Router>
    </ToastProvider>
  );
}

export default connect()(App);
