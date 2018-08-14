import * as React from 'react'
import {ProfileCard} from './containers/ProfileCard'
import {deepGenerateTree} from './utils/generateTree'
import {BackTop, Button, Icon} from 'antd';
import axios from 'axios';

class App extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            respondjson:[],
        };
    }

    componentDidMount() {
        axios.get('/people')
            .then(result => this.setState({
                respondjson: result.data,
            }))
    }

    render() {
        let fetchdata = this.state.respondjson;
        console.log(fetchdata);
        return (
            <div align="center">
                {deepGenerateTree(ProfileCard)(fetchdata)}
                <BackTop/> <strong style={{color: 'rgba(64, 64, 64, 0.6)'}}> </strong>
                <div align="right">
                    <Button type="primary" href="https://github.com/lauming1111/sanuker">{<Icon type="github"/>}Lau Ming
                        GitHub</Button>
                </div>
            </div>
        );
    }
}

export default App;
