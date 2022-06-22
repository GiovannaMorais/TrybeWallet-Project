// Coloque aqui suas actions
export const CHECK_EMAIL = 'CHECK_EMAIL';
// export const CHECK_WALLET = 'CHECK_WALLET';
export const REQUEST_API = 'REQUEST_API';
// export const REQUEST_API_SUCCESS = 'REQUEST_API_SUCCESS';

export const CheckEmail = (payload) => ({
  type: CHECK_EMAIL,
  payload,
});

// export const CheckWallet = (payload) => ({
//   type: CHECK_WALLET,
//   payload,
// });

export const requestApi = (currencies) => ({
  type: REQUEST_API,
  currencies: currencies.filter((coin) => coin !== 'USDT'),
});

// export const requestApiSuccess = (payload) => ({
//   type: REQUEST_API_SUCCESS,
//   payload,
// });
// const response = await fetch(URL);
// const data = await response.json();
// // console.log(data);
// return dispatch(requestApi(data));
export function fetchAPI() {
  const URL = 'https://economia.awesomeapi.com.br/json/all';
  return (dispatch) => {
    fetch(URL)
      .then((response) => response.json())
      .then((currencies) => dispatch(requestApi(Object.keys(currencies))));
  };
}
