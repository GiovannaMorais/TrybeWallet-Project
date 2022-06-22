import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from './Form';

class Header extends React.Component {
  render() {
    const { email, expenses } = this.props;
    return (

      <header>
        <div>
          <p data-testid="email-field">{email}</p>
          <p data-testid="total-field">
            {expenses.length === 0
              ? 0
              : expenses.reducer((acumulador, valorAtual) => acumulador + valorAtual, 0)}
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
