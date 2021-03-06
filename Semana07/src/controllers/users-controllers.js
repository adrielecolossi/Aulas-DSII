const users = [];
const bcrypt = require('bcrypt');
class UsersController {
    async cadastrar(req, res) {
        console.log('UsersController/cadastrar');

        const userBody = req.body;
        const senha = bcrypt.hashSync(user.senha, 10)
        users.push({
            ...userBody,
        senha
    });  // salvando no banco

        console.log({ users });
        res.redirect('/');
    }

    async login(req, res) {
        // ACHAR COM O EMAIL CERTO
        const { email, senha } = req.body;
        const usuarioEcontrado = users.find(u => u.email == email);

        if (!usuarioEcontrado) return res.send('User nao encontrado');

        // VERIFICAR A SENHA
        const confere = bcrypt.compareSync(senha, usuarioEcontrado.senha)
        if (confere) {
            req.session.user = usuarioEcontrado;
            return res.send('Usuario e senha confirmados, vc fez o login');
        } else {
            return res.send('Senha nao confere...');
        }
        
    }
}

module.exports = UsersController;
