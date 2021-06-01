const { Sequelize } = require("sequelize");

//数据库名称
const sequelize = new Sequelize('mock', 'root', '123123', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
  define: {
    timestamps: false
  }
});

module.exports = sequelize;