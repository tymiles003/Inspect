import React from 'react';
import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = (state) => {
    return {
        test: state.testReducer.test
    }
}

export default connect(mapStateToProps)(App);

