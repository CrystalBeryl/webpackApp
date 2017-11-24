import {Link} from 'react-router';

let HeaderSecMenu = React.createClass({

    render () {
        return (
            <ul
                className="dropdown-menu"
                style={{
                    minWidth: "410px",
                    display: this.props.show ? 'block' : 'none'
                }}
                onMouseOut={this.props.onHide}
                onMouseOver={this.props.onShow}
            >
            <li>
                <div className="mega-menu-content">
                    <div className="row">
                        <div className="col-md-4">
                            <ul className="mega-menu-submenu">
                                <li>
                                    <h3>{this.props.title}</h3>
                                </li>
                                    {
                                        this.props.menus.map(function(secMenu) {
                                        return (
                                            <li  key={secMenu.secMenuName}>
                                                <Link to={secMenu.link} className="iconify">
                                                    <i className={secMenu.className}></i>
                                                    {secMenu.secMenuName}
                                                </Link>
                                            </li>)
                                    })}
                            </ul>
                        </div>
                    </div>
                </div>
            </li>
        </ul>



        );
    }
});
export default HeaderSecMenu;