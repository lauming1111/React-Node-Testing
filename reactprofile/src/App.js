import * as React from 'react'
import { ProfileCard } from './containers/ProfileCard'
import { respondJson } from './constants/mockData'
import { deepGenerateTree } from './utils/generateTree'

class App extends React.PureComponent {
    render() {
        return (
            <React.Fragment>
                {deepGenerateTree(ProfileCard)(respondJson)}
            </React.Fragment>
        );
    }
}

export default App;
