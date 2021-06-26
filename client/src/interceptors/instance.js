import Cookie from 'js-cookie';
import axios from 'axios'
import jwt_decode from "jwt-decode";

const userInfo = Cookie.getJSON("userInfo") || null
const tokenData = Cookie.getJSON("token") || null

const instance = axios.create({
  baseURL: "http://localhost:5000/api/"
})

// if (userInfo && tokenData) {
//   Axios.defaults.headers.common.Authorization = "Bearer " + tokenData.accessToken 
// }

instance.interceptors.request.use(
  async (config) => {
    let currentDate = new Date();
    const decodedToken = jwt_decode(userInfo.accessToken);
    if (decodedToken.exp * 1000 < currentDate.getTime()) {
      const data = await refreshToken();
      config.headers["authorization"] = "Bearer " + data.accessToken;
    } else {
      config.headers["authorization"] = "Bearer " + userInfo.accessToken;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const refreshToken = async () => {
  try {
    const { data } = await axios.post("http://localhost:5000/api/refresh", { token: tokenData.refreshToken });
    if (data) {
      Cookie.set('token', JSON.stringify(data));
      window.location.reload()
    }
    return data;
  } catch (err) {
    console.log(err);
    Cookie.remove("userInfo");
    Cookie.remove("token");
    window.location.reload()
  }
};

export default instance;