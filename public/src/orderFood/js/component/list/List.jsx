import {SingleList} from './SingleList';
let List = React.createClass({
    getInitialState(){
        let numLists = JSON.parse(sessionStorage.getItem("numLists"));
        return {numLists: numLists || {}};
    }
    ,
    /*getInitialState(){
        //return {numLists: []};
        /!*return {
            data: [],
            hasMoreData: true,
            lastIndex: -1
        }*!/
    },*/
    /*toMinus(foodId){

        let count = 0;
        count++;
        let numLists = this.state.numLists;
        let foodIdLists = [];
        numLists && numLists.forEach((numList)=>{
            foodIdLists.push(numList.foodId)
        });
        (foodIdLists && ~foodIdLists.indexOf(foodId)) ?
            numLists.forEach((numList)=>{
                if(numList.foodId == foodId){
                    numList.num = (numList.num <= count ? 0 : numList.num-count);
                }
            }) :
            numLists.push({foodId: foodId, num: 0});

        this.setState({numLists});
    },
    toPlus(foodId){
        let count = 0;
        count++;
        let numLists = this.state.numLists;
        let foodIdLists = [];
        numLists && numLists.forEach((numList)=>{
            foodIdLists.push(numList.foodId)
        });
        (foodIdLists && ~foodIdLists.indexOf(foodId)) ?
            numLists.forEach((numList)=>{
                if(numList.foodId == foodId){
                    numList.num += count;
                }
            }) :
            numLists.push({foodId: foodId, num: count});

        this.setState({numLists});
    },*/

    /*componentWillMount(){
        this.fetchData();
    },
    scrollFn(){
        if (!this.state.hasMoreData) {
            return;
        }
        console.log(window.innerHeight);
        let $list = document.getElementsByClassName("list")[0];
        let $food = document.getElementsByClassName("food")[0];
        let scrollHeight = $list.scrollHeight;
        let scrollTop = $list.scrollTop;
        if (scrollHeight - scrollTop < $food.scrollHeight*10) {
            this.loadMore();
        }
    },
    loadMore(){
      this.fetchData(this.state.lastIndex);
    },
    fetchData(){
        setTimeout(function () {
            let data = [
                {
                    id: 1,
                    categoryId: 1,
                    imgSrc: 'https://imgsa.baidu.com/forum/w%3D580/sign=698e7f17b31c8701d6b6b2ee177d9e6e/cf2a6059252dd42a6fc9c058033b5bb5c8eab805.jpg',
                    name: '经典石锅拌饭',
                    price: 30,
                    sale: 999,
                },
                {
                    id: 2,
                    categoryId: 1,
                    imgSrc: 'https://imgsa.baidu.com/forum/w%3D580/sign=698e7f17b31c8701d6b6b2ee177d9e6e/cf2a6059252dd42a6fc9c058033b5bb5c8eab805.jpg',
                    name: '海鲜拌饭',
                    price: 30,
                    sale: 999,
                },
                {
                    id: 3,
                    categoryId: 1,
                    imgSrc: 'https://imgsa.baidu.com/forum/w%3D580/sign=698e7f17b31c8701d6b6b2ee177d9e6e/cf2a6059252dd42a6fc9c058033b5bb5c8eab805.jpg',
                    name: '烤牛肉拌饭',
                    price: 30,
                    sale: 999,
                },
                {
                    id: 4,
                    categoryId: 1,
                    imgSrc: 'https://imgsa.baidu.com/forum/w%3D580/sign=698e7f17b31c8701d6b6b2ee177d9e6e/cf2a6059252dd42a6fc9c058033b5bb5c8eab805.jpg',
                    name: '章鱼拌饭',
                    price: 20,
                    sale: 129,
                },
                {
                    id: 5,
                    categoryId: 1,
                    imgSrc: 'https://imgsa.baidu.com/forum/w%3D580/sign=698e7f17b31c8701d6b6b2ee177d9e6e/cf2a6059252dd42a6fc9c058033b5bb5c8eab805.jpg',
                    name: '海鲜拌饭',
                    price: 30,
                    sale: 999,
                },
                {
                    id: 6,
                    categoryId: 1,
                    imgSrc: 'https://imgsa.baidu.com/forum/w%3D580/sign=698e7f17b31c8701d6b6b2ee177d9e6e/cf2a6059252dd42a6fc9c058033b5bb5c8eab805.jpg',
                    name: '海鲜拌饭2',
                    price: 31,
                    sale: 999,
                },
                {
                    id: 7,
                    categoryId: 1,
                    imgSrc: 'https://imgsa.baidu.com/forum/w%3D580/sign=698e7f17b31c8701d6b6b2ee177d9e6e/cf2a6059252dd42a6fc9c058033b5bb5c8eab805.jpg',
                    name: '海鲜拌饭3',
                    price: 32,
                    sale: 145,
                },
                {
                    id: 8,
                    categoryId: 1,
                    imgSrc: 'https://imgsa.baidu.com/forum/w%3D580/sign=698e7f17b31c8701d6b6b2ee177d9e6e/cf2a6059252dd42a6fc9c058033b5bb5c8eab805.jpg',
                    name: '海鲜拌饭2',
                    price: 31,
                    sale: 999,
                },
                {
                    id: 9,
                    categoryId: 1,
                    imgSrc: 'https://imgsa.baidu.com/forum/w%3D580/sign=698e7f17b31c8701d6b6b2ee177d9e6e/cf2a6059252dd42a6fc9c058033b5bb5c8eab805.jpg',
                    name: '海鲜拌饭4',
                    price: 32,
                    sale: 145,
                },
                {
                    id: 10,
                    categoryId: 1,
                    imgSrc: 'https://imgsa.baidu.com/forum/w%3D580/sign=698e7f17b31c8701d6b6b2ee177d9e6e/cf2a6059252dd42a6fc9c058033b5bb5c8eab805.jpg',
                    name: '海鲜拌饭5',
                    price: 31,
                    sale: 999,
                },
                {
                    id: 11,
                    categoryId: 1,
                    imgSrc: 'https://imgsa.baidu.com/forum/w%3D580/sign=698e7f17b31c8701d6b6b2ee177d9e6e/cf2a6059252dd42a6fc9c058033b5bb5c8eab805.jpg',
                    name: '海鲜拌饭6',
                    price: 31,
                    sale: 999,
                }
            ];
            this.setState({
                data: this.state.data.concat(data),
                lastIndex: data[data.length - 1].id,
                hasMoreData: true
            });
        }.bind(this),1000)

    },*/

    onChange(num, foodId){

        let numLists = this.state.numLists;
        numLists[`${foodId}`]=num;
        if(!num){
            delete numLists[`${foodId}`];
        }
        console.log(numLists);
        //this.setState({numLists});
        this.setState({numLists}, ()=>{
            this.props.onChange(this.state.numLists);
        });
    },
    showDetail(foodId){
        this.props.showDetail(foodId);
    },
    render(){
        //let data = this.state.data;
        return (
            <div className="list">
               {this.props.foodList && this.props.foodList.map((food) => (
                    <SingleList {...food} key={food.id}
                                onChange={this.onChange}
                                showDetail={this.showDetail}
                    />

                ))}
            </div>
        );
    }
});
export {List};