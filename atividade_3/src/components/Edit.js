import React, { Component } from 'react'
import axios from 'axios'

export default class Edit extends Component {
    constructor(props) {
        super(props)
        this.state = { nome: '', curso: '', qtd: '' }

        this.setNome = this.setNome.bind(this)
        this.setCurso = this.setCurso.bind(this)
        this.setQtd = this.setQtd.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount() {
        //axios.get('http://localhost:3001/disciplina/' + this.props.match.params.id)
        axios.get('http://localhost:3002/disciplina/retrieve/' + this.props.match.params.id)
            .then(
                (res) => {
                    this.setState(
                        {
                            nome: res.data.nome,
                            curso: res.data.curso,
                            qtd: res.data.qtd
                        }
                    )
                }
            )
            .catch(
                (error) => {
                    console.log(error)
                }
            )
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

        const disciplinaAtualizada = {
            nome: this.state.nome,
            curso: this.state.curso,
            qtd: this.state.qtd
        }

        axios.put('http://localhost:3002/disciplinas/update/' + this.props.match.params.id, disciplinaAtualizada)
            .then(
                (res) => {
                    this.props.history.push('/list')
                }
            )
            .catch(
                (error) => {
                    console.log(error)
                }
            )
    }
    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>Editar disciplina</h3>
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
                        <label>Qtd:</label>
                        <input type="number" className="form-control" value={this.state.qtd} onChange={this.setQtd} />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Editar" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}