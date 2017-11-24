import '../css/vendors/bootstrap.min.css';
import '../css/vendors/bootstrap-progressbar-3.3.4.min.css';

import '../css/vendors/custom.min.css';
import '../css/vendors/daterangepicker.css';
import '../css/vendors/font-awesome.min.css';
import '../css/vendors/green.css';
import '../css/vendors/jqvmap.min.css';
import '../css/vendors/nprogress.css';

import {LeftMenu} from './component/leftMenu/LeftMenu';
import {Top} from './component/top/Top';
import {Content} from './component/content/Content';
import {Footer} from './component/footer/Footer';
let Operation = React.createClass({
    render(){
        return (
            <div className="main_container">
                <LeftMenu/>
                <Top/>
                <Content/>
                <Footer/>
            </div>
        )
    }
});

ReactDOM.render(
        <Operation/> ,
        document.getElementById("container")
    );