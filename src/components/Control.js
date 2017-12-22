import * as mvConsts from '../mvConsts'

import React from 'react';
import { connect } from 'react-redux';

class Control extends React.Component {

    // static defaultProps = {

    // }

    // state = {

    // }

    // componentDidMount() {

    // }

    componentWillReceiveProps (nextProps) {

    }

    rotation = () => {
        this.props.setPlatformAngle(this.props.main.platformAngle + 1)
        setTimeout(() => {if (this.props.main.platformIsRotating) {this.rotation()}}, 10)
    }

    swing = () => {
        let newAngle = Math.sin(this.props.main.pendulumAngle.length / 30)
        this.props.setPendulumAngle(newAngle)
        setTimeout(() => {if (this.props.main.pendulumIsSwinging) {this.swing() }}, 10)
    }

    onPlatformYesClick = () => {
        if (!this.props.main.platformIsRotating) {
            this.props.setPlatformRotation(true);
            this.rotation()
        }
    }

    onPlatformNoClick = () => {
        this.props.setPlatformRotation(false)
    }

    onPendulumYesClick = () => {
        if (!this.props.main.pendulumIsSwinging) {
            this.props.setPendulumSwing(true);
            this.swing()
        }
    }

    onPendulumNoClick = () => {
        this.props.setPendulumSwing(false)
    }

    earthControl = () => {
        return(
            <div>
                <div style={{width: 30 + 'vw', height: 5 + 'vh', background: "white",  textAlign: "center", }} >
                    Platform rotation
                </div>
                <div style={{width: 15 + 'vw', height: 5 + 'vh', background: mvConsts.colors.second, display: "inline-block", color: "white", textAlign: "center", }} onClick={() => {this.onPlatformYesClick()}} >
                    Yes
                </div>
                <div style={{width: 15 + 'vw', height: 5 + 'vh', background: mvConsts.colors.contrast, display: "inline-block", color: "white", textAlign: "center", }} onClick={() => {this.onPlatformNoClick()}} >
                    No
                </div>
            </div>
        )
    }

    pendulumControl = () => {
        return(
            <div>
                <div style={{width: 2, height: 71 + 'vh', background: mvConsts.colors.border, position: "absolute", right: 30 + 'vw', }} />
                <div style={{width: 30 + 'vw', height: 5 + 'vh', background: "white",  textAlign: "center", }} >
                    Pendulum swing
                </div>
                <div style={{width: 15 + 'vw', height: 5 + 'vh', background: mvConsts.colors.second, display: "inline-block", color: "white", textAlign: "center", }} onClick={() => {this.onPendulumYesClick()}} >
                    Yes
                </div>
                <div style={{width: 15 + 'vw', height: 5 + 'vh', background: mvConsts.colors.contrast, display: "inline-block", color: "white", textAlign: "center", }} onClick={() => {this.onPendulumNoClick()}} >
                    No
                </div>
            </div>
        )
    }

    ifr = () => {
        return(
            <div>
                <div style={{width: 2, height: 71 + 'vh', background: mvConsts.colors.border, position: "absolute", right: 30 + 'vw', }} />
                <div style={{width: 30 + 'vw', height: 5 + 'vh', background: "white",  textAlign: "center", }} >
                    IFR/NIFR
                </div>
                <div style={{width: 15 + 'vw', height: 5 + 'vh', background: mvConsts.colors.second, display: "inline-block", color: "white", textAlign: "center", }} onClick={() => {this.props.ifr(true)}} >
                    IFR
                </div>
                <div style={{width: 15 + 'vw', height: 5 + 'vh', background: mvConsts.colors.contrast, display: "inline-block", color: "white", textAlign: "center", }} onClick={() => {this.props.ifr(false)}} >
                    NIFR
                </div>
            </div>
        )
    }

    render = () => {

        // let {ui, profile} = this.props;

        return (
            <div style={{width: 30 + 'vw', height: 70 + 'vh', position: "absolute", }} >
                {this.earthControl()}
                {this.pendulumControl()}
                {this.ifr()}
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
        setPlatformAngle: (angle) => {
            return dispatch({
                type: 'setPlatformAngle',
                angle: angle
            })
        },
        setPlatformRotation: (rotation) => {
            return dispatch({
                type: 'setPlatformRotation',
                rotation: rotation
            })
        },
        setPendulumAngle: (angle) => {
            return dispatch({
                type: 'setPendulumAngle',
                angle: angle
            })
        },
        setPendulumSwing: (swing) => {
            return dispatch({
                type: 'setPendulumSwing',
                swing: swing
            })
        },
        ifr: (ifr) => {
            return dispatch({
                type: 'ifr',
                ifr: ifr
            })
        },

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Control)
// export default (Control)