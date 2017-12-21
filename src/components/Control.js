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

    earthRotations = () => {
        return(
            <div>
                <div style={{width: 30 + 'vw', height: 5 + 'vh', background: "white",  textAlign: "center", }} >
                    Platform rotation
                </div>
                <div style={{width: 15 + 'vw', height: 5 + 'vh', background: mvConsts.colors.second, display: "inline-block", color: "white", textAlign: "center", }} onClick={() => {this.props.setPlatformRotation(true); this.rotation()}} >
                    Yes
                </div>
                <div style={{width: 15 + 'vw', height: 5 + 'vh', background: mvConsts.colors.contrast, display: "inline-block", color: "white", textAlign: "center", }} onClick={() => {this.props.setPlatformRotation(false)}} >
                    No
                </div>
            </div>
        )
    }

    render = () => {

        // let {ui, profile} = this.props;

        return (
            <div style={{width: 30 + 'vw', height: 70 + 'vh', position: "absolute", }} >
                {this.earthRotations()}
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

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Control)
// export default (Control)