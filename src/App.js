import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from './contextApi/authProvider';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import Products from './components/Products/Products';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Purchase from './components/Purchase/Purchase';
import Pay from './components/Pay/Pay';
import MyOrders from './components/MyOrders/MyOrders';
import Review from './components/Review/Review';
import ManageAllOrders from './components/ManageAllOrders/ManageAllOrders';
import AddProducts from './components/AddProducts/AddProducts';
import AddAdmin from './components/AddAdmin/AddAdmin';
import ManageProducts from './components/ManageProducts/ManageProducts';


function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/about-us">
            <AboutUs></AboutUs>
          </Route>
          <Route exact path="/products">
            <Products></Products>
          </Route>
          <PrivateRoute exact path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/place-order/:id">
            <Purchase></Purchase>
          </PrivateRoute>
          <PrivateRoute exact path="/pay">
            <Pay></Pay>
          </PrivateRoute>
          <PrivateRoute exact path="/my-order">
            <MyOrders></MyOrders>
          </PrivateRoute>
          <PrivateRoute exact path="/review">
            <Review></Review>
          </PrivateRoute>
          <PrivateRoute exact path="/manage-all-order">
            <ManageAllOrders></ManageAllOrders>
          </PrivateRoute>
          <PrivateRoute exact path="/add-product">
            <AddProducts></AddProducts>
          </PrivateRoute>
          <PrivateRoute exact path="/add-admin">
            <AddAdmin></AddAdmin>
          </PrivateRoute>
          <PrivateRoute exact path="/manage-products">
            <ManageProducts></ManageProducts>
          </PrivateRoute>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
