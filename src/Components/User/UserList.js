import React from 'react';
import UserItem from './UserItem'


const UserList = (props) => {
    
    return(
        <div>
            <ul>
                {props.userList.map(user => <UserItem user={user} />)}
                
            </ul>
        </div>
    );
}

export default UserList;