import * as mvConsts from '../mvConsts'

import React from 'react';
import { connect } from 'react-redux';

class Control extends React.Component {

    // static defaultProps = {

    // }

    // componentDidMount() {

    // }

    // componentWillReceiveProps (nextProps) {
    //
    // }

    rotation = () => {
        this.props.setPlatformAngle(this.props.main.platformAngle + 1)
        setTimeout(() => {if (this.props.main.platformIsRotating) {this.rotation()}}, 10)
    }

    swing = () => {
        //ideal oscillations (A*(sin(fi)+wt))
        let newAngle = Math.sin(this.props.main.pendulumAngle.length / 30)
        //damped oscillations (A*exp(-beta*t)*(sin(fi)+wt))
        if (this.props.main.damped) {
            newAngle *= Math.exp(-0.1 * this.props.main.pendulumAngle.length / 30)
        }
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

    twoButtons = (checkParametr, heading, firstV, secondV, onClick1, onClick2, component) => {
        let color1 = mvConsts.colors.second
        let color2 = mvConsts.colors.contrast
        if (checkParametr) {
            color1 = mvConsts.colors.frame
        } else {
            color2 = mvConsts.colors.frame
        }
        return(
            <div>
                <div style={{width: 2, height: 71 + 'vh', background: mvConsts.colors.border, position: "absolute", right: 30 + 'vw', }} />
                <div style={{width: 30 + 'vw', height: 5 + 'vh', background: "white",  textAlign: "center", }} >
                    {heading}
                </div>
                <div style={{width: 15 + 'vw', height: 5 + 'vh', background: color1, display: "inline-block", color: "white", textAlign: "center", }} onClick={() => {onClick1()}} >
                    {firstV}
                </div>
                <div style={{width: 15 + 'vw', height: 5 + 'vh', background: color2, display: "inline-block", color: "white", textAlign: "center", }} onClick={() => {onClick2()}} >
                    {secondV}
                </div>
                {component}
            </div>
        )
    }

    earthControl = () => {
        return(
            <div>
                {this.twoButtons(this.props.main.platformIsRotating, "Platform rotation", "Start rotation", "Stop rotating", () => {this.onPlatformYesClick()}, () => {this.onPlatformNoClick()}  )}
            </div>
        )
    }

    pendulumControl = () => {
        return(
            <div>
                {this.twoButtons(this.props.main.pendulumIsSwinging, "Pendulum fluctuations", "Start fluctuating", "Stop fluctuating", () => {this.onPendulumYesClick()}, () => {this.onPendulumNoClick()}  )}
            </div>
        )
    }

    ifr = () => {
        return(
            <div>
                {this.twoButtons(this.props.main.ifr, "IFR/NIFR", "IFR", "NIFR", () => {this.props.ifr(true)}, () => {this.props.ifr(false)}  )}
            </div>
        )
    }

    plot = () => {
        return(
            <div>
                {this.twoButtons(this.props.main.plot, "Plot", "Draw", "Clear", () => {this.props.plot(true)}, () => {this.props.plot(false)}  )}
            </div>
        )
    }

    dampPanel = () => {
        return(
            <div>
                <div style={{width: 30 + 'vw', height: 10 + 'vh', position: "absolute", background: "lightblue" }} >

                </div>
            </div>
        )
    }

    damped = () => {
        return(
            <div>
                {this.twoButtons(this.props.main.damped, "Damped oscillations", "Damped", "Ideal", () => {this.props.damped(true)}, () => {this.props.damped(false)}, this.dampPanel(), )}
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
                {this.plot()}
                {this.damped()}
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
        plot: (plot) => {
            return dispatch({
                type: 'plot',
                plot: plot
            })
        },
        damped: (damped) => {
            return dispatch({
                type: 'damped',
                damped: damped
            })
        },

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Control)
// export default (Control)