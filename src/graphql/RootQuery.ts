import { GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";
import UserType from "../users/types/userType";
import User from "../models/UserModel";
import { queries } from "./RootModule";

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  description: "Root query type",
  fields: () => queries,
});

export default RootQuery;
