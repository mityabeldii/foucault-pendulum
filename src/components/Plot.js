import * as mvConsts from '../mvConsts'

import React from 'react';
// import { connect } from 'react-redux';

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
            <div style={{width: 100 + 'vw', height: 30 + 'vh', background: "white", position: "relative", }} >
                <div style={{width: 100 + 'vw', height: 2, background: mvConsts.colors.border, position: "absolute", }} />
                <div style={{width: 100 + 'vw', height: 1, background: mvConsts.colors.border, position: "absolute", top: 15 + 'vh' }} />
                {/*<div style={{width: 10, height: 10, position: "absolute", top: 12 + 'vh', left: 0.5 + 'vw',}} >*/}
                    {/*0*/}
                {/*</div>*/}
                {/*{*/}
                    {/*this.state.plotValues.map((value, index) => {*/}
                        {/*let size = Math.max(Math.abs(this.state.plotValues[index] - this.state.plotValues[index + 1]), 1)*/}
                        {/*return(*/}
                            {/*<div style={{*/}
                                {/*width: 1,*/}
                                {/*height: size,*/}
                                {/*borderRadius: size,*/}
                                {/*background: "black",*/}
                                {/*// display: "inline-block",*/}
                                {/*position: "absolute",*/}
                                {/*bottom: value + window.innerHeight * 0.15,*/}
                                {/*left: index,*/}
                            {/*}} key={index} >*/}

                            {/*</div>*/}
                        {/*)*/}
                    {/*})*/}
                {/*}*/}
            </div>
        )
    }
}

// let mapStateToProps = (state) => {
//     return {
//         // ui: state.ui,
//         // profile: state.profile,
//     }
// };
//
// let mapDispatchToProps = (dispatch) => {
//     return {
//         // closeAllOptionSpaces: () => {
//         //     return dispatch({
//         //         type: 'closeAllOptionSpaces'
//         //     })
//         // },
//
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Plot)
export default (Plot)