'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pessoas', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      codigo: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false
      },
      nome: {
        type: Sequelize.STRING(200),
        allowNull: false
      },
      telefone: {
        type: Sequelize.STRING(15),
      },
      documento: {
        type: Sequelize.STRING(30),
      },
      data_nascimento: {
        type: Sequelize.DATE,
      },
      cep: {
        type: Sequelize.FLOAT,
      },
      bairro: {
        type: Sequelize.STRING(70),
      },
      endereco: {
        type: Sequelize.STRING(200),
      },
      ativo: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW')
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW')
      }
    });

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('pessoas');
  }
};
