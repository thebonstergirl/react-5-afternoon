import { createStore, compose} from 'redux';
import reducer from './ducks/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = composeEnhancers();

export default createStore(reducer, middlewares);