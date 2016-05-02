import express from 'express';

let app = new express();

app.use(express.static('dist'));

app.listen(3000);