import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Form from '../components/Form';
import Table from '../components/Table';

class Wallet extends React.Component {
  render() {
    const { email, expenses } = this.props;
    return (
      <div>
        <Header
          labelText="LOGO"
          user={ email }
          labelExpenses={ expenses ? 0 : null }
          labelExchange="BRL"
          data-testid="email-field"
        />
        <Form />
        <Table />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Wallet.propTypes = {
  email: PropTypes.string,
  expenses: PropTypes.instanceOf(Array).isRequired,
};

Wallet.defaultProps = {
  email: '',
};

export default connect(mapStateToProps, null)(Wallet);
