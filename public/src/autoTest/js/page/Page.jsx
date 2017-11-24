import {Link} from 'react-router';
let Page = React.createClass({
    getInitialState(){
        return({currentPageNum:1});
    },
    changeCurrentPageNum(pageNum){
        this.setState({currentPageNum:pageNum});
        this.props.changeCurrentPageNum(pageNum);

    },
    changeNextPageNum(){
        if(this.state.currentPageNum == this.props.totalPageNums.length){
            return;
        }
        this.setState({currentPageNum:this.state.currentPageNum+1});

        this.props.changeNextPageNum();
    },
    changePrePageNum(){
        if(this.state.currentPageNum === 1){
            return;
        }
        this.setState({currentPageNum:this.state.currentPageNum-1});

        this.props.changePrePageNum();
    },
    componentDidMount(){
        $("li.page")[0] && ($("li.page")[0].className = 'paginate_button page active');
        this.checkPre();
        this.checkNext();
    },
    checkPre(){
        $("#sample_editable_1_previous")[0].className = this.state.currentPageNum === 1 ? "paginate_button previous disabled" : "paginate_button previous";
    },
    checkNext(){
        $("#sample_editable_1_next")[0].className =this.state.currentPageNum == this.props.totalPageNums.length ?  "paginate_button next disabled" : "paginate_button next";
    },
    componentWillUpdate(nextProps,nextStatus){
        $("li.page")[this.state.currentPageNum-1] && ($("li.page")[this.state.currentPageNum-1].className = nextStatus.currentPageNum != this.state.currentPageNum ? 'paginate_button page' : 'paginate_button page active');
        $("li.page")[nextStatus.currentPageNum-1] && ($("li.page")[nextStatus.currentPageNum-1].className = $("li.page")[nextStatus.currentPageNum-1] ? 'paginate_button page active' : 'paginate_button page');

    },
    componentDidUpdate(){
        this.checkPre();
        this.checkNext();
    },

    render(){
        return (
            <div className="row">
            <div className="col-md-12">
                <div className="portlet light">
                    {this.props.children}
                    <div className="row">
                        <div className="col-md-5 col-sm-5">
                        </div>
                        <div className="col-md-7 col-sm-7">
                            <div className="dataTables_paginate paging_simple_numbers" id="sample_editable_1_paginate" >
                                <ul className="pagination">
                                    <li className="paginate_button previous" aria-controls="sample_editable_1" tabIndex="0"
                                        onClick={this.changePrePageNum} id="sample_editable_1_previous">
                                        <Link><i className="fa fa-angle-left"></i></Link>
                                    </li>
                                    {
                                        this.props.totalPageNums && this.props.totalPageNums.map((pageNum)=> (
                                            <li className='paginate_button page' key={pageNum} onClick={this.changeCurrentPageNum.bind(this, pageNum)} aria-controls="sample_editable_1" tabIndex="0">
                                                <Link style={{cursor: "pointer"}}>{pageNum}</Link>
                                            </li>
                                        ))}
                                    <li className="paginate_button next" aria-controls="sample_editable_1" tabIndex="0" onClick={this.changeNextPageNum} id="sample_editable_1_next">
                                        <Link><i className="fa fa-angle-right"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
});

export {Page};
