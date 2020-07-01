import axios from 'axios';

interface Action {
  type: string;
  payload: any;
}

const initialState = [];

const SET_FRIENDS = 'SET_FRIENDS';

export default function friendsDuck(state = initialState, action: Action) {
  switch (action.type) {
    case SET_FRIENDS:
      return action.payload;
    default:
      return state;
  }
}

export const fetchFriends = (accessToken: string, fbId: string) => async dispatch => {
  try {
    const response = await axios.get(`/friends?facebook_id=${fbId}&access_token=${accessToken}`);
    await dispatch({
      type: SET_FRIENDS,
      payload: { ...response.data },
    });
  } catch (error) {
    console.log('Error while fetching facebook friends');
  }
};
