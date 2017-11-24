import {Container} from '../common/Container';
import {Selects} from '../plugin/Selects';
let BugCreate = React.createClass({
    getInitialState(){
        return {projectsAlias: []};
        }
    ,
    fileUpload(){
        let form = new FormData();
        form.append('file',this.fileInput.files[0]);
        $.ajax({
            url: '/bugForm/file/upload',
            type: 'POST',
            data: form,
            cache: false,
            contentType: false,
            processData: false,
            success: (res)=>{
                alert(res.data.msg);
            },
            error: (res)=>{
                alert(res.data.msg);
            }
        });
    },
    queryProjectsAlias(){
        $.ajax({
            url: '/project/queryAlias',
            type: 'GET',
            success: (res)=>{

                let projectsAlias = res.data.projectsAlias.map((projectAlias)=>projectAlias.alias);
                this.setState({projectsAlias: projectsAlias});
            }
        });
    },
    componentWillMount(){
        this.queryProjectsAlias();
    },
    render(){
        return (
            <Container theme="创建bug单">
            <div className="portlet-body" >
                <div className="tabbable">
                    <div className="tab-content no-space">
                        <div className="tab-pane active" id="tab_general">
                            <Selects label="所属项目" required={true}
                                     options={this.state.projectsAlias} placeholder={"项目"}/>
                            <div className="form-group">
                                <label className="col-md-2 control-label">标 题
                                    <span className="required">*</span>
                                </label>
                                <div className="col-md-10">
                                    <input type="text" className="form-control maxlength-handler" name="title" maxLength="50" placeholder="" />
                                        <span className="help-block">最多填写50个字符</span>
                                        <span style={{color: 'red'}}>
                                            <span>标题必填</span>
                                        </span>
                                </div>
                                <div style={{clear: 'both'}}></div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-2 control-label">描 述</label>
                                <div className="col-md-10">
                                    <textarea className="form-control maxlength-handler" rows="8" name="product[meta_description]" maxLength="500"></textarea>
                                    <span className="help-block">最多填写500个字符</span>
                                </div>
                                <div style={{clear: 'both'}}></div>

                            </div>
                            <div className="form-group">
                                <label className="col-md-2 control-label" style={{height: 100}} >附 件</label>
                                <div id="fileUpLoad" className="col-md-10">
                                    添加附件
                                    {/*<!-- 自定义 <input type="file"/> -->
                                    <input type="file" id="btnFile" ng-model="btnFile" name="btnFile" onchange="txtFoo.value=this.value;com.company.project.services.newCase.fileUpLoad()" hidden="hidden" />
                                    <input type="text" id="txtFoo" readonly="readonly" style="width: 300px" />
                                    <button onclick="btnFile.click()" style="height: 25px;">上传</button>*/}
                                    <input type="file" name="files" id="files" onChange={this.fileUpload} ref={(input) => this.fileInput = input}/>
                                    <span id="attachmemtMsg" style={{color: 'red'}}></span>
                                </div>
                                <div id="fileDelete" style={{height: 50}}>

                                </div>
                                <div style={{clear: 'both'}}></div>

                            </div>
                            <Selects label="Bug严重级别" required={true} options={["一般","轻微","严重"]}/>
                            <div className="form-group">
                                <label className="col-md-2 control-label"> 分配给 <span className="required">*</span>
                                </label>
                                <div className="col-md-10">
                                    <select className="table-group-action-input form-control input-medium" name="assigner">
                                    </select>
                                    <span style={{color:'red'}}>
                                <span>分配人必填</span>
                            </span>
                                </div>
                                <div style={{clear: 'both'}}></div>

                            </div>
                    </div>

                        </div>
                    </div>
                </div>
            </Container>

    )}
});
export {BugCreate};