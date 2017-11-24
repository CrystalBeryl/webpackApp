let projectsAlias = React.createClass({
    queryProjectsAlias(){
        $.ajax({
            url: '/project/queryAlias',
            type: 'GET',
            success: (res) => {
                res.data.projectsAlias.map((projectAlias,id) => (
                        <option key={id}>{projectAlias.alias}</option>
                    )
                )
                this.setState({projectsAlias: res.data.projectsAlias});

            }
        });
    },
    render(){

    }
});