import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Shoppingcart from './Shoppingcart';


const App = () => {

  return (
    <div className="App">
      <header className="App-header">
        Shopping cart application
      </header>
      <div className='App-body'>
            <Shoppingcart />
      </div>
    </div>
  );
}
export default App;
