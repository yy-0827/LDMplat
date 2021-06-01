const Axios = require("axios")

const URLs = {
    baseURL: "http://101.95.52.51:8082",
    APIKey: "AapdM6Tclh4xMcapitek",
    subscribeCode: "3PASDE1615538850174",
    // 登录接口
    login: "/wlw-application/service/login/auth",
    //设备数据接口
    devicedata: "/wlw-application/service/data/device",
    //业务/健康/告警数据接口
    servicedata: "/wlw-application/service/data"
}

const request = Axios.create({
    baseURL: URLs.baseURL,
    headers: {
        'Content-Type': 'application/json'
    }
})

// axios.interceptors.request.use(config =>{
//     config.token = login().data.Token;
//     return config;
// })

function login() {
    console.log("login")
    return request.post(URLs.login, {
        'APIKey': URLs.APIKey
    });
}

function getdevicedata(token) {
    const data = {
        token,
        'subscribeCode': URLs.subscribeCode
    }
    return request.post(URLs.devicedata, data)
}

function getservicedata(token, gaintype, starttime, endtime) {
    const data = {
        "token": token,
        "subscribeCode": URLs.subscribeCode,
        "gaintype":gaintype,
        "starttime":starttime,
        "endtime":endtime
    }
    return request.post(URLs.servicedata, data)
}


// export default {
//     login,
//     getdevicedata,
//     getservicedata
// }

module.exports = {
    login,
    getdevicedata,
    getservicedata
}