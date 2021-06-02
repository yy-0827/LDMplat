const express = require("express");
const app = express();
const bodyParser = require("body-parser")

// const path = require("path");
// const staticRoot = path.resolve(__dirname,"./")
// console.log(staticRoot)
// app.use(express.static(staticRoot));
// app.get("/path",
//     (req,res,next)=>{
//         console.log("1");
//         next(new Error("abc"));
//     }
// );


//处理body中的数据
app.use(bodyParser.json());

//处理跨域错误的中间件
app.use(require("./corsMiddleware"))


//在req对象中注入cookies属性，用于获取所有请求传递过来的cookie
//在res对象中注入cookie方法，用于设置cookie
const cookieParser = require("cookie-parser");
app.use(cookieParser());

//验证token
app.use(require("./tokenMiddleware"))

//处理api请求
app.use("/api/user", require("./api/user"));
app.use("/api/device", require("./api/device"));
app.use("/api/admin", require("./api/admin"));
app.use("/api/alarm", require("./api/alarm"));

//处理错误的中间件
app.use("/path", require("./errorMiddleware"));

const port = 5008;
app.listen(port, () => {
    console.log(`server listen on ${port}`);
})