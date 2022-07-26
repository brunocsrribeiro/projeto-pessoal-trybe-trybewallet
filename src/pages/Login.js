import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from '../components/Input';
import Button from '../components/Button';
import { getUserLogin } from '../actions';
import { ContainerLogin, FormLoginStyle, theme } from '../styles';
import { ThemeProvider } from 'styled-components';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      disabled: true,
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
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

  handleOnClick() {
    const { history, dispatchLogin } = this.props;
    dispatchLogin(this.state);
    history.push('/carteira');
  }

  handleOnChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value },
      () => this.validateLogin());
  }

  render() {
    const { email, password, disabled } = this.state;
    return (
      <ThemeProvider theme={ theme }>
        <ContainerLogin>
          <FormLoginStyle>
            <Input
              type="email"
              name="email"
              value={ email }
              placeholder="Email"
              onChange={ this.handleOnChange }
              id="email-input"
            />

            <Input
              type="password"
              name="password"
              value={ password }
              placeholder="Senha"
              onChange={ this.handleOnChange }
              id="password-input"
            />
            <Button
              type="submit"
              labelText="Entrar"
              disabled={ disabled }
              onClick={ this.handleOnClick }
            />
          </FormLoginStyle>
        </ContainerLogin>
      </ThemeProvider>
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
  dispatchLogin: (payload) => dispatch(getUserLogin(payload.email)),
});

export default connect(null, mapDispatchToProps)(Login);
