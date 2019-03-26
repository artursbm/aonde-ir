module.exports = (sequelize, DataTypes) => {
  const Justica = sequelize.define('Justicas', {
    idLOCAL: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    gid: DataTypes.INTEGER,
    minIdade: DataTypes.INTEGER,
    maxIdade: DataTypes.INTEGER,
    mediaFORA: DataTypes.CHAR(1),
    motDIRCONSUMIDOR: DataTypes.CHAR(1),
    motFURTOROUBOAUTO: DataTypes.CHAR(1),
    motFURTOROUBOOUTROS: DataTypes.CHAR(1),
    motEMPREENDE: DataTypes.CHAR(1),
    motEXTITULOEXTRA: DataTypes.CHAR(1),
    motACIDENTETRANSITO: DataTypes.CHAR(1),
    motCIVELGERAL: DataTypes.CHAR(1),
    motAGRESSAOSERVPUBLICO: DataTypes.CHAR(1),
    motAGRESSAOOUTROS: DataTypes.CHAR(1),
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
  return Justica
}
