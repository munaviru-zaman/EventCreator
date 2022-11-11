const db = require("./db");

const signUp = (userId, dob, email, pswd) => {
  return db.User.findOne({ email }).then((user) => {
    if (user) {
      return {
        statusCode: 400,
        status: false,
        message: "User already exists",
      };
    } else {
      const newUser = new db.User({
        userId,
        dob,
        email,
        pswd,
      });
      newUser.save();
      return {
        statusCode: 200,
        status: true,
        message: "User added successfully",
        dob,
      };
    }
  });
};

const login = (email, pswd) => {
  return db.User.findOne({ email, pswd }).then((loginUser) => {
    if (loginUser) {
      return {
        statusCode: 202,
        status: true,
        message: "Login Successfully",
        userId: loginUser.userId,
      };
    } else {
      return {
        statusCode: 404,
        status: false,
        message: "User does not exist",
      };
    }
  });
};

module.exports = { signUp, login };
