import axios from 'axios';
import 'moment/locale/nb';
import moment from 'moment';
moment.locale('nb');

// * Uncomment these and comment out the corresponding variables under in order to test with production database
// ! We should not overabuse this since we generate incorrect data
/* 
const BASE_URL = 'https://ace-restapi.herokuapp.com';
const FACEBOOK_APP_ID = '274754369699301'; 
*/

const BASE_URL = process.env.NODE_ENV === 'production' ? 'https://ace-restapi.herokuapp.com' : 'http://intoit-dev.herokuapp.com';

const FACEBOOK_APP_ID = process.env.NODE_ENV === 'production' ? '274754369699301' : '389917801835190';

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.baseURL = BASE_URL;

export { FACEBOOK_APP_ID };
