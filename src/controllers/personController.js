const Person = require('../models/person');
const { parseDate } = require('../utils/parseDate')

async function create(req, res) {

    const { nome, telefone, documento, data_nascimento, cep, bairro, endereco } = req.body;

    if (!nome) {
        return res.status(400).json('Informe o nome para cadastrar o usuario');
    }

    const formattedDate = await parseDate(data_nascimento)

    try {

        const person = await Person.create({
            nome,
            telefone,
            documento,
            data_nascimento: formattedDate,
            cep,
            bairro,
            endereco,
            ativo: true
        });

        return res.status(200).json({ message: 'Usuário criado com sucesso', user: person });
    } catch (err) {
        return res.status(500).json({ message: 'Erro ao cadastrar o usuário', erro: err });
    }
}

async function getAll(req, res) {

}

async function findByPk(req, res) {

}

async function updateById(req, res) {
   
}

async function deleteById(req, res) {
   
}

module.exports = {
    create, getAll, findByPk, updateById, deleteById
}

