var mongoose = require('mongoose');

var DisciplinaSchema = mongoose.Schema(
  {
    nome: { type: String, required: true, max: 100 },
    curso: { type: String, required: true, max: 100 },
    capacidade: { type: Number, required: true },
  }
);

var DisciplinaModel = mongoose.model('disciplinas', DisciplinaSchema);

module.exports = DisciplinaModel;