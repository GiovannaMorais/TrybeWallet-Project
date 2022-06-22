// Coloque aqui suas actions
export const CHECK_EMAIL = 'CHECK_EMAIL';
export const CHECK_WALLET = 'CHECK_WALLET';

export const CheckEmail = (payload) => ({
  type: CHECK_EMAIL,
  payload,
});

export const CheckWallet = (payload) => ({
  type: CHECK_WALLET,
  payload,
});
