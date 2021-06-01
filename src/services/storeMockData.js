//const userTable = require("../models/user")
//const deviceTable = require("../models/device")
const sequelize = require("../models/db");
const { adminlist,userlist, devicelist } = require("../mock/index")
let alarmlist = require("../mock/alarmeg")
const md5 = require("md5")

//更新数据库表头信息
async function updateUserTable() {
    const userTable = await require("../models/user")
    await userTable.sync({ alter: true });
    console.log('用户列表表头信息写入完成')
    return userTable
}

async function updateDeviceTable() {
    const deviceTable = await require("../models/device")
    await deviceTable.sync({ alter: true });
    console.log('设备列表表头信息写入完成')
    return deviceTable
}

async function updateAdminTable() {
    const adminTable = await require("../models/admin")
    await adminTable.sync({ alter: true });
    console.log('管理员列表表头信息写入完成')
    return adminTable
}

async function updateAlarmTable() {
    const alarmTable = await require("../models/alarm")
    await alarmTable.sync({ alter: true });
    console.log('告警列表表头信息写入完成')
    return alarmTable
}


//更新数据库
function updateStaticInfo(datalist, Table) {
    console.log(typeof(datalist));
    datalist.map(async (val, i) => {
        if(val.psw){
            val.psw = md5(val.psw);
        }
        const obj = Table.build({
            ...val
        });
        await obj.save();
        console.log(`写入第${i + 1}行数据`)
    })
}

//更新自定义表
async function updateMockData() {
    const userTable = await updateUserTable();
    const deviceTable = await updateDeviceTable();
    await updateStaticInfo(userlist, userTable);
    await updateStaticInfo(devicelist, deviceTable);
    return true
}

//更新管理员列表
async function updateAdminData() {
    const adminTable = await updateAdminTable();
    await updateStaticInfo(adminlist, adminTable);
    return true
}

async function updateAlarmData() {
    const alarmTable = await updateAlarmTable();
    await updateStaticInfo(alarmlist.createlist, alarmTable);
    return true
}

module.exports = {
    updateMockData,
    updateAdminData,
    updateAlarmData
}