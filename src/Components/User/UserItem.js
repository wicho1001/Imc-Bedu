import React from 'react';
import UserRegister from './UserRegister'

function UserItem(props){
    return(
        <p>{JSON.stringify(props.user)}</p>
    );
}

export default UserItem;