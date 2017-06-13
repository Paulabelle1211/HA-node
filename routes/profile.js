var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const context = {
    title: 'Profile',
    name: 'Paula',
    age: '11',
    position: 'student',
    hobbies: ['reading', 'puppies', 'drawing', 'minecraft'],
  }
  res.render('profile', context);
})

module.exports = router;
