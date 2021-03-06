const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const cors = require('cors');
const schema = require('./schema/schema');

mongoose.connect(
  'mongodb+srv://todo_list_db_admin:test123P@cluster0-6mlwz.mongodb.net/todo_list_db?retryWrites=true&w=majority',
  { useNewUrlParser: true },
);

mongoose.set('debug', true);

const app = express();
const PORT = 3005;

app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

const dbConnection = mongoose.connection;
dbConnection.on('error', e => console.log(`Connection error: ${e}`));
dbConnection.once('open', () => console.log('Connected'));

app.listen(PORT, err => (err ? console.log(err) : console.log('Server started!')));
