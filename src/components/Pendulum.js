import * as mvConsts from '../mvConsts'

import React from 'react';
import { connect } from 'react-redux';

class Pendulum extends React.Component {

    // static defaultProps = {

    // }

    // state = {
    //
    // }
    
    // componentWillReceiveProps (nextProps) {
    //
    // }

    // componentDidMount() {
    //    
    // }

    earthRadius = window.innerHeight * 0.2

    render = () => {

        // let {ui, profile} = this.props;

        let offset = 2

        let pendulumAngle = 0
        let platformAngle = 0
        if (this.props.main.ifr) {
            pendulumAngle = -this.props.main.platformAngle
        } else {
            platformAngle = this.props.main.platformAngle
        }

        return (
            <div style={{width: 70 + 'vw', height: 70 + 'vh', }} >
                <div style={{width: this.earthRadius * 2.5 + offset * 2, height: this.earthRadius * 2.5 + offset * 2, position: "absolute", top: 100 - this.earthRadius * 0.25, left: 100 - this.earthRadius * 0.25,  background: "lightblue", transform: "rotate("+ platformAngle +"deg)", }} />
                <div style={{marginTop: 100, marginLeft: 100, }} >
                    <div style={{width: this.earthRadius * 2 + offset * 2, height: this.earthRadius * 2 + offset * 2, position: "absolute", background: mvConsts.colors.border, borderRadius: this.earthRadius, }} >
                        <div style={{width: this.earthRadius * 2, height: this.earthRadius * 2, position: "absolute", background: "white", borderRadius: this.earthRadius, top: offset, left: offset,  transform: "rotate("+ platformAngle +"deg)", }} >
                            <div style={{width: offset * 4, height: offset * 4, position: "absolute", background: "red", borderRadius: offset * 2, marginLeft: this.earthRadius - offset * 2, top: -20, }} />
                        </div>
                    </div>
                    <div style={{width: this.earthRadius * 2, height: this.earthRadius * 2, position: "absolute", borderRadius: this.earthRadius, top: offset + 100, left: offset + 100,  transform: "rotate("+ pendulumAngle +"deg)",  }} >
                        <div style={{width: offset, height: this.earthRadius * 2, background: mvConsts.colors.border, marginLeft: this.earthRadius, }} />
                        <div className={"pendulum"} style={{width: offset * 4, height: offset * 4, borderRadius: offset * 2, position: "absolute", background: "red", left: this.earthRadius, bottom: this.earthRadius + this.earthRadius * (this.props.main.pendulumAngle[this.props.main.pendulumAngle.length - 1].angle) }} />
                    </div>
                    {
                        this.props.main.track ? this.props.main.history.map((dot, index) => {
                            if (dot !== undefined) {
                                return(
                                    <div style={{width: 2, height: 2, position: "absolute", top: dot.top, left: dot.left, background: "red" }} key={index} />
                                )
                            } else {
                                return null
                            }
                        }) : null
                    }
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

export default connect(mapStateToProps, mapDispatchToProps)(Pendulum)
// export default (Pendulum)