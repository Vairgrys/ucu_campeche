import { atom } from "recoil"

const isVisibleLogin = atom({
    key: 'isVisibleLogin',
    default: false
})


export {isVisibleLogin}