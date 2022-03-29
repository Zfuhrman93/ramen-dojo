const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { Schema } = mongoose;

/* const RamenSchema = new mongoose.Schema({
  size: {
    type: String,
    required: [true, "Please select a ramen bowl size"],
    enum: {
      values: ['Small', 'Medium', 'Large'],
      message: 'Size needs to be Small or Medium or Large'
    }
  },
  soupBase: {
    type: String,
    required: [true, "Please select a soup base"],
    enum: {
      values: ["Shoyu (soy sauce)", "Shio (salt)", "Miso (soybean paste)", "Tonkotsu (pork bone)"],
      message: 'Soup base is required'
    }
  },
  chashu: {
    type: Boolean,
    default: false,
    required: [false],
  },
  menma: {
    type: Boolean,
    default: false,
    required: false,
  },
  moyashi: {
    type: Boolean,
    default: false,
    required: false,
  },
  tamago: {
    type: Boolean,
    default: false,
    required: false,
  },
  seaweed: {
    type: Boolean,
    default: false,
    required: false,
  },
  kamaboko: {
    type: Boolean,
    default: false,
    required: false,
  },
  corn: {
    type: Boolean,
    default: false,
    required: false,
  },
  butter: {
    type: Boolean,
    default: false,
    required: false,
  },
}); */

const UserSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please enter a First Name"]
  },
  lastName: {
    type: String,
    required: [true, "Please enter a Last Name"]
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
    required: [true, "Please enter a City"]
  },
  state: {
    type: String,
    required: [true, "Please choose a State"]
  },
  password: {
    type: String,
    required: [true, "Please enter a password"]
  },
  //Cart will hold Strings of each Ramen Id for the cart.
  cart: [String]
  //cart: [{ type: Schema.Types.ObjectId, ref: 'Ramen' }] 
})

/* Commented out my code while attempting to get the populate way to work. Gave up and went with the String Array, feel free to change if needed  */

module.exports = mongoose.model("User", UserSchema);
//module.exports = mongoose.model('Ramen', RamenSchema);

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