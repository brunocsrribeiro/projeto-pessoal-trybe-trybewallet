import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Form from '../components/Form';
import Table from '../components/Table';
import FormEdit from '../components/FormEdit';

class Wallet extends React.Component {
  render() {
    const { email, isEdit } = this.props;
    return (
      <div>
        <Header
          labelText="LOGO"
          user={ email }
          labelExchange="BRL"
          data-testid="email-field"
        />
        { isEdit ? <FormEdit /> : <Form /> }
        <Table />
      </div>
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

export default connect(mapStateToProps, null)(Wallet);
