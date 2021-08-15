import { connect } from 'react-redux';
import { State } from 'store/types';

import Dashboard from 'pages/Dashboard'

import { bindActionCreators } from "@reduxjs/toolkit";

const mapStateToProps = (state: State) => {
    return {};
};

const mapDispatchToProps = (dispatch: any) => {
    return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);