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

export const setPendulumAngle = (angle) => {
    return {
        type: types.setPendulumAngle,
        angle: angle
    }
}

export const setPendulumSwing = (swing) => {
    return {
        type: types.setPendulumSwing,
        swing: swing
    }
}

export const ifr = (ifr) => {
    return {
        type: types.ifr,
        ifr: ifr
    }
}