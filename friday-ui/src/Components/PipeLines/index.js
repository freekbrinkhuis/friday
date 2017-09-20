import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PipeLines extends Component {
    state = {pipelines:[]};
    componentDidMount(){
        fetch('/api/pipelines')
        .then(res => res.json())
        .then(pipelines => this.setState({pipelines}))
    }
    render(){
        return(
            <div>
                <h1>PipLines</h1>
                <div className={'pipeline-menu'}>
                    <Link to={'/pipeline'}>New</Link>
                </div>
                <div>
                    {
                        this.state.pipelines.map(pipeline =>
                            <div key={pipeline.id}>{pipeline.name}</div>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default PipeLines;