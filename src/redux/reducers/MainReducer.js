import {types} from '../../mvConsts'
import * as mvConsts from '../../mvConsts'

const initialState = {
    platformAngle: 0,
    platformIsRotating: false,
    pendulumAngle: [0],
    pendulumIsSwinging: false,
    ifr: true,
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
            newPendulumAngle.push(action.angle)
            return {
                ...state,
                pendulumAngle: newPendulumAngle
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
        default:
            return state;
    }
}