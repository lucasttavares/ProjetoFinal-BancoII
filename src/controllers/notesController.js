const notesCtrl = {}
const Note = require('../models/Notes');

notesCtrl.getNotes = (request, response) => {
    response.send('getNotes')
}

notesCtrl.getForm = (request,response) => {
    response.render('notes/addNote')
}

notesCtrl.postNote = async (request,response) => {
    const { titulo, descricao, data, tipo } = request.body
    const newNote = new Note({titulo, descricao, data, tipo})
    await newNote.save();
    response.send('Nota salva com sucesso')
}

notesCtrl.getEditForm = (request,response) => {
    response.send('getEditForm')
}

notesCtrl.editForm = (request,response) => {
    response.send('editForm')
}

notesCtrl.deleteForm = (request,response) => {
    response.send('deleteForm')
}

module.exports = notesCtrl;