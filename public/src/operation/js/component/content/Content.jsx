import {Company} from '../company/Company'
let Content = React.createClass({
    render(){
        return (
            <div className="right_col" role="main" style={{minHeight: '1694px'}}>
                <Company/>
            </div>
        )
    }
});
export {Content}