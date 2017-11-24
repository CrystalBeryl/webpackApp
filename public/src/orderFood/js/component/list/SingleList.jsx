import {Minus} from '../icon/Minus';
import {Plus} from '../icon/Plus';
let SingleList = React.createClass({
    getInitialState(){
        //如果sessionStorage中存在已经选择的foodId以及num就设置初始值
    //  return {num: nums[`${this.props.id}`] || 0}

        let str_numLists = sessionStorage.getItem("numLists");
        if(str_numLists ==null || str_numLists == "null" || str_numLists == "{}"){
            return {num: 0};
        }
        let _numLists = JSON.parse(str_numLists);

        return {num: _numLists[`${this.props.id}`] || 0}
    },
    toMinus(){
        let num = this.state.num;
        if(!num){
            return ;
        }
        num--;
        //nums[`${this.props.id}`] = num;
        this.setSessionStore(num);
        this.setState({num}, ()=>{
            this.props.onChange(this.state.num, this.props.id)
        });
    },
    setSessionStore(num){
        let str_numLists = sessionStorage.getItem("numLists");
        if(str_numLists == "null" || str_numLists == "{}"){
            return;
        }
        let _numLists = JSON.parse(str_numLists);
        _numLists[`${this.props.id}`] = num;
        sessionStorage.setItem("numLists", JSON.stringify(_numLists));
    },
    getValue(){
        //问下这边怎么实现，因为这边返回的都是最后一条的数据
        console.log("singleNum:"+ this.state.num );
        console.log("singleId:"+ this.props.id );

        return this.state.num;
    },
    toPlus(){
        let num = this.state.num;
        num++;
        //nums[`${this.props.id}`] = num;
        this.setSessionStore(num);
        this.setState({num},()=>{
            this.props.onChange(this.state.num, this.props.id)
        });
    },
   showDetail(){
        this.props.showDetail(this.props.id);
   },
   render(){
        let {
            imgSrc,
            name,
            price,
            sale
        } = this.props;
       return (
           <div className="food">
               <div className="img" onClick={this.showDetail}>
                   <img src={imgSrc} alt={name}/>
               </div>
               <div className="general">
                   <div className="foodName">{name}</div>
                   <div className="price"><span>￥</span>{price}</div>
                   <div className="sale"><span>月销：</span>{sale}</div>
               </div>
               <div className="count">
                   <Minus toMinus={this.toMinus}/>
                    <div className="num">
                         <span>{this.state.num}</span>
                    </div>
                   <Plus toPlus={this.toPlus}/>
               </div>
           </div>

       )
   }
});

export {SingleList}