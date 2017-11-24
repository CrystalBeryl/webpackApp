import './foodDetail.scss';
let FoodDetail = React.createClass({

    render(){
        let {
            name,
            imgSrc,
            introduction
        }=this.props;
        return (
                <div className="detail">
                    <div className="header">
                        <div>

                        </div>
                        <div className="name">
                            {name}
                        </div>
                        <div className="close" onClick={this.props.close}>
                            <div className="icon-close">
                                ×
                            </div>
                        </div>
                    </div>
                    <div className="img">
                        <img src={imgSrc}/>
                    </div>
                    <div className="words">
                        <div className="intro">
                            <span>菜品介绍</span>
                        </div>
                        <div className="introduction">
                           <span>
                               {introduction}
                           </span>
    {/*
                            {introduction}
    */}
                        </div>
                    </div>
            </div>
        );
    }
});

export {FoodDetail}