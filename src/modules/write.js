const INITIALIZE = 'write/INITIALIZE';
const CHANGE_FIELD = 'write/CHANGE_FIELD';

export const initialize = (owner) => ({ type: INITIALIZE, payload: owner });
export const changeField = ({ key, value }) => ({ type: CHANGE_FIELD, payload: { key, value } });

const initialState = {
  title: '',
  body: '',
  owner: '',
};

export default function write(state = initialState, action) {
  switch (action.type) {
    case INITIALIZE:
      return { ...state, owner: action.payload };
    case CHANGE_FIELD:
      return { ...state, [action.payload.key]: action.payload.value };
    default:
      return state;
  }
}
