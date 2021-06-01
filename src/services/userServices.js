//获取用户信息
const Users = require("../models/user")
const { Op } = require("sequelize");
const { LibManifestPlugin } = require("webpack");
const Devices = require("../models/device")

//搜索用户
exports.getUserItem = async (item) => {
  let user = await Users.findAll({
    where: {
      [Op.or]: {
        userid: item.userid || null,
        name: item.name || null
      }
    },
    raw: true
  });
  let devicecount = async function (list) {
    for (i = 0, len = list.length; i < len; i++) {
      let obj = await Devices.findAndCountAll({
        where: {
          userid: list[i].userid
        }
      })
      list[i].devicecount = obj.count || 0;
    }
    return list;
  };
  user = await devicecount(user);
  return JSON.parse(JSON.stringify(user));
}

//按页获取用户
exports.getUsersByPage = async ({ page, limit }) => {
  const user = await Users.findAndCountAll({
    offset: (page - 1) * limit,
    limit: +limit
  });
  let devicecount = async function (list) {
    for (i = 0, len = list.length; i < len; i++) {
      let obj = await Devices.findAndCountAll({
        where: {
          userid: list[i].userid
        }
      })
      list[i].dataValues.devicecount = obj.count || 0;
    }
    return list;
  };
  user.rows = await devicecount(user.rows);
  return JSON.parse(JSON.stringify(user));
}

//添加用户
exports.addUser = async (item) => {
  //验证操作权限
  //验证数据是否完整且合理
  const newuser = await Users.create(item);
  return newuser
}

//删除用户
exports.delUser = async (item) => {
  //验证操作权限
  //验证用户存在
  const result = await Users.destroy({
    where: {
      userid: item.userid
    }
  })
  return result
}

//编辑用户信息
exports.editUser = async (obj) => {
  //验证操作权限
  //验证设备存在
  const updateinfo = JSON.parse(obj.updateobj)
  const result = await Users.update(updateinfo, {
    where: {
      userid: obj.userid
    }
  })
  return result
}
