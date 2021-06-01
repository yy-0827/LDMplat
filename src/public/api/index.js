import Axios from "axios";
//const Axios = require("axios");
Axios.defaults.withCredentials = true;//允许请求的时候带上cookie

const URLs = {
    baseURL: "http://localhost:5008",
    //登录api
    login: "/api/admin/login",
    //注册api
    register: "/api/admin/register",
    //用户api
    findUsersByPage: "/api/user/findByPage",
    searchUser: "/api/user/search?",
    addUser: "/api/user/add",
    delUser: "/api/user/delete",
    updateUser: "/api/user/edit",
    //设备api
    findDevicesByPage: "/api/device/findByPage",
    searchDevice: "/api/device/search?",
    addDevice: "/api/device/add",
    delDevice: "/api/device/delete",
    updateDevice: "/api/device/edit",
    //告警api
    findAlarmsByPage:  "/api/alarm/findByPage",
    searchAlarm: "/api/alarm/search?",
    cancelAlarm: "/api/alarm/cancel",
    //追踪信息
    gettrack:"/api/alarm/gettrack",
    //数据统计
    gettotal:"/api/alarm/gettotal"
}

const request = Axios.create({
    baseURL: URLs.baseURL,
    headers: {
        'Content-Type': 'application/json'
    }
})

//登录
function login(loginId, loginPwd) {
    const data = { loginId, loginPwd };
    return request.post(URLs.login,data)
}
//注册
function register(item) {
    return request.post(URLs.login,item)
}

//统计数据
function statistics(){
    return request.get(URLs.gettotal);
}

//对用户的操作
function getUserList(page, limit) {
    return request.get(URLs.findUsersByPage, {
        params: {
            page,
            limit
        }
    })
}

function searchUser(item) {
    return request.get(URLs.searchUser, {
        params: item
    })
}

function addUser(item) {
    return request.get(URLs.addUser, {
        params: item
    })
}

function delUser(userid) {
    return request.get(URLs.delUser, {
        params: {
            userid,
        }
    })
}

function updateUser(userid, updateobj) {
    return request.get(URLs.updateUser, {
        params: {
            userid,
            updateobj
        }
    })
}


//对设备的操作
function getDeviceList(page, limit) {
    return request.get(URLs.findDevicesByPage, {
        params: {
            page,
            limit
        }
    })
}

function searchDevice(item) {
    return request.get(URLs.searchDevice, {
        params: item
    })
}

function addDevice(item) {
    return request.get(URLs.addDevice, {
        params: item
    })
}

function delDevice(di) {
    return request.get(URLs.delDevice, {
        params: {
            di
        }
    })
}

function updateDevice(di, updateobj) {
    return request.get(URLs.updateDevice, {
        params: {
            di,
            updateobj
        }
    })
}

function getAlarmList(page, limit) {
    return request.get(URLs.findAlarmsByPage, {
        params: {
            page,
            limit
        }
    })
}

function searchAlarm(item) {
    return request.get(URLs.searchAlarm, {
        params: item
    })
}

function cancelAlarm(aln,als) {
    return request.get(URLs.cancelAlarm, {
        params: {
            aln,
            als
        }
    })
}

function gettrack(di){
    return request.get(URLs.gettrack, {
        params: {
            di
        }
    })
}

export default {
    login,
    register,
    getUserList,
    searchUser,
    addUser,
    delUser,
    updateUser,
    getDeviceList,
    searchDevice,
    addDevice,
    delDevice,
    updateDevice,
    getAlarmList,
    searchAlarm,
    cancelAlarm,
    gettrack,
    statistics
}