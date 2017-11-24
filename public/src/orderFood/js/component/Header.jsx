import {Back} from './icon/Back';

let Header = React.createClass({

    render(){
        return (
            <div id="container">
                <div id="header">
                    <div className="icon_back">
                        <Back/>
                    </div>
                    <div className="branch">
                        仙林店
                    </div>
                    <div>
                    </div>
                </div>
                {this.props.children}
            </div>
        );
    }
});

export {Header}