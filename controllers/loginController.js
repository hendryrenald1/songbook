const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const loginRouter = require("express").Router();

loginRouter.post("/", (request, response) => {
  console.log("Inside Post");
  console.log(process.env.SECRET);
  console.log(process.env.ADMIN_HASH);
  const pwdHash = process.env.ADMIN_HASH;

  return bcrypt
    .compare(request.body.password, pwdHash)
    .then((passwordCorrect) => {
      if (passwordCorrect) {
        const token = jwt.sign({ user: "admin" }, process.env.SECRET);
        return response.status(200).send({ token });
      } else {
        return response.status(401).send({ error: "incor ssword" });
      }
    })
    .catch((error) => response.status(500).send({ error: error.toString() }));
});

module.exports = loginRouter;
