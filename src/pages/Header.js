import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from './Form';

class Header extends React.Component {
  render() {
    const { email, expenses } = this.props;
    console.log('this.props', this.props);

    return (
      <header>
        <div>
          <p data-testid="email-field">{email}</p>
          <p data-testid="total-field">
            {expenses.reduce((acc, curr) => {
              acc += (curr.exchangeRates[curr.currency].ask * curr.value);
              return acc;
            }, 0).toFixed([2])}
          </p>
          <p data-testid="header-currency-field"> BRL </p>
        </div>
        <Form />
      </header>
    );
  }
}
const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf.isRequired,
};

export default connect(mapStateToProps, null)(Header);
