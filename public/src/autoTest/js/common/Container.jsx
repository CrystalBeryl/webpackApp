import {TaskList} from '../list/TaskList';
import {Link} from 'react-router';
let Container = React.createClass({
    render(){
        return (
            <div className="page-container">
                <div className="page-head">
                    <div className="container">
                        <div className="page-title">
                            <h1>{this.props.theme}</h1>
                        </div>
                    </div>
                </div>
                <div className="page-content">
                    <div className="container">
                        <ul className="page-breadcrumb breadcrumb">
                            <li>
                                <Link to="/index">首页</Link><i className="fa fa-circle"></i>
                            </li>
                            <li className="active">
                                {this.props.theme}
                            </li>
                        </ul>
                        <div className="row margin-top-10" >
                            {this.props.children}
{/*
                            <div className="col-md-6 col-sm-12">
                                <!-- BEGIN PORTLET-->
                                <div className="portlet light ">
                                    <div className="portlet-title">
                                        <div className="caption caption-md">
                                            <i className="icon-bar-chart theme-font hide"></i>
                                            <span className="caption-subject theme-font bold uppercase">Member Activity</span>
                                            <span className="caption-helper hide">weekly stats...</span>
                                        </div>
                                        <div className="actions">
                                            <div className="btn-group btn-group-devided" data-toggle="buttons">
                                                <label className="btn btn-transparent grey-salsa btn-circle btn-sm active">
                                                    <input type="radio" name="options" className="toggle" id="option1">Today</label>
                                                <label className="btn btn-transparent grey-salsa btn-circle btn-sm">
                                                    <input type="radio" name="options" className="toggle" id="option2">Week</label>
                                                <label className="btn btn-transparent grey-salsa btn-circle btn-sm">
                                                    <input type="radio" name="options" className="toggle" id="option3">Month</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="portlet-body">
                                        <div className="row number-stats margin-bottom-30">
                                            <div className="col-md-6 col-sm-6 col-xs-6">
                                                <div className="stat-left">
                                                    <div className="stat-chart">
                                                        <!-- do not line break "sparkline_bar" div. sparkline chart has an issue when the container div has line break -->
                                                        <div id="sparkline_bar"></div>
                                                    </div>
                                                    <div className="stat-number">
                                                        <div className="title">
                                                            Total
                                                        </div>
                                                        <div className="number">
                                                            2460
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-6 col-xs-6">
                                                <div className="stat-right">
                                                    <div className="stat-chart">
                                                        <!-- do not line break "sparkline_bar" div. sparkline chart has an issue when the container div has line break -->
                                                        <div id="sparkline_bar2"></div>
                                                    </div>
                                                    <div className="stat-number">
                                                        <div className="title">
                                                            New
                                                        </div>
                                                        <div className="number">
                                                            719
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="table-scrollable table-scrollable-borderless">
                                            <table className="table table-hover table-light">
                                                <thead>
                                                <tr className="uppercase">
                                                    <th colspan="2">
                                                        MEMBER
                                                    </th>
                                                    <th>
                                                        Earnings
                                                    </th>
                                                    <th>
                                                        CASES
                                                    </th>
                                                    <th>
                                                        CLOSED
                                                    </th>
                                                    <th>
                                                        RATE
                                                    </th>
                                                </tr>
                                                </thead>
                                                <tr>
                                                    <td className="fit">
                                                        <img className="user-pic" src="/static/assets/admin/layout3/img/avatar4.jpg">
                                                    </td>
                                                    <td>
                                                        <a href="javascript:;" className="primary-link">Brain</a>
                                                    </td>
                                                    <td>
                                                        $345
                                                    </td>
                                                    <td>
                                                        45
                                                    </td>
                                                    <td>
                                                        124
                                                    </td>
                                                    <td>
                                                        <span className="bold theme-font">80%</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="fit">
                                                        <img className="user-pic" src="/static/assets/admin/layout3/img/avatar5.jpg">
                                                    </td>
                                                    <td>
                                                        <a href="javascript:;" className="primary-link">Nick</a>
                                                    </td>
                                                    <td>
                                                        $560
                                                    </td>
                                                    <td>
                                                        12
                                                    </td>
                                                    <td>
                                                        24
                                                    </td>
                                                    <td>
                                                        <span className="bold theme-font">67%</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="fit">
                                                        <img className="user-pic" src="/static/assets/admin/layout3/img/avatar6.jpg">
                                                    </td>
                                                    <td>
                                                        <a href="javascript:;" className="primary-link">Tim</a>
                                                    </td>
                                                    <td>
                                                        $1,345
                                                    </td>
                                                    <td>
                                                        450
                                                    </td>
                                                    <td>
                                                        46
                                                    </td>
                                                    <td>
                                                        <span className="bold theme-font">98%</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="fit">
                                                        <img className="user-pic" src="/static/assets/admin/layout3/img/avatar7.jpg">
                                                    </td>
                                                    <td>
                                                        <a href="javascript:;" className="primary-link">Tom</a>
                                                    </td>
                                                    <td>
                                                        $645
                                                    </td>
                                                    <td>
                                                        50
                                                    </td>
                                                    <td>
                                                        89
                                                    </td>
                                                    <td>
                                                        <span className="bold theme-font">58%</span>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <!-- END PORTLET-->
                            </div>
*/}
                        </div>
{/*                        <div className="row">
                            <div className="col-md-6 col-sm-12">
                                <div className="portlet light tasks-widget">
                                    <div className="portlet-title">
                                        <div className="caption caption-md">
                                            <i className="icon-bar-chart theme-font hide"></i>
                                            <span className="caption-subject theme-font bold uppercase">TASKS</span>
                                            <span className="caption-helper">16 pending</span>
                                        </div>
                                        <div className="inputs">
                                            <div className="portlet-input input-small input-inline">
                                                <div className="input-icon right">
                                                    <i className="icon-magnifier"></i>
                                                    <input type="text" className="form-control form-control-solid" placeholder="search..."/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="portlet-body">
                                        <div className="task-content">
                                            <div className="scroller" style="height: 282px;" data-always-visible="1" data-rail-visible1="0" data-handle-color="#D7DCE2">

                                                <ul className="task-list">
                                                    <li>
                                                        <div className="task-checkbox">
                                                            <input type="hidden" value="1" name="test"/>
                                                            <input type="checkbox" className="liChild" value="2" name="test"/>
                                                        </div>
                                                        <div className="task-title">
												<span className="task-title-sp">
												Present 2013 Year IPO Statistics at Board Meeting </span>
                                                            <span className="label label-sm label-success">Company</span>
                                                            <span className="task-bell">
												<i className="fa fa-bell-o"></i>
												</span>
                                                        </div>
                                                        <div className="task-config">
                                                            <div className="task-config-btn btn-group">
                                                                <a className="btn btn-xs default" href="javascript:;" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                                                    <i className="fa fa-cog"></i><i className="fa fa-angle-down"></i>
                                                                </a>
                                                                <ul className="dropdown-menu pull-right">
                                                                    <li>
                                                                        <a href="javascript:;">
                                                                            <i className="fa fa-check"></i> Complete </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="javascript:;">
                                                                            <i className="fa fa-pencil"></i> Edit </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="javascript:;">
                                                                            <i className="fa fa-trash-o"></i> Cancel </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="task-checkbox">
                                                            <input type="checkbox" className="liChild" value=""/>
                                                        </div>
                                                        <div className="task-title">
												<span className="task-title-sp">
												Hold An Interview for Marketing Manager Position </span>
                                                            <span className="label label-sm label-danger">Marketing</span>
                                                        </div>
                                                        <div className="task-config">
                                                            <div className="task-config-btn btn-group">
                                                                <a className="btn btn-xs default" href="javascript:;" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                                                    <i className="fa fa-cog"></i><i className="fa fa-angle-down"></i>
                                                                </a>
                                                                <ul className="dropdown-menu pull-right">
                                                                    <li>
                                                                        <a href="javascript:;">
                                                                            <i className="fa fa-check"></i> Complete </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="javascript:;">
                                                                            <i className="fa fa-pencil"></i> Edit </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="javascript:;">
                                                                            <i className="fa fa-trash-o"></i> Cancel </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="task-checkbox">
                                                            <input type="checkbox" className="liChild" value=""/>
                                                        </div>
                                                        <div className="task-title">
												<span className="task-title-sp">
												AirAsia Intranet System Project Internal Meeting </span>
                                                            <span className="label label-sm label-success">AirAsia</span>
                                                            <span className="task-bell">
												<i className="fa fa-bell-o"></i>
												</span>
                                                        </div>
                                                        <div className="task-config">
                                                            <div className="task-config-btn btn-group">
                                                                <a className="btn btn-xs default" href="javascript:;" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                                                    <i className="fa fa-cog"></i><i className="fa fa-angle-down"></i>
                                                                </a>
                                                                <ul className="dropdown-menu pull-right">
                                                                    <li>
                                                                        <a href="javascript:;">
                                                                            <i className="fa fa-check"></i> Complete </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="javascript:;">
                                                                            <i className="fa fa-pencil"></i> Edit </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="javascript:;">
                                                                            <i className="fa fa-trash-o"></i> Cancel </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="task-checkbox">
                                                            <input type="checkbox" className="liChild" value=""/>
                                                        </div>
                                                        <div className="task-title">
												<span className="task-title-sp">
												Technical Management Meeting </span>
                                                            <span className="label label-sm label-warning">Company</span>
                                                        </div>
                                                        <div className="task-config">
                                                            <div className="task-config-btn btn-group">
                                                                <a className="btn btn-xs default" href="javascript:;" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                                                    <i className="fa fa-cog"></i><i className="fa fa-angle-down"></i>
                                                                </a>
                                                                <ul className="dropdown-menu pull-right">
                                                                    <li>
                                                                        <a href="javascript:;">
                                                                            <i className="fa fa-check"></i> Complete </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="javascript:;">
                                                                            <i className="fa fa-pencil"></i> Edit </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="javascript:;">
                                                                            <i className="fa fa-trash-o"></i> Cancel </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="task-checkbox">
                                                            <input type="checkbox" className="liChild" value=""/>
                                                        </div>
                                                        <div className="task-title">
												<span className="task-title-sp">
												Kick-off Company CRM Mobile App Development </span>
                                                            <span className="label label-sm label-info">Internal Products</span>
                                                        </div>
                                                        <div className="task-config">
                                                            <div className="task-config-btn btn-group">
                                                                <a className="btn btn-xs default" href="javascript:;" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                                                    <i className="fa fa-cog"></i><i className="fa fa-angle-down"></i>
                                                                </a>
                                                                <ul className="dropdown-menu pull-right">
                                                                    <li>
                                                                        <a href="javascript:;">
                                                                            <i className="fa fa-check"></i> Complete </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="javascript:;">
                                                                            <i className="fa fa-pencil"></i> Edit </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="javascript:;">
                                                                            <i className="fa fa-trash-o"></i> Cancel </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="task-checkbox">
                                                            <input type="checkbox" className="liChild" value=""/>
                                                        </div>
                                                        <div className="task-title">
												<span className="task-title-sp">
												Prepare Commercial Offer For SmartVision Website Rewamp </span>
                                                            <span className="label label-sm label-danger">SmartVision</span>
                                                        </div>
                                                        <div className="task-config">
                                                            <div className="task-config-btn btn-group">
                                                                <a className="btn btn-xs default" href="javascript:;" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                                                    <i className="fa fa-cog"></i><i className="fa fa-angle-down"></i>
                                                                </a>
                                                                <ul className="dropdown-menu pull-right">
                                                                    <li>
                                                                        <a href="javascript:;">
                                                                            <i className="fa fa-check"></i> Complete </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="javascript:;">
                                                                            <i className="fa fa-pencil"></i> Edit </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="javascript:;">
                                                                            <i className="fa fa-trash-o"></i> Cancel </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="task-checkbox">
                                                            <input type="checkbox" className="liChild" value=""/>
                                                        </div>
                                                        <div className="task-title">
												<span className="task-title-sp">
												Sign-Off The Comercial Agreement With AutoSmart </span>
                                                            <span className="label label-sm label-default">AutoSmart</span>
                                                            <span className="task-bell">
												<i className="fa fa-bell-o"></i>
												</span>
                                                        </div>
                                                        <div className="task-config">
                                                            <div className="task-config-btn btn-group">
                                                                <a className="btn btn-xs default" href="javascript:;" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                                                    <i className="fa fa-cog"></i><i className="fa fa-angle-down"></i>
                                                                </a>
                                                                <ul className="dropdown-menu pull-right">
                                                                    <li>
                                                                        <a href="javascript:;">
                                                                            <i className="fa fa-check"></i> Complete </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="javascript:;">
                                                                            <i className="fa fa-pencil"></i> Edit </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="javascript:;">
                                                                            <i className="fa fa-trash-o"></i> Cancel </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="task-checkbox">
                                                            <input type="checkbox" className="liChild" value=""/>
                                                        </div>
                                                        <div className="task-title">
												<span className="task-title-sp">
												Company Staff Meeting </span>
                                                            <span className="label label-sm label-success">Cruise</span>
                                                            <span className="task-bell">
												<i className="fa fa-bell-o"></i>
												</span>
                                                        </div>
                                                        <div className="task-config">
                                                            <div className="task-config-btn btn-group">
                                                                <a className="btn btn-xs default" href="javascript:;" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                                                    <i className="fa fa-cog"></i><i className="fa fa-angle-down"></i>
                                                                </a>
                                                                <ul className="dropdown-menu pull-right">
                                                                    <li>
                                                                        <a href="javascript:;">
                                                                            <i className="fa fa-check"></i> Complete </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="javascript:;">
                                                                            <i className="fa fa-pencil"></i> Edit </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="javascript:;">
                                                                            <i className="fa fa-trash-o"></i> Cancel </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="last-line">
                                                        <div className="task-checkbox">
                                                            <input type="checkbox" className="liChild" value=""/>
                                                        </div>
                                                        <div className="task-title">
												<span className="task-title-sp">
												KeenThemes Investment Discussion </span>
                                                            <span className="label label-sm label-warning">KeenThemes </span>
                                                        </div>
                                                        <div className="task-config">
                                                            <div className="task-config-btn btn-group">
                                                                <a className="btn btn-xs default" href="javascript:;" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                                                    <i className="fa fa-cog"></i><i className="fa fa-angle-down"></i>
                                                                </a>
                                                                <ul className="dropdown-menu pull-right">
                                                                    <li>
                                                                        <a href="javascript:;">
                                                                            <i className="fa fa-check"></i> Complete </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="javascript:;">
                                                                            <i className="fa fa-pencil"></i> Edit </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="javascript:;">
                                                                            <i className="fa fa-trash-o"></i> Cancel </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="task-footer">
                                            <div className="btn-arrow-link pull-right">
                                                <a href="javascript:;">See All Tasks</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <div className="portlet light">
                                    <div className="portlet-title">
                                        <div className="caption caption-md">
                                            <i className="icon-bar-chart theme-font hide"></i>
                                            <span className="caption-subject theme-font bold uppercase">Customer Support</span>
                                            <span className="caption-helper">45 pending</span>
                                        </div>
                                        <div className="inputs">
                                            <div className="portlet-input input-inline input-small ">
                                                <div className="input-icon right">
                                                    <i className="icon-magnifier"></i>
                                                    <input type="text" className="form-control form-control-solid" placeholder="search...">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="portlet-body">
                                        <div className="scroller" style="height: 305px;" data-always-visible="1" data-rail-visible1="0" data-handle-color="#D7DCE2">
                                            <div className="general-item-list">
                                                <div className="item">
                                                    <div className="item-head">
                                                        <div className="item-details">
                                                            <img className="item-pic" src="/static/assets/admin/layout3/img/avatar4.jpg">
                                                                <a href="" className="item-name primary-link">Nick Larson</a>
                                                                <span className="item-label">3 hrs ago</span>
                                                        </div>
                                                        <span className="item-status"><span className="badge badge-empty badge-success"></span> Open</span>
                                                    </div>
                                                    <div className="item-body">
                                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                                                    </div>
                                                </div>
                                                <div className="item">
                                                    <div className="item-head">
                                                        <div className="item-details">
                                                            <img className="item-pic" src="/static/assets/admin/layout3/img/avatar3.jpg"/>
                                                                <a href="" className="item-name primary-link">Mark</a>
                                                                <span className="item-label">5 hrs ago</span>
                                                        </div>
                                                        <span className="item-status"><span className="badge badge-empty badge-warning"></span> Pending</span>
                                                    </div>
                                                    <div className="item-body">
                                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat tincidunt ut laoreet.
                                                    </div>
                                                </div>
                                                <div className="item">
                                                    <div className="item-head">
                                                        <div className="item-details">
                                                            <img className="item-pic" src="/static/assets/admin/layout3/img/avatar6.jpg"/>
                                                                <a href="" className="item-name primary-link">Nick Larson</a>
                                                                <span className="item-label">8 hrs ago</span>
                                                        </div>
                                                        <span className="item-status"><span className="badge badge-empty badge-primary"></span> Closed</span>
                                                    </div>
                                                    <div className="item-body">
                                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.
                                                    </div>
                                                </div>
                                                <div className="item">
                                                    <div className="item-head">
                                                        <div className="item-details">
                                                            <img className="item-pic" src="/static/assets/admin/layout3/img/avatar7.jpg">
                                                                <a href="" className="item-name primary-link">Nick Larson</a>
                                                                <span className="item-label">12 hrs ago</span>
                                                        </div>
                                                        <span className="item-status"><span className="badge badge-empty badge-danger"></span> Pending</span>
                                                    </div>
                                                    <div className="item-body">
                                                        Consectetuer adipiscing elit Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                                                    </div>
                                                </div>
                                                <div className="item">
                                                    <div className="item-head">
                                                        <div className="item-details">
                                                            <img className="item-pic" src="/static/assets/admin/layout3/img/avatar9.jpg">
                                                                <a href="" className="item-name primary-link">Richard Stone</a>
                                                                <span className="item-label">2 days ago</span>
                                                        </div>
                                                        <span className="item-status"><span className="badge badge-empty badge-danger"></span> Open</span>
                                                    </div>
                                                    <div className="item-body">
                                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, ut laoreet dolore magna aliquam erat volutpat.
                                                    </div>
                                                </div>
                                                <div className="item">
                                                    <div className="item-head">
                                                        <div className="item-details">
                                                            <img className="item-pic" src="/static/assets/admin/layout3/img/avatar8.jpg">
                                                                <a href="" className="item-name primary-link">Dan</a>
                                                                <span className="item-label">3 days ago</span>
                                                        </div>
                                                        <span className="item-status"><span className="badge badge-empty badge-warning"></span> Pending</span>
                                                    </div>
                                                    <div className="item-body">
                                                        Lorem ipsum dolor sit amet, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                                                    </div>
                                                </div>
                                                <div className="item">
                                                    <div className="item-head">
                                                        <div className="item-details">
                                                            <img className="item-pic" src="/static/assets/admin/layout3/img/avatar2.jpg">
                                                                <a href="" className="item-name primary-link">Larry</a>
                                                                <span className="item-label">4 hrs ago</span>
                                                        </div>
                                                        <span className="item-status"><span className="badge badge-empty badge-success"></span> Open</span>
                                                    </div>
                                                    <div className="item-body">
                                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-sm-6">
                                <div className="portlet light ">
                                    <div className="portlet-title">
                                        <div className="caption caption-md">
                                            <i className="icon-bar-chart theme-font hide"></i>
                                            <span className="caption-subject theme-font bold uppercase">Regional Stats</span>
                                        </div>
                                        <div className="actions">
                                            <a className="btn btn-circle btn-icon-only btn-default" href="javascript:;">
                                                <i className="icon-cloud-upload"></i>
                                            </a>
                                            <a className="btn btn-circle btn-icon-only btn-default" href="javascript:;">
                                                <i className="icon-wrench"></i>
                                            </a>
                                            <a className="btn btn-circle btn-icon-only btn-default fullscreen" href="javascript:;">
                                            </a>
                                            <a className="btn btn-circle btn-icon-only btn-default" href="javascript:;">
                                                <i className="icon-trash"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="portlet-body">
                                        <div id="region_statistics_loading">
                                            <img src="/static/assets/admin/layout/img/loading.gif" alt="loading"/>
                                        </div>
                                        <div id="region_statistics_content" className="display-none">
                                            <div className="btn-toolbar margin-bottom-10">
                                                <div className="btn-group btn-group-circle" data-toggle="buttons">
                                                    <a href="" className="btn grey-salsa btn-sm active">
                                                        Users </a>
                                                    <a href="" className="btn grey-salsa btn-sm">
                                                        Orders </a>
                                                </div>
                                                <div className="btn-group pull-right">
                                                    <a href="" className="btn btn-circle grey-salsa btn-sm dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                                        Select Region <span className="fa fa-angle-down">
										</span>
                                                    </a>
                                                    <ul className="dropdown-menu pull-right">
                                                        <li>
                                                            <a href="javascript:;" id="regional_stat_world">
                                                                World </a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:;" id="regional_stat_usa">
                                                                USA </a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:;" id="regional_stat_europe">
                                                                Europe </a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:;" id="regional_stat_russia">
                                                                Russia </a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:;" id="regional_stat_germany">
                                                                Germany </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div id="vmap_world" className="vmaps display-none">
                                            </div>
                                            <div id="vmap_usa" className="vmaps display-none">
                                            </div>
                                            <div id="vmap_europe" className="vmaps display-none">
                                            </div>
                                            <div id="vmap_russia" className="vmaps display-none">
                                            </div>
                                            <div id="vmap_germany" className="vmaps display-none">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6">
                                <div className="portlet light">
                                    <div className="portlet-title tabbable-line">
                                        <div className="caption caption-md">
                                            <i className="icon-globe theme-font hide"></i>
                                            <span className="caption-subject theme-font bold uppercase">Feeds</span>
                                        </div>
                                        <ul className="nav nav-tabs">
                                            <li className="active">
                                                <a href="#tab_1_1" data-toggle="tab">
                                                    System </a>
                                            </li>
                                            <li>
                                                <a href="#tab_1_2" data-toggle="tab">
                                                    Activities </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="portlet-body">
                                        <div className="tab-content">
                                            <div className="tab-pane active" id="tab_1_1">
                                                <div className="scroller" style="height: 337px;" data-always-visible="1" data-rail-visible1="0" data-handle-color="#D7DCE2">
                                                    <ul className="feeds">
                                                        <li>
                                                            <div className="col1">
                                                                <div className="cont">
                                                                    <div className="cont-col1">
                                                                        <div className="label label-sm label-success">
                                                                            <i className="fa fa-bell-o"></i>
                                                                        </div>
                                                                    </div>
                                                                    <div className="cont-col2">
                                                                        <div className="desc">
                                                                            You have 4 pending tasks. <span className="label label-sm label-info">
																Take action <i className="fa fa-share"></i>
																</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col2">
                                                                <div className="date">
                                                                    Just now
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:;">
                                                                <div className="col1">
                                                                    <div className="cont">
                                                                        <div className="cont-col1">
                                                                            <div className="label label-sm label-success">
                                                                                <i className="fa fa-bell-o"></i>
                                                                            </div>
                                                                        </div>
                                                                        <div className="cont-col2">
                                                                            <div className="desc">
                                                                                New version v1.4 just lunched!
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col2">
                                                                    <div className="date">
                                                                        20 mins
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <div className="col1">
                                                                <div className="cont">
                                                                    <div className="cont-col1">
                                                                        <div className="label label-sm label-danger">
                                                                            <i className="fa fa-bolt"></i>
                                                                        </div>
                                                                    </div>
                                                                    <div className="cont-col2">
                                                                        <div className="desc">
                                                                            Database server #12 overloaded. Please fix the issue.
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col2">
                                                                <div className="date">
                                                                    24 mins
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="col1">
                                                                <div className="cont">
                                                                    <div className="cont-col1">
                                                                        <div className="label label-sm label-info">
                                                                            <i className="fa fa-bullhorn"></i>
                                                                        </div>
                                                                    </div>
                                                                    <div className="cont-col2">
                                                                        <div className="desc">
                                                                            New order received and pending for process.
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col2">
                                                                <div className="date">
                                                                    30 mins
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="col1">
                                                                <div className="cont">
                                                                    <div className="cont-col1">
                                                                        <div className="label label-sm label-success">
                                                                            <i className="fa fa-bullhorn"></i>
                                                                        </div>
                                                                    </div>
                                                                    <div className="cont-col2">
                                                                        <div className="desc">
                                                                            New payment refund and pending approval.
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col2">
                                                                <div className="date">
                                                                    40 mins
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="col1">
                                                                <div className="cont">
                                                                    <div className="cont-col1">
                                                                        <div className="label label-sm label-warning">
                                                                            <i className="fa fa-plus"></i>
                                                                        </div>
                                                                    </div>
                                                                    <div className="cont-col2">
                                                                        <div className="desc">
                                                                            New member registered. Pending approval.
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col2">
                                                                <div className="date">
                                                                    1.5 hours
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="col1">
                                                                <div className="cont">
                                                                    <div className="cont-col1">
                                                                        <div className="label label-sm label-success">
                                                                            <i className="fa fa-bell-o"></i>
                                                                        </div>
                                                                    </div>
                                                                    <div className="cont-col2">
                                                                        <div className="desc">
                                                                            Web server hardware needs to be upgraded. <span className="label label-sm label-default ">
																Overdue </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col2">
                                                                <div className="date">
                                                                    2 hours
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="col1">
                                                                <div className="cont">
                                                                    <div className="cont-col1">
                                                                        <div className="label label-sm label-default">
                                                                            <i className="fa fa-bullhorn"></i>
                                                                        </div>
                                                                    </div>
                                                                    <div className="cont-col2">
                                                                        <div className="desc">
                                                                            Prod01 database server is overloaded 90%.
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col2">
                                                                <div className="date">
                                                                    3 hours
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="col1">
                                                                <div className="cont">
                                                                    <div className="cont-col1">
                                                                        <div className="label label-sm label-warning">
                                                                            <i className="fa fa-bullhorn"></i>
                                                                        </div>
                                                                    </div>
                                                                    <div className="cont-col2">
                                                                        <div className="desc">
                                                                            New group created. Pending manager review.
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col2">
                                                                <div className="date">
                                                                    5 hours
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="col1">
                                                                <div className="cont">
                                                                    <div className="cont-col1">
                                                                        <div className="label label-sm label-info">
                                                                            <i className="fa fa-bullhorn"></i>
                                                                        </div>
                                                                    </div>
                                                                    <div className="cont-col2">
                                                                        <div className="desc">
                                                                            Order payment failed.
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col2">
                                                                <div className="date">
                                                                    18 hours
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="col1">
                                                                <div className="cont">
                                                                    <div className="cont-col1">
                                                                        <div className="label label-sm label-default">
                                                                            <i className="fa fa-bullhorn"></i>
                                                                        </div>
                                                                    </div>
                                                                    <div className="cont-col2">
                                                                        <div className="desc">
                                                                            New application received.
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col2">
                                                                <div className="date">
                                                                    21 hours
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="col1">
                                                                <div className="cont">
                                                                    <div className="cont-col1">
                                                                        <div className="label label-sm label-info">
                                                                            <i className="fa fa-bullhorn"></i>
                                                                        </div>
                                                                    </div>
                                                                    <div className="cont-col2">
                                                                        <div className="desc">
                                                                            Dev90 web server restarted. Pending overall system check.
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col2">
                                                                <div className="date">
                                                                    22 hours
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="col1">
                                                                <div className="cont">
                                                                    <div className="cont-col1">
                                                                        <div className="label label-sm label-default">
                                                                            <i className="fa fa-bullhorn"></i>
                                                                        </div>
                                                                    </div>
                                                                    <div className="cont-col2">
                                                                        <div className="desc">
                                                                            New member registered. Pending approval
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col2">
                                                                <div className="date">
                                                                    21 hours
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="col1">
                                                                <div className="cont">
                                                                    <div className="cont-col1">
                                                                        <div className="label label-sm label-info">
                                                                            <i className="fa fa-bullhorn"></i>
                                                                        </div>
                                                                    </div>
                                                                    <div className="cont-col2">
                                                                        <div className="desc">
                                                                            L45 Network failure. Schedule maintenance.
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col2">
                                                                <div className="date">
                                                                    22 hours
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="col1">
                                                                <div className="cont">
                                                                    <div className="cont-col1">
                                                                        <div className="label label-sm label-default">
                                                                            <i className="fa fa-bullhorn"></i>
                                                                        </div>
                                                                    </div>
                                                                    <div className="cont-col2">
                                                                        <div className="desc">
                                                                            Order canceled with failed payment.
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col2">
                                                                <div className="date">
                                                                    21 hours
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="col1">
                                                                <div className="cont">
                                                                    <div className="cont-col1">
                                                                        <div className="label label-sm label-info">
                                                                            <i className="fa fa-bullhorn"></i>
                                                                        </div>
                                                                    </div>
                                                                    <div className="cont-col2">
                                                                        <div className="desc">
                                                                            Web-A2 clound instance created. Schedule full scan.
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col2">
                                                                <div className="date">
                                                                    22 hours
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="col1">
                                                                <div className="cont">
                                                                    <div className="cont-col1">
                                                                        <div className="label label-sm label-default">
                                                                            <i className="fa fa-bullhorn"></i>
                                                                        </div>
                                                                    </div>
                                                                    <div className="cont-col2">
                                                                        <div className="desc">
                                                                            Member canceled. Schedule account review.
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col2">
                                                                <div className="date">
                                                                    21 hours
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="col1">
                                                                <div className="cont">
                                                                    <div className="cont-col1">
                                                                        <div className="label label-sm label-info">
                                                                            <i className="fa fa-bullhorn"></i>
                                                                        </div>
                                                                    </div>
                                                                    <div className="cont-col2">
                                                                        <div className="desc">
                                                                            New order received. Please take care of it.
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col2">
                                                                <div className="date">
                                                                    22 hours
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="tab-pane" id="tab_1_2">
                                                <div className="scroller" style="height: 337px;" data-always-visible="1" data-rail-visible1="0" data-handle-color="#D7DCE2">
                                                    <ul className="feeds">
                                                        <li>
                                                            <a href="javascript:;">
                                                                <div className="col1">
                                                                    <div className="cont">
                                                                        <div className="cont-col1">
                                                                            <div className="label label-sm label-success">
                                                                                <i className="fa fa-bell-o"></i>
                                                                            </div>
                                                                        </div>
                                                                        <div className="cont-col2">
                                                                            <div className="desc">
                                                                                New user registered
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col2">
                                                                    <div className="date">
                                                                        Just now
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:;">
                                                                <div className="col1">
                                                                    <div className="cont">
                                                                        <div className="cont-col1">
                                                                            <div className="label label-sm label-success">
                                                                                <i className="fa fa-bell-o"></i>
                                                                            </div>
                                                                        </div>
                                                                        <div className="cont-col2">
                                                                            <div className="desc">
                                                                                New order received
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col2">
                                                                    <div className="date">
                                                                        10 mins
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <div className="col1">
                                                                <div className="cont">
                                                                    <div className="cont-col1">
                                                                        <div className="label label-sm label-danger">
                                                                            <i className="fa fa-bolt"></i>
                                                                        </div>
                                                                    </div>
                                                                    <div className="cont-col2">
                                                                        <div className="desc">
                                                                            Order #24DOP4 has been rejected. <span className="label label-sm label-danger ">
																Take action <i className="fa fa-share"></i>
																</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col2">
                                                                <div className="date">
                                                                    24 mins
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:;">
                                                                <div className="col1">
                                                                    <div className="cont">
                                                                        <div className="cont-col1">
                                                                            <div className="label label-sm label-success">
                                                                                <i className="fa fa-bell-o"></i>
                                                                            </div>
                                                                        </div>
                                                                        <div className="cont-col2">
                                                                            <div className="desc">
                                                                                New user registered
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col2">
                                                                    <div className="date">
                                                                        Just now
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:;">
                                                                <div className="col1">
                                                                    <div className="cont">
                                                                        <div className="cont-col1">
                                                                            <div className="label label-sm label-success">
                                                                                <i className="fa fa-bell-o"></i>
                                                                            </div>
                                                                        </div>
                                                                        <div className="cont-col2">
                                                                            <div className="desc">
                                                                                New user registered
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col2">
                                                                    <div className="date">
                                                                        Just now
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:;">
                                                                <div className="col1">
                                                                    <div className="cont">
                                                                        <div className="cont-col1">
                                                                            <div className="label label-sm label-success">
                                                                                <i className="fa fa-bell-o"></i>
                                                                            </div>
                                                                        </div>
                                                                        <div className="cont-col2">
                                                                            <div className="desc">
                                                                                New user registered
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col2">
                                                                    <div className="date">
                                                                        Just now
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:;">
                                                                <div className="col1">
                                                                    <div className="cont">
                                                                        <div className="cont-col1">
                                                                            <div className="label label-sm label-success">
                                                                                <i className="fa fa-bell-o"></i>
                                                                            </div>
                                                                        </div>
                                                                        <div className="cont-col2">
                                                                            <div className="desc">
                                                                                New user registered
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col2">
                                                                    <div className="date">
                                                                        Just now
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:;">
                                                                <div className="col1">
                                                                    <div className="cont">
                                                                        <div className="cont-col1">
                                                                            <div className="label label-sm label-success">
                                                                                <i className="fa fa-bell-o"></i>
                                                                            </div>
                                                                        </div>
                                                                        <div className="cont-col2">
                                                                            <div className="desc">
                                                                                New user registered
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col2">
                                                                    <div className="date">
                                                                        Just now
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:;">
                                                                <div className="col1">
                                                                    <div className="cont">
                                                                        <div className="cont-col1">
                                                                            <div className="label label-sm label-success">
                                                                                <i className="fa fa-bell-o"></i>
                                                                            </div>
                                                                        </div>
                                                                        <div className="cont-col2">
                                                                            <div className="desc">
                                                                                New user registered
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col2">
                                                                    <div className="date">
                                                                        Just now
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:;">
                                                                <div className="col1">
                                                                    <div className="cont">
                                                                        <div className="cont-col1">
                                                                            <div className="label label-sm label-success">
                                                                                <i className="fa fa-bell-o"></i>
                                                                            </div>
                                                                        </div>
                                                                        <div className="cont-col2">
                                                                            <div className="desc">
                                                                                New user registered
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col2">
                                                                    <div className="date">
                                                                        Just now
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>*/}
                    </div>

{/*
                    <a href="javascript:;" className="page-quick-sidebar-toggler"><i className="icon-login"></i></a>
*/}
{/*                    <div className="page-quick-sidebar-wrapper">
                        <div className="page-quick-sidebar">
                            <div className="nav-justified">
                                <ul className="nav nav-tabs nav-justified">
                                    <li className="active">
                                        <a href="#quick_sidebar_tab_1" data-toggle="tab">
                                            Users <span className="badge badge-danger">2</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#quick_sidebar_tab_2" data-toggle="tab">
                                            Alerts <span className="badge badge-success">7</span>
                                        </a>
                                    </li>
                                    <li className="dropdown">
                                        <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown">
                                            More<i className="fa fa-angle-down"></i>
                                        </a>
                                        <ul className="dropdown-menu pull-right" role="menu">
                                            <li>
                                                <a href="#quick_sidebar_tab_3" data-toggle="tab">
                                                    <i className="icon-bell"></i> Alerts </a>
                                            </li>
                                            <li>
                                                <a href="#quick_sidebar_tab_3" data-toggle="tab">
                                                    <i className="icon-info"></i> Notifications </a>
                                            </li>
                                            <li>
                                                <a href="#quick_sidebar_tab_3" data-toggle="tab">
                                                    <i className="icon-speech"></i> Activities </a>
                                            </li>
                                            <li className="divider">
                                            </li>
                                            <li>
                                                <a href="#quick_sidebar_tab_3" data-toggle="tab">
                                                    <i className="icon-settings"></i> Settings </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane active page-quick-sidebar-chat" id="quick_sidebar_tab_1">
                                        <div className="page-quick-sidebar-chat-users" data-rail-color="#ddd" data-wrapper-className="page-quick-sidebar-list">
                                            <h3 className="list-heading">Staff</h3>
                                            <ul className="media-list list-items">
                                                <li className="media">
                                                    <div className="media-status">
                                                        <span className="badge badge-success">8</span>
                                                    </div>
                                                    <img className="media-object" src="/static/assets/admin/layout/img/avatar3.jpg" alt="..."/>
                                                        <div className="media-body">
                                                            <h4 className="media-heading">Bob Nilson</h4>
                                                            <div className="media-heading-sub">
                                                                Project Manager
                                                            </div>
                                                        </div>
                                                </li>
                                                <li className="media">
                                                    <img className="media-object" src="/static/assets/admin/layout/img/avatar1.jpg" alt="..."/>
                                                        <div className="media-body">
                                                            <h4 className="media-heading">Nick Larson</h4>
                                                            <div className="media-heading-sub">
                                                                Art Director
                                                            </div>
                                                        </div>
                                                </li>
                                                <li className="media">
                                                    <div className="media-status">
                                                        <span className="badge badge-danger">3</span>
                                                    </div>
                                                    <img className="media-object" src="/static/assets/admin/layout/img/avatar4.jpg" alt="..."/>
                                                        <div className="media-body">
                                                            <h4 className="media-heading">Deon Hubert</h4>
                                                            <div className="media-heading-sub">
                                                                CTO
                                                            </div>
                                                        </div>
                                                </li>
                                                <li className="media">
                                                    <img className="media-object" src="/static/assets/admin/layout/img/avatar2.jpg" alt="..."/>
                                                        <div className="media-body">
                                                            <h4 className="media-heading">Ella Wong</h4>
                                                            <div className="media-heading-sub">
                                                                CEO
                                                            </div>
                                                        </div>
                                                </li>
                                            </ul>
                                            <h3 className="list-heading">Customers</h3>
                                            <ul className="media-list list-items">
                                                <li className="media">
                                                    <div className="media-status">
                                                        <span className="badge badge-warning">2</span>
                                                    </div>
                                                    <img className="media-object" src="/static/assets/admin/layout/img/avatar6.jpg" alt="..."/>
                                                        <div className="media-body">
                                                            <h4 className="media-heading">Lara Kunis</h4>
                                                            <div className="media-heading-sub">
                                                                CEO, Loop Inc
                                                            </div>
                                                            <div className="media-heading-small">
                                                                Last seen 03:10 AM
                                                            </div>
                                                        </div>
                                                </li>
                                                <li className="media">
                                                    <div className="media-status">
                                                        <span className="label label-sm label-success">new</span>
                                                    </div>
                                                    <img className="media-object" src="/static/assets/admin/layout/img/avatar7.jpg" alt="..."/>
                                                        <div className="media-body">
                                                            <h4 className="media-heading">Ernie Kyllonen</h4>
                                                            <div className="media-heading-sub">
                                                                Project Manager,<br>
                                                                SmartBizz PTL
                                                            </div>
                                                        </div>
                                                </li>
                                                <li className="media">
                                                    <img className="media-object" src="/static/assets/admin/layout/img/avatar8.jpg" alt="..."/>
                                                        <div className="media-body">
                                                            <h4 className="media-heading">Lisa Stone</h4>
                                                            <div className="media-heading-sub">
                                                                CTO, Keort Inc
                                                            </div>
                                                            <div className="media-heading-small">
                                                                Last seen 13:10 PM
                                                            </div>
                                                        </div>
                                                </li>
                                                <li className="media">
                                                    <div className="media-status">
                                                        <span className="badge badge-success">7</span>
                                                    </div>
                                                    <img className="media-object" src="/static/assets/admin/layout/img/avatar9.jpg" alt="..."/>
                                                        <div className="media-body">
                                                            <h4 className="media-heading">Deon Portalatin</h4>
                                                            <div className="media-heading-sub">
                                                                CFO, H&D LTD
                                                            </div>
                                                        </div>
                                                </li>
                                                <li className="media">
                                                    <img className="media-object" src="/static/assets/admin/layout/img/avatar10.jpg" alt="..."/>
                                                        <div className="media-body">
                                                            <h4 className="media-heading">Irina Savikova</h4>
                                                            <div className="media-heading-sub">
                                                                CEO, Tizda Motors Inc
                                                            </div>
                                                        </div>
                                                </li>
                                                <li className="media">
                                                    <div className="media-status">
                                                        <span className="badge badge-danger">4</span>
                                                    </div>
                                                    <img className="media-object" src="/static/assets/admin/layout/img/avatar11.jpg" alt="..."/>
                                                        <div className="media-body">
                                                            <h4 className="media-heading">Maria Gomez</h4>
                                                            <div className="media-heading-sub">
                                                                Manager, Infomatic Inc
                                                            </div>
                                                            <div className="media-heading-small">
                                                                Last seen 03:10 AM
                                                            </div>
                                                        </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="page-quick-sidebar-item">
                                            <div className="page-quick-sidebar-chat-user">
                                                <div className="page-quick-sidebar-nav">
                                                    <a href="javascript:;" className="page-quick-sidebar-back-to-list"><i className="icon-arrow-left"></i>Back</a>
                                                </div>
                                                <div className="page-quick-sidebar-chat-user-messages">
                                                    <div className="post out">
                                                        <img className="avatar" alt="" src="/static/assets/admin/layout/img/avatar3.jpg"/>
                                                        <div className="message">
                                                            <span className="arrow"></span>
                                                            <a href="javascript:;" className="name">Bob Nilson</a>
                                                            <span className="datetime">20:15</span>
                                                            <span className="body">
												When could you send me the report ? </span>
                                                        </div>
                                                    </div>
                                                    <div className="post in">
                                                        <img className="avatar" alt="" src="/static/assets/admin/layout/img/avatar2.jpg"/>
                                                        <div className="message">
                                                            <span className="arrow"></span>
                                                            <a href="javascript:;" className="name">Ella Wong</a>
                                                            <span className="datetime">20:15</span>
                                                            <span className="body">
												Its almost done. I will be sending it shortly </span>
                                                        </div>
                                                    </div>
                                                    <div className="post out">
                                                        <img className="avatar" alt="" src="/static/assets/admin/layout/img/avatar3.jpg"/>
                                                        <div className="message">
                                                            <span className="arrow"></span>
                                                            <a href="javascript:;" className="name">Bob Nilson</a>
                                                            <span className="datetime">20:15</span>
                                                            <span className="body">
												Alright. Thanks! :) </span>
                                                        </div>
                                                    </div>
                                                    <div className="post in">
                                                        <img className="avatar" alt="" src="/static/assets/admin/layout/img/avatar2.jpg"/>
                                                        <div className="message">
                                                            <span className="arrow"></span>
                                                            <a href="javascript:;" className="name">Ella Wong</a>
                                                            <span className="datetime">20:16</span>
                                                            <span className="body">
												You are most welcome. Sorry for the delay. </span>
                                                        </div>
                                                    </div>
                                                    <div className="post out">
                                                        <img className="avatar" alt="" src="/static/assets/admin/layout/img/avatar3.jpg"/>
                                                        <div className="message">
                                                            <span className="arrow"></span>
                                                            <a href="javascript:;" className="name">Bob Nilson</a>
                                                            <span className="datetime">20:17</span>
                                                            <span className="body">
												No probs. Just take your time :) </span>
                                                        </div>
                                                    </div>
                                                    <div className="post in">
                                                        <img className="avatar" alt="" src="/static/assets/admin/layout/img/avatar2.jpg"/>
                                                        <div className="message">
                                                            <span className="arrow"></span>
                                                            <a href="javascript:;" className="name">Ella Wong</a>
                                                            <span className="datetime">20:40</span>
                                                            <span className="body">
												Alright. I just emailed it to you. </span>
                                                        </div>
                                                    </div>
                                                    <div className="post out">
                                                        <img className="avatar" alt="" src="/static/assets/admin/layout/img/avatar3.jpg"/>
                                                        <div className="message">
                                                            <span className="arrow"></span>
                                                            <a href="javascript:;" className="name">Bob Nilson</a>
                                                            <span className="datetime">20:17</span>
                                                            <span className="body">
												Great! Thanks. Will check it right away. </span>
                                                        </div>
                                                    </div>
                                                    <div className="post in">
                                                        <img className="avatar" alt="" src="/static/assets/admin/layout/img/avatar2.jpg"/>
                                                        <div className="message">
                                                            <span className="arrow"></span>
                                                            <a href="javascript:;" className="name">Ella Wong</a>
                                                            <span className="datetime">20:40</span>
                                                            <span className="body">
												Please let me know if you have any comment. </span>
                                                        </div>
                                                    </div>
                                                    <div className="post out">
                                                        <img className="avatar" alt="" src="/static/assets/admin/layout/img/avatar3.jpg"/>
                                                        <div className="message">
                                                            <span className="arrow"></span>
                                                            <a href="javascript:;" className="name">Bob Nilson</a>
                                                            <span className="datetime">20:17</span>
                                                            <span className="body">
												Sure. I will check and buzz you if anything needs to be corrected. </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="page-quick-sidebar-chat-user-form">
                                                    <div className="input-group">
                                                        <input type="text" className="form-control" placeholder="Type a message here..."/>
                                                            <div className="input-group-btn">
                                                                <button type="button" className="btn blue"><i className="icon-paper-clip"></i></button>
                                                            </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane page-quick-sidebar-alerts" id="quick_sidebar_tab_2">
                                        <div className="page-quick-sidebar-alerts-list">
                                            <h3 className="list-heading">General</h3>
                                            <ul className="feeds list-items">
                                                <li>
                                                    <div className="col1">
                                                        <div className="cont">
                                                            <div className="cont-col1">
                                                                <div className="label label-sm label-info">
                                                                    <i className="fa fa-shopping-cart"></i>
                                                                </div>
                                                            </div>
                                                            <div className="cont-col2">
                                                                <div className="desc">
                                                                    New order received with <span className="label label-sm label-danger">
														Reference Number: DR23923 </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col2">
                                                        <div className="date">
                                                            30 mins
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="col1">
                                                        <div className="cont">
                                                            <div className="cont-col1">
                                                                <div className="label label-sm label-success">
                                                                    <i className="fa fa-user"></i>
                                                                </div>
                                                            </div>
                                                            <div className="cont-col2">
                                                                <div className="desc">
                                                                    You have 5 pending membership that requires a quick review.
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col2">
                                                        <div className="date">
                                                            24 mins
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="col1">
                                                        <div className="cont">
                                                            <div className="cont-col1">
                                                                <div className="label label-sm label-danger">
                                                                    <i className="fa fa-bell-o"></i>
                                                                </div>
                                                            </div>
                                                            <div className="cont-col2">
                                                                <div className="desc">
                                                                    Web server hardware needs to be upgraded. <span className="label label-sm label-warning">
														Overdue </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col2">
                                                        <div className="date">
                                                            2 hours
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <a href="javascript:;">
                                                        <div className="col1">
                                                            <div className="cont">
                                                                <div className="cont-col1">
                                                                    <div className="label label-sm label-default">
                                                                        <i className="fa fa-briefcase"></i>
                                                                    </div>
                                                                </div>
                                                                <div className="cont-col2">
                                                                    <div className="desc">
                                                                        IPO Report for year 2013 has been released.
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col2">
                                                            <div className="date">
                                                                20 mins
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                            <h3 className="list-heading">System</h3>
                                            <ul className="feeds list-items">
                                                <li>
                                                    <div className="col1">
                                                        <div className="cont">
                                                            <div className="cont-col1">
                                                                <div className="label label-sm label-info">
                                                                    <i className="fa fa-shopping-cart"></i>
                                                                </div>
                                                            </div>
                                                            <div className="cont-col2">
                                                                <div className="desc">
                                                                    New order received with <span className="label label-sm label-success">
														Reference Number: DR23923 </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col2">
                                                        <div className="date">
                                                            30 mins
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="col1">
                                                        <div className="cont">
                                                            <div className="cont-col1">
                                                                <div className="label label-sm label-success">
                                                                    <i className="fa fa-user"></i>
                                                                </div>
                                                            </div>
                                                            <div className="cont-col2">
                                                                <div className="desc">
                                                                    You have 5 pending membership that requires a quick review.
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col2">
                                                        <div className="date">
                                                            24 mins
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="col1">
                                                        <div className="cont">
                                                            <div className="cont-col1">
                                                                <div className="label label-sm label-warning">
                                                                    <i className="fa fa-bell-o"></i>
                                                                </div>
                                                            </div>
                                                            <div className="cont-col2">
                                                                <div className="desc">
                                                                    Web server hardware needs to be upgraded. <span className="label label-sm label-default ">
														Overdue </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col2">
                                                        <div className="date">
                                                            2 hours
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <a href="javascript:;">
                                                        <div className="col1">
                                                            <div className="cont">
                                                                <div className="cont-col1">
                                                                    <div className="label label-sm label-info">
                                                                        <i className="fa fa-briefcase"></i>
                                                                    </div>
                                                                </div>
                                                                <div className="cont-col2">
                                                                    <div className="desc">
                                                                        IPO Report for year 2013 has been released.
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col2">
                                                            <div className="date">
                                                                20 mins
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="tab-pane page-quick-sidebar-settings" id="quick_sidebar_tab_3">
                                        <div className="page-quick-sidebar-settings-list">
                                            <h3 className="list-heading">General Settings</h3>
                                            <ul className="list-items borderless">
                                                <li>
                                                    Enable Notifications <input type="checkbox" className="make-switch" checked data-size="small" data-on-color="success" data-on-text="ON" data-off-color="default" data-off-text="OFF">
                                                </li>
                                                <li>
                                                    Allow Tracking <input type="checkbox" className="make-switch" data-size="small" data-on-color="info" data-on-text="ON" data-off-color="default" data-off-text="OFF">
                                                </li>
                                                <li>
                                                    Log Errors <input type="checkbox" className="make-switch" checked data-size="small" data-on-color="danger" data-on-text="ON" data-off-color="default" data-off-text="OFF">
                                                </li>
                                                <li>
                                                    Auto Sumbit Issues <input type="checkbox" className="make-switch" data-size="small" data-on-color="warning" data-on-text="ON" data-off-color="default" data-off-text="OFF">
                                                </li>
                                                <li>
                                                    Enable SMS Alerts <input type="checkbox" className="make-switch" checked data-size="small" data-on-color="success" data-on-text="ON" data-off-color="default" data-off-text="OFF">
                                                </li>
                                            </ul>
                                            <h3 className="list-heading">System Settings</h3>
                                            <ul className="list-items borderless">
                                                <li>
                                                    Security Level
                                                    <select className="form-control input-inline input-sm input-small">
                                                        <option value="1">Normal</option>
                                                        <option value="2" selected>Medium</option>
                                                        <option value="e">High</option>
                                                    </select>
                                                </li>
                                                <li>
                                                    Failed Email Attempts <input className="form-control input-inline input-sm input-small" value="5"/>
                                                </li>
                                                <li>
                                                    Secondary SMTP Port <input className="form-control input-inline input-sm input-small" value="3560"/>
                                                </li>
                                                <li>
                                                    Notify On System Error <input type="checkbox" className="make-switch" checked data-size="small" data-on-color="danger" data-on-text="ON" data-off-color="default" data-off-text="OFF">
                                                </li>
                                                <li>
                                                    Notify On SMTP Error <input type="checkbox" className="make-switch" checked data-size="small" data-on-color="warning" data-on-text="ON" data-off-color="default" data-off-text="OFF">
                                                </li>
                                            </ul>
                                            <div className="inner-content">
                                                <button className="btn btn-success"><i className="icon-settings"></i> Save Changes</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>*/}
                </div>
            </div>);
        }
    });

export {Container};