import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CheckEmail } from '../actions';

class Login extends React.Component {
state = {
  email: '',
  password: '',
}

handleChange = ({ target }) => {
  const { name, value } = target;
  this.setState({ [name]: value });
}

validatePassword = () => {
  const NUM = 6;
  const { password } = this.state;
  const verified = password.length >= NUM;
  return verified;
}

 validateEmail = () => {
   const { email } = this.state;
   const verified = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
   return verified.test(email);
 }

pathCarteira = () => {
  const { history, saveLogin } = this.props;
  const { email } = this.state;
  saveLogin(email);
  history.push('/carteira');
}

render() {
  const { email, password } = this.state;
  return (
    <div>
      Login
      <input
        type="text"
        data-testid="email-input"
        onChange={ this.handleChange }
        value={ email }
        name="email"

      />
      <input
        type="password"
        data-testid="password-input"
        value={ password }
        onChange={ this.handleChange }
        name="password"
      />
      <button
        type="button"
        disabled={ !(this.validateEmail() && this.validatePassword()) }
        onClick={ this.pathCarteira }
      >
        Entrar
      </button>
    </div>
  );
}
}
Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  saveLogin: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  saveLogin: (login) => { dispatch(CheckEmail(login)); },
});

export default connect(null, mapDispatchToProps)(Login);
