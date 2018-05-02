const express = require('express');
const mountRoutes = require('./routes');
const middleware = require('./middleware');

const app = express();

middleware(app);
mountRoutes(app);

app.listen(3000, () => console.log('Starting App on port 3000!'));
