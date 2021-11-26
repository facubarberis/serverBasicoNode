
const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();
const { validarCampos } = require('../middlewares/validar-campos');
const { esRoleValido, existeEmail, existeUsuarioById } = require('../helpers/db-validators');

const { usuariosGet,
    usuariosPut,
    usuariosDelete,
    usuariosPost } = require('../controllers/user.controller');



router.get('/', usuariosGet);

router.put('/:id', [
    check('id', 'No es un id valido').isMongoId(),
    check('id').custom(existeUsuarioById),
    check('rol').custom(esRoleValido),
    validarCampos
], usuariosPut);

router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password es obligatorio y de mas de 6 caracteres').isLength({ min: 6 }),
    //check('correo', 'El correo no es valido').isEmail(),
    check('correo').custom(existeEmail),
    check('rol').custom(esRoleValido),
    // check('rol', 'No es un rol valido').isIn(['ADMIN_ROLE','USER_ROLE']),
    validarCampos

], usuariosPost);

router.delete('/', usuariosDelete);

module.exports = router;