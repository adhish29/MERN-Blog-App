const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.statics.login = async function (username, password) {
  const user = await this.findOne({ username }); //find the user from DB if any
  if (user) {
    const isValid = await bcrypt.compare(password, user.password);
    if (isValid) return user;
    throw new Error("incorrect username/password");
  }
  throw new Error("incorrect username/password");
};

module.exports = mongoose.model("User", userSchema);
