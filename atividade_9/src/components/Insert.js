import React, { Component } from 'react';

import FirebaseContext from '../utils/FirebaseContext';
import FirebaseService from '../services/FirebaseService';

const InsertPage = () => (
    <FirebaseContext.Consumer>
        { contexto => <Insert firebase={contexto} />}
    </FirebaseContext.Consumer>
)
class Insert extends Component {
    constructor(props) {
        super(props)
        this.state = { nome: '', curso: '', capacidade: '' }

        this.setNome = this.setNome.bind(this)
        this.setCurso = this.setCurso.bind(this)
        this.setCapacidade = this.setCapacidade.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    setNome(e) {
        this.setState({ nome: e.target.value })
    }
    setCurso(e) {
        this.setState({ curso: e.target.value })
    }
    setCapacidade(e) {
        this.setState({ capacidade: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()

        const disciplina = {
            nome: this.state.nome,
            curso: this.state.curso,
            capacidade: this.state.capacidade
        }

        FirebaseService.insert(
            this.props.firebase.getFirestore(),
            (mensagem) => {
                if (mensagem === 'ok') {
                    console.log('inserido')
                }
            },
            disciplina
        )

        this.setState(
            {
                nome: '',
                curso: '',
                capacidade: ''
            }
        )
    }
    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>Inserir disciplina</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Nome da disciplina:</label>
                        <input type="text" className="form-control" value={this.state.nome} onChange={this.setNome} />
                    </div>
                    <div className="form-group">
                        <label>Curso:</label>
                        <input type="text" className="form-control" value={this.state.curso} onChange={this.setCurso} />
                    </div>
                    <div className="form-group">
                        <label>Capacidade:</label>
                        <input type="number" className="form-control" value={this.state.capacidade} onChange={this.setCapacidade} />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Adicionar" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}

export default InsertPage;