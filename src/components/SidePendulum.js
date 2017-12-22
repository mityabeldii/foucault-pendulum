import * as mvConsts from '../mvConsts'

import React from 'react';
// import { connect } from 'react-redux';

class SidePendulum extends React.Component {

    // static defaultProps = {

    // }

    // state = {

    // }

    // componentDidMount() {

    // }
    
    render = () => {

        // let {ui, profile} = this.props;

        return (
            <div style={{width: 35 + 'vw', height: 70 + 'vh', position: "absolute", background: "lightblue" }} >

            </div>
        )
    }
}

// let mapStateToProps = (state) => {
//     return {
//         // ui: state.ui,
//         // profile: state.profile,
//     }
// };
//
// let mapDispatchToProps = (dispatch) => {
//     return {
//         // closeAllOptionSpaces: () => {
//         //     return dispatch({
//         //         type: 'closeAllOptionSpaces'
//         //     })
//         // },
//
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(SidePendulum)
export default (SidePendulum)