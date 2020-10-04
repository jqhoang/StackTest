var mysql = require('mysql');
const host = "127.0.0.1";
const dbPort = 3306;

const connectionPool = mysql.createPool({
    host: host,
    port: dbPort,
    user: "john",
    password: "asecondary1992",
    database: "greenline"
  });
  
  connectionPool.getConnection((error) => {
    if(error) {
        throw error;
    } else {
        console.log("MySQL connection success.");
    }
  });

  module.exports = connectionPool;