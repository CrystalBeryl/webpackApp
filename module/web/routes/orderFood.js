let express = require('express');
let router = express.Router();
let path = require('path');

router.get('/*', function (req, res, next) {
    res.render(path.resolve(__dirname, '../../../public/dist/orderFood/html/orderFood.html'));
    next();
});
module.exports = router;