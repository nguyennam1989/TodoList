/**
 * Created by techmaster on 8/23/15.
 */
    var data=require('./node.js').data;
var Sequelize= require('sequelize');
var database =new Sequelize('postgres://techmaster:admin@localhost:5432/todolist');
//global.db = new Sequelize('todolist',postgres,locahost,);
var Todo=database.define('todos',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primarykey:true
    },
    title : {
        type:Sequelize.STRING
    },
    done:{
        type:Sequelize.BOOLEAN
    }

})
Todo.sync();
module.exports =Todo;