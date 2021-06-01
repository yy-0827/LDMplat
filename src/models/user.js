const sequelize = require("./db");
const { DataTypes } = require("sequelize");
const { FALSE } = require("node-sass");
//const DeviceTable = require("./device")
// 创建用户列表

const data = {
    userid: {
        type: DataTypes.INTEGER,
        allowNull: FALSE
    },
    name: {
        type: DataTypes.STRING,
        allowNull: FALSE
    },
    nick: {
        type: DataTypes.STRING,
        allowNull: FALSE
    },
    sex: {
        type: DataTypes.BOOLEAN,
        allowNull: FALSE
    },
    bir: {
        type: DataTypes.STRING,
        allowNull: FALSE
    },
    psw: {
        type: DataTypes.STRING,
        allowNull: FALSE
    },
    ph: {
        type: DataTypes.STRING,
        allowNull: FALSE
    }
}

const UserTable = sequelize.define('user',
    data, {
    freezeTableName: true,
    createdAt: false,
    updateAt: false
});

//UserTable.hasMany(DeviceTable);


module.exports = UserTable;