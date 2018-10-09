import React, { Component } from 'react'
import UserForm from './UserForm'
import UserList from './UserList';

class UserRegister extends Component{

    state = {
        userList: [
            {id: 1, firstName: 'Ernesto', lastName: 'Villaseñor'},
            {id: 2, firstName: 'Ernesto', lastName: 'Villaseñor'}
        ]
    }

    handleSubmit =(user)=>{
        
        this.setState({userList: [user, ...this.state.userList]})
    }

    render(){
        return(
            <div>
                <UserForm onSubmit={this.handleSubmit}/>
                <UserList userList={this.state.userList}></UserList>
            </div>
        )
    };

}


export default UserRegister;