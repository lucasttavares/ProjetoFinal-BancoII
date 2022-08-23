const notesCtrl = {}
const Note = require('../models/Notes');

notesCtrl.getNotes = async (request, response) => {
    const notes = await Note.find();
    response.render('notes/getNotes', { notes })
}

notesCtrl.getForm = (request,response) => {
    response.render('notes/addNote')
}

notesCtrl.postNote = async (request,response) => {
    const { titulo, descricao, data, tipo } = request.body
    const newNote = new Note({titulo, descricao, data, tipo})
    await newNote.save();
    response.redirect('/notes')
}

notesCtrl.getEditForm = (request,response) => {
    response.send('getEditForm')
}

notesCtrl.editForm = (request,response) => {
    response.send('editForm')
}

notesCtrl.deleteForm = async (request, response) => {
    await Note.findByIdAndDelete(request.params.id)
    response.redirect('/notes')
}


module.exports = notesCtrl;