import User from "../models/userModal.js";

export const register = async (req, res, next) => {
  try {
    const newUser = new User({
      userName: req.body.userName,
      email: req.body.email,
      password: req.body.password,
    });
    await newUser.save();
    req.status(200).send("User has been created");
  } catch (error) {
    next(err);
  }
};
