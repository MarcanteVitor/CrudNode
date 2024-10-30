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

    try {
        const pessoas = await Person.findAll()

        return res.status(200).json({ method: "get all", pessoas })
    } catch (err) {
        return res.status(500).json({ message: 'Erro ao buscar usuários', erro: err })
    }


}

async function findByPk(req, res) {

    const { id } = req.params;

    if (!id) {
        return res.status(500).json({ message: 'ID não informado' });
    }

    const pessoa = await Person.findByPk(req.params.id)

    if (pessoa){
        return res.status(200).json({ method: "findByPk", pessoa })
    } else {
        return res.status(404).json({ method: "findByPk", message: "Pessoa não localizada" })
    }


}


async function updateById(req, res) {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(404).json({ message: 'ID não informado' });
        }

        const { nome, telefone, documento, data_nascimento, cep, bairro, endereco, ativo } = req.body;
        const person = await Person.findByPk(id);

        if (!person) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }

        let formattedDate = data_nascimento;
        if (data_nascimento) {
            formattedDate = await parseDate(data_nascimento)
        }

        await Person.update(
            {
                nome,
                telefone,
                documento,
                data_nascimento: formattedDate || person.data_nascimento,
                cep,
                bairro,
                endereco,
                ativo
            },
            {
                where: { id }
            }
        );

        return res.status(200).json({ message: 'Usuário atualizado com sucesso' });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Erro ao atualizar usuário' });
    }
}

async function deleteById(req, res) {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(404).json({ message: 'ID não informado' });
        }

        const person = await Person.findByPk(id);

        if (!person) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }

        await Person.destroy({
            where: { id }
        });

        return res.status(200).json({ message: 'Usuário deletado com sucesso' });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Erro ao deletar usuário' });
    }
}

module.exports = {
    create, getAll, findByPk, updateById, deleteById
}

