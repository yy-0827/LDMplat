const express = require("express");
const sendMsg = require("../getSendResult");
const deServices = require("../../services/deviceServices")

const router = express.Router();


//按页获取设备信息
router.get("/findByPage?", async (req, res) => {
    const result = await deServices.getDvsByPage(req.query);
    res.send(sendMsg.getResult(result));
})

//搜索设备列表(仅通过di/vd厂商/dt设备型号/用户id)
router.get("/search?", async (req, res) => {
    const result = await deServices.getDvsItem(req.query);
    res.send(sendMsg.getResult(result));
})

//添加设备
router.get("/add?", async (req, res) => {
    const result = await deServices.addDevice(req.query);
    res.send(sendMsg.getResult(result));
})

//删除设备
router.get("/delete?", async (req, res) => {
    const result = await deServices.delDevice(req.query);
    res.send(sendMsg.getResult(result));
})
//修改设备
router.get("/edit?", async (req, res) => {
    const result = await deServices.editDevice(req.query);
    res.send(sendMsg.getResult(result));
})

module.exports = router;