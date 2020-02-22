import axios from 'axios';
import 'moment/locale/nb';
import moment from 'moment';
moment.locale('nb');

const BASE_URL = process.env.NODE_ENV === 'production' ? 'https://ace-restapi.herokuapp.com' : 'http://intoit-dev.herokuapp.com';

const FACEBOOK_APP_ID = process.env.NODE_ENV === 'production' ? '274754369699301' : '389917801835190';

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.baseURL = BASE_URL;

export { FACEBOOK_APP_ID };
