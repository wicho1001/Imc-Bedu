import React,{Component} from 'react'
import './UserFormStyles/UserForm.css'



class UserForm extends Component{
    state={
        firstName:'',
        lastName:'',
        id:''
    }
    handleChange=(evt)=>{
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    submitForm=(evt)=>{
        evt.preventDefault();
        this.props.onSubmit(this.state)
    }

    render(){
        return(
    <div className="vid-container">
        <div className="inner-container">     
            <div className="box">
                <form onSubmit={this.submitForm}>
                    <h1>Resgistro de Pacientes</h1>
                    <input onChange={this.handleChange} value={this.state.firstName} name='firstName' type="text"  placeholder="Nombre"/>
                    <input onChange={this.handleChange} value={this.state.lastName} name='lastName' type="text" placeholder="Apellidos"/>
                    <button>Registrar</button>
                </form>
            </div>
      </div>
    </div>
        )
        }
}

export default UserForm;