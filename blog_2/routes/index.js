var express = require('express');
var router = express.Router();
var User = require('../controllers/user.js');
var Bolg = require('../controllers/bolg.js');


/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

function checkLogin(req,res,next){
  if(req.session){
    console.log('已登录');
    next()
  }else{
    console.log('未登录');
    res.redirect('/login');
  }
}

router.get('/',checkLogin);
router.get('/',Bolg.index);

router.get('/reg',User.reg);
router.post('/reg',User.do_reg);

router.get('/login',User.login);
router.post('/login',User.do_login);

router.post('/checkname',User.checkname);

router.get('/unlogin',User.unlogin);

// router.get('/index',);

module.exports = router;
