let Index = React.createClass({
    componentDidMount(){
        let $b = $("#b");
        $b.outerWidth();
        $b.css({
                WebkitTransform: 'translateX(-20px)',
            });

        this.animate();

    },
    animate(){
        let $b = $("#b");
        $b.css({
            WebkitTransform: 'translateX(500px)',
            transition: 'all 3s linear'
        });


    },

    render(){
        let aStyle = {
            position: 'relative',
            backgroundColor: 'black',
            height: '100px',
            opacity: 0.5,
        };
        let bStyle = {
            position: 'absolute',
            backgroundColor: 'red',
            width: '50px',
            textAlign: 'center',
        };
        return(
            <div id="a" style={aStyle}>
                <div id="b" style={bStyle}>bbb</div>
            </div>
        );

    }
});

ReactDOM.render(<Index/>,document.getElementById("container"));