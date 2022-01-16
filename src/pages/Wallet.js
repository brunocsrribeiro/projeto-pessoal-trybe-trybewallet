import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Form from '../components/Form';
import Table from '../components/Table';

class Wallet extends React.Component {
  render() {
    const { userEmail, labelDespesa } = this.props;

    return (
      <div>
        <Header
          label="LOGO"
          user={ userEmail }
          labelDespesa={ labelDespesa }
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
  labelDespesa: PropTypes.number,
};

Wallet.defaultProps = {
  userEmail: '',
  labelDespesa: 0,
};

export default connect(mapStateToProps, null)(Wallet);
