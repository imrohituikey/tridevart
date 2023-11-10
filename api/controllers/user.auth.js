import bcrypt, { hashSync, compareSync } from "bcrypt";
import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signUp = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashPassword = hashSync(password, 10);
  if (username !== null && email !== null && password !== null) {
    const newUser = new User({ username, email, password: hashPassword });
    await newUser
      .save()
      .then(() => {
        res.status(201).json({ message: "user is Created successfully" });
      })
      .catch((err) => next(err));
  } else {
    res.status(400).json({ message: "Something went wrong..." });
  }
};

export const signIn = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email: email });
    if (!validUser) return next(errorHandler(404, "User not found!"));
    const validPassword = bcrypt.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, "Wrong credentials"));
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: pass, ...rest } = validUser._doc;
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};

export const signingoogle = async (req, res) => {
  const validUser = await User.findOne({ email: req.body.email });
  if(validUser){
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: pass, ...rest } = validUser._doc;
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  }else{
    next(error);
  }
};
export const signOut = async(req,res,next)=>{
  try {
    res.clearCookie('access_token');
    res.status(200).json('user has been logged out!');
  } catch (error) {
    next(error)
  }
};
