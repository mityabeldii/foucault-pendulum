import {types} from '../../mvConsts'
import * as mvConsts from '../../mvConsts'

const initialState = {
    earthAngle: 0,
    earthIsRotating: false,
    platformAngle: 0,
    platformIsRotating: false,
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
        default:
            return state;
    }
}