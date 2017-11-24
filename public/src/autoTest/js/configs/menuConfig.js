export default [
    {
        title: '我的主页',
        link: '/index'
    },
    {
        title: '项目管理工具',
        secMenu: {
            title: '项目流程管理',
            menus: [
                {link:'/form/bugList', className:'icon-tag',secMenuName:'bug列表'},
                {link:'/project/projectList',className:'icon-handbag',secMenuName:'项目列表'},
                {link:'/form/bugCreate',className:'icon-pencil',secMenuName:'创建bug单'},
                {link:'/project/projectCreate',className:'icon-doc',secMenuName:'创建项目'}
            ]
        }}

]