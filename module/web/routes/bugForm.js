let bugFormDao = require('../dao/bugFormDao');
let express = require('express');
let router = express.Router();
let fs = require('fs');
let formidable = require('formidable');
let path = require('path');
let randomStr = require('../utils/randomString').randomString();

//根据bugId获取对应bug单的详情
router.get('/queryBugFormById/:bugId',function (req, res, next) {
    bugFormDao.queryBugFormById(req, res, next);
});

router.get('/queryBugList/:pageNo',function (req, res, next) {
    bugFormDao.queryBugList(req, res, next);
});

router.post('/file/upload',function (req, res, next) {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.uploadDir = path.join(__dirname, '../public/temp/');
    let currentUploadDir = path.join(__dirname, '../public/uploads/');
    form.parse(req, function (err, fields, files) {
        if(!err){
            //res.send(files.files.path);
            console.log("文件:"+files.file.path);
            console.log("图片名:"+files.file.name);
            let orginBugFile = files.file;
            fs.rename(orginBugFile.path,currentUploadDir + randomStr + '_' + orginBugFile.name ,function (err) {
                if(!err){
                    res.json({data:{msg:"上传成功"}});
                }else{
                    res.json({data:{msg:"上传失败"}});
                }
            });
        }

    });
});

module.exports=router;