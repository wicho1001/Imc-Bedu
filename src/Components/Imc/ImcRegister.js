import React, { Component } from 'react'
import UserDetail from '../User/UserDetail'
import ImcForm from './ImcForm'
import ImcResults from './ImcResults'


class ImcRegister extends Component{

    // state = {
    //     data:[
    //         { imc:50}
    //     ]
    // }

    // imprimirState =()=>{
    //     console.log(this.props);
    
    // }
    
    
    render(){
        // this.imprimirState();
        return(
            
            <div>
                <UserDetail  />
                <ImcForm onSubmit />
                <ImcResults  />
            </div>
        )
    };

}


export default ImcRegister;