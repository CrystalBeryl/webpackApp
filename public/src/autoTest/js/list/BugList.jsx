import bugTitleConfig from '../configs/tableTitleConfig';
import {Page} from '../page/Page';
import {BugTable} from '../tbody/BugTable';
let BugList = React.createClass({
    getInitialState(){
	 
        return ({bugLists:[],currentPageNum:1,totalPageNums:[1]});
    },

    componentWillMount(){
        this.queryBugLists(1);
    },
    
    queryBugLists(pageNum){
        $.ajax({
            url: '/bugForm/queryBugList/'+pageNum,
            method: 'GET',
            success: (res)=>{
                this.setState({bugLists:res.data.lists,currentPageNum:pageNum,totalPageNums:res.data.totalPageNums});
            }
        })
    },
    changeCurrentPageNum(pageNum){
	
        this.queryBugLists(pageNum);
        this.setState({currentPageNum:pageNum})

    },
    changeNextPageNum(){

        this.queryBugLists(this.state.currentPageNum+1);
    },
    changePrePageNum(){
        this.queryBugLists(this.state.currentPageNum-1);
    },
    render(){
        return (
            <Page totalPageNums={this.state.totalPageNums} changeCurrentPageNum={this.changeCurrentPageNum}
                  changeNextPageNum={this.changeNextPageNum} changePrePageNum={this.changePrePageNum}>
                <BugTable tableTitles={bugTitleConfig[0].tableTitles} bugs={this.state.bugLists} currentPageNum={this.state.currentPageNum}/>
            </Page>
        );
    }

});
export {BugList};