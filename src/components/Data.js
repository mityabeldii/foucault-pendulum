import * as mvConsts from '../mvConsts'

import React from 'react';
import { connect } from 'react-redux';

class Data extends React.Component {

    // static defaultProps = {

    // }

    // state = {

    // }

    // componentDidMount() {

    // }

    render = () => {

        // let {ui, profile} = this.props;
        let angle = -(this.props.main.pendulumAngle[this.props.main.pendulumAngle.length - 1].angle) * 30
        angle = angle.toFixed(2)
        let period = (this.props.main.period).toFixed(2)

        return (
            <div style={{position: "absolute", background: mvConsts.colors.maincolor, top: 0, left: 0, padding: 5, }} >
                <div>Angle: {angle} deg</div>
                {/*<div>Period: {period} sec</div>*/}
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

export default connect(mapStateToProps, mapDispatchToProps)(Data)
// export default (Data)