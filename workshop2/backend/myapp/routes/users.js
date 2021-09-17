const { response } = require('express');
var express = require('express');
var router = express.Router();

let id = 3;

let users = [{ id: 1, username: "aaa", password: 'aaa', email: 'aaa@miu', role: "admin" },
{ id: 2, username: "bbb", password: 'bbb', email: 'bbb@miu', role: "guest" },
]


/* GET users listing. */
router.post('/', function (req, res, next) {
  const userName = req.body.username;
  const email = req.body.email;
  let findUserName = users.find(item => item.username === req.body.username)
  let findEmail = users.find(item => item.email === req.body.email)
  console.log("i am here in user")
  if (findUserName) {
    return res.json({ status: "username exists " })
  } else if (findEmail) {
    return res.json({ status: "email exists" })
  } else {
    req.body.id = id +
      users.push(req.body)
    res.status(200).json({ status: "Sign up successfull" })

  }
});

module.exports = router;
