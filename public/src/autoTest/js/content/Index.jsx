import {Container} from '../common/Container';
import {TaskList} from  '../list/TaskList';
let Index = React.createClass({

    render(){
        return (
            <Container theme="首页面板">
                <TaskList />
            </Container>);
    }
});

export {Index};

