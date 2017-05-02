/**
 * Created by sergio on 5/1/17.
 */
// eslint-disable-next-line
import { createStore, applyMiddleware, compose} from 'redux';
//import { autoRehydrate, persistStore } from 'redux-persist';
import reducer from '../reducers/reducers';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
));
export default store;

