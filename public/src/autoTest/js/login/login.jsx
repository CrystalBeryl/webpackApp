var content = document.getElementsByClassName("content")[0];
var Warn = require('../common/Warn');

var Login = React.createClass({

    getInitialState: function () {

        return {
            usernameWarn: '',
            passwordWarn: '',
            display: {display: 'none'},
            warning: '',
            usernameDisabled: true,
            passwordDisabled: true

        }
    },
    changeUsername: function () {

        this.setState({usernameWarn: ""})

        let emailReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        var _username=this._username.value.trim();
        if(_username==""){
            this.setState({usernameWarn: "用户名不能为空!",usernameDisabled: true})
            return;
        }
  //      emailReg.test(_username) ? this.setState({username: _username}) : this.setState({usernameWarn: "输入的用户名格式不正确!"});
        if(emailReg.test(_username)){
            this.setState({username: _username,usernameDisabled: false})
        }else{
            this.setState({usernameWarn: "输入的用户名格式不正确!",usernameDisabled: true})
        }
    },
    changePassword: function () {
        this.state.passwordWarn="";
        var _password = this._password.value.trim();
        if(_password==""){
           this.setState({passwordWarn :"密码不能为空",passwordDisabled: true});

            return;
        }
        this.setState({password: _password,passwordDisabled: false});

    },
    login: function (e) {

        $.ajax({
            url: '/login',
            method: 'POST',
            data: {username: _username, password: _password},
            success: function () {
                location.href='/autoTest/index';
            },
            error: function () {
                this.setState({display: {display: true}, warning: '登录失败!'});
            }
        });
        e.preventDefault();
    },
    render: function () {
        var warnStyle = {
            color: "#dd4b39"
        };
        return (<form className="login-form"  name="logForm">
                <h3 className="form-title">登录账户</h3>
                <div className="alert alert-danger" style={this.state.display}>
                    <span>{this.state.warning}</span>
                <button className="close" data-close="alert"></button>
            </div>
                <div className="form-group">
                    <label className="control-label visible-ie8 visible-ie9">Username</label>
                    <div className="input-icon">
                        <i className="fa fa-user"></i>
                        <input onChange={this.changeUsername} className="form-control placeholder-no-fix" ref={(a)=>this._username=a} type="text" autocomplete="off" maxlength="20" placeholder="用户名(263邮箱)" name="username"/>
                        <span style={warnStyle}>{this.state.usernameWarn}</span>
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label visible-ie8 visible-ie9">Password</label>
                    <div className="input-icon">
                        <i className="fa fa-lock"></i>
                        <input onChange={this.changePassword} ref={(a)=>this._password=a} className="form-control placeholder-no-fix" type="password" autocomplete="off" maxlength="15" placeholder="密码" name="password"/>
                        <span style={warnStyle}>{this.state.passwordWarn}</span>
                    </div>
                </div>
                <div className="form-actions">
                    <button type="submit" className="btn blue pull-right" onClick={this.login} disabled={this.state.usernameDisabled || this.state.passwordDisabled}>
                        登 录 <i className="m-icon-swapright m-icon-white"></i>
                    </button>
                </div>
                <div className="create-account">
                    <p>
                        还没有账户 ?&nbsp; <a href="javascript:;" id="register-btn">
                        创建账户 </a>
                    </p>
                </div>
            </form>);
    }

});

//module.exports=Login;

ReactDOM.render(<Login />,content)