import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Categories = db.define('categories',{
    title:{
        type:DataTypes.STRING
    }
},{
    freezeTableName:true
});

export default Categories;