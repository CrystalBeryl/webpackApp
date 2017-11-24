import { Link,IndexLink } from 'react-router';
//let HeaderMenu = require('./HeaderMenu').headerMenu;
import { HeaderMenu } from './HeaderMenu';
import menuConfig from '../configs/menuConfig';
//var HeaderMenu = require('./HeaderMenu');
// var HeaderSecMenu = require('./HeaderSecMenu');
//let HeaderSecMenu = require('./HeaderSecMenu')
let Header = React.createClass({
    logout: function () {

    },

    render: function () {
       /* let logoutStyle ={
            cursor: 'pointer'
        };*/

        return (
            <div>
                <div className="page-header">
                    <div className="page-header-top">
                        <div className="container">
                            <div className="top-menu">
                                <ul className="nav navbar-nav pull-right">
                                    <li className="droddown dropdown-separator">
                                        <span className="separator"></span>
                                    </li>
                                    <li className="dropdown dropdown-user dropdown-dark">
                                        <Link to="javascript:;" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                            <img alt="" className="img-circle" src={"/autoTest/css/assets/admin/layout3/img/avatar9.jpg"} />
                                            <span className="username username-hide-mobile">{this.props.username}</span>
                                        </Link>
                                        <ul className="dropdown-menu dropdown-menu-default">
                                            <li>
                                                <Link to={"javascript:;"} onClick={this.logout}>
                                                    <i className="icon-key"></i> 注 销 </Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="page-header-menu">
                        <div className="container">
                            <div className="hor-menu">
                                <HeaderMenu menuConfig={menuConfig}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contents"></div>
{/*
                {this.props.children && React.cloneElement(this.props.children,{secMenuName:"ewew"})}
*/}

                {this.props.children}
                </div>

        );
    }
});

export { Header };
