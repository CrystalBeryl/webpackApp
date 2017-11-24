//import {Link} from 'react-router';
let SideBar = React.createClass({
    getInitialState(){
        return (
            {
                dropDown: false,
            }
        )
    },
    ChangeDropDown(){
        this.setState({dropDown: !this.state.dropDown});
    },

    render(){
        return (
            <div id="sidebar-menu" className="main_menu_side hidden-print main_menu">
                <div className={`menu_section ${this.state.dropDown ? 'active' : ''}`}>
                    <ul className="nav side-menu">
                        {/*有多个菜单就多个li遍历*/}
                        <li className={`${this.state.dropDown ? 'active' : ''}`}>
                            <a onClick={this.ChangeDropDown}>
                                <i className="fa fa-home">
                                </i>
                                    公司管理
                                <span className="fa fa-chevron-down">
                                </span>
                            </a>
                            <ul className="nav child_menu" style={{display: `${this.state.dropDown ? 'block' : 'none'}`}}>
                                <li><a href="index.html">公司信息管理</a></li>
                                <li><a href="index2.html">分公司信息管理</a></li>
                            </ul>
                        </li>
                    </ul>

                </div>
            </div>

        );
    }
});
export {SideBar}
