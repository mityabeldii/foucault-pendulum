import * as mvConsts from '../mvConsts'

import React from 'react';
import { connect } from 'react-redux';
import Plot from './Plot'
import Pendulum from './Pendulum'
import SidePendulum from './SidePendulum'
import Control from './Control'
import Data from './Data'

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
                <div style={{width: 35 + 'vw', height: 70 + 'vh', display: "inline-block", }} >
                    <button onClick={() => {this.props.pendulum()}} style={{position: "absolute", top: 0, left: 100, }} >pendulum</button>
                    <button onClick={() => {this.props.sidePendulum()}} style={{position: "absolute", top: 0, left: 200, }} >sidePendulum</button>
                    <button onClick={() => {this.props.axis()}} style={{position: "absolute", top: 0, left: 300, }} >Axis</button>
                    {this.props.main.pendulum ? <div><Pendulum/></div> : null}
                </div>
                <div style={{width: 35 + 'vw', height: 70 + 'vh', display: "inline-block", }} >
                    {this.props.main.sidePendulum ? <div><SidePendulum/></div> : null}
                </div>
                <div style={{width: 30 + 'vw', height: 70 + 'vh', display: "inline-block", }} >
                    <Control/>
                </div>
                <div style={{width: 100 + 'vw', height: 30 + 'vh', }} >
                    <Plot/>
                </div>
                <Data/>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        main: state.main,
        // profile: state.profile,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        pendulum: () => {
            return dispatch({
                type: 'pendulum'
            })
        },
        sidePendulum: () => {
            return dispatch({
                type: 'sidePendulum'
            })
        },
        axis: () => {
            return dispatch({
                type: 'axis'
            })
        },

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
// export default (App)