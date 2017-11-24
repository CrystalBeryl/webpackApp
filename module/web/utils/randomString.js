exports.randomString = function () {
    let num = 16;
    let _char = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
    let randomStr = '';
    for(let i =0; i<num; i++){
        randomStr += _char.charAt(Math.floor(Math.random()*_char.length));
    }
    return randomStr;

};