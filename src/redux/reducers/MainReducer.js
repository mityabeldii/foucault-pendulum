import {types} from '../../mvConsts'
import * as mvConsts from '../../mvConsts'
import moment from 'moment'

const initialState = {
    platformAngle: 0,
    platformIsRotating: false,
    pendulumAngle: [{angle: 0, index: 0}],
    pendulumIsSwinging: false,
    history: [],
    ifr: true,
    plot: false,
    damped: false,
    // track: false,
    track: true,
    // optimisation: true,
    optimisation: false,
    pendulum: true,
    sidePendulum: true,
    axis: true,
    speed: 0.1,
    platformSpeed: 6,
    period: 0,
};

// 3 лепестка 1/19
// елочка 10/1
// елочка 20/1
// елочка 40/1
// елочка 80/1

let lastTime = moment().format('x')
let period = 0

export default (state = initialState, action) => {
    if (Math.abs(state.pendulumAngle[state.pendulumAngle.length - 1].angle) < 0.01) {
        if ((moment().format('x') - lastTime) > period * 1000) {
            period = ((moment().format('x') - lastTime) + period * 1000) / 2000
        }
        lastTime = moment().format('x')
    }
    switch (action.type) {
        case types.setPlatformAngle:
            return {
                ...state,
                period: period,
                platformAngle: action.angle
            };
        case types.setPlatformRotation:
            return {
                ...state,
                period: period,
                platformIsRotating: action.rotation
            };
        case types.setPendulumAngle:
            let newPendulumAngle = state.pendulumAngle
            if (state.optimisation) {
                let newA = []
                for (let i in newPendulumAngle) {
                    if (i > newPendulumAngle.length - 100) {
                        newA.push(newPendulumAngle[i])
                    }
                }
                newPendulumAngle = newA
            }
            newPendulumAngle.push({angle: action.angle, index: state.pendulumAngle[state.pendulumAngle.length - 1].index + 1 })
            let newHistory = state.history
            if (state.track) {
                if (document.getElementsByClassName("pendulum")[0] !== undefined) {
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
                }
            } else {
                newHistory = []
            }
            return {
                ...state,
                period: period,
                pendulumAngle: newPendulumAngle,
                history: newHistory,
            };
        case types.setPendulumSwing:
            return {
                ...state,
                period: period,
                pendulumIsSwinging: action.swing
            };
        case types.ifr:
            return {
                ...state,
                period: period,
                ifr: action.ifr
            };
        case types.plot:
            return {
                ...state,
                period: period,
                plot: !state.plot
            };
        case types.damped:
            return {
                ...state,
                period: period,
                damped: action.damped
            };
        case types.track:
            return {
                ...state,
                period: period,
                track: action.track
            };
        case types.optimisation:
            return {
                ...state,
                period: period,
                optimisation: action.optimisation
            };
        case types.pendulum:
            return {
                ...state,
                period: period,
                pendulum: !state.pendulum
            };
        case types.sidePendulum:
            return {
                ...state,
                period: period,
                sidePendulum: !state.sidePendulum
            };
        case types.axis:
            return {
                ...state,
                period: period,
                axis: !state.axis
            };
        case types.speed:
            return {
                ...state,
                period: period,
                speed: action.speed
            };

        default:
            return state;
    }
}