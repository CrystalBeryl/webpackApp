let express = require('express');
let router = express.Router();
let projectDao = require('../dao/projectDao');

router.get('/queryAlias',function (req, res, next) {
    projectDao.queryProjectsAlias(req, res, next);
});

module.exports = router;