const jwt = require("jsonwebtoken");
const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  //send token in cookies
  res.cookie("jwt", token, {
    httpOnly: true, //to make it secure
    maxAge: 7 * 24 * 60 * 60 * 1000, // in milliseconds
    sameSite: "strict",
    secure: process.env.NODE_ENV !== "development",
  });
  return token;
};

module.exports = {
  generateToken,
};
