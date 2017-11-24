
import '../css/vendors/bootstrap.min.css';
import '../css/vendors/font-awesome.min.css';
import '../css/vendors/nprogress.css';
import '../css/vendors/animate.min.css';
import '../css/vendors/custom.min.css';


import {LoginWrapper} from './component/login/LoginWrapper';
//import {Register} from './component/login/Register';
let Login = React.createClass({
    render(){
        return (
            <div>
                <a className="hiddenanchor" id="signup">
                </a>
                <a className="hiddenanchor" id="signin">
                </a>
                <div className="login_wrapper">
                    <LoginWrapper/>
{/*
                    <Register/>
*/}
                </div>
            </div>
        )
    }

});

ReactDOM.render(<Login/>, document.getElementsByClassName("login")[0]);