const db = require('../db');

const edit = (request, response) => {
    console.log(request.params.id);

    response.sendStatus(405);
};

module.exports = edit;
