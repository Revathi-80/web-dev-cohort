import crypto from "crypto";
import { User } from "../modles/user.models.js";
import { asyncHandler } from "../utils/async-handler.js";
import { sendMail, emailVerificationMailGenContent } from "../utils/mail.js";

const registerUser = asyncHandler(async (req, res) => {
  const { email, fullname, username, password } = req.body;

  try {
    const existingUser = await User.findOne({email: email });
  
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists!",
      });
    }
    const user = await User.create({
      fullname: fullname,
      email: email,
      password: password,
      username: username,
    });
    if (!user) {
      return res.status(500).json({
        success: false,
        message: "User not registered!",
      });
    }

    const emailVerificationToken = crypto.randomBytes(32).toString("hex");
    user.emailVerificationToken = emailVerificationToken;
    await user.save();
    const verificationUrl = `${process.env.BASE_URL}/api/v1/users/verify/${emailVerificationToken}`;
    sendMail({
      email: user.email,
      subject: "Verify your Email",
      mailGenContent: emailVerificationMailGenContent(
        user.fullname,
        verificationUrl,
      ),
    });
    return res.status(200).json({
      success: true,
      message: "User Registered Successfully!!!",
    });
  } catch (error) {
    return res.status(501).json({
      success: false,
      message: "Something Went wrong!",
    });
  }
});

const loginUser = asyncHandler(async (req, res) => {
  // get email and password for req body 
  // check whether email already exists in DB 
  // if not ---> return error 
  // if email exists  ---> check whether password is correct

  const { email, username, password, role } = req.body;

});

const logoutUser = asyncHandler(async (req, res) => {
  const { email, username, password, role } = req.body;

  //validation
});

const verifyEmail = asyncHandler(async (req, res) => {
  const { email, username, password, role } = req.body;

  //validation
});

const resendEmailVerification = asyncHandler(async (req, res) => {
  const { email, username, password, role } = req.body;

  //validation
});
const resetForgottenPassword = asyncHandler(async (req, res) => {
  const { email, username, password, role } = req.body;

  //validation
});

const refreshAccessToken = asyncHandler(async (req, res) => {
  const { email, username, password, role } = req.body;

  //validation
});

const forgotPasswordRequest = asyncHandler(async (req, res) => {
  const { email, username, password, role } = req.body;

  //validation
});

const changeCurrentPassword = asyncHandler(async (req, res) => {
  const { email, username, password, role } = req.body;

  //validation
});

const getCurrentUser = asyncHandler(async (req, res) => {
  const { email, username, password, role } = req.body;

  //validation
});

export {
  changeCurrentPassword,
  forgotPasswordRequest,
  getCurrentUser,
  loginUser,
  logoutUser,
  refreshAccessToken,
  registerUser,
  resendEmailVerification,
  resetForgottenPassword,
  verifyEmail,
};
