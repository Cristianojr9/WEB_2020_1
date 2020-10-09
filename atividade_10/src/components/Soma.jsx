import React, { Component } from 'react'
import { connect } from 'react-redux'

class  Multi extends Component{
    render(){
        return(
            <div>
                Soma: {Number(this.props.num1) + Number(this.props.num2)}
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        num1: state.numeros.num1,
        num2: state.numeros.num2
    }
}

export default connect(mapStateToProps)(Multi)