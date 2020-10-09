import React, { Component } from 'react'

import { connect } from 'react-redux'
import {alterarNumero1} from '../store/actions/numeroActionCreator'

class numero1 extends Component{
    render(){
        return(
            <div className='numbers'>
                Número 1:
                <input type="number" value={this.props.num1} className="numero" onChange={(e) => this.props.mudarNumero1(e.target.value)}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        num1: state.numeros.num1
    }
}

function mapDispatchNum1(dispatch){
    return{
        mudarNumero1(novoNumero1){
            const actionNum1 = alterarNumero1(novoNumero1)
            dispatch(actionNum1)
        }
    }
}


export default connect(mapStateToProps, mapDispatchNum1)(numero1)