//获取告警信息
const Alarm = require("../models/alarm")
const Device = require("../models/device")
const User = require("../models/user")
const { Op } = require("sequelize");
const deviceServices = require("./deviceServices");


// const i = {
//   searchaim: 'userid',
//   searchid: '123',
//   searchtype: '200',
//   daterange: '2021-05-11T16:00:00.000Z',
//   alltime: 'true',
//   alldate: 'true',
//   unbind: 'false',
//   timerange: ['2021-05-25T15:31:51.000Z', '2021-05-25T15:57:59.000Z']
// }

//搜索告警信息
exports.getItem = async (item) => {
  let alarm = [];
  let list = {};
  let filterid = async function (id, aim) {
    let res = [];
    if (id) {
      //搜索用户id
      if (aim == 'userid') {
        const deviceslist = await deviceServices.findHisDevices(id);
        if (!deviceslist.length) {
          return res = "该用户没有设备/该用户不存在";
        }
        res = await Alarm.findAll({
          where: {
            di: deviceslist
          }
        });
        return res = res.length ? res : "该设备无告警信息";
      } else if (aim == 'aln') {
        //搜索告警id
        res = await Alarm.findAll({
          where: {
            aln: id
          }
        });
        return res = res.length ? res : "该告警id不存在";
      } else {
        //搜索设备id
        res = await Alarm.findAll({
          where: {
            di: id
          }
        })
        return res = res.length ? res : "该设备不存在/设备无告警信息"
      }
    } else {
      //并没有输入id
      res = await Alarm.findAll({
      })
      return res = res.length ? res : "无任何告警信息"
    }
  }
  let filtertype = async function (type, list) {
    let res = [];
    if (!type) {
      return list;
    }
    res = list.filter((value) => {
      if (value.alc == +item.searchtype) {
        return true
      }
    });
    return res = res.length ? res : "无该类型告警信息";
  }
  let filtertime = async function (list, item) {
    let res = [];
    //限定日期
    if (item.alldate == 'false') {
      res = list.filter((value) => {
        return value.tt.split(' ')[0] == item.daterange;
      })
      if (!res.length) {
        return res = "该日内无告警信息"
      }
    }
    //所有日期及处理后的限定日期
    if (item.alltime == 'false') {
      let start = +(item.timerange[0] + '').split(':').join('');
      let end = +(item.timerange[1] + '').split(':').join('');
      res = list.filter((value) => {
        let time = +value.tt.split(' ')[1].split(':').join('');
        return start <= time && end >= time;
      })
      if (!res.length) {
        return res = "该时间段内无告警信息"
      }
    }
    return list;
  }
  list = await filterid(item.searchid, item.searchaim);
  if (!list instanceof Array) {
    return list
  }
  list = await filtertype(item.searchtype, list);
  if (!list instanceof Array) {
    return list
  }
  list = await filtertime(list, item);
  if (!list instanceof Array) {
    return list
  }
  return JSON.parse(JSON.stringify(list));
}

//按页获取信息
exports.getByPage = async ({ page, limit }) => {
  const alarm = await Alarm.findAndCountAll({
    offset: (page - 1) * limit,
    limit: +limit
  });
  return JSON.parse(JSON.stringify(alarm));
}


//解除告警/取消解除
exports.cancelAlarm = async (info) => {
  //验证操作权限
  //验证设备存在
  let als = info.als == "true" ? 1 : 0;
  const result = await Alarm.update({ als: als }, {
    where: {
      aln: info.aln
    }
  })
  return result
}

//获取追踪列表
exports.gettrack = async (item) => {
  console.log(item.id)
  const list = await Alarm.findAll({
    where: {
      [Op.and]: {
        di: item.di,
        alc: 100
      }
    }
  })
  list.sort((a, b) => {
    return (+a.tt.split(/\D/).join("")) - (+b.tt.split(/\D/).join(""));
  })
  return list.length ? list : "无I型信息"
}

//获取统计消息
exports.gettotal = async () => {
  let res = {}
  async function count(res) {
    res.usercount = await User.findAndCountAll({});
    res.devicecount = await Device.findAndCountAll({});
    res.rundevice = await Device.findAndCountAll({ where: { st: 1 } });
    res.alarmcount = await Alarm.findAndCountAll({ where: { mt: 1 } });
    res.alarmbind = await Alarm.findAndCountAll({ where: { [Op.and]: { mt: 1, als: 1 } } });
    return res
  }
  await count(res);
  res.usercount = res.usercount.count;
  res.devicecount = res.devicecount.count;
  res.rundevice = res.rundevice.count;
  res.alarmcount = res.alarmcount.count;
  res.alarmbind = res.alarmbind.count;
  return res
}