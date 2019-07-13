var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'newblog'
});

exports.query = function(sql,params,callback){
    pool.getConnection(function(err, connection) {
        if (err) throw err; // not connected!
        connection.query(sql,params, function (error, results, fields) {
            connection.release();
            if (error) throw error;
            callback(error,results);
        })  
    });
}