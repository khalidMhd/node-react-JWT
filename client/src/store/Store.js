import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import Cookie from 'js-cookie'
import { signinReducer,} from '../reducers/auth'


const userInfo = Cookie.getJSON("userInfo") || null

const initialState = { userSignin:{userInfo}  }
const reducer = combineReducers({
    userSignin:signinReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)))

export default store