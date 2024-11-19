const { DataTypes } = require('sequelize');
const database = require('../database/db'); 

const Person = database.define('pessoas', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  codigo: {
    type: DataTypes.INTEGER, 
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
    type: DataTypes.STRING(9),
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
  timestamps: true 
});

module.exports = Person;
