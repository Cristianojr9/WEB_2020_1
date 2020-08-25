const DisciplinaModel = require('../models/DisciplinaModel');

let disciplinas = [];
let _id = 0;

class DisciplinaService {
  static register(data) {
    let disciplina = new DisciplinaModel (
      _id++,
      data.nome,
      data.curso,
      data.qtd
    )
    disciplinas.push(disciplina);
    return disciplina;
  }

  static list() {
    return disciplinas;
  }

  static update(_id, data) {
    for(let e of disciplinas) {
      if(e._id == _id) {
        e.nome = data.nome,
        e.curso = data.curso,
        e.qtd = data.qtd
        return e;
      }
    }
    return null;
  }

  static delete(_id) {
    for(let i = 0; i < disciplinas.length; i++) {
      if(disciplinas[i]._id == _id) {
        disciplinas.splice(i, 1);
        return true;
      }
    }
    return false;
  }

  static retrieve(_id) {
    for(let i = 0; i < disciplinas.length; i++) {
      if(disciplinas[i]._id == _id) {
        return disciplinas[i];
      }
    }
    return {};
  }
}

module.exports = DisciplinaService;