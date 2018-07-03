const EXPRESS = require('express');
const BODY_PARSER = require('body-parser');
const ROUTES = require('./config/routes');
const PORT = 8000;

const APP = EXPRESS();
APP.use(BODY_PARSER.json());
ROUTES(APP);
APP.listen(PORT);

console.log(`Server is listening on port ${PORT}`);