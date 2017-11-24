import foodCategory from '../../config/foodCategory';

let FoodCategory = React.createClass({

    render(){
        return (
            <div className="menu">
                    {
                        foodCategory.map((category)=>(
                        <div
                            className={`menu-list ${this.props.categoryId==category.id ? 'selected' :''}`}
                            key={category.id}
                            onClick={()=>(this.props.chooseCgy(category.id))}>
                            {category.name}
                        </div>
                    ))
                    }
            </div>

        );
    }
});
export {FoodCategory};