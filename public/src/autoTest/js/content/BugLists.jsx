import {Container} from '../common/Container';
import {BugList} from '../list/BugList';
import menuConfig from '../configs/menuConfig';
let BugLists = React.createClass({
    render(){
        return (
            <Container theme="bug列表">
                <BugList />
            </Container>);
    }
});

export {BugLists};