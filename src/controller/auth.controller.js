const { compare } = require("bcryptjs");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User } = require("../models/user.model");

async function httpLoginUser(req, res, next) {
  let { email, password } = req.body;

  if (!(email && password)) {
    res.status(400).json({
      message: "all fields required",
    });
  }
  try {
    const userData = await User.findOne({ email });
    if (userData && bcrypt.compareSync(password, userData.password)) {
      //create token
      const token = jwt.sign(
        { userData_id: userData._id, email },
        process.env.JWT_SECRET,
        {
          expiresIn: "2h",
        }
      );
      userData.token = token;

      res.status(200).json({
        message: "successful",
        token: userData.token,
        data: userData,
      });
    }
  } catch (error) {
    res.status(400).json({
      message: `${error}`,
    });
  }
  next();
}

module.exports = { httpLoginUser };
