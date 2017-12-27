import * as mvConsts from '../mvConsts'

import React from 'react';
import { connect } from 'react-redux';

import Axis from './Axis'

class SidePendulum extends React.Component {

    // static defaultProps = {

    // }

    // state = {

    // }

    // componentDidMount() {

    // }
    
    render = () => {

        // let {ui, profile} = this.props;

        let maxAngle = 30
        let angle = this.props.main.pendulumAngle[this.props.main.pendulumAngle.length - 1].angle * maxAngle
        let offset = 2
        // console.log(Math.abs(Math.sin(maxAngle * 0.0174533) * 2))
        let proectionHeight = Math.abs(0.1 * window.innerHeight * angle / maxAngle * Math.abs(Math.sin(maxAngle * 0.0174533)))

        return (
            <div style={{width: 35 + 'vw', height: 70 + 'vh', position: "absolute", }} >
                <div style={{height: 40 + 'vh', position: "absolute", top: 10 + 'vh', left: 10 + 'vw', transform: "rotate("+ angle +"deg)", }} >
                    {/*<div style={{width: 1, height: 20 + 'vh', position: "absolute", background: "blue", }} />*/}
                    <div style={{width: 1, height: 20 + 'vh', position: "absolute", background: "red", top: 20 + 'vh', }} />
                    <div style={{width: offset * 4, height: offset * 4, borderRadius: offset * 2, position: "absolute", background: "red", top: 0.4 * window.innerHeight - offset * 3, left: -offset * 1.5, }} />
                </div>
                <div style={{width: 1, height: proectionHeight, position: "absolute", background: "red", left: 0.1 * window.innerWidth - 2.1 * angle, top: 0.5 * window.innerHeight - proectionHeight + offset * 3, }} />
                {/*<div style={{width: 100 + 'vw', height: 100 + 'vh', position: "absolute", background: "lightblue" }} />*/}

                <div style={{position: "absolute", top: 35 + 'vh', left: 5 + 'vw', }} >
                    <Axis name={"x'"} angle={90} />
                    <Axis name={"z'"} angle={0} />
                </div>

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
        // closeAllOptionSpaces: () => {
        //     return dispatch({
        //         type: 'closeAllOptionSpaces'
        //     })
        // },

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SidePendulum)
// export default (SidePendulum)