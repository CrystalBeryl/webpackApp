import {ImageSelect} from '../select/ImageSelect';
let Selects = React.createClass({
    render(){
        return (
            <div className="form-group" style={{paddingBottom: 35}}>
                <label className="col-md-2 control-label">{this.props.label}
                    {this.props.required && <span className="required">*</span>}
                </label>
                <div className="col-md-10">
                    <ImageSelect options={this.props.options} placeholder={this.props.placeholder}/>
                </div>
            </div>
        );
    }
});
export {Selects};