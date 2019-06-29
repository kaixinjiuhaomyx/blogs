// 注册
exports.reg = function(req,res,next){
    res,render("reg.ejs");
}

exports.do_reg = function(req,res,next){
    var name = req.body.uname;
    var pass = req.body.pass;
    console.log(name);
    console.log(pass);
}