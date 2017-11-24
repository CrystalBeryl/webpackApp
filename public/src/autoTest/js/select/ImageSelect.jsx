import './ImageSelect.scss';
let ImageSelect = React.createClass({

    getInitialState(){
        return ({
            month: '',
            inputValue: '',
            status: 'none',
            arrowStatus: 'down'
        });
    },
    showDropdown(){
        this.setState({status: 'block', arrowStatus: 'up'});
    },
    hideDropdown(){
        setTimeout(()=>{
            this.setState({status: 'none',arrowStatus: 'down'});
        }, 200);
    },
    toggleDropdown(){
        this.state.status=='block' &&  this.state.arrowStatus=='up' ?
            this.setState({status: 'none',arrowStatus: 'down'}) : this.setState({status: 'block', arrowStatus: 'up'})
    },
    chooseMonth(month){
        this.setState({month: month, inputValue: month});
    },
    changeMonth(e){
        this.setState({inputValue: e.target.value, month: ''});
    },

    render(){

        return (
            <div >
            <div className={`combo-select ${this.state.arrowStatus=='down' ? '': 'combo-open'} `}>
                <div className="combo-arrow" onClick={this.toggleDropdown}>

                </div>
                <div>
                <ul
                    className="combo-dropdown"
                    style={{
                        display: this.state.status}}
                >
                    {
                        this.props.options.filter(month => {
                            return (month.indexOf(this.state.inputValue)!=-1)
                        }).map((month,id) =>(
                            <li
                                className={`option-item ${this.state.month == month ? 'hover': ''}`}
                                style={{display: "list-item"}}
                                onClick={this.chooseMonth.bind(this, month)}
                                key={id}
                            >
                                <span>{month}</span>
                            </li>
                        ))
                    }

                </ul>
                </div>
                <input
                    type="text"
                    placeholder={this.props.placeholder}
                    value={this.state.inputValue}
                    onFocus={this.showDropdown}
                    className="combo-input text-input"
                    onBlur={this.hideDropdown}
                    onChange={this.changeMonth}
                />
            </div>
        </div>
    );
    }
});
export {ImageSelect};