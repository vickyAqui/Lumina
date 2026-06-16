var express = require('express');
var router = express.Router();
const { enviarEmailContato, enviarConfirmacao } = require('../config/email');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* POST enviar contato */
router.post('/enviar-contato', async (req, res) => {
  try {
    const { nome, email, telefone, mensagem, tipo } = req.body;

    // Validações básicas
    if (!nome || !email || !mensagem) {
      return res.status(400).json({
        sucesso: false,
        mensagem: 'Nome, email e mensagem são obrigatórios',
      });
    }

    // Enviar email para administrador
    const resultadoAdmin = await enviarEmailContato({
      nome,
      email,
      telefone,
      mensagem,
      tipo,
    });

    if (!resultadoAdmin.sucesso) {
      return res.status(500).json(resultadoAdmin);
    }

    // Enviar confirmação para cliente
    await enviarConfirmacao(email, nome);

    res.json({
      sucesso: true,
      mensagem: 'Mensagem enviada com sucesso! Você receberá uma resposta em breve.',
    });
  } catch (erro) {
    console.error('Erro no envio:', erro);
    res.status(500).json({
      sucesso: false,
      mensagem: 'Erro ao processar sua solicitação',
    });
  }
});

module.exports = router;
