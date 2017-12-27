import * as mvConsts from '../mvConsts'

import React from 'react';
import { connect } from 'react-redux';

class Axis extends React.Component {

    // static defaultProps = {

    // }

    // state = {

    // }

    // componentDidMount() {

    // }

    render = () => {

        // let {ui, profile} = this.props;
        if (this.props.main.axis) {
            return (
                <div style={{width: 1, height: 30 + 'vh', position: "absolute", background: "black", transform: "rotate("+ this.props.angle +"deg)" }} >
                    <div style={{width: 1, height: 10, position: "absolute", background: "black", transform: "rotate("+ 20 +"deg)", marginTop: -3, marginLeft: -2, }} />
                    <div style={{width: 1, height: 10, position: "absolute", background: "black", transform: "rotate("+ -20 +"deg)", marginTop: -3, marginLeft: 2, }} />
                    <div style={{margin: 10, transform: "rotate("+ -this.props.angle +"deg)", }} >
                        {this.props.name}
                    </div>
                </div>
            )
        } else {
            return null
        }

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

export default connect(mapStateToProps, mapDispatchToProps)(Axis)
// export default (Axis)