class DisciplinaModel {
  constructor(_id, nome, curso, qtd) {
    this._id = _id,
    this.nome = nome,
    this.curso = curso, 
    this.qtd = qtd
  }
}

module.exports = DisciplinaModel;