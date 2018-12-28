import { createStore } from 'redux';
import reducer from './reducers/add-reducer';

let store = createStore(reducer);

export default store;