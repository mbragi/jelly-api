const { User } = require("../models/user.model");
const bcrypt = require("bcryptjs");
async function CreateUser(req, res) {
  let { fullName, email, password, confirmPassword } = req.body;
  // check for missing fields

  if (!fullName || !email || !password || !confirmPassword) {
    return res.status(400).json({
      message: "All fields required",
    });
  } else if (password !== confirmPassword) {
    return res.status(403).json({
      message: "passwords need to match",
    });
  }
  try {
    //search if user exist then update
    // const user = await User.findOneAndUpdate({ email }, { ...req.body });
    const allData = await User.findOne({ email });

    if (allData) {
      res.status(200).json({
        message: "successful",
        user: `${allData.email} is already in use. Please Login or reset password`,
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
      messsage: "succefully created",
      data: newUser,
    });
  } catch (error) {
    res.status(400).json({
      message: `${error}`,
    });
  }
}

module.exports = { CreateUser };
