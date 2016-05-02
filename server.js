import express from 'express';
import {MongoClient} from 'mongodb';

let app = new express();

app.use(express.static('dist'));

let db;
MongoClient.connect(process.env.MONGO_MONEYLOG_URL, (err, database) => {
    if(err) throw err;

    db = database;
    app.listen(3000);
});

app.get('/money-entries', (req, res) => {
    db.collection('money_entries').find({}).toArray((err, entries) => {
        if(err) throw err;

        res.json(entries);
    })
});