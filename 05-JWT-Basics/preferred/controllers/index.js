const jwt = require("jsonwebtoken");

const logon = async (req, res) => {
  const { userName, password } = req.body;

  const secret = process.env.SECRET;
  const lifeTime = process.env.LIFETIME;

  const token = jwt.sign({ userName }, secret, {
    expiresIn: lifeTime,
  });

  return res.status(200).json({ token });
};

const welcome = async (req, res) => {
  const { userName } = req.user;

  return res.status(200).json({ message: `Welcome, ${userName}` });
};

module.exports = { logon, welcome };
