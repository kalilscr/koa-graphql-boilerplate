import { GraphQLInt, GraphQLObjectType, GraphQLString } from "graphql";
import UserType from "../users/types/userType";
import UserModel from "../models/UserModel";
import { mutations } from "./RootModule";

const RootMutation = new GraphQLObjectType({
  name: "RootMutation",
  description: "Root mutation type",
  fields: () => mutations,
  //fields: {

  // addUser: {
  //   type: UserType,
  //   args: {
  //     name: { type: GraphQLString },
  //     // tenantId: { type: GraphQLString },
  //     // tokens: { type: GraphQLInt },
  //     // createdAt: { type: GraphQLString },
  //   },
  //   resolve(parent, args) {
  //     const newUser = new UserModel({
  //       name: args.name,
  //       //tenantId: args.tenantId,
  //       //tokens: args.tokens,
  //       //createdAt: args.createdAt,
  //     });
  //     return newUser.save();
  //   },
  // },
  // updateGadget: {
  //   type: UserType,
  //   args: {
  //     id: { type: GraphQLString },
  //     name: { type: GraphQLString },
  //     release_date: { type: GraphQLString },
  //     by_company: { type: GraphQLString },
  //     price: { type: GraphQLString },
  //   },
  //   resolve(parent, args) {
  //     return User.findById(args.id)
  //       .then((gadget) => {
  //         gadget.name = args.name;
  //         (gadget.release_date = args.release_date),
  //           (gadget.by_company = args.by_company),
  //           (gadget.price = args.price);
  //         return gadget.save();
  //       })
  //       .then((updatedGadget) => updatedGadget)
  //       .catch((err) => console.log(err));
  //   },
  // },
  // removeGadget: {
  //   type: UserType,
  //   args: {
  //     id: { type: GraphQLString },
  //   },
  //   resolve(parent, args) {
  //     return User.findOneAndDelete(args.id)
  //       .exec()
  //       .then((gadget) => gadget.remove())
  //       .then((deletedGadget) => deletedGadget)
  //       .catch((err) => console.log(err));
  //   },
  // },
  //},
});

export default RootMutation;
