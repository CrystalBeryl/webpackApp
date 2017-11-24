let Back = React.createClass({
    getInitialState(){
        return {render: false};
    },
    componentDidMount(){

        this.setState({render: true});
    },
    componentWillUpdate(){
        let back = document.getElementById("back");
        let ctx = back.getContext("2d");
        ctx.strokeStyle = '#FF0000';
        ctx.lineWidth = 2;
        ctx.moveTo(35,20);
        ctx.lineTo(15,25);
        ctx.lineTo(35,30);
        ctx.stroke();
    },
    goBack(){
        window.history.back();
    },
    render(){
        return (
            <canvas id="back" height="50" width="50" onClick={this.goBack}>不支持canvas
            </canvas>
        );
}
});
export {Back};