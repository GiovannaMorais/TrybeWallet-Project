// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
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
  default:
    return state;
  }
};
export default walletReducer;
