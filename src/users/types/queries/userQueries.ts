import { GraphQLID, GraphQLNonNull, GraphQLList } from "graphql";
import UserType from "../userType";
import UserModel from "../../../models/UserModel";
//import { getUser, getUsers } from '../../data/userRepository'; // Implement this

export const userQueries = {
  user: {
    type: UserType,
    description: "Find user by id",
    args: {
      id: { type: new GraphQLNonNull(GraphQLID) },
    },
    resolve(_: any, args: any) {
      return UserModel.findById(args.id);
    },
  },
  users: {
    type: new GraphQLList(UserType),
    description: "Find all users",
    resolve() {
      return UserModel.find({});
    },
  },
};
