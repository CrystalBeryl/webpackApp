let pool = require('../configs/mysql');
let $sql = require('../mapping/projectMapping');

module.exports = {
    queryProjectsAlias: function (req, res, next) {
        pool.getConnection(function (err,connection) {
            connection.query($sql.queryProjectsAlias,function (err,results) {
                if(!err){
                    res.json({data:{projectsAlias: results}});

                }
            });

            connection.release();

        });
    }
};