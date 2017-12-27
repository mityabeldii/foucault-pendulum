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
        let t = this.props.main.pendulumAngle[this.props.main.pendulumAngle.length - 1].index / (10 * this.props.main.speed)
        //ideal oscillations (A*(sin(fi)+wt))
        let newAngle = Math.sin(t)
        //damped oscillations (A*exp(-beta*t)*(sin(fi)+wt))
        if (this.props.main.damped) {
            newAngle *= Math.exp(-0.1 * t)
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
        // let color1 = mvConsts.colors.second
        // let color2 = mvConsts.colors.contrast
        // if (checkParametr) {
        //     color1 = mvConsts.colors.frame
        // } else {
        //     color2 = mvConsts.colors.frame
        // }
        let color1 = 'transparent'
        let color2 = 'transparent'
        if (checkParametr) {
            color1 = mvConsts.colors.second
        } else {
            color2 = mvConsts.colors.second
        }
        return(
            <div>
                <div style={{width: 2, height: 71 + 'vh', background: mvConsts.colors.border, position: "absolute", right: 30 + 'vw', }} />
                <div style={{width: 30 + 'vw', height: 5 + 'vh', background: mvConsts.colors.maincolor,  textAlign: "center", }} >
                    {heading}
                </div>
                {/*<div style={{width: 15 + 'vw', height: 5 + 'vh', background: color1, display: "inline-block", color: mvConsts.colors.maincolor, textAlign: "center", }} onClick={() => {onClick1()}} >*/}
                    {/*{firstV}*/}
                {/*</div>*/}
                {/*<div style={{width: 15 + 'vw', height: 5 + 'vh', background: color2, display: "inline-block", color: mvConsts.colors.maincolor, textAlign: "center", }} onClick={() => {onClick2()}} >*/}
                    {/*{secondV}*/}
                {/*</div>*/}
                <div style={{width: 15 + 'vw', height: 3 + 'vh', display: "inline-block", color: mvConsts.colors.maincolor, textAlign: "center", background: color1, }} onClick={() => {onClick1()}} >
                    <button onClick={() => {onClick1()}} >{firstV}</button>
                </div>
                <div style={{width: 15 + 'vw', height: 3 + 'vh', display: "inline-block", color: mvConsts.colors.maincolor, textAlign: "center", background: color2, }} onClick={() => {onClick2()}} >
                    <button onClick={() => {onClick2()}} >{secondV}</button>
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
                {/*{this.twoButtons(this.props.main.damped, "Damped oscillations", "Damped", "Ideal", () => {this.props.damped(true)}, () => {this.props.damped(false)}, this.dampPanel(), )}*/}
                {this.twoButtons(this.props.main.damped, "Damped oscillations", "Damped", "Ideal", () => {this.props.damped(true)}, () => {this.props.damped(false)}, )}
            </div>
        )
    }

    track = () => {
        return(
            <div>
                {this.twoButtons(this.props.main.track, "Draw track", "Draw", "Clear", () => {this.props.track(true)}, () => {this.props.track(false)}, )}
            </div>
        )
    }

    optimisation = () => {
        return(
            <div>
                {this.twoButtons(this.props.main.optimisation, "Optimisation", "Yes", "No", () => {this.props.optimisation(true)}, () => {this.props.optimisation(false)}, )}
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
                {this.damped()}
                {this.track()}
                {this.optimisation()}
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
        track: (track) => {
            return dispatch({
                type: 'track',
                track: track
            })
        },
        optimisation: (optimisation) => {
            return dispatch({
                type: 'optimisation',
                optimisation: optimisation
            })
        },

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Control)
// export default (Control)