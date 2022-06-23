// Esse reducer será responsável por tratar as informações da pessoa usuária
import { CHECK_EMAIL } from '../actions';

const initialState = {
  email: '',

};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
  case CHECK_EMAIL:
    return {
      ...state, email: action.payload,
    };
  default:
    return state;
  }
};
export default userReducer;
