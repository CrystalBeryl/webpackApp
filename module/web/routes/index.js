
var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
/*  var distDir = path.resolve(__dirname, '../views', req.path.substr(1) + '.html');
  if (fs.existsSync(distDir)) {
    res.render(distDir);
  } else {
    next();
  }
 */
res.render(path.resolve(__dirname, '../../../public/dist/autoTest/html/index.html'));
next();

});
router.get('/bootstrap', function(req, res, next) {
    /*  var distDir = path.resolve(__dirname, '../views', req.path.substr(1) + '.html');
     if (fs.existsSync(distDir)) {
     res.render(distDir);
     } else {
     next();
     }
     */
    res.render(path.resolve(__dirname, '../../../public/dist/autoTest/html/bootstrap.html'));

});
module.exports = router;
