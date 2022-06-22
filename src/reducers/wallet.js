// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { CHECK_WALLET } from '../actions';

const initialState = {
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
  },
};

const walletReducer = (state = initialState, action) => {
  switch (action.type) {
  case CHECK_WALLET:
    return {
      ...state, wallet: action.payload,
    };
  default:
    return state;
  }
};
export default walletReducer;
