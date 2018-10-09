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
<<<<<<< HEAD
                <ImcForm onSubmit />
=======
                <ImcForm onSubmit={} />
>>>>>>> d6aad80db3956d5447f675cc25dc855ea7367ddf
                <ImcResults  />
            </div>
        )
    };

}


export default ImcRegister;