import * as mvConsts from '../mvConsts'

import React from 'react';
// import { connect } from 'react-redux';
import Plot from './Plot'
import Pendulum from './Pendulum'
import Control from './Control'

class App extends React.Component {

    // static defaultProps = {

    // }

    // state = {

    // }

    // componentDidMount() {

    // }

    render = () => {

        // let {ui, profile} = this.props;

        return (
            <div style={{width: 100 + 'vw', height: 100 + 'vh', background: mvConsts.colors.back, }} >
                <div style={{width: 70 + 'vw', height: 70 + 'vh', display: "inline-block", }} >
                    <Pendulum/>
                </div>
                <div style={{width: 30 + 'vw', height: 70 + 'vh', display: "inline-block", }} >
                    <Control/>
                </div>
                <div style={{width: 100 + 'vw', height: 30 + 'vh', }} >
                    <Plot/>
                </div>
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

// export default connect(mapStateToProps, mapDispatchToProps)(App)
export default (App)