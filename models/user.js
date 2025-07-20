import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
  email: {
    type: String,
    //array, 2nd item shows error message to show
    unique: [true, 'Email already exists!'],
    required: [true, 'Email is required!'],
  },
  username: {
    type: String,
    required: [true, 'Username is required!'],
    },
  image: {
    type: String,
  }
});

//because it is serverless, we use the models object which stores all the mongoose models we have once created.. so we only create it the first time
const User = models.User || model("User", UserSchema);

export default User;