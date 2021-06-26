import Cookie from 'js-cookie';
import jwt_decode from "jwt-decode";
import axios from 'axios';
import instance from '../interceptors/instance';
import {
  USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNIN_FAIL, USER_LOGOUT,
  USER_DELETE_REQUEST, USER_DELETE_SUCCESS, USER_DELETE_FAIL
} from "../constants/auth";


const signin = (username, password) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST, payload: { username, password } })
  try {
    const { data } = await axios.post('http://localhost:5000/api/login', { username, password })
    Cookie.set('userInfo', JSON.stringify(data));
    Cookie.set('token', JSON.stringify(data));
    // window.location.reload()
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: USER_SIGNIN_FAIL, payload: error.message });
  }
}

const userDelete = (id) => async (dispatch) => {
  dispatch({ type: USER_DELETE_REQUEST, payload: { id } })
  try {
    const { data } = await instance.delete('users/' + id)
    dispatch({ type: USER_DELETE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: USER_DELETE_FAIL, payload: error.message });
  }
}


const logout = () => (dispatch) => {
  Cookie.remove("userInfo");
  dispatch({ type: USER_LOGOUT })
}

export { signin, logout, userDelete }