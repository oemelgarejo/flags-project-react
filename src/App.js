import './App.css';
import Countrylist from './components/CountryList';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initialState = {
  countryList: []
}

function reducer(state, action) {
  switch (action.type) {
    case 'SET_COUNTRY_LIST':{
      return {...state, countryList: action.payload};
    }
    default: {
      return state
    }
  }
}

const store = createStore(reducer, initialState);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Countrylist />
      </div>
    </Provider>
  );
}

export default App;
