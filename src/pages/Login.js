import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from '../components/Input';
import { getLogin } from '../actions';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      disabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
  }

  // Ref.: https://www.horadecodar.com.br/2020/09/07/expressao-regular-para-validar-e-mail-javascript-regex/
  validateEmail() {
    const { email } = this.state;

    const validEmail = /\S+@\S+\.\S+/;

    return validEmail.test(email);
  }

  validatePassword() {
    const { password } = this.state;
    const maxChar = 6;

    return password.length >= maxChar;
  }

  validateLogin() {
    if (this.validateEmail() && this.validatePassword()) {
      return this.setState({
        disabled: false,
      });
    }
    return this.setState({
      disabled: true,
    });
  }

  handleOnSubmit() {
    const { history, dispatchLogin } = this.props;
    dispatchLogin(this.state);
    history.push('/carteira');
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value },
      () => this.validateLogin());
  }

  render() {
    const { email, password, disabled } = this.state;
    return (
      <form>
        <Input
          type="email"
          name="email"
          value={ email }
          label="Email: "
          onChange={ this.handleChange }
          dataTestId="email-input"
        />

        <Input
          type="password"
          name="password"
          value={ password }
          label="Senha: "
          onChange={ this.handleChange }
          dataTestId="password-input"
        />

        <button
          type="submit"
          onClick={ this.handleOnSubmit }
          disabled={ disabled }
        >
          Entrar
        </button>
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
  dispatchLogin: (payload) => dispatch(getLogin(payload.email)),
});

export default connect(null, mapDispatchToProps)(Login);
