var express = require('express');
var router = express.Router();
var formidable = require("formidable");
var util = require("util");
var path = require("path");
var fs = require("fs");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/parse',function(req,res,next){
  var form = new formidable.IncomingForm();
    
    form.parse(req, function(err, fields, files) {
      var oldurl = files.sfile.path;
      var newurl = path.parse(__dirname).dir +"/upload/"+files.sfile.name;
        var readStream = fs.createReadStream(oldurl);
        var writeStream = fs.createWriteStream(newurl);

        readStream.pipe(writeStream);
        readStream.on('end',function(){
          fs.unlinkSync(oldurl);
          res.end("文件上传成功");
        });


      /*
      fs.rename(oldurl,newurl,function(err){
        if(err) throw err;

        res.writeHead(200,{"Content-type":"text/plain"});
        res.end("sssss");
      })
      */
  }); 
  return;
})

module.exports = router;
