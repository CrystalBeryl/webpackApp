/*
总公司信息管理组件
公司名称：companyName
公司地址：address

*/
let Company = React.createClass({
    render(){
        return (
            <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12">
                    <div className="x_panel">
                        <div className="x_title">
                            <h2>公司信息管理</h2>
                            <div className="clearfix">
                            </div>
                        </div>
                        <div className="x_content">
                            <br />
                            <form id="demo-form2" data-parsley-validate className="form-horizontal form-label-left">

                                <div className="form-group">
                                    <label className="control-label col-md-3 col-sm-3 col-xs-12">公司名称<span className="required">*</span>
                                    </label>
                                    <div className="col-md-6 col-sm-6 col-xs-12">
                                        <input type="text" id="first-name" required="required" className="form-control col-md-7 col-xs-12" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-md-3 col-sm-3 col-xs-12">公司地址<span className="required">*</span>
                                    </label>
                                    <div className="col-md-6 col-sm-6 col-xs-12">
                                        <input type="text" id="last-name" name="last-name" required="required" className="form-control col-md-7 col-xs-12" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-md-3 col-sm-3 col-xs-12">公司介绍</label>
                                    <div className="col-md-6 col-sm-6 col-xs-12">
                                        <input id="middle-name" className="form-control col-md-7 col-xs-12" type="text" name="middle-name" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-md-3 col-sm-3 col-xs-12">公司logo上传
                                    </label>
                                    <div className="col-md-6 col-sm-6 col-xs-12">
                                        <input id="birthday" className="date-picker form-control col-md-7 col-xs-12" required="required" type="text" />
                                    </div>
                                </div>
                                <div className="ln_solid">
                                </div>
                                <div className="form-group">
                                    <div className="col-md-6 col-sm-6 col-xs-12 col-md-offset-3">
                                        <button type="submit" className="btn btn-success">保存</button>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>

    )
    }
});


export {Company}