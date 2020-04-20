const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoClient = require('mongodb').MongoClient;
const apiRoutes = require("./api-routes");

let port = 8080;

const app = express();
const url = 'mongodb://127.0.0.1:27017';
const dbName = 'to-do-list';
let db;

app.use(cors());

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.options('*', cors());

mongoClient.connect(url, { useUnifiedTopology: true } , (err, db) => {
  if (err) return console.log(err)
  console.log("successfully connected to the database");
  db.close();
});

app.get('/', (req, res) => {
  mongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
    if (err) return console.log(err)

    db = client.db(dbName)

    const tasks = db.collection('tasks')

    tasks.find({}).toArray((err, result) => {
      if (err) {
        res.send(err);
      }
      res.send(JSON.stringify(result));
    });
  })
});

app.use('/get', apiRoutes);

app.listen(port, () => {
  console.log('todo list RESTful API server started on: ' + port);
});






