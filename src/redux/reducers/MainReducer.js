import {types} from '../../mvConsts'
import * as mvConsts from '../../mvConsts'

const initialState = {
    platformAngle: 0,
    platformIsRotating: false,
    pendulumAngle: [0],
    pendulumIsSwinging: false,
    history: [],
    ifr: true,
    plot: false,
    damped: false,
    track: false,
    optimisation: true,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.setPlatformAngle:
            return {
                ...state,
                platformAngle: action.angle
            };
        case types.setPlatformRotation:
            return {
                ...state,
                platformIsRotating: action.rotation
            };
        case types.setPendulumAngle:
            let newPendulumAngle = state.pendulumAngle
            // if (state.optimisation) {
            //     let newA = []
            //     for (let i in newPendulumAngle) {
            //         if (i > newPendulumAngle.length - 50) {
            //             newA.push(newPendulumAngle[i])
            //         }
            //     }
            //     newPendulumAngle = newA
            // }
            newPendulumAngle.push(action.angle)
            let newHistory = state.history
            if (state.track) {
                let offsets = document.getElementsByClassName("pendulum")[0].getBoundingClientRect()
                newHistory.push({top: offsets.top, left: offsets.left})
                if (state.optimisation) {
                    let newNewHistory = []
                    for (let i in newHistory) {
                        if (i > newHistory.length - 100) {
                            newNewHistory.push(newHistory[i])
                        }
                    }
                    newHistory = newNewHistory
                }
            } else {
                newHistory = []
            }
            return {
                ...state,
                pendulumAngle: newPendulumAngle,
                history: newHistory,
            };
        case types.setPendulumSwing:
            return {
                ...state,
                pendulumIsSwinging: action.swing
            };
        case types.ifr:
            return {
                ...state,
                ifr: action.ifr
            };
        case types.plot:
            return {
                ...state,
                plot: action.plot
            };
        case types.damped:
            return {
                ...state,
                damped: action.damped
            };
        case types.track:
            return {
                ...state,
                track: action.track
            };
        case types.optimisation:
            return {
                ...state,
                optimisation: action.optimisation
            };
        default:
            return state;
    }
}