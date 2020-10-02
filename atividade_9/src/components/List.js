import React, { Component } from 'react';

import TableRow from './TableRow';
import FirebaseContext from '../utils/FirebaseContext';
import FirebaseService from '../services/FirebaseService';

const ListPage = () => (
    <FirebaseContext.Consumer>
        { contexto => <List firebase={contexto} />}
    </FirebaseContext.Consumer>
)

class List extends Component {
    constructor(props) {
        super(props);
        this._isMounted = false;

        this.state = { disciplinas: [] }
    }

    componentDidMount() {
        this._isMounted = true;
        FirebaseService.list(this.props.firebase.getFirestore(),
            (disciplinas) => {
                if (disciplinas) {
                    if (this._isMounted) {
                        this.setState(
                            {
                                disciplinas: disciplinas
                            }
                        );
                    }
                }
            }
        )
    }

    componentWillUnmount() {
        this._isMounted = false;
    }


    montarTabela() {
        if (!this.state.disciplinas) return
        return this.state.disciplinas.map(
            (disc, i) => {
                return <TableRow
                    disciplinas={disc}
                    key={i}
                    firebase={this.props.firebase}
                />
            }
        )
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