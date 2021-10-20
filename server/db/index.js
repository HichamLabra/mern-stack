const mongoose = require('mongoose');
require('dotenv').config();

const conectionstring = process.env.DB_CONECTIONSTRING;
const  database = process.env.DB_NAME;

const url = conectionstring+database;

const connectionParams={
    useNewUrlParser: true
}

mongoose
    .connect(url,connectionParams)
        .then( () => {
            console.log('Connected to database ')
        })
        .catch( (err) => {
            console.error(`Error connecting to the database. \n${err}`);
        });

const db = mongoose.connection

module.exports = db