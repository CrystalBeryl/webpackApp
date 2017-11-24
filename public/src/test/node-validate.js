/**
 * Created by qjnup on 2017/2/9.
 */

var validate = {
    isEnglish : function (str) {
        return /^[a-zA-Z]+$/.test(str);
    }
};
module.exports.validate=validate;