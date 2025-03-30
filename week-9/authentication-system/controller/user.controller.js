import User from "../model/User.model.js";
import nodemailer from "nodemailer";
import crypto from "crypto";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({
      message: "All fields are required!",
    });
  }
  // password validation
  // email validation

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists!",
      });
    }
    const user = await User.create({
      name,
      email,
      password,
    });

    if (!user) {
      return res.status(400).json({
        message: "User not registered!",
      });
    }

    console.log("user from DB", user);
    const verificationToken = crypto.randomBytes(32).toString("hex");
    user.verificationToken = verificationToken;
    await user.save();

    const transporter = nodemailer.createTransport({
      host: process.env.MAILTRAP_HOST,
      port: process.env.MAILTRAP_PORT,
      secure: false, // true for port 465, false for other ports
      auth: {
        user: process.env.MAILTRAP_USERNAME,
        pass: process.env.MAILTRAP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.SENDER_EMAIL,
      to: user.email,
      subject: "Verify your email",
      text: `
      <h1>Welcome to our authentication app</h1>
      <p>Please verify your email by clicking the link below</p>
      <a href="${process.env.FRONTEND_URL}/api/v1/users/verify/${user.verificationToken}">Verify Email</a>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({
      message: "User registered successfully",
      success: true,
    });
  } catch (error) {
    return res.status(400).json({
      message: "User not registered ",
      error,
      success: false,
    });
  }

  console.log("req", req.body);
};

const verifyUser = async (req, res) => {
  //get token from url
  // validate
  // find user based on token
  // isverified -> true
  // remove verification token
  // save and return response

  const { token } = req.params;
  console.log(token);
  if (!token) {
    return res.status(400).json({
      message: "Invalid token",
    });
  }

  const user = await User.findOne({ verificationToken: token });

  if (!user) {
    return res.status(400).json({
      message: "Invalid token",
    });
  }

  user.isVerified = true;
  // which one is better -> undefined , null , empty string
  user.verificationToken = undefined;
  await user.save();
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    console.log(isMatch);

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    // user is verified or not
    if (!user.isVerified) {
      return res.status(400).json({
        message: "Please verify your email ",
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
      },
      "shhhh",
      {
        expiresIn: "24h",
      }
    );
    const cookieOptions = {
      httpOnly: true, //only BE access, user can't disturb this
      secure: true,
      maxAge: 24 * 60 * 60 * 1000,
    };

    res.cookie("test", token, cookieOptions);
    res.status(200).json({
      message: "Login Successful",
      success: true,
      user: {
        id: user._id,
        name: user.name,
        role: user.role,
      },
    });
  } catch (error) {
    return res.status(400).json({
      message: "Something went wrong",
      error,
    });
  }
};

export { registerUser, verifyUser, login };
