const sequelize = require("./db");
const { DataTypes } = require("sequelize");
const { FALSE } = require("node-sass");
// 创建用户列表

const data = {
    loginId: {
        type: DataTypes.INTEGER,
        allowNull: FALSE
    },
    name: {
        type: DataTypes.STRING,
        allowNull: FALSE
    },
    loginPwd: {
        type: DataTypes.STRING,
        allowNull: FALSE
    },
    level:{
        type: DataTypes.INTEGER,
        allowNull: FALSE
    }
}

const AdminTable = sequelize.define('admin',
    data, {
    freezeTableName: true,
    createdAt: false,
    updateAt: false
});


module.exports = AdminTable;