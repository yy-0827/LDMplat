const Mock = require('mockjs')
//const { createNamespacedHelpers } = require('vuex')

Mock.Random.extend({
    phone: function () {
        var phonePrefixs = ['132', '135', '138', '139', '158', '159', '189']
        return this.pick(phonePrefixs) + Mock.mock(/\d{8}/)
    },
    ip: function () {
        var ipPrefixs = '192.168.56.'
        return this.pick(ipPrefixs) + Mock.mock('@integer(0, 255)')
    },
    CoordinateSystem: function () {
        var arr = [Mock.mock('@float(121.109, 121.737)'), Mock.mock('@float(30.885, 31.292)')]
        return arr.join(",");
    }
})


const userlist = Mock.mock({
    'user|20': [{
        'userid|+1': 13204445,
        'name': '@cname',
        'nick': '@cword(3,5)',
        'sex|0-1': 0,
        'bir': '@date',
        'psw': '@string("lower", 6)',
        'ph': '@phone'
    }]
}).user;

const devicelist = Mock.mock({
    'de|100': [{
        'di|+1': 20210001,//设备号
        'st|1': 1,//设备状态
        'rt': '@now',//更新时间
        'ocs': '@CoordinateSystem',//当前经纬度
        'rd': 500,//电子围栏半径 单位：米
        'wt': 1,//设备运行时间，默认为1
        'pr': '上海',//所在城市
        'vd': 'HANGTUO',//设备厂商
        'dt|1-2': 1,//设备型号
        'ip': '@ip',//IP地址
        'userid|13204445-13204464': 13204445,//设备用户id
        'aph': '@phone',//告警联系人电话
        'cph': '@phone',//社区联系人电话
        'drt': '@datetime',//设备注册时间
        'dut': '@datetime',//设备更新时间
        'dav': '1.0.5' //设备软件版本号
    }]
}).de;


const adminlist =
    [{
        loginId: "123456",
        loginPwd: "202cb962ac59075b964b07152d234b70",//123
        name: "yy",
        level: "1"
    }, {
        loginId: "234567",
        loginPwd: "e10adc3949ba59abbe56e057f20f883e",//123456
        name: "abc",
        level: "2"
    }];




module.exports = {
    adminlist,
    userlist,
    devicelist,
    adminlist
}