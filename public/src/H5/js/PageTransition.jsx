let Common = require('../../common/base/js/Common');
let PageTransition = React.createClass({
    componentWillMount(){
        Common.handleUA();
    },
    render(){
        let trans = {
            height: '100%',
            transform: 'translateY(100%)',
            transition: 'transform 3s'
        };
        return (
            <div style={{height: '100%'}}>
                <div className="page page-1" style={trans} >
                    <img src="../img/4.jpg"/>
                </div>
             {/*   <div className="page page-2" style={{display:'none'}}> 第二幅图 </div>
                <div className="page page-3" style={{display:'none'}}> 第三幅图 </div>
*/}
            </div>
        );
    }
});

export {PageTransition};