
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
  var sql =  "insert into user(uid,uname,pass) value(null,'"+name+"','"+pass+"')";
  // console.log(sql);
  connection.query(sql, function (error, results, fields) {
      if (error) throw error;
      // console.log('The solution is: ', results[0].solution);
      // console.log(results);
      callback(error,results)
      connection.end();
  });
}
