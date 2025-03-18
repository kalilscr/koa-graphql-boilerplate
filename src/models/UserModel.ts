import { model, Schema } from "mongoose";

const UserSchema = new Schema({
  //tenantId: String,
  name: String,
  // password: String,
  // tokens: {
  //   type: Number,
  //   default: 10,
  //   index: true,
  // },
  // createdAt: {
  //   type: Date,
  //   default: Date.now,
  // },
  // deletedAt: Date,
});

const UserModel = model("User", UserSchema);

export default UserModel;
