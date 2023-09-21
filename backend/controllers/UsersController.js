const Users = require("../models/UserModel");
const bcrypt = require("bcrypt");
exports.getAllUsers = async (req, res) => {
  try {
    const allUsers = await Users.find();
    res.status(200).json(allUsers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createNewUser = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = await new Users({
      firstName: req.body.firstName,
      secondName: req.body.secondName,
      email: req.body.email,
      userName: req.body.userName,
      password: hashedPassword,
    });
    await newUser.save();
    res.status(200).json(newUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.login = async (req, res) => {
  try{
    const user = await Users.findOne({ email: req.body.email });
  if (user && (await bcrypt.compare(req.body.password,user.password))) {
    return res.status(200).json(user);
  }
  res.status(404).json({message: 'Invalid username or password'})
  }catch(err){
    res.status(500).json({message: err.message})
  }
};
