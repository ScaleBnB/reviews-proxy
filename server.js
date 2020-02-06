const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3004;

app.use(morgan('dev'));
app.use(express.static('public'));

app.listen(port, () => {
    console.log(`server running at: http://localhost:${port}`);
})