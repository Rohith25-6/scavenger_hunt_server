const {Sequelize, DataTypes} = require("sequelize");
const sequelize =require("../config/dbConnection")

const User = sequelize.define("User", {
    userName : {
        type: DataTypes.STRING,
        allowNull: false
    },
    email : {
        type: DataTypes.STRING,
        allowNull: false
    },
    password : {
        type: DataTypes.STRING,
    },
    isAdmin : {
        type: DataTypes.BOOLEAN, 
        allowNull: false, 
        defaultValue: false
    },
    gameScore : {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
        // defaultValue : ['0','0','0']
    }
});

module.exports = { User };

