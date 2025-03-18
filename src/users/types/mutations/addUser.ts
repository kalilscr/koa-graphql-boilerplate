import { GraphQLID, GraphQLNonNull } from "graphql";
import userType from "../userType";
import AddUserInput from "../../inputs/addUserInput";
import UserModel from "../../../models/UserModel";

const addUser = {
  type: new GraphQLNonNull(userType),
  description: "Add a new user to the dataset",
  args: {
    user: {
      type: new GraphQLNonNull(AddUserInput),
      description: "Input object containing values for creating a new user",
    },
  },
  async resolve(parent: any, args: any) {
    const newUser = new UserModel({
      name: args.user.name,
    });
    return newUser
      .save()
      .then((result) => result)
      .catch((err) => {
        console.log(err);
        throw err;
      });
  },
};

export default addUser;
