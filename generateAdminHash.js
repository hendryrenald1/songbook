var bcrypt = require("bcrypt");
bcrypt.hash("admin", 10, function (err, hash) {
  console.log(hash);
});
