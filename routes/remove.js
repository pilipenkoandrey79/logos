const db = require('../db');

const remove = (request, response) => {
    db.query(`DELETE FROM list WHERE id ='${request.params.id}'`, (err, result) => {
        if (err || !result) {
            console.log(err);
            
            return response.sendStatus(500);
        }

        return response.sendStatus(204);
    });
};

module.exports = remove;
