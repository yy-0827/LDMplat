const api = require("../routes/cloudapi");
const { DataTypes } = require("sequelize");
const defineRawTable = require("../models/rawdata")


// 获取token
async function getToken() {
    let token = "";
    if (token) {
        return token;
    }
    return api.login().then(data =>
        token = data.data.Token
    ).catch(err => {
        console.log('登录出错', err)
    })
}

// 获取设备数据列表
async function getRawDeviceData() {
    let datalist = {};
    let token = await getToken();
    try {
        let data = await api.getdevicedata(token);
        datalist = data.data.Result;
        return datalist;
    } catch (err) {
        console.log('获取数据出错', err)
    }
}

// 获取业务数据列表
async function getRawServiceData(gaintype, starttime, endtime) {
    let datalist = {};
    let token = await getToken();
    try {
        let data = await api.getservicedata(token, gaintype, starttime, endtime);
        datalist = data.data.Result;
        console.log('getservicedata', 'status:',data.status,'config:',data.config);
        return datalist;
    } catch (err) {
        console.log('获取数据出错', err)
    }
}

//更新数据表的表头信息
async function getRawTable(datalist, tablename) {
    let Table = {};
    let data = {};
    console.log("datalist",datalist[0])
    for (key in datalist[0]) {
        data[key] = {
            type: DataTypes.STRING
        };
    }
    data["pi.location"] = {
        type: DataTypes.STRING
    };
    Table = await defineRawTable(data, tablename);
    return Table;
}


// 更新静态设备信息
function updateStaticInfo(datalist, Table) {
    datalist.map(async (val, i) => {
        const obj = Table.build({
            ...val
        });
        await obj.save();
        console.log(`写入第${i + 1}行数据`)
    })
}

//更新静态表
async function updateDeviceData() {
    let data = await getRawDeviceData();
    let Table = getRawTable(data, 'rawdevicedata');
    await updateStaticInfo(data, Table);
}

//更新动态表
async function updateServiceData(gaintype, starttime, endtime) {
    let data = await getRawServiceData(gaintype, starttime, endtime);
    let Table = await getRawTable(data, 'rawservicedata');
    await updateStaticInfo(data, Table);
}



module.exports = {
    getRawDeviceData,
    updateDeviceData,
    updateServiceData
}
