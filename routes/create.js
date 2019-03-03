const db = require('../db');

const create = (request, response) => {
    const label = request.body.label;

    db.query('INSERT INTO list SET ?', {label: label}, (err, result) => {
        if (err || !result) {
            console.log(err);

            return response.sendStatus(500);
        }

        return response.status(201).json({
            id: result.insertId,
            label: label,
        });
    });
};

module.exports = create;
