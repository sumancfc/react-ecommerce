import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import { connect } from "react-redux";
import Home from "./pages/Home";

function App() {
  return (
    <ToastProvider placement='top-left'>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
      </Router>
    </ToastProvider>
  );
}

export default connect()(App);
