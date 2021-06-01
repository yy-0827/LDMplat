//获取设备信息
const Devices = require("../models/device")
const Alarm = require("../models/alarm")
const { Op } = require("sequelize");

//搜索设备
exports.getDvsItem = async (item) => {
  //地图用例
  if (item.searchaim) {
    let filterid = async function (id, aim) {
      let res = [];
      if (id) {
        if (aim == 'aln') {
          //搜索告警id
          res = await Alarm.findOne({
            where: {
              aln: id
            }
          });
          if (!res) {
            return "该告警id不存在"
          }
          aim = 'di';
          id = res.di;
        }
        //搜索用户id
        else if (aim == 'userid') {
          res = await Devices.findAll({
            where: {
              userid: id
            }
          });
          return res = res.length ? res : "无该用户的设备信息";
        }
        if (aim == 'di') {
          //搜索设备id
          res = await Devices.findAll({
            where: {
              di: id
            }
          })
          return res = res.length ? res : "该设备不存在/设备无告警信息"
        }
      } else {
        //并没有输入id
        res = await Devices.findAll({
        })
        return res = res.length ? res : "无任何设备信息"
      }
    };
    let addalarmlist = async function (list) {
      for (i = 0, len = list.length; i < len; i++) {
        list[i].dataValues.alarmlist = await Alarm.findAll({
          where: {
            [Op.and]:{
               di: list[i].di,
               mt: 1
            }
          }
        }) || 'null';
      }
      return list;
    };
    let devicelist = await filterid(item.searchid, item.searchaim);
    devicelist = await addalarmlist(devicelist)
    return devicelist
  }
  const device = await Devices.findAll({
    where: {
      [Op.or]: {
        di: item.di || null,
        vd: item.vd || null,
        dt: item.dt || null,
        ip: item.ip || null,
        userid: item.userid || null
      }
    },
    raw: true
  });
  return JSON.parse(JSON.stringify(device));
}

//按页获取设备
exports.getDvsByPage = async ({ page, limit }) => {
  const device = await Devices.findAndCountAll({
    offset: (page - 1) * limit,
    limit: +limit
  });
  return JSON.parse(JSON.stringify(device));
}


//获取一个用户的所有设备
exports.findHisDevices = async (userid) => {
  let list = [];
  const device = await Devices.findAll({
    where: {
      userid,
    }
  })
  if (device) {
    list = device.map(item => {
      return item.di
    })
  }
  return list
}

//添加设备
exports.addDevice = async (item) => {
  //验证操作权限
  //验证数据是否完整且合理
  const newdevice = await Devices.create(item);
  return newdevice
}

//删除设备
exports.delDevice = async (item) => {
  //验证操作权限
  //验证设备存在
  const result = await Devices.destroy({
    where: {
      di: item.di
    }
  })
  return result
}

//编辑设备信息
exports.editDevice = async (obj) => {
  //验证操作权限
  //验证设备存在
  const updateinfo = JSON.parse(obj.updateobj)
  const result = await Devices.update(updateinfo, {
    where: {
      di: obj.di
    }
  })
  return result
}
