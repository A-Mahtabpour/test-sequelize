const sequelize = require("sequelize");
const connection =  require('../ConnectDB');


const Companies = connection.define("Companies", {
  name: {
    type: sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: sequelize.STRING,
    validate:{
      isEmail: true
    }
  },
  logo: sequelize.STRING,
  website: {
  type: sequelize.BLOB,
  validate: {
    isUrl: true
  }
  }
});
module.exports = Companies;
