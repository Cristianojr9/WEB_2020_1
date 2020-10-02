import React, { Component } from 'react';

import TableRow from './TableRow';
import FirebaseContext from '../utils/FirebaseContext';

const ListPage = () => (
    <FirebaseContext.Consumer>
        { contexto => <List firebase={contexto} />}
    </FirebaseContext.Consumer>
)

class List extends Component {
    constructor(props) {
        super(props);

        this.state = { disciplinas: [] }

        this.apagarElementoPorId = this.apagarElementoPorId.bind(this)
    }

    componentDidMount() {
        this.ref = this.props.firebase.getFirestore().collection('disciplinas');
        this.ref.onSnapshot(this.alimentarDisciplinas.bind(this));
    }

    alimentarDisciplinas(query) {
        let disciplinas = [];
        query.forEach(
            (doc) => {
                const {
                    nome,
                    curso,
                    capacidade
                } = doc.data();
                disciplinas.push(
                    {
                        _id: doc.id,
                        nome,
                        curso,
                        capacidade
                    }
                )
            }
        )//forEach

        this.setState(
            {
                disciplinas: disciplinas
            }
        );
    }

    montarTabela() {
        if (!this.state.disciplinas) return
        return this.state.disciplinas.map(
            (disc, i) => {
                return <TableRow disciplinas={disc} key={i} apagarElementoPorId={this.apagarElementoPorId} />
            }
        )
    }

    apagarElementoPorId(id) {
        let disciplinaTemp = this.state.disciplinas
        for (let i = 0; i < disciplinaTemp.length; i++) {
            if (disciplinaTemp[i]._id === id) {
                disciplinaTemp.splice(i, 1)
            }
        }
        this.setState({ disciplinas: disciplinaTemp })
    }

    render() {
        return (
            <div>
                <p>List disciplina</p>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Curso</th>
                            <th>Capacidade</th>
                            <th colSpan='2' style={{ textAlign: 'center' }}>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.montarTabela()}
                    </tbody>
                </table>
            </div>

        )
    }
}

export default ListPage;