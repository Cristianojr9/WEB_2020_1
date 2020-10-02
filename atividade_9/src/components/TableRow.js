import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class TableRow extends Component {
    constructor(props) {
        super(props)
        this.apagar = this.apagar.bind(this)
    }

    apagar(id, nome) {
        let res = window.confirm(`Deseja apagar ${nome} - ${id}`);
        if (res) {
            this.props.firebase.getFirestore().collection('disciplinas').doc(id).delete()
                .then(() => console.log('apagado'))
                .catch(error => console.log(error))
        }
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
                    {this.props.disciplinas.capacidade}
                </td>
                <td style={{ textAlign: 'center' }}>
                    <Link to={"/edit/" + this.props.disciplinas._id} className='btn btn-primary'>Editar</Link>
                </td>
                <td style={{ textAlign: 'center' }}>
                    <button
                        onClick={() =>
                            this.apagar(this.props.disciplinas._id, this.props.disciplinas.nome)
                        }
                        className='btn btn-danger'
                    >
                        Apagar
                    </button>
                </td>
            </tr>
        )
    }
}