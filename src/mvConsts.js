/** * Created by mityabeldii on 10.06.2017. */import * as ProfileActions from './redux/actions/MainActions'// Valuesexport const littleRadius = window.height *  0.01056;export const bigRadius = window.height * 0.0176;export const fontHeight = window.height * 0.03;export const colors = {    maincolor: "#ffffff",    dark: "#414141",    lightdark: "#9f9f9f",    second: "#41b75d",    frame: "#0a7ddc",    contrast: "#df422b",    back: "#eeeeee",    border: "#cbcbcb",    }export const types = {    setPlatformAngle: "setPlatformAngle",    setPlatformRotation: "setPlatformRotation",}export const actions = {    ProfileActions: ProfileActions,}