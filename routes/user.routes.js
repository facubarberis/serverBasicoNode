
const{ Router } = require('express');
const router = Router();

const { usuariosGet,
        usuariosPut,
        usuariosDelete,
        usuariosPost } = require('../controllers/user.controller');

router.get('/', usuariosGet);

router.put('/:id', usuariosPut);

router.post('/', usuariosPost);

router.delete('/', usuariosDelete);

module.exports = router;