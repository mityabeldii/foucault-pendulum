import * as mvConsts from '../mvConsts'

import React from 'react';
import { connect } from 'react-redux';

class Pendulum extends React.Component {

    // static defaultProps = {

    // }

    state = {
        earthAngle: 0,
        platformAngle: 0,
    }

    // componentDidMount() {

    // }

    earthRadius = window.innerWidth * 0.1
    
    render = () => {

        // let {ui, profile} = this.props;

        let platform = () => {
            let earthAngle = 0
            return(
                <div style={{width: this.earthRadius * 2, height: this.earthRadius * 2, borderRadius: this.earthRadius, background: "white", position: "absolute", transform: 'rotate('+this.props.main.platformAngle+'deg)', }} >
                    <div style={{width: 2, height: this.earthRadius * 2, position: "absolute", background: mvConsts.colors.border, left: this.earthRadius }} />
                </div>
            )
        }

        let earth = () => {
            let earthAngle = 0
            let offset = 2
            return(
                <div style={{width: this.earthRadius * 2 + offset * 2, height: this.earthRadius * 2 + offset * 2, borderRadius: this.earthRadius, background: mvConsts.colors.border, position: "absolute", top: 17.5 + 'vh', left: 17.5 + 'vh', }} >
                    <div style={{width: this.earthRadius * 2, height: this.earthRadius * 2, borderRadius: this.earthRadius, background: "white", position: "absolute", top: offset, left: offset, }} >
                        {platform()}
                    </div>
                </div>
            )
        }

        return (
            <div style={{width: 70 + 'vw', height: 70 + 'vh', }} >
                <div style={{width: 2, height: 71 + 'vh', background: mvConsts.colors.border, position: "absolute", right: 30 + 'vw', }} />
                {earth()}
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