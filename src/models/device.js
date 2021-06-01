const sequelize = require("./db");
const { DataTypes } = require("sequelize");
const { FALSE, TRUE } = require("node-sass");
const UserTable = require("./user")
// 创建用户列表

const data = {
    di:{
        type: DataTypes.INTEGER,
        allowNull: FALSE
    },
    st:{
        type: DataTypes.INTEGER,
        allowNull: FALSE
    },
    rt:{
        type: DataTypes.STRING,
        allowNull: FALSE
    },
    ocs:{
        type: DataTypes.STRING,
        allowNull: FALSE
    },
    rd:{
        type: DataTypes.INTEGER,
        allowNull: FALSE
    },
    wt:{
        type: DataTypes.STRING,
        allowNull: FALSE
    },
    pr:{
        type: DataTypes.STRING,
        allowNull: FALSE
    },
    vd:{
        type: DataTypes.STRING,
        allowNull: TRUE
    },
    dt:{
        type: DataTypes.INTEGER,
        allowNull: FALSE
    },
    ip:{
        type: DataTypes.STRING,
        allowNull: FALSE
    },
    userid:{
        type: DataTypes.STRING,
        allowNull: FALSE
    },
    aph:{
        type: DataTypes.STRING,
        allowNull: FALSE
    },
    cph:{
        type: DataTypes.STRING,
        allowNull: FALSE
    },
    drt:{
        type: DataTypes.STRING,
        allowNull: FALSE
    },
    dut:{
        type: DataTypes.STRING,
        allowNull: FALSE
    },
    dav:{
        type: DataTypes.STRING,
        allowNull: FALSE
    }
}

const DeviceTable = sequelize.define("device",
    data,{
        freezeTableName: true,
        createdAt: false,
        updateAt: false
    });


module.exports = DeviceTable;