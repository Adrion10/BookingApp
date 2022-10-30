import User from "../models/userModal.js";
import bcrypt from "bcryptjs";

export const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({
      userName: req.body.userName,
      email: req.body.email,
      password: hash,
    });
    await newUser.save();
    req.status(200).send("User has been created");
  } catch (error) {
    // next(err);
  }
};
