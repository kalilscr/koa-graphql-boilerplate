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
};
