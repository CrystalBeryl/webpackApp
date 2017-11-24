let LoginWrapper = React.createClass({
    getInitialState(){
        return {
            /*username: '',
            password: '',
            disabled: true,*/
            isUsernameEmpty: true,
            isPasswordEmpty: true,
            isUsernameChange: false,
            isPasswordChange: false
        }
    },
    change(type, e){

        this.setState({
            [`is${type}Empty`]: !e.target.value.trim(),
            [`is${type}Change`]: true
        });

    },

    render(){

        return (
            <div className="animate form login_form">
                <section className="login_content">
                    <form>
                        <h1>登 录 系 统</h1>
                        <div>
                            <input type="text" className="form-control" placeholder="用户名"
                                   required="true" onChange={this.change.bind(this, 'Username')}
                                   style={{borderColor: `${this.state.isUsernameChange && this.state.isUsernameEmpty ? 'red' : ''}`}}
                                   />
                        </div>
                        <div>
                            <input type="password" className="form-control" placeholder="密码"
                                   required="true" onChange={this.change.bind(this, 'Password')}
                                   style={{borderColor: `${this.state.isPasswordChange && this.state.isPasswordEmpty ? 'red' : ''}`}}
                                    />
                        </div>
                        <div>
                            <button disabled={this.state.isUsernameEmpty || this.state.isPasswordEmpty}
                                    className="btn btn-default submit"
                                    onClick={this.login}>
                                登 录
                            </button>
                            <a className="reset_pass" href="#">忘记密码?</a>
                        </div>

                        <div className="clearfix"></div>

                        <div className="separator">
                            {/*<p className="change_link">New to site?
                                <a href="#signup" className="to_register"> Create Account </a>
                            </p>

                            <div className="clearfix"></div>*/}
                            <br />

                            <div>
                                <h1><i className="fa fa-paw"></i> 餐饮后台管理系统</h1>
                                <p>©2017 All Rights Reserved.</p>
                            </div>
                        </div>
                    </form>
                </section>
            </div>

        )
    }
});

export {LoginWrapper}