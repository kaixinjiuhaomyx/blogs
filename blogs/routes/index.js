var express = require('express');
var router = express.Router();
var User = require('../controllers/user.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'id' });
});

router.get('/reg',User.reg);
router.post('/reg',User.do_reg); // do_reg 专门接收穿过来的数据 

module.exports = router;
