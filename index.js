const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const getAll = require('./routes/getAll');
const create = require('./routes/create');
const edit = require('./routes/edit');
const remove = require('./routes/remove');

const app = express();

const PORT = 3333;

app.use(cors());
app.use(bodyParser.json());

app.get('/getAll', getAll);
app.post('/create', create);
app.put('/:id', edit);
app.delete('/:id', remove);

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
