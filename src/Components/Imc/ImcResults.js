import React from 'react';
import ImcForm from './ImcForm'

function ImcResults(props){
    return(
        <div>
            <h1>
               {props.ImcForm} 
            </h1>
        </div>
    );
}


export default ImcResults;