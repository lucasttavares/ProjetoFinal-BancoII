const indexCtrl = {}

indexCtrl.getIndex = (request, response) => {
    response.render('index');
};

module.exports = indexCtrl;