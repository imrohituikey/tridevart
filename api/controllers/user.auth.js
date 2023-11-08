import bcrypt, { hashSync } from "bcrypt";
import User from "../models/user.model.js";

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

export const signIn = async (req, res) => {
  res.send({ message: "Hi from sign in" });
};
