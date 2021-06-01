const allowOrigins = ["http://localhost:8080","http://localhost:8081","null"];

module.exports = function(req,res,next){
    //处理预检请求
    if(req.method === "OPTIONS"){
        res.header(
            'Access-Control-Allow-Methods',
            req.headers["access-control-request-method"]
        );
        res.header(
            'Access-Control-Allow-Headers',
            req.headers["access-control-request-headers"]
        )
    }
    //为请求头添加字段，以允许其跨域访问
    res.header("Access-Control-Allow-Credentials", "true");


    if("origin" in req.headers && allowOrigins.includes(req.headers.origin)){
        res.header("Access-Control-Allow-Origin",req.headers.origin);
    }
    next();
}