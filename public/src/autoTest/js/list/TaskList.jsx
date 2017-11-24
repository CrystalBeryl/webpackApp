let TaskList = React.createClass({
    render(){
        return (
            <div className="col-md-6 col-sm-12">
                <div className="portlet light ">
                    <div className="portlet-title">
                        <div className="caption caption-md">
                            <i className="icon-bar-chart theme-font hide"></i>
                            <span className="caption-subject theme-font bold uppercase">我的任务</span>
                            <span className="caption-helper hide">weekly stats...</span>

                        </div>
                    </div>
                    <div className="portlet-body">
                        <table className="table table-striped table-hover table-bordered" id="sample_editable_1">
                            <thead>
                            <tr>
                                <th>
                                    项目别名
                                </th>
                                <th>
                                    Bug标题
                                </th>
                                <th>
                                    Bug修复状态
                                </th>
                        </tr>
                            </thead>
                            <tbody>
                            <tr>
                               {/* <td>{{$index+1+10*(num-1)}}</td>
                                <td>{{task.alias}}</td>
                                <td>{{task.title}}</td>
                                <td>{{task.status}}</td>*/}
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    {/*<div className="row">
                        <div className="col-md-5 col-sm-5">
                        </div>
                        <div className="col-md-7 col-sm-7">
                            <div className="dataTables_paginate paging_simple_numbers" id="sample_editable_1_paginate">
                                <ul className="pagination">
                                    <li className="paginate_button previous disabled" aria-controls="sample_editable_1" tabindex="0" id="sample_editable_1_previous">
                                        <a href="javascript:;"><i className="fa fa-angle-left"></i></a>
                                    </li>
                                    <li className="paginate_button active" aria-controls="sample_editable_1" tabindex="0">
                                        <a style="cursor: pointer;"></a>
                                    </li>

                                    <li className="paginate_button next disabled" aria-controls="sample_editable_1" tabindex="0" id="sample_editable_1_next">
                                        <a href="javascript:;"><i className="fa fa-angle-right"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>*/}
                </div>
            </div>
        );
    }
});

export {TaskList};