const db = require('../db');

const getAll = (request, response) => {
    db.query("SELECT * FROM list", (err, result) => {
        if (err) {
            return response.sendStatus(500);
        }

        return response.json(result);
    });
};

module.exports = getAll;
