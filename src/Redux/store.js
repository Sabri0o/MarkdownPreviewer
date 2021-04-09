import { createStore } from 'redux'
import textReducer from './reducer'
const store = createStore(textReducer);
export default store

