import React from 'react'
import './UserFormStyles/UserForm.css'

function UserForm(props){
    return(
<div className="vid-container">
    <div className="inner-container">     
        <div className="box">
        <h1>Resgistro de Pacientes</h1>
        <input onChange={props.name} name={props.name} type="text"  placeholder="Nombre"/>
        <input onChange={props.lastname} name='name' type="text" placeholder="Apellidos"/>
        <button>Registrar</button>
        </div>
  </div>
</div>
    )

}

export default UserForm;