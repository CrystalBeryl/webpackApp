// var Header = require('./common/Header');
import * as Header from './common/Header';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import {Index} from './content/Index';
import {BugLists} from './content/BugLists';
import {BugCreate} from './form/BugCreate';
import {ImageSelect} from './select/ImageSelect';

let NoMatch = React.createClass({
    render(){
        return (
            <div>404</div>
        );
    }
});

/*var {
    Router,
    Route,
    hashHistory,
    Link,
    IndexRoute
}=ReactRouter;*/


ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={Header.Header}>
            <IndexRoute component={Index}/>
            <Route path="index" component={Index}/>
            <Route path="form/bugList" component={BugLists}/>
            <Route path="form/bugCreate" component={BugCreate}/>
            <Route path="select" component={ImageSelect}/>
        </Route>
        <Route path="/*" component={NoMatch}/>
    </Router>
  ),document.getElementById("container"));
