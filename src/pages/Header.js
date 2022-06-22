import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from './Form';

class Header extends React.Component {
  render() {
    const { email, despesas } = this.props;
    return (

      <header>
        <div>
          <span data-testid="email-field">{email}</span>
          <span data-testid="total-field">
            {despesas.length === 0
              ? 0
              : despesas.reducer((acc, at) => acc + at, 0)}
          </span>
          <span data-testid="header-currency-field"> BRL </span>
        </div>
        <Form />
      </header>
    );
  }
}
const mapStateToProps = (state) => ({
  email: state.user.email,
  despesas: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  despesas: PropTypes.arrayOf.isRequired,
};

export default connect(mapStateToProps, null)(Header);
