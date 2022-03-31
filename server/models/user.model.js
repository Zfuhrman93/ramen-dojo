const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please enter a First Name"],
    minlength: [4, "The user's first name should be at least 4 characters long"],

  },
  lastName: {
    type: String,
    required: [true, "Please enter a Last Name"],
    minlength: [4, "The user's last name should be at least 4 characters long"],


  },
  email: {
    type: String,
    required: [true, "Please enter an E-Mail Address"],
    validate: {
      validator: (val) => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
      message: "Please enter a valid E-Mail"
    }
  },
  address: {
    type: String,
    required: [true, "Please enter an Address"]
  },
  city: {
    type: String,
    required: [true, "Please enter a City"],
    minlength: [2, "The city should be at least two letters"],

  },
  state: {
    type: String,
    required: [true, "Please choose a State"],
    minlength: [2, "The state should be at least two letters"],

  },
  password: {
    type: String,
    required: [true, "Please enter a password"]

  },
  cart: [String],
  cost: {
    type: Number,
    default: 0
  }
})


UserSchema.virtual("confirmPassword")
.get(() => this._confirmPassword)
.set((value) => (this._confirmPassword = value));

UserSchema.pre("validate", function (next) {
  console.log("Inside Validate");
  if(this.password !== this.confirmPassword){
    this.invalidate("confirmPassword", "Passwords must match");
  }
  next();
});

UserSchema.pre("save", function (next) {
  console.log("Inside Hash");
  bcrypt
    .hash(this.password, 10)
    .then((hash) => {
      this.password = hash;
      console.log("HASHING");
      next();
    })
    .catch((err) => {
      console.log('Error!');
      console.log(err);
    })
})
      module.exports = mongoose.model("User", UserSchema);