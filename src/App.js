import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header'
import { Route, Switch} from 'react-router-dom'
import CartDetail from './components/CartDetail/CartDetail';

function App() {
  return (
    <div className="App">
            <Header/>
            <Switch>
            <Route exact path='/add-to-cart-react-redux' component={Cart} />
            <Route exact path='/add-to-cart-react-redux/cart' component={CartDetail} />
            </Switch>
    </div>
  );
}

export default App;
