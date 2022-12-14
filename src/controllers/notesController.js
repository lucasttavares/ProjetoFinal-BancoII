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
    request.flash('sucess_msg', 'Nota adicionada com sucesso.')
    response.redirect('/notes')
}

notesCtrl.getEditForm = async (request,response) => {
    const note = await Note.findById(request.params.id)
    response.render('notes/editNote', { note })
}

notesCtrl.editForm = async (request,response) => {
    const { titulo, descricao, data, tipo} = request.body
    await Note.findByIdAndUpdate(request.params.id, { titulo, descricao, data, tipo})
    request.flash('sucess_msg', 'Nota editada com sucesso.')
    response.redirect("/notes")
}

notesCtrl.deleteForm = async (request, response) => {
    await Note.findByIdAndDelete(request.params.id)
    request.flash('sucess_msg', 'Nota deletada com sucesso.')
    response.redirect('/notes')
}


module.exports = notesCtrl;