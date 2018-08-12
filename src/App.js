import * as React from 'react'
import {ProfileCard} from './containers/ProfileCard'
import {respondJson} from './constants/mockData'
import {deepGenerateTree} from './utils/generateTree'
import {BackTop} from 'antd';

class App extends React.PureComponent {
    render() {
        return (
            <React.Fragment>
                {deepGenerateTree(ProfileCard)(respondJson)}
                <BackTop/> <strong style={{color: 'rgba(64, 64, 64, 0.6)'}}> </strong>
            </React.Fragment>
        );
    }
}

export default App;
