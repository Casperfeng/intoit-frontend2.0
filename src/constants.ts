import axios from 'axios';
const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://ace-restapi.herokuapp.com'
    : 'http://intoit-dev.herokuapp.com';
const FACEBOOK_REDIRECT_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://www.intoit.io/login'
    : 'http://localhost:3000/login';
const FACEBOOK_APP_ID =
  process.env.NODE_ENV === 'production' ? '274754369699301' : '389917801835190';

export { FACEBOOK_REDIRECT_URL, FACEBOOK_APP_ID };
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.baseURL = BASE_URL;
