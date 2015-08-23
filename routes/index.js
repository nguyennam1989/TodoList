var express = require('express');
var router = express.Router();
var Todo = require('../models/todo.js');

/* GET home page. */
router.get('/', function(req, res) {
  console.log('home');
  Todo.findAll({order : 'id'}).then(function(results) {
    res.render('index', { data : results });
  })
});

router.post('/', function (req,res) {
  var newTodo = req.body.todo;
  Todo.create({title : newTodo}).then(function () {
    res.redirect('/');
  }).catch(function(error){
    res.redirect('/');
  })
});

router.get('/done/:id', function (req,res) {
  Todo.update({done :true}, {where : {
    id :req.params.id
  }}).then(function () {
    res.redirect('/');
  })
})

router.get('/delete/:id', function (req,res) {
  Todo.destroy({
    where : {
      id : req.params.id
    }
  }).then(function () {
    res.redirect('/');
  })
})

module.exports = router;