import {SingleData} from './SingleData';
import foodList from '../../config/foodList';
import {Selects} from '../select/Selects';

let ConfirmList = React.createClass({

    getInitialState(){
        return {
                    totalNums: sessionStorage.getItem("totalNums") || 0,
                    totalPrices: sessionStorage.getItem("totalPrices") || 0,
                    numLists: JSON.parse(sessionStorage.getItem("numLists")) || {},
                    foodIds: [],
                    nums: []
                }
    },
    componentDidMount(){
        this.calculateFoodNums();
    },

    calculateFoodNums(){
        let foodIds = [],
            nums = [],
            totalNums = 0,
            totalPrices = 0;
        console.log("confirm_this.state.numLists:"+this.state.numLists);

        let numLists = {};
        $.extend(numLists, this.state.numLists);
        for(let i in this.state.numLists){

            foodIds.push(i);
            nums.push(this.state.numLists[i]);
            foodList.forEach((food)=>{
                if(food.id == i){
                    totalPrices += food.price * this.state.numLists[i];
                }
            })
        }
        for(let i in numLists){
            if(numLists[i] == 0){
                delete numLists[i];
            }
        }
        sessionStorage.setItem("numLists", JSON.stringify(numLists));

        nums.forEach((num)=>{
            totalNums += num;
        });

        this.setState({foodIds, nums, totalNums, totalPrices});
    },
    componentDidUpdate(){
        console.log("this.state.foodIds:" + this.state.foodIds);
        console.log("this.state.nums:"+this.state.nums);

    },
    //key就是foodId
    toMinus(key){
        let numLists = this.state.numLists;
        for(let i in numLists){
            if(key == i){
                numLists[i] = !numLists[i] ? 0 : --numLists[i];
            }
        }
        this.setState({numLists});
        this.calculateFoodNums();
    },
    //key就是foodId
    toPlus(key){
        let numLists = this.state.numLists;
        for(let i in numLists){
            if(key == i){
                numLists[i]++;
            }
        }
        this.setState({numLists});
        this.calculateFoodNums();
    },

    render(){

        return (
            <div className="confirmList">
                <div className="table">
                    <div className="t_header">
                        <div>
                            <span>已点清单</span>
                        </div>
                        <div>
                            <span>共</span> <span style={{color: 'red'}}>{this.state.totalNums}</span> <span>份  </span>
                            <span>合计：</span><span style={{color: 'red'}}>{`${this.state.totalPrices}元`}</span>
                        </div>
                    </div>
                    <div className="t_body">
                        {
                              this.state.foodIds && this.state.foodIds.map((foodId, i)=>{
                              return  foodList.map((food)=>{
                                    if(foodId == food.id){
                                        return <SingleData name={food.name}
                                                           price={food.price}
                                                           num={this.state.nums[i]}
                                                           key={food.id}
                                                           i={i}
                                                           toMinus={this.toMinus.bind(this, foodId)}
                                                           toPlus={this.toPlus.bind(this, foodId)}
                                                />;
                                    }
                                })
                            })
                        }
                    </div>
                </div>
                <div className="order_confirm">
                    <div className="peopleCounts">
                        <span>人数：</span>
                        <Selects/>
                    </div>
                    <div className="chooseButton">
                            立即下单
                    </div>
                </div>
            </div>
        );
    }
});

export {ConfirmList}