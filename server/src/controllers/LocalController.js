const { Abrigos } = require('../models')
const { Justicas } = require('../models')
const { Infos } = require('../models')
// const { Locals } = require('../models')
// const { sequelize } = require('../models/index')

module.exports = {
  async indexAbrigo (req, res) {
    try {
      let abrigos = null
      var minAge
      // var maxAge
      let age = req.query.age
      if (age === 'criança') {
        minAge = 0
        // maxAge = 17
      } else if (age === 'jovem') {
        minAge = 18
        // maxAge = 24
      } else if (age === 'adulto') {
        minAge = 25
        // maxAge = 59
      } else {
        // idosos
        minAge = 60
        // maxAge = 99
      }
      const type = req.query.type
      const reason = req.query.reason
      abrigos = await Abrigos.findAll({
        attributes: ['idLOCAL', 'nome', 'descricao', 'localImage', 'endereco', 'telefones'],
        where: {
          minIdade: { $lte: minAge },
          [type]: 'S',
          [reason]: 'S'
        }
      })
      res.send(abrigos)
    } catch (err) {
      res.status(500).send({
        error: 'Problemas com o serviço. Não foi possível encontrar os locais'
      })
    }
  },
  async indexJustica (req, res) {
    try {
      let justicas = null
      var minAge
      // var maxAge
      let age = req.query.age
      if (age === 'criança') {
        minAge = 0
        // maxAge = 17
      } else if (age === 'jovem') {
        minAge = 18
        // maxAge = 24
      } else if (age === 'adulto') {
        minAge = 25
        // maxAge = 59
      } else {
        // idosos
        minAge = 60
        // maxAge = 99
      }
      var mediaFORA = req.query.mediaFORA
      var reason = req.query.motivoInicial

      justicas = await Justicas.findAll({
        attributes: ['idLOCAL', 'nome', 'descricao', 'localImage', 'endereco', 'telefones'],
        where: {
          'minIdade': { $lte: minAge },
          $or: [{ 'mediaFORA': mediaFORA }, { 'mediaFORA': 'T' }],
          [reason]: 'S'
        }
      })
      res.send(justicas)
    } catch (err) {
      res.status(500).send({
        error: 'Problemas com o serviço. Não foi possível encontrar os locais'
      })
    }
  },
  async indexInfoGeral (req, res) {
    try {
      let abrigos = null
      var minAge
      // var maxAge
      let age = req.query.age
      if (age === 'criança') {
        minAge = 0
        // maxAge = 17
      } else if (age === 'jovem') {
        minAge = 18
        // maxAge = 24
      } else if (age === 'adulto') {
        minAge = 25
        // maxAge = 59
      } else {
        // idosos
        minAge = 60
        // maxAge = 99
      }
      var reason = req.query.motivoInicial

      abrigos = await Infos.findAll({
        attributes: ['idLOCAL', 'nome', 'descricao', 'localImage', 'endereco', 'telefones'],
        where: {
          'minIdade': { $lte: minAge },
          [reason]: 'S'
        }
      })
      res.send(abrigos)
    } catch (err) {
      res.status(500).send({
        error: 'Problemas com o serviço. Não foi possível encontrar os locais'
      })
    }
  }
}
