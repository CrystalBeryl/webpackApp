/*let mysqlConfig = require('../configs/mysql');
let mysql = require('mysql');*/
let $sql = require('../mapping/bugFormMapping');
let pool = require('../configs/mysql');


module.exports = {
    queryBugFormById: function (req, res, next) {
        pool.getConnection(function (err,connection) {
            let bugId = req.query.bugId || req.params.bugId;
            connection.query($sql.queryBugFormById,[bugId],function (err,results) {
                if(err) throw err;
                if(results){
                    res.json(results);
                }
                connection.release();
            });
        });
    },
    queryBugList: function (req, res, next) {
        pool.getConnection(function(err, connection){
            let pageNo = req.query.pageNo || req.params.pageNo;
            connection.query($sql.queryBugList,[10*(pageNo-1)], function (err, results) {
                    if (err) throw err;
                    if (results) {
                        connection.query($sql.queryBugCounts, function (err2, results2) {
                            if(err2) throw err2;
                            if(results2){
                                let totalPageNums = [];
                                for(let i=1; i<=Math.floor(results2[0].counts/10); i++){
                                    totalPageNums.push(i);
                                }
                                res.json({data:{lists:results,counts:results2,totalPageNums:totalPageNums}})
                            }
                        });
                    }
                    connection.release();
                });
            });
    },

};

