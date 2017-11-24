/*
var image = {
    url: 'http://baidu.com',
    dataUrl: 'data'
}
var images = [{
    url: '1'
}, {
    dataUrl: '1'
}, {
    url: '1'
}];

var reduce = images.reduce((pre, curr, i, array) => {
    if (pre) {
        return isValid(curr);
    } else {
        return false;
    }
},true)


let uploadImages = images.filter(image => !!image.dataUrl);
let uploaded = uploadImages.map(image => ({
    url: image.dataUrl + 'upload'
}));
let latest = images.map(image => ({
    url: image.url || uploaded.splice(0, 1).url
}))

images.includes()

document.write('');*/


import * as jQuery from 'jquery';
import * as bootstrap from 'bootstrap';
