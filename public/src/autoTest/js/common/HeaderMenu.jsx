import {Link} from 'react-router';
import HeaderSecMenu from './HeaderSecMenu';
let HeaderMenu = React.createClass({
    getInitialState() {
        return {
            showedMenu: -1
        };
    },

    handleShow(i) {
        return () => {
            this.setState({
                showedMenu: i
            });
  //          this.menuTimeout && clearTimeout(this.menuTimeout);


        }
    },
    menuTimeout: null,
    handleHide(i) {
	{/**
        return () => {
            this.menuTimeout = setTimeout(() => {
                if (this.state.showedMenu == i) {
                    this.setState({
                        showedMenu: -1
                    })
                }
            }, 100)
        }
		*/}
	
		
		return () => {
		if (this.state.showedMenu == i) {
                    this.setState({
                        showedMenu: -1
                    })
                }}
    },
    render() {

        return (
            <ul className="nav navbar-nav">
                {this.props.menuConfig.map((menu, i) => {

                    return <li
                        key={menu.title}
                        className={`menu-dropdown mega-menu-dropdown ${i == this.state.showedMenu && 'active' || ''}`}>
                        <Link
                            to={menu.link}
                            className="dropdown-toggle"
                            onMouseOver={this.handleShow(i)}
                            onMouseOut={this.handleHide(i)}
                        >
                            {menu.title}{menu.secMenu ? <i className="fa fa-angle-down"/>: null}
                        </Link>
                        {menu.secMenu ? <HeaderSecMenu
                            onShow={this.handleShow(i)}
                            onHide={this.handleHide(i)}
                            show={this.state.showedMenu == i}
                            {...menu.secMenu}
                        />: null}
                    </li>
                })}

            </ul>
        );
    }
});

export { HeaderMenu };