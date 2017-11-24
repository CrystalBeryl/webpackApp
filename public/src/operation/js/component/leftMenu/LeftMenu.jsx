
import {SideBar} from './SideBar'
let LeftMenu = React.createClass({
    render(){
        return (
            <div className="col-md-3 left_col">
                <div className="left_col scroll-view">

                    <div className="navbar nav_title" style={{border: 0}}>
                        <a href="index.html" className="site_title">
                            <i className="fa fa-paw">
                            </i>
                            <span>餐饮后台管理系统</span>
                        </a>
                    </div>

                    <div className="clearfix">
                    </div>

                    <div className="profile clearfix">
                        <div className="profile_pic">
                            <img src="images/img.jpg" alt="登录用户"
                                 className="img-circle profile_img" />
                        </div>
                        <div className="profile_info">
                            <span>Welcome,</span>
                            <h2>John Doe</h2>
                        </div>
                    </div>

                    <br />

                    <SideBar/>

                </div>

            </div>
        );
    }
});

export {LeftMenu}