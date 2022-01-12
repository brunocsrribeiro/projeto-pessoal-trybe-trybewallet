import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    const { userEmail } = this.props;
    return (
      <Header
        label="LOGO"
        user={ userEmail }
        labelDespesa="0"
        data-testid="email-field"
      />
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
});

Wallet.propTypes = {
  userEmail: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Wallet);
