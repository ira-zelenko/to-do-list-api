var router = require('express').Router();

router.get('/', function (req, res) {
  res.json([
    {
      "id": 1,
      "text": "ReactJS",
      "closed": false,
      "deleted": false
    },
    {
      "id": 2,
      "text": "React + Redux",
      "closed": false,
      "deleted": false
    },
    {
      "id": 3,
      "text": "Vue",
      "closed": false,
      "deleted": false
    },
    {
      "id": 4,
      "text": "Angular",
      "closed": true,
      "deleted": false
    },
    {
      "id": 5,
      "text": "Hello world app",
      "closed": true,
      "deleted": false
    },
    {
      "id": 6,
      "text": "Todo List",
      "closed": true,
      "deleted": false
    },
    {
      "id": 7,
      "text": "Walk in park",
      "closed": false,
      "deleted": false
    }
  ]);
});

module.exports = router;
