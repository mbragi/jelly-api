const { User } = require("../models/user.model");
const bcrypt = require("bcryptjs");
async function CreateUser(req, res) {
  let { fullName, email, password, confirmPassword } = req.body;
  // check for missing fields

  if (!fullName || !email || !password || !confirmPassword) {
    return res.status(400).json({
      message: "All fields required",
      type: "error",
    });
  } else if (password !== confirmPassword) {
    return res.status(403).json({
      message: "passwords need to match",
      type: "error",
    });
  }
  try {
    const allData = await User.findOne({ email });

    if (allData) {
      res.status(200).json({
        message: `${allData.email} belongs to an account. Please Login or Reset Password`,
        type: "error",
      });
      return;
    }
    //Encrypt passsword
    let encryptedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      email,
      fullName,
      password: encryptedPassword,
    });
    await newUser.save();
    res.status(201).json({
      message: "successfully created",
      data: newUser,
      type: "success",
    });
  } catch (error) {
    res.status(400).json({
      message: `${error}`,
    });
  }
}

module.exports = { CreateUser };
