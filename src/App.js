import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import RouterDom from './Routes';
import { Provider } from 'react-redux';
import store from './ReduxStore/Store';
function App() {
  return (
    <Provider store={store}>
        <div className="App">
          <RouterDom /> 
        </div>
    </Provider>
    
  );
}

export default App;
