import React, { Component } from 'react'
import UserForm from './UserForm'
import UserList from './UserList';

class UserRegister extends Component{
    state = {
        name:'',
        lastname:''
    }
    // handleChange(event){
    //     const target = event.target;
    //     const name = target.name;
    //     this.setState({
    //         [name]: target.value
    //     })
    //     console.log(this.state)
    // }
    handleSubmit(user){
        console.log("desde user register: ", user);
        
    }

    render(){
        return(
            <div>
                <UserForm onSubmit={this.handleSubmit}/>
                <UserList />
            </div>
        )
    };

}


export default UserRegister;