import jwt from "jsonwebtoken";

export const isLoggedIn = async (req, res, next) => {
  try {
    console.log('cookies',req.cookies);
    let token = req.cookies?.token;

    console.log("Token found", token ? "YES" : "No");

    if (!token) {
      return res.status(400).json({
        success: false,
        message: "Authentication failed",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("decoded", decoded);
    req.user = decoded;

    next();
  } catch (error) {
    console.log("Auth Middleware failure");
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};
