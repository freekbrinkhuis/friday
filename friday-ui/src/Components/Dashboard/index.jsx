import React, { Component } from 'react';
import classnames from 'classnames';

import './style.css';

class Dashboard extends Component{
    // static propTypes = {}
    // static defaultProps = {}
    // state = {}

    render(){
        const { className, ...props } = this.props;
        console.log(...props);
        return(
            <div className={classnames('dashboard', className)}>
                <h1>
                    Friday dashboard
                </h1>
            </div>
        );
    }
}

export default Dashboard;