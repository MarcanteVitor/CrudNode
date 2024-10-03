const { DataTypes } = require('sequelize'); // CommonJS import
const database = require('../database/db'); // Importação do banco de dados

const Person = database.define('pessoas', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  codigo: {
    type: DataTypes.INTEGER,  // Remover o autoIncrement se não for necessário
    allowNull: null
  },
  nome: {
    type: DataTypes.STRING(200),
    allowNull: false
  },
  telefone: {
    type: DataTypes.STRING(15),
  },
  documento: {
    type: DataTypes.STRING(30),
  },
  data_nascimento: {
    type: DataTypes.DATE,
  },
  cep: {
    type: DataTypes.STRING(9), // Melhor armazenar CEP como string
  },
  bairro: {
    type: DataTypes.STRING(70),
  },
  endereco: {
    type: DataTypes.STRING(200),
  },
  ativo: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true
  },
}, {
  timestamps: true  // timestamps habilitados para createdAt e updatedAt
});

module.exports = Person;
