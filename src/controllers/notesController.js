const notesCtrl = {}

notesCtrl.getNotes = (request, response) => {
    response.send('getNotes')
}

notesCtrl.getForm = (request,response) => {
    response.send('getForm')
}

notesCtrl.postNote = (request,response) => {
    response.send('postNote')
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