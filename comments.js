// Create web server

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let comments = [
  {
    id: 1,
    comment: 'This is a comment'
  },
  {
    id: 2,
    comment: 'This is another comment'
  }
];

app.get('/comments', (req, res) => {
    res.json(comments);
    }
);
