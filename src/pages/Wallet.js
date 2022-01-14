import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Form from '../components/Form';
import Table from '../components/Table';

class Wallet extends React.Component {
  render() {
    const { userEmail } = this.props;

    return (
      <div>
        <Header
          label="LOGO"
          user={ `Usuário: ${userEmail}` }
          labelDespesa={ `Despesa Total: ${0}` }
          labelCambio="BRL"
          data-testid="email-field"
        />
        <Form />
        <Table />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
});

Wallet.propTypes = {
  userEmail: PropTypes.string,
};

Wallet.defaultProps = {
  userEmail: '',
};

export default connect(mapStateToProps, null)(Wallet);
