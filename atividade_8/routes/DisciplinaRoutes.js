var express = require('express');

var router = express.Router();

var DisciplinaService = require('../services/DisciplinaService');

router.get('/list', function (req, res, next) {
  DisciplinaService.list(req, res);
});
router.post('/register', function (req, res, next) {
  DisciplinaService.register(req, res);
});
router.put('/update/:id', function (req, res, next) {
  DisciplinaService.update(req, res);
});
router.delete('/delete/:id', function (req, res, next) {
  DisciplinaService.delete(req, res);
});
router.get('/retrieve/:id', function (req, res, next) {
  DisciplinaService.retrieve(req, res);
});
router.get('/retrieve/login/:login', function (req, res, next) {
  DisciplinaService.retrieveByLogin(req, res);
});
module.exports = router;