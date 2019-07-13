var mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  password        : '',
  database        : 'blog_2'
});

exports.query = function(sql,params,callback){
    pool.getConnection(function(err,connection){
        if (err) throw err;
        connection.query(sql,params,function(error,results,fields){
            
            if(error) throw error;
            callback&&callback(error,results);
            connection.release();
        })
    })





    // pool.query(sql,params,function (error, results, fields) {
    //     if (error) throw error;
    //     // console.log('The solution is: ', results[0].solution);
    //     callback(error,results);
    // });
}