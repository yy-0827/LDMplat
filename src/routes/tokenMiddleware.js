//用于匹配路径格式
const { pathToRegexp } = require("path-to-regexp");
//存储需要验证token的路径
const neednotTokenApi = [
    { method: "POST", path: "/api/admin/login" },
    { method: "OPTIONS", path:"/api/admin/login"},
    { method: "POST", path: "/api/admin/register" },
    { method: "OPTIONS", path:"/api/admin/register"}
  ];

const cryptor = require("../util/cryptor")

// 解析token
module.exports = (req, res, next) => {
    const apis = neednotTokenApi.filter((api) => {
      const reg = pathToRegexp(api.path);
      return api.method === req.method || reg.test(req.path);
    });
    if (apis.length) {
      console.log("无需验证token")
      next();
      return;
    }

    let token = req.cookies.token;
    if (!token) {
      // 从header的authorization中获取
      token = req.headers.authorization;
    }
    if (!token) {
      //没有认证
      handleNonToken(req, res, next);
      return;
    }
    const level = cryptor.decrypt(token);
    req.query.level = level;
    next();

  };
  //处理没有认证的情况
  function handleNonToken(req, res, next) {
    res
      .status(403)
      .send(getErr("you dont have any token to access the api", 403));
  }