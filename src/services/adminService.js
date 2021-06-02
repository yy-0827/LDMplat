//管理员操作（修改用户信息）


const adminTable = require("../models/admin")
const { Op } = require("sequelize");
const md5 = require("md5")
//管理员权限 默认为3
//1：可添加/编辑/删除设备/用户，2：可处理预警信息，3：可查看信息
const level = 3;


exports.judgelevel = function (code) {
    let arr = ["1jqx", "2jqx", "3jqx"];
    return arr.indexOf(code) + 1;
}


exports.login = async function (id, psw) {
    let res = {};
    const admin = await adminTable.findOne({
        where: {
            [Op.or]: {
                loginId: id,
                name: id
            }

        }
    });
    if (admin) {
        if (admin.loginPwd == md5(psw)) {
            return admin.toJSON();
        }
        res.userexist = true
        return res
    }
    res.userexist = false
    return res
};

exports.register = async function (item) {
    //判断用户是否存在
    let admin = await adminTable.findOne({
        where: {
            loginId: item.loginId,
        }
    });
    if (admin) {
        return "该用户已存在"
    }
    const level = exports.judgelevel(item.invitecode);
    if (level) {
        item.level = level;
        item.loginPwd = md5(item.loginPwd);
        admin = await adminTable.create(item);
        console.log(`注册成功，权限为${level}`)
        return { id: admin.id, name: admin.name, level: admin.level }
    }
    return "邀请码不正确";
};
