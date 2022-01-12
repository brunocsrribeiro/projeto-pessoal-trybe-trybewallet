import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '../components/Button';
import Input from '../components/Input';
import { getLogin } from '../actions';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      disabledButton: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.validateLogin = this.validateLogin.bind(this);
  }

  onSubmit() {
    const { history, dispatchLogin } = this.props;
    dispatchLogin(this.state);
    history.push('/carteira');
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value },
      this.validateLogin);
  }

  // Ref.: Usei trecho de codigo do Jonatas Passos
  validateLogin() {
    const { email, password } = this.state;

    const regEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
    const validateEmail = regEmail.test(String(email).toLowerCase());

    const maxLengthPass = 6;
    const validatePassword = (password.length >= maxLengthPass);

    if (validateEmail && validatePassword) {
      this.setState({ disabledButton: false });
    } else {
      this.setState({ disabledButton: true });
    }
  }

  render() {
    const { email, password, disabledButton } = this.state;

    return (
      <form>
        <Input
          type="email"
          name="email"
          value={ email }
          label="Email"
          onChange={ this.handleChange }
          dataTestId="email-input"
        />

        <Input
          type="password"
          name="password"
          value={ password }
          label="Senha"
          onChange={ this.handleChange }
          dataTestId="password-input"
        />

        {/* <button
          type="button"
          onClick={ this.onSubmit }
          disabled={ disabledButton }
        >
          Entrar
        </button> */}

        <Button
          type="button"
          onClick={ this.onSubmit }
          label="Entrar"
          disabled={ disabledButton }
        />
      </form>
    );
  }
}

Login.propTypes = {
  dispatchLogin: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchLogin: (payload) => dispatch(getLogin(payload)),
});

export default connect(null, mapDispatchToProps)(Login);
