import { GraphQLNonNull, GraphQLString, GraphQLID } from "graphql";
import UserType from "../userType";
import UserModel from "../../../models/UserModel";
//import { createUser, updateUser, deleteUser } from "../../data/userRepository"; // Implement this

export const userMutations = {
  createUser: {
    type: UserType,
    description: "Add a new user to the dataset",
    args: {
      name: { type: new GraphQLNonNull(GraphQLString) },
    },
    async resolve(_: any, args: any) {
      const newUser = new UserModel({ name: args.name });

      return newUser
        .save()
        .then((result) => result)
        .catch((err) => {
          console.log(err);
          throw err;
        });
    },
  },
  updateUser: {
    type: UserType,
    description: "Update user information",
    args: {
      id: { type: new GraphQLNonNull(GraphQLID) },
      name: { type: GraphQLString },
    },
    async resolve(_: any, args: any) {
      return await UserModel.findOneAndUpdate(
        { _id: args.id },
        { name: args.name },
        { returnOriginal: false }
      );
    },
  },
  deleteUser: {
    type: UserType,
    description: "Delete an User",
    args: {
      id: { type: new GraphQLNonNull(GraphQLID) },
    },
    async resolve(_: any, args: any) {
      return await UserModel.findByIdAndDelete(args.id);
    },
  },
};
