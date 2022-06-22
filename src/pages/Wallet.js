import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAPI } from '../actions';
import Form from './Form';

class Wallet extends React.Component {
  componentDidMount() {
    const { dispatchFetchedApi } = this.props;
    console.log('dispatchFetchedApi', dispatchFetchedApi());
    dispatchFetchedApi();
  }

  render() {
    // console.log(this.props.email);
    const { email } = this.props;
    // console.log('currencies', currencies);
    return (
      <div>
        TrybeWallet!
        <header>
          <p data-testid="email-field">{email}</p>
          <p data-testid="total-field">0</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
        <Form />
      </div>
    );
  }
}
Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  dispatchFetchedApi: PropTypes.func.isRequired,
  // currencies: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchFetchedApi: () => dispatch(fetchAPI()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
