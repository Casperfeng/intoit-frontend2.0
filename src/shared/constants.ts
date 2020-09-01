import axios from 'axios';
import 'moment/locale/nb';
import moment from 'moment';
moment.locale('nb');

// * Uncomment these and comment out the corresponding variables under in order to test with production database
// ! We should not abuse this since we generate unrelevant data to production when testing
/* 
const BASE_URL = 'https://ace-restapi.herokuapp.com';
const FACEBOOK_APP_ID = '274754369699301'; 
*/
// Question types;
const MC = 'mc';
const FC = 'fc';
export const questionTypes = {
  mc: MC,
  fc: FC,
};

const BASE_URL = process.env.NODE_ENV === 'production' ? 'https://ace-restapi.herokuapp.com' : 'http://intoit-dev.herokuapp.com';

const GOOGLE_ANALYTICS_ID = process.env.NODE_ENV === 'production' ? 'UA-162793965-1' : 'UA-162793965-2';

const FACEBOOK_APP_ID = process.env.NODE_ENV === 'production' ? '274754369699301' : '389917801835190';

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.baseURL = BASE_URL;

export { FACEBOOK_APP_ID, GOOGLE_ANALYTICS_ID };
