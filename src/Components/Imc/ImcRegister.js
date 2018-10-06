import React, { Component } from 'react'
import UserDetail from '../User/UserDetail'
import ImcForm from './ImcForm'
import ImcResults from './ImcResults'


class ImcRegister extends Component{
    render(){
        return(
            
            <div>
                <UserDetail/>
                <ImcForm/>
                <ImcResults/>
            </div>
        )
    };

}


export default ImcRegister;