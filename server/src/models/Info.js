module.exports = (sequelize, DataTypes) => {
  const Info = sequelize.define('Infos', {
    idLOCAL: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    gid: DataTypes.INTEGER,
    minIdade: DataTypes.INTEGER,
    maxIdade: DataTypes.INTEGER,
    motEMPREGOexdetento: DataTypes.CHAR(1),
    motEMPREGOmenorinfrator: DataTypes.CHAR(1),
    motEMPREGOoutros: DataTypes.CHAR(1),
    tipoEMPREGOecn_solidaria: DataTypes.CHAR(1),
    tipoEMPREGOmercado_trabalho: DataTypes.CHAR(1),
    motAPOIODEFICIENCIA: DataTypes.CHAR(1),
    motEXTRAVIOprog_social: DataTypes.CHAR(1),
    motEXTRAVIOemprego: DataTypes.CHAR(1),
    motDESAPARECIDO: DataTypes.CHAR(1),
    motHOMICIDIO: DataTypes.CHAR(1),
    motSAUDE: DataTypes.CHAR(1),
    motABUSOAUTORIDADE: DataTypes.CHAR(1),
    motAGRESSAO: DataTypes.CHAR(1),
    motAGRESSAOfisica: DataTypes.CHAR(1),
    motAGRESSAOsexual: DataTypes.CHAR(1),
    motAGRESSAOpsicologica: DataTypes.CHAR(1),
    motAGRESSAOciber: DataTypes.CHAR(1),
    motAGRESSAOpatrimonial: DataTypes.CHAR(1),
    motAGRESSAOmoral: DataTypes.CHAR(1),
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

  return Info
}