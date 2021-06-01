require ("./src/routes/init");
//const updateStore = require("./src/services/storeRawData");
const { updateAlarmData } = require("./src/services/storeMockData")
//const DeServices  = require("./src/services/deviceServices")

//const admin = require("./src/services/adminService")

const testitem = {
  di: '24358993',
  updateobj: '{"id":100,"di":24358993,"st":2,"rt":"2021-05-08 21:05:12","cs":"121.453606743213,31","pr":"上海","rp":57,"ss":3,"vd":"HANGTUO","dt":1,"ft":1,"ip":"192.168.56.142","userid":"13204449","aph":"18969970232","cph":"13262210000","drt":"2002-07-01 22:24:00","dav":"1.0.5"}'
}


//云平台业务接口
//updateStore.updateServiceData("1","2021-05-10 00:00:00","2021-05-11 00:00:00");

//异步函数接口
//getUserName('13204447').then(data =>console.log(data));

//数据库操作
//DeServices.getDvsByPage({page:1,limit:40}).then(data=>console.log(data));

//updateMockData();
//updateAlarmData();
