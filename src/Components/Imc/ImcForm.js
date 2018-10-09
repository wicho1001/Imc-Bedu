import React,{Component} from 'react'
import ImcResults from './ImcResults'

class ImcForm extends Component{
<<<<<<< HEAD
    state = {
         
            altura:'',
            peso:'',
            imc:this.props.imc
=======
    constructor(props){
        super(props)
        this.state = {
             
                altura:'',
                peso:'',
                imc:8
            
        }
>>>>>>> d6aad80db3956d5447f675cc25dc855ea7367ddf

    }

    handleChange = (evt)=>{
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    calcBMI = (evt) => {
        evt.preventDefault();
        let BMI = this.state.peso/(this.state.altura * this.state.altura);
            this.setState({
                imc:BMI
        })         
    }
    imprimir = ()=>{

        console.log(this.state.imc);
<<<<<<< HEAD
        console.log(this.props.state);
=======
        console.log(this.props);
>>>>>>> d6aad80db3956d5447f675cc25dc855ea7367ddf
    }

    render(){
        this.imprimir()
    return(
        <div >
            <h1>Resgistro de Pacientes</h1>
            <form onSubmit={this.calcBMI} name='imc'>
                <input onChange={this.handleChange} name='altura' value={this.state.altura} type="text" placeholder="Altura"/>
                <input onChange={this.handleChange} name='peso' value={this.state.peso} type="text" placeholder="Peso"/>
                <button>Calcular</button>
            </form>
            <h1 value={this.state.imc}>{this.state.imc}</h1>
        </div>
    )
    }
}

export default ImcForm;