import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAPI } from '../actions';
import Header from './Header';
// import Form from './Form';

class Wallet extends React.Component {
  componentDidMount() {
    const { dispatchFetchedApi } = this.props;
    // console.log('dispatchFetchedApi', dispatchFetchedApi());
    dispatchFetchedApi();
  }

  render() {
    return (
      <div>
        TrybeWallet!
        <Header />
      </div>
    );
  }
}
Wallet.propTypes = {
  dispatchFetchedApi: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchFetchedApi: () => dispatch(fetchAPI()),
});
export default connect(null, mapDispatchToProps)(Wallet);
