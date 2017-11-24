let getUAInfo = () => {
  var u = navigator.userAgent, app = navigator.appVersion;
  return {
    trident: u.indexOf('Trident') > -1, //IE内核
    presto: u.indexOf('Presto') > -1, //opera内核
    webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
    gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,//火狐内核
    mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
    ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
    android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, //android终端
    iPhone: u.indexOf('iPhone') > -1 , //是否为iPhone或者QQHD浏览器
    iPad: u.indexOf('iPad') > -1, //是否iP  ad
    webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
    weixin: u.indexOf('MicroMessenger') > -1, //是否微信 （2015-01-22新增）
    qq: u.match(/\sQQ/i) == " qq" //是否QQ
  };
};

// window.paramsFromApp = JSON.stringify({
//   cookie: 'token=123123123',
//   memberCode: 'abcabcabc',
//   phoneNo: '13913974411',
//   memberCardId: 'mbercard',
//   from: 'app'
// });

let handleUA = (width = 750) => {
  var version, phoneScale;

  if (/Android (\d+\.\d+)/.test(navigator.userAgent)) {
    version = parseFloat(RegExp.$1);
    if (version > 2.3) {
      phoneScale = parseInt(window.screen.width) / width;
      $("head").append('<meta name="viewport" content="width=' + width + ',minimum-scale=' + phoneScale + ',maximum-scale=' + phoneScale + ',target-densitydpi=device-dpi">');
    } else {
      $("head").append('<meta name="viewport" content="width=' + width + ',target-densitydpi=device-dpi">');
    }
  } else {
    phoneScale = parseInt(window.screen.width) / width;
    $("head").append('<meta name="viewport" content="width=' + width + ',minimum-scale=' + phoneScale + ',maximum-scale=' + phoneScale + ',target-densitydpi=device-dpi">');
    // $("head").append('<meta name="viewport" content="width=' + width + ',user-scalable=no,minimal-ui">');
    //$("head").append('<meta name="viewport" content="width=' + width + ',user-scalable=no,target-densitydpi=device-dpi,minimal-ui">');
  }
};

let cookie = {
  setCookie(name, value) {
    document.cookie = name + "="+ escape (value) + `;path=/`;
  },

  setTotalCookie(cookie) {
    if (typeof cookie == 'object') {
      cookie = JSON.stringify(cookie)
    }
    cookie = cookie.trim();
    cookie.split(',').forEach((c) => {
      document.cookie = c.trim();
    })
  },

  getCookie(name) {
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg))
      return decodeURIComponent(arr[2]);
    else
      return null;
  },
}

let url = {
  getQuery(name) {
    let href = window.location.href;
    let value;
    if (href && ~href.indexOf('?')) {
      let querys = href.split('?')[1];
      if (querys) {
        querys.split('&').forEach(query => {
          if (query.split('=')[0] == name) {
            value = query.split('=')[1];
          }
        });
      }
    }
    return value;
  },

  getQuerys() {
    let href = window.location.href;
    let querys, results = [];
    if (href && ~href.indexOf('?')) {
      let querys = href.split('?')[1];
      if (querys) {
        querys.split('&').forEach(query => {
          results.push({
            name: query.split('=')[0],
            value: query.split('=')[1]
          })
        });
      }
    }
    return results;
  }
};

let app = {

  distinguishUA(handleApp, handleBrowser, paramsFromApp) {
    if (paramsFromApp) {
      if (typeof paramsFromApp == 'string') {
        paramsFromApp = JSON.parse(paramsFromApp);
      }
      paramsFromApp.from == 'app' && handleApp && typeof handleApp == 'function' && handleApp(paramsFromApp);
    } else {
      handleBrowser && typeof handleBrowser == 'function' && handleBrowser(getUAInfo());
    }
  },

  onMessage(events) {
    return (message) => {
      if (!message) {
        return;
      }
      let messageObj = JSON.parse(message);
      Object.keys(events).forEach((name) => {
        if (messageObj.type == name) {
          events[name] && typeof events[name] == 'function' && events[name](messageObj.payload);
        }
      });
    }
  },

  sendMessageToApp(message) {
    if (window.WebViewBridge) {
      window.WebViewBridge.send(message);
    } else if (window.postMessage) {
      window.postMessage(message);
    }
  },

  receiveMessageFromApp(callback) {
    if (window.WebViewBridge) {
      window.WebViewBridge.onMessage = callback;
    } else {
      document.addEventListener('message', function(e) {
        callback(e.data)
      });
    }
  },

  onLogin (callback, paramsFromApp) {
    return (payload) => {
      if (!payload) {
        return;
      }
      cookie.setTotalCookie(payload.cookie);
      window.paramsFromApp = $.extend({}, paramsFromApp, payload);
      callback && typeof callback == 'function' && callback(window.paramsFromApp);
    }
  }
};

let count = {
  addPageCount() {
    // window.onload = function() {
    //   setTimeout(function() {
    //
    //     //$('head').append('<script src="https://s95.cnzz.com/z_stat.php?id=1261146650&web_id=1261146650" language="JavaScript"></script>');
    //   }, 1);
    // }
    var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");
    document.write(unescape("%3Cspan style='display:none;' id='cnzz_stat_icon_1261146650'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s95.cnzz.com/z_stat.php%3Fid%3D1261146650' type='text/javascript'%3E%3C/script%3E"));
  },

  addEventCount(category, action, label, value, nodeid) {
    if (!url) return;
    window._czc && window._czc.push && window._czc.push([
      "_trackEvent",
      category,
      action,
      label,
      value,
      nodeid
    ]);
  },

  getChannelQuerys() {
    let querys = url.getQuerys();
    let channelType, channelId, storeId;
    querys.forEach((query) => {
      if (query.name == 'channelType') {
        channelType = query.value;
      } else if (query.name == 'channelId') {
        channelId = query.value;
      } else if (query.name == 'storeId') {
        storeId = query.value;
      }
    });
    let result = '';
    if (channelType == 1) {
      result += '线下+';
      switch(channelId) {
        case '1': result += '会员卡二维码';break;
        case '2':
          result += '门店：' + storeId;
          break;
        default: result += '其他';
      }
    } else {
      result += '线上+';
      switch(channelId) {
        case '1': result += '微信';break;
        case '2': result += '活动页二维码';break;
        case '3': result += 'AppBanner';break;
        case '4': result += '短信短链接';break;
        case '5': result += '服务号文章';break;
        case '6': result += '微信朋友圈拜年二维码';break;
        default: result += '其他';
      }
    }
    return result;
  }
};

let renderPage = function(Component, params, appChannelType = '2', appChannelId = '3') {
  let querys = url.getQuerys();
  let channelType, channelId;

  querys.forEach((query) => {
    if (query['name'] == 'channelType') {
      channelType = query['value'];
    } else if (query['name'] == 'channelId') {
      channelId = query['value'];
    }
  });

  if (url.getQuery('fromRNWebview') || (channelType == appChannelType && channelId == appChannelId)) {

    let paramsFromSessionStorage = sessionStorage.getItem("paramsFromApp");
    if (paramsFromSessionStorage) {

      ReactDOM.render(<Component
        paramsFromApp={JSON.parse(paramsFromSessionStorage)} {...params}/>, document.getElementById('container'));

    } else if (window.paramsFromApp) {
      ReactDOM.render(<Component
        paramsFromApp={JSON.parse(window.paramsFromApp)} {...params}/>, document.getElementById('container'));
    } else {
      let hasSetParams = false;

      let appParams;
      Object.defineProperty(window, 'paramsFromApp', {
        configurable: true,
        enumerable: true,
        get: function() {
          return appParams;
        },
        set: function (n) {
          if (typeof n == 'string') {
            appParams = JSON.parse(n);
          } else {
            appParams = n;
          }
          if (!hasSetParams) {
            hasSetParams = true;
            ReactDOM.render(<Component paramsFromApp={appParams} {...params}/>, document.getElementById('container'));
          }
        }
      })
    }
  } else {
    ReactDOM.render(<Component paramsFromApp={null} {...params}/>, document.getElementById('container'));
  }
}

window.YYTAlert = function(message, callback) {
  let alertHTML = `<div class="alert-div" id="alertDiv">
    <div class="alert-mask">
      <div class="alert-container">
        <div class="alert-message">
          ${message}
        </div>
        <div id="alertBtn" class="alert-btn">
          确  认
        </div>
      </div>
    </div>
  </div>`;
  $('#alertDiv').remove();
  $('body').append(alertHTML);
  $("#alertBtn").unbind('click').bind('click', () => {
    $('#alertDiv').remove();
    if (callback && typeof callback == 'function') {
      callback();
    }
  })

}

var Common = {
  roleMapper: {
    "100": "普通会员",
    "200": "悠店员",
    "300": "悠店长",
    "400": "管理员"
  },

  SUCCESS: 10000,

  downloadAppURL: "http://a.app.qq.com/o/simple.jsp?pkgname=com.yuyuto.yuyuto",

  cookie,

  app,

  getUAInfo,

  url,

  count,

  handleUA,

  renderPage
}

module.exports = Common;