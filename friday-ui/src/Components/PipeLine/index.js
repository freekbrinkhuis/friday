import React from 'react';

const PipeLine = (props) =>{

    if(props.match.params.id){
        //get pipeline from db

        return (
            <div>
                <h1>Edit PipeLine</h1>
            </div>)  
    } else {
        return(
            <div>
                <h1>New PipeLine</h1>
            </div>
        )
    }
        
}

export default PipeLine;
