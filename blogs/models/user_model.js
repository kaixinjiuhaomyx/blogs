
/*
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'newblog'
});

exports.insert_data = function(name,pass,callback){
  // 操作数据库的代码
  //  需要被外部调用
  connection.connect();
  var sql =  "insert into user(uid,uname,pass) value(null,'"+name+"','"+pass+"')"; // 这种方法不好
  // console.log(sql);
  connection.query(sql, function (error, results, fields) {
      if (error) throw error;
      // console.log('The solution is: ', results[0].solution);
      // console.log(results);
      callback(error,results)
      connection.end();
  });
}
*/
/*
var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'newblog'
});

exports.insert_data = function(name,pass,callback){
  pool.getConnection(function(err, connection) {
    if (err) throw err; // not connected!
    var sql = "insert into user(uname,pass) values(?,?)";
    connection.query(sql,[name,pass], function (error, results, fields) {
      connection.release();
      if (error) throw error;
      callback(error,results);
    })  
  });
}
*/


var db = require("./db.js");

exports.insert_data = function(name,pass,callback){
  var sql = "insert into user(uname,pass) values(?,?)";
  db.query(sql,[name,pass],callback);
}

exports.sel_name_by_pass = function(name,pass,callback){
  var sql = "select * from user where uname=? and pass=?";
  db.query(sql,[name,pass],callback);
}