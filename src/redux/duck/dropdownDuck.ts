interface Action {
  type: string;
  payload?: any;
}

// Actions
const DROPDOWN_ACTION = 'DROPDOWN_ACTION';

const initialState = false;

export default function coursesReducer(state = initialState, action: Action) {
  switch (action.type) {
    case DROPDOWN_ACTION:
      return !state;
    default:
      return state;
  }
}

//Action creators
export function updateDropdown() {
  return {
    type: DROPDOWN_ACTION
  };
}
