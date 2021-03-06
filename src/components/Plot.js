import * as mvConsts from '../mvConsts'

import React from 'react';
import { connect } from 'react-redux';

class Plot extends React.Component {

    // static defaultProps = {

    // }

    // state = {
    //
    // }

    // componentDidMount() {
    //
    // }

    render = () => {

        // let {ui, profile} = this.props;
        
        return (
            <div style={{width: 100 + 'vw', height: 30 + 'vh', background: mvConsts.colors.maincolor, position: "relative", }} >
                <button style={{position: "absolute", }} onClick={() => {this.props.plot()}} >Draw / Clear</button>
                <div style={{width: 100 + 'vw', height: 2, background: mvConsts.colors.border, position: "absolute", }} />
                <div style={{width: 100 + 'vw', height: 1, background: mvConsts.colors.border, position: "absolute", top: 15 + 'vh' }} />
                <div style={{width: 10, height: 10, position: "absolute", top: 12 + 'vh', left: 0.5 + 'vw',}} >
                    0
                </div>
                {
                    this.props.main.plot ? this.props.main.pendulumAngle.map((value, index) => {
                        let nIndex = index
                        if (this.props.main.pendulumAngle.length > window.innerWidth) {
                            nIndex -= this.props.main.pendulumAngle.length - window.innerWidth
                        }
                        let delta = 0
                        let size = Math.max(delta, 1)
                        return(
                            <div style={{
                                width: 1,
                                height: size,
                                borderRadius: size,
                                background: "black",
                                // display: "inline-block",
                                position: "absolute",
                                bottom: window.innerHeight * 0.13 * value.angle + window.innerHeight * 0.15,
                                left: nIndex,
                            }} key={index} >

                            </div>
                        )
                    }) : null
                }
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
//
let mapDispatchToProps = (dispatch) => {
    return {
        plot: () => {
            return dispatch({
                type: 'plot'
            })
        },

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Plot)
// export default (Plot)