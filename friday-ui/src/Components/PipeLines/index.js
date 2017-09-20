import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PipeLines extends Component {

    render(){
        return(
            <div>
                <h1>PipLines</h1>
                <div className={'pipeline-menu'}>
                    <Link to={'/pipeline'}>New</Link>
                </div>
            </div>
        )
    }
}

export default PipeLines;