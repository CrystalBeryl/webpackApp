
let Plus = React.createClass({
    /*getInitialState() {
        return {
            num: 0
        }
    },

    toPlus() {
        if (this.props.shouldChange(this.state.num++)) {

        }
       this.setState({
           num: this.state.num++
       }, () => {
           this.props.onChange(this.state.num);
       })
    },*/
    render(){

        return (
            <div className="plus" onClick={this.props.toPlus}>
                <div className="circle">
                    <div className="h_border">
                    </div>
                    <div className="v_border">
                    </div>
                </div>
            </div>
        );
    }
});
export {Plus};