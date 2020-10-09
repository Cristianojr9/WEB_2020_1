import React, { Component } from 'react'

import { connect } from 'react-redux'
import {alterarNumero2} from '../store/actions/numeroActionCreator'

class numero2 extends Component{
    render(){
        return(
            <div className='numbers'>
                Número 2:
                <input type="number" value={this.props.num2} className="numero" onChange={(e) => this.props.mudarNumero2(e.target.value)}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        num2: state.numeros.num2
    }
}

function mapDispatchNum2(dispatch){
    return{
        mudarNumero2(novoNumero2){
            const actionNum2 = alterarNumero2(novoNumero2)
            dispatch(actionNum2)
        }
    }
}


export default connect(mapStateToProps, mapDispatchNum2)(numero2)