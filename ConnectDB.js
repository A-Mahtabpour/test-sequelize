
const sequelize = require("sequelize");


const connection = new sequelize("testdb", "root", "newpassword" , {
    dialect: 'mysql',
    define: {
        timestamps: false
    }
});
connection.sync().then(() => console.log("database is connected")).catch((err) => console.log(err));



module.exports = connection;