import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class TableRow extends Component {
    constructor(props) {
        super(props)
        this.apagar = this.apagar.bind(this)
    }

    apagar() {
        /*  axios.delete('http://localhost:3002/disciplinas/delete/' + this.props.disciplina._id)
             .then(
                 (res) => {
                     console.log('Registro apagado')
                     this.props.apagarElementoPorId(this.props.disciplina._id)
                 }
             )
             .catch(
                 (error) => {
                     console.log(error)
                 }
             ) */
    }

    render() {
        return (
            <tr>
                <td>
                    {this.props.disciplinas._id}
                </td>
                <td>
                    {this.props.disciplinas.nome}
                </td>
                <td>
                    {this.props.disciplinas.curso}
                </td>
                <td>
                    {this.props.disciplinas.qtd}
                </td>
                <td style={{ textAlign: 'center' }}>
                    <Link to={"/edit/" + this.props.disciplinas._id} className='btn btn-primary'>Editar</Link>
                </td>
                <td style={{ textAlign: 'center' }}>
                    <button onClick={this.apagar} className='btn btn-danger'>Apagar</button>
                </td>
            </tr>
        )
    }
}