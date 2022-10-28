const { compare } = require("bcryptjs");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User } = require("../models/user.model");
async function httpLoginUser(req, res) {
  try {
    // Get user input
    const { email, password } = req.body;

    // Validate user input
    if (!(email && password)) {
      res.status(400).json({
        message: "All fields required",
      });
      return;
    }
    // Validate if user exist in our database
    const member = await User.findOne({ email: email });
    // console.log(member);
    if (!member) {
      res.status(404).json({
        message: "Invalid credentials",
        status: "error",
      });
      return;
    }
    //password check
    if (member && (await bcrypt.compareSync(password, member.password))) {
      res.status(200).json({
        message: "successful",
        type: "success",
        data: member,
        status: "success",
      });
      return;
    } else {
      res.status(400).json({
        message: "Invalid credentials",
        type: "error",
        status: "error",
      });
      return;
    }
  } catch (err) {
    res.status(400).json({
      message: `Unable to login user.`,
      error: err.message,
      type: "error",
      status: "error",
    });
    console.log(err.message);
  }
}
// async function httpLoginUser(req, res, next) {
//   let { email, password } = req.body;

//   if (!(email && password)) {
//     res.status(400).json({
//       message: "all fields required",
//       type: "error",
//     });
//     return;
//   }
//   try {
//     const userData = await User.findOne({ email: email });
//     if (userData && bcrypt.compareSync(password, userData.password)) {
//       res.status(200).json({
//         message: "successful",
//         data: userData,
//         type: "success",
//       });
//     }
//   } catch (error) {
//     res.status(400).json({
//       message: `${error}`,
//     });
//   }
// }
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
