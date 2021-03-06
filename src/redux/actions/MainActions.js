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

export const plot = (plot) => {
    return {
        type: types.plot,
        plot: plot
    }
}

export const damped = (damped) => {
    return {
        type: types.damped,
        damped: damped
    }
}

export const track = (track) => {
    return {
        type: types.track,
        track: track
    }
}

export const optimisation = (optimisation) => {
    return {
        type: types.optimisation,
        optimisation: optimisation
    }
}

export const pendulum = (pendulum) => {
    return {
        type: types.pendulum,
        pendulum: pendulum
    }
}

export const sidePendulum = (sidePendulum) => {
    return {
        type: types.sidePendulum,
        sidePendulum: sidePendulum
    }
}

export const axis = (axis) => {
    return {
        type: types.sidePendulum,
        axis: axis
    }
}

export const speed = (speed) => {
    return {
        type: types.speed,
        speed: speed
    }
}

export const setSpeed = (speed) => {
    return {
        type: types.setSpeed,
        speed: speed
    }
}

export const setPlatformSpeed = (platformSpeed) => {
    return {
        type: types.setPeriod,
        platformSpeed: platformSpeed
    }
}