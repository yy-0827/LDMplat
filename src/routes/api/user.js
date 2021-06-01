const express = require("express");
const sendMsg = require("../getSendResult");
const UserServices = require("../../services/userServices")

const router = express.Router();


//前后端测试
router.get("/test?", async (req, res) => {
    const result = await UserServices.getUserItem(req.query);
    res.send(sendMsg.getResult(result));
})

//按页获取用户信息
router.get("/findByPage?", async (req, res) => {
    const result = await UserServices.getUsersByPage(req.query);
    res.send(sendMsg.getResult(result));
})

//搜索单个用户(仅通过id/姓名)
router.get("/search?", async (req, res) => {
    console.log(req.query)
    const result = await UserServices.getUserItem(req.query);
    res.send(sendMsg.getResult(result));
})

//添加用户
router.get("/add?", async (req, res) => {
    
    console.log(req.query)
    const result = await UserServices.addUser(req.query);
    res.send(sendMsg.getResult(result));
})

//删除用户
router.get("/delete?", async (req, res) => {
    
    console.log(req.query)
    const result = await UserServices.delUser(req.query);
    res.send(sendMsg.getResult(result));
})
//修改用户
router.get("/edit?", async (req, res) => {
    
    console.log(req.query)
    const result = await UserServices.editUser(req.query);
    res.send(sendMsg.getResult(result));
})

module.exports = router;