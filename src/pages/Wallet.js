import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Form from '../components/Form';
import Table from '../components/Table';
import FormEdit from '../components/FormEdit';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/GlobalStyle';
import { ContainerTable } from '../styles';

class Wallet extends React.Component {
  render() {
    const { email, isEdit } = this.props;
    return (
      <ThemeProvider theme={ theme }>
          <Header
            user={ email }
            labelExchange="BRL"
            id="email-field"
          />
        <div>
          { isEdit ? <FormEdit /> : <Form /> }
        </div>
        <ContainerTable>
          <Table />
        </ContainerTable>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  isEdit: state.wallet.isEdit,
});

Wallet.propTypes = {
  email: PropTypes.string,
  isEdit: PropTypes.bool.isRequired,
};

Wallet.defaultProps = {
  email: '',
};

export default connect(
  mapStateToProps, 
  null)(Wallet);
