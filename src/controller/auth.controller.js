const { compare } = require("bcryptjs");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User } = require("../models/user.model");

async function httpLoginUser(req, res, next) {
  let { email, password } = req.body;

  if (!(email && password)) {
    res.status(400).json({
      message: "all fields required",
      type: "error",
    });
    return;
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
        type: "success",
      });
    }
  } catch (error) {
    res.status(400).json({
      message: `${error}`,
    });
  }
  next();
}
async function httpGetUserExceptAdmin(req, res) {
  let filter = false;
  const data = await User.find({ isAdmin: filter }, {}).catch((err) =>
    console.log(err.message)
  );
  console.log(data);
  if (data) {
    res.status(200).json({
      message: "successful",
      data: data,
      success: true,
    });
    return;
  }
  res.status(400).json({
    message: "failed to find users",
    success: false,
  });
}

module.exports = { httpLoginUser, httpGetUserExceptAdmin };
