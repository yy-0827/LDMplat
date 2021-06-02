const express = require("express");
const adminServ = require("../../services/adminService")
const { asyncHandler } = require("../getSendResult");
const router = express.Router();
const cryptor = require("../../util/cryptor")

//登录
router.post("/login",
  asyncHandler(async (req, res) => {
    const result = await adminServ.login(req.body.loginId, req.body.loginPwd);
    if (result && result.level) {
      let value = result.level;
      value = cryptor.encrypt(value.toString());
      //登录成功
      res.cookie("token", value,
        {
          path: "/",
          domain: "localhost",
          maxAge: 24 * 3600 * 1000, //毫秒数
        }
      );
      res.header("authorization", value);
    }
    return result;
  }
  )
)

//注册
router.post("/register",
  asyncHandler(async (req, res) => {
    const result = await adminServ.register(req.body);
    if (result && result.level) {
      let value = result.level;
      value = cryptor.encrypt(value.toString());
      //登录成功
      res.cookie("token", value,
        {
          path: "/",
          domain: "localhost",
          maxAge: 24 * 3600 * 1000, //毫秒数
        }
      );
      res.header("authorization", value);
    }
    return result;
  }
  )
)

module.exports = router;