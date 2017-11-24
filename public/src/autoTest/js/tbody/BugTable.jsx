let BugTable = React.createClass({
    render(){
        return (
            <div className="portlet-body">
                <table className="table table-striped table-hover table-bordered" id="sample_editable_1">
                    <thead>
                    <tr>
                        {this.props.tableTitles.map((tableTitle)=> {
                            return (<th key={tableTitle}>{tableTitle}</th>);
                        })}
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.bugs && this.props.bugs.map((bug,id)=> {
                        return (
                            <tr style={{cursor: "pointer"}} key={bug.id}>
                                <td>{id+1+10*(this.props.currentPageNum-1)}</td>
                                <td>{bug.alias && bug.alias}</td>
                                <td>{bug.title && bug.title}</td>
                                <td>{bug.priority && bug.priority}</td>
                                <td>{bug.assigner && bug.assigner}</td>
                            </tr>);
                    })}
                    </tbody>
                </table>
            </div>
        );
    }
});

export {BugTable};
