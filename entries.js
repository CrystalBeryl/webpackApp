module.exports = {
/*  'test': [
    {
      name: "test/index.jsx",
      title: "测试",
	  libPath: "../3rd/lib.js"
    }
  ],*/
    'autoTest': [
        /*{
            name: "autoTest/js/login/login.jsx",
            title: "自动化系统",
            filename: "login.html",
            libPath: "../../3rd/lib.js"
        },*/
        {
            name: "autoTest/js/test2.jsx",
            title: "自动化系统-首页",
            filename: "bootstrap.html",
            libPath: "../../3rd/lib.js"
        }/*,
        {
            name: "autoTest/js/test.jsx",
            title: "自动化系统-首页",
            filename: "test.html",
            libPath: "../../3rd/lib.js"
        }*/
    ],
  'H5': [
    // {
    //   name: "H5/community/v1/dynamicDetail/DynamicDetailPage.jsx", //图文详情页
    //   title: "详情"
    // },
    // {
    //   name: "H5/community/v1/topic/detail.jsx",
    //   title: ""
    // },
    /*{
      name: "H5/H5.jsx",
      title: "h5页面",
      filename: "H5.html",
      libPath: "../../3rd/lib.js"
    }*/
  ],
  'orderFood': [
      {
          name: "orderFood/js/OrderFood.jsx",
          title: "点餐系统",
          filename: "orderFood.html",
          libPath: "../../3rd/lib.js"
      }

  ],
  'operation':[
      {
          name: 'operation/js/Operation.jsx',
          title: '餐饮后台管理系统',
          filename: 'operation.html',
          libPath: "../../3rd/lib.js"
      }
  ],
  'Console': [
    {
      name: "login/Login.jsx" //登录页面
    }, {
      name: 'index.js' // 首页
    // }, {
    //   name: "community/dynamic/list.jsx" //审核列表
    // }, {
    //   name: "community/label/list.jsx" //标签列表
    // }, {
    //   name: "community/report/dynamic/list.jsx" //主题帖审核列表
    // }, {
    //   name: "community/report/reply/list.jsx", //回复帖审核列表
    // }, {
    //   name: "community/topic/list.jsx" //话题管理列表
    // }, {
    //   name: "member/agreement/list.jsx" //用户协议配置列表
    }
  ],
  'Stub': [
    {
      name: "interface/list.jsx",
      title: '模拟数据管理器'
    }
  ]
}