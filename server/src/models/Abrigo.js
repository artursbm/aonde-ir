module.exports = (sequelize, DataTypes) => {
  const Abrigo = sequelize.define('Abrigos', {
    idLOCAL: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    gid: DataTypes.INTEGER,
    minIdade: DataTypes.INTEGER,
    maxIdade: DataTypes.INTEGER,
    periodoTEMPORARIO: DataTypes.CHAR(1),
    periodoPERMANENTE: DataTypes.CHAR(1),
    motivoVIOLENCIA: DataTypes.CHAR(1),
    motivoRUA: DataTypes.CHAR(1),
    motivoRISGEO: DataTypes.CHAR(1),
    nome: DataTypes.STRING,
    descricao: DataTypes.TEXT,
    publico: DataTypes.TEXT,
    horario: DataTypes.STRING,
    telefones: DataTypes.STRING,
    endereco: DataTypes.TEXT,
    documentos: DataTypes.TEXT,
    localImage: DataTypes.STRING
  },
  {
    timestamps: false
  })
  return Abrigo
}
// descricao inclui varios campos: definicao, detalhes, servicos, etc
// publico = publico-alvo + atuacao
