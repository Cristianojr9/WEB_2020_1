import React, { Component } from 'react'
import axios from 'axios'

export default class Insert extends Component {
    constructor(props) {
        super(props)
        this.state = { nome: '', curso: '', qtd: '' }

        this.setNome = this.setNome.bind(this)
        this.setCurso = this.setCurso.bind(this)
        this.setQtd = this.setQtd.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    setNome(e) {
        this.setState({ nome: e.target.value })
    }
    setCurso(e) {
        this.setState({ curso: e.target.value })
    }
    setQtd(e) {
        this.setState({ qtd: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()
        try {
            const novaDisciplina = {
                nome: this.state.nome,
                curso: this.state.curso,
                qtd: this.state.qtd
            }
            axios.post('http://localhost:3002/disciplinas/register', novaDisciplina);
            alert('Disciplina adicionada')
        } catch {
            alert('Erro ao adicionar disciplina')
        }
        this.setState({ nome: '', curso: '', qtd: '' })
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
                        <label>QTD:</label>
                        <input type="number" className="form-control" value={this.state.qtd} onChange={this.setQtd} />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Adicionar" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}