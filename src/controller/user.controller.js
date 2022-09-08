const { User } = require("../models/user.model");

async function CreateUser(req, res) {
  let { fullName, email, password } = req.body;
  // check for missing fields

  if (!fullName || !email || !password) {
    return res.status(400).json({
      message: "All fields must b field",
    });
  }
  try {
    //search if user exist then update
    const user = User.findOneAndUpdate({ email }, { ...req.body });
    const allData = User.find({ email });

    if (user) {
      res.status(200).json({
        message: "successful",
        user: allData,
      });
      return;
    }

    const newUser = new User({ ...req.body });
    await newUser.save();
    res.status(201).json({
      messsage: "succefully created",
      user: [allData],
    });
  } catch (error) {
    res.status(400).json({
      message: `${error}`,
    });
  }
}
module.exports = { CreateUser };
