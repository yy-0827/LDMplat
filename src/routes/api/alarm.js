const express = require("express");
const sendMsg = require("../getSendResult");
const alServices = require("../../services/alarmServices")

const router = express.Router();

//按页获取告警信息
router.get("/findByPage?", async (req, res) => {
    const result = await alServices.getByPage(req.query);
    res.send(sendMsg.getResult(result));
})


//搜索单个告警信息
router.get("/search?", async (req, res) => {
    const result = await alServices.getItem(req.query);
    res.send(sendMsg.getResult(result));
})

//解除告警信息/取消解除
router.get("/cancel", async (req, res) => {
    const result = await alServices.cancelAlarm(req.query);
    res.send(sendMsg.getResult(result));
})

//获取追踪列表
router.get("/gettrack", async (req, res) => {
    const result = await alServices.gettrack(req.query);
    res.send(sendMsg.getResult(result));
})

//获取统计信息
router.get("/gettotal", async (req, res) => {
    const result = await alServices.gettotal();
    res.send(sendMsg.getResult(result));
})

module.exports = router;