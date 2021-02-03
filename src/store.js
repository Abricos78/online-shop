import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
// My import
import createRootReducers from 'reducers/reducers'

const { createBrowserHistory } = require("history");
const { createStore, applyMiddleware} = require("redux");

export let history = createBrowserHistory()
let middlewares = [thunk, routerMiddleware(history)]

export let store = createStore(
  	createRootReducers(history),
	composeWithDevTools(applyMiddleware(...middlewares))
)