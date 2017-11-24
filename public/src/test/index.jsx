
var container = document.getElementById("container");
var HelloApp = React.createClass({

render: function(){
	return (
		<div>
		{this.props.name}
		</div>
	);
}
});

	ReactDOM.render(<HelloApp name="33342323 3333"/>,container);

