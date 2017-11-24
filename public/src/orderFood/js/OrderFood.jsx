import '../css/index.scss';
import './component/confirm/confirmList.scss'
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import {FoodCategory} from './component/category/FoodCategory';
import {List} from './component/list/List';
import foodList from './config/foodList';
import {ShoppingCart} from './component/shoppingCart/ShoppingCart';
import {FoodDetail} from './component/list/FoodDetail';
import {Cover} from './component/list/Cover';
import {ConfirmList} from './component/confirm/ConfirmList';

import {Header} from './component/Header';
let Common = require('../../common/base/js/Common');
window.$ = $;
let OrderFood = React.createClass({
    getInitialState(){

        return {
            categoryId: 1,
            foodList: [],
            empty: true,
            totalPrices: 0.00,
            totalNums: 0,
            show: false,
            food: {}
        };
    },
    componentWillMount(){
        Common.handleUA();

//        window.nums = {};
        this.chooseCgy(1);
    },

    //如果sessionStorage中有numLists的记录就先展示numLists中的记录
    componentDidMount(){
        let _numLists = JSON.parse(sessionStorage.getItem("numLists"));
        if(_numLists == {}){
            return;
        }
        this.onChange(_numLists);
    },
    chooseCgy(categoryId){

        let foods = [];
        //通过当前页所属的食品品类找出该食品品类下面的所有食物 this.state.foodList
        foodList.forEach((food)=>{
            if(food.categoryId == categoryId){
                foods.push(food);
            }
        });
        this.setState({categoryId: categoryId,foodList: foods})
    },
    //当食物的数量发生变化时会调用onChange方法，更新view
    onChange(numLists){
        let totalPrices = 0;
        let totalNums = 0;
        /*let foodIds = [];
        let nums = [];*/
        for(let i in numLists){
            this.state.foodList.forEach((food)=>{
                if(i == food.id){
                    totalPrices +=numLists[i]*food.price;
                    /*foodIds.push(i);
                    nums.push(numLists[i])*/
                }
            });
            totalNums += numLists[i];
        }
        //将选择的食物的id以及对应的num存到numLists中
        sessionStorage.setItem("numLists", JSON.stringify(numLists));
        sessionStorage.setItem("totalNums",totalNums);
        sessionStorage.setItem("totalPrices",totalPrices);

        this.setState({totalPrices,totalNums,empty: !totalNums});

    },
    showDetail(foodId){
        this.state.foodList && this.state.foodList.forEach((food)=>{
            if(foodId == food.id){
                this.setState({show: true, food});
            }
        });
    },
    close(){
        this.setState({show: false});
    },
    render(){
        return (

                <div id="contents">
                    {this.state.show ? <Cover/> : ''}
                    <div id="content">
                        <FoodCategory chooseCgy={this.chooseCgy} categoryId={this.state.categoryId}/>
                        <List foodList={this.state.foodList}
                              onChange={this.onChange}
                              showDetail={this.showDetail}
                        />
                    </div>
                    <div id="footer">
                        <ShoppingCart empty={this.state.empty}
                                      totalNums={this.state.totalNums}
                                      totalPrices={this.state.totalPrices}
                        />
                    </div>

                    {this.state.show ? <FoodDetail {...this.state.food} close={this.close}/> : '' }

                </div>

        );
    }
});

/*ReactDOM.render(<OrderFood/>
    ,document.getElementById("body"));*/

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Header}>
            <Route path="list" component={OrderFood}/>
            <Route path="create" component={ConfirmList}/>
        </Route>
    </Router>
    ,document.getElementById("body"));



