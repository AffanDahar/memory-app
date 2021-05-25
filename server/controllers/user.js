import User from "../models/user.js";
import genrateToken from "../utils/uitls.js";

export const signIn = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    res.status(404).json({ message: "there is no user wih  this email" });
  }

  if (!user || !(await user.matchPassword(password))) {
    res.status(400);
    res.json({ message: "invalid email or password" });
  }

  if (user) {
    res.json({
      result: {
        _id: user._id,
        name: user.name,
        email: user.email,
        },
      token: genrateToken(user._id),
    });
  }
};

export const signUp = async (req, res) => {
  const { firstName, email, password, confirmPassword } = req.body;
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    res.status(400);

    res.json({ message: "user already exist" });
  }

  const user = await User.create({
    name : `${firstName} ${lastName}`,
    email,
    password,
    confirmPassword,
  });

  if (user) {
    res.status(201);
    res.json({
      result: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },

      token: genrateToken(user._id),
    });
  }
  res.status(400).json({ message: "something went wrong try again letter" });
};
