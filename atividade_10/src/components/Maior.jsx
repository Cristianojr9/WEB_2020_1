import React, { Component } from 'react'
import { connect } from 'react-redux'

class  Maior extends Component{
    render(){
        return(
            <div>
                Maior: {this.props.num1 < this.props.num2 ? this.props.num2 : this.props.num1}
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

export default connect(mapStateToProps)(Maior)