let Top = React.createClass({

    leftExtend(){
        let $body = $("body");
        let _class = $body.attr("class");

        if(_class === "nav-md"){
            $body.attr("class","nav-sm")
        }else{
            $body.attr("class","nav-md")
        }
    },

    render(){
        return (
          <div className="top_nav">
              <div className="nav_menu">
                  <nav>
                      <div className="nav toggle" onClick={this.leftExtend}>
                          <a id="menu_toggle">
                              <i className="fa fa-bars">
                              </i>
                          </a>
                      </div>

                      <ul className="nav navbar-nav navbar-right">
                          <li>
                              <a href="" className="user-profile dropdown-toggle"
                                 data-toggle="dropdown" aria-expanded="false">
                                  <img src="images/img.jpg" alt="" />
                                        John Doe
                                      <span className=" fa fa-angle-down">
                                      </span>
                              </a>

                              <ul className="dropdown-menu dropdown-usermenu pull-right">
                                  <li>
                                      <a href="javascript:;">
                                          <span className="badge bg-red pull-right">50%</span>
                                          <span>Settings</span>
                                      </a>
                                  </li>
                                  <li>
                                      <a href="login.html">
                                          <i className="fa fa-sign-out pull-right">
                                          </i> Log Out
                                      </a>
                                  </li>

                              </ul>
                          </li>

                      </ul>
                  </nav>

              </div>

          </div>
        );
    }
});

export {Top}