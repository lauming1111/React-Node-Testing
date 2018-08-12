import * as React from 'react'
import {ProfileCard} from './containers/ProfileCard'
import {respondJson} from './constants/mockData'
import {deepGenerateTree} from './utils/generateTree'
import {BackTop, Button,Icon} from 'antd';

class App extends React.PureComponent {
    render() {
        return (
            <div align="center">
                {deepGenerateTree(ProfileCard)(respondJson)}
                <BackTop/> <strong style={{color: 'rgba(64, 64, 64, 0.6)'}}> </strong>

                <div align="right">
                    <Button type="primary"  href="https://github.com/lauming1111/sanuker">{<Icon type="github" />}Lau Ming GitHub</Button>
                </div>
            </div>
        );
    }
}

export default App;
