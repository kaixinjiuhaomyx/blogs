var Blog_model = require("../models/blog_model.js");


exports.index = function(req,res,next){
    res.send('login');
    // res.render('index.ejs' ,{ title: 'MM' },);

    // Blog_model.sel_all(function(err,data){
    //     res.render("index.ejs",{
    //             "title":"MM",
    //             "sess":req.session,
    //             "posts":data
    //         });
    // })

}