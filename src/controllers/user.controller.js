import User from "../models/user.model.js";

export const userLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    console.log(req.body);

    if (!email || user.password !== password) {
      return res.status(404).json({
        message: "Password or email wrong",
      });
    }

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

export const userSignUp = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "Input all relevant fields",
    });
  }

  const user = await User.create(req.body);
  res.status(201).json(user);
};

export const getUser = async (req, res, next) => {
  const id = req.params.id;

  if (!id) {
    const err = new Error("User with this id cannot be found");
    err.status = 400;
    return next(err);
  }

  const user = await User.findOne({ _id: id });

  res.status(200).json({
    success: true,
    user,
  });
};
