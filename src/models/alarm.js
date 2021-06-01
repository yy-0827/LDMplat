const sequelize = require("./db");
const { DataTypes } = require("sequelize");
const { FALSE } = require("node-sass");
// 创建用户列表

const data = {
    di: {
        type: DataTypes.INTEGER,
        allowNull: FALSE
    },
    aln: {
        type: DataTypes.INTEGER,
        allowNull: FALSE
    },
    tt: {
        type: DataTypes.STRING,
        allowNull: FALSE
    },
    ct: {
        type: DataTypes.STRING,
        allowNull: FALSE
    },
    alc: {
        type: DataTypes.INTEGER,
        allowNull: FALSE
    },
    mt: {
        type: DataTypes.INTEGER,
        allowNull: FALSE
    },
    rcs: {
        type: DataTypes.STRING,
        allowNull: FALSE
    },
    rp: {
        type: DataTypes.INTEGER,
        allowNull: FALSE
    },
    ss: {
        type: DataTypes.INTEGER,
        allowNull: FALSE
    },
    als: {
        type: DataTypes.INTEGER,
        allowNull: FALSE
    },
}

const AdminTable = sequelize.define('alarm',
    data, {
    freezeTableName: true,
    createdAt: false,
    updateAt: false
});


module.exports = AdminTable;