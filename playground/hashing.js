const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc!';

bcrypt.genSalt(10, (err, salt) => {
  console.log(salt);
  bcrypt.hash(password, salt, (err, hash) => {
    console.log(hash);
  });
});

var hashedPassword = '$2a$10$uPFSGFIEA0d.nRL9JYgDquVRy2N7yAwI6v1PHBTPZaJE2LNAS51P2';

bcrypt.compare(password, hashedPassword, (err, res) =>{
  console.log(res);
});
