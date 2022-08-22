const { Router } = require('express');
const router = Router();
const {
    getNotes,
    getForm,
    postNote,
    getEditForm,
    editForm,
    deleteForm
} = require('../controllers/notesController')

router.get('/notes', getNotes)
router.get('/notes/add', getForm)
router.post('/notes/add', postNote)
router.get('/notes/edit/:id', getEditForm)
router.put('/notes/edit/:id', editForm)
router.delete('/notes/delete/:id', deleteForm)

module.exports = router;