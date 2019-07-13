var User_model = require("../models/user_modules.js");

exports.reg = function(req,res,next){
    res.render("reg");
}

exports.do_reg = function(req,res,next){
    var name = req.body.email;
    var pass = req.body.pwd;

    User_model.insert_data(name,pass,function(err,data){
        console.log(data);
        if(data.affectedRows > 0){
            res.redirect("/login");
        }

    })
}


exports.checkname = function(req,res,next){
    var name = req.body.value;
    console.log(name+'name');
    User_model.checkname(name,function(err,data){
        if(data.length > 0){
            res.send("success");
        }else{
            res.send("error");
        }
    })
}

exports.login = function(req,res,next){
    res.render("login");
}
// 验证登录是否成功
exports.do_login = function(req,res,next){
    var name = req.body.email;
    var pass = req.body.pwd;
    User_model.set_all(name,pass,function(err,data){
        // console.log(data);
        if(data.length == 1){
            // req.redirect('index');
            res.send("success");
        }else{
            res.redirect('/login');
        }

    })
}