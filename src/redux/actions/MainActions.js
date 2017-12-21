import {types} from '../../mvConsts'

export const setPlatformAngle = (angle) => {
    return {
        type: types.setPlatformAngle,
        angle: angle
    }
}

export const setPlatformRotation = (rotation) => {
    return {
        type: types.setPlatformRotation,
        rotation: rotation
    }
}