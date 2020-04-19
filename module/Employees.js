const sequelize = require("sequelize");
const connection =  require('../ConnectDB');
const Companies = require('./Companies')


const Employees = connection.define("Employees", {
  firsName: {
    type: sequelize.STRING,
    allowNull: false,
  },
  LastName: {
    type: sequelize.STRING,
    allowNull: false,
  },
  companyId: {
    type: sequelize.INTEGER,
    references: {
      model: Companies,
      key: "id",
    },
  },
  email: {
    type: sequelize.STRING,
    validate: {
      isEmail: true
    }
  },
  phone: sequelize.INTEGER,
});

module.exports = Employees;
