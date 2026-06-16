# Configuração de E-mail para Lumina

## Para usar o sistema de e-mail, siga estes passos:

### 1. Crie um arquivo `.env` na raiz do projeto:
```
EMAIL_SERVICE=gmail
EMAIL_USER=seu-email@gmail.com
EMAIL_PASS=sua-senha-de-app
EMAIL_FROM=noreply@lumina.com
```

### 2. Configurando Gmail (recomendado):

1. Acesse sua conta Google
2. Ative a Verificação em duas etapas
3. Vá para: https://myaccount.google.com/apppasswords
4. Gere uma senha de app para "Correio" e "Windows"
5. Use essa senha de 16 caracteres no arquivo `.env`

**Nota:** Nunca use sua senha do Gmail diretamente - use uma senha de app gerada.

### 3. Iniciando o servidor:
```bash
npm start
```

### 4. Testando o formulário:
- Acesse `http://localhost:3000`
- Vá para a seção "Contato"
- Preencha o formulário e envie

Você receberá:
- Email no seu endereço configurado (EMAIL_USER)
- Email de confirmação será enviado para o cliente

### Troubleshooting:

Se os emails não forem enviados:
- Verifique se o `.env` está configurado corretamente
- Certifique-se que a senha de app está correta
- Verifique o console do servidor para mensagens de erro
- Se usar outro serviço de email, atualize `EMAIL_SERVICE` e as credenciais

### Serviços suportados (via nodemailer):
- gmail
- outlook
- yahoo
- sendgrid (com configurações diferentes)
- E muitos outros...
