const sequelize = require("./db");

//创建原始信息列表
async function defineRawTable(data,tablename){
    const RawDataTable = sequelize.define(tablename,
        data,{
            createdAt: false,
            updatedAt: false,
            freezeTableName: true
        });
    (async function(){
    await RawDataTable.sync({ alter: true });
    console.log("模拟模型表刚刚(重新)创建！");
    })();
    return RawDataTable
}

module.exports = defineRawTable
