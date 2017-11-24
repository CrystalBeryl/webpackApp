let Selects = React.createClass({
    getInitialState(){
        return ({
            totalCounts: [1,2,3,4,5,6,7,8],
            selected: 0,
            show: false
        });

    },
    showSelect(){
        this.setState({show: !this.state.show});
    },
    choosePeople(count){
        console.log("count:"+ count);
        this.setState({selected: count, show: false});
    },
   render(){
       return (
           <div className={`selects ${this.state.show ? 'open' : ''}`}>
               <div className="default" value="0" onClick={this.showSelect}>
                   {!this.state.selected? '未选择' : this.state.selected}
               </div>

               <div className={`peoples ${this.state.show ? 'visible' : 'invisible'}`}>
               {

                   this.state.totalCounts.map((count, i)=>{
                       return (<div className={`people ${this.state.selected == count ? 'red' : ''}`}
                                    key={i}
                                    onClick={this.choosePeople.bind(this, count)}>
                                    {count}
                                </div>)

                   })


               }
               </div>
           </div>
       );
   }
});

export {Selects}