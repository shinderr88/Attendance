import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { store } from '../src/reduxSetup/configStore';
import App from './App';
import Dashboard from './screens/Dashboard';


ReactDOM.render(
  <Provider store={store}>
    {/* <App /> */}
    <Dashboard />
  </Provider>,
  document.getElementById('root')
)