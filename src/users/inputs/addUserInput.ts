import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from "graphql";

const AddUserInput = new GraphQLInputObjectType({
  name: "AddUserInput",
  description: "A collection of properties for a new user",
  fields: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The name of the User",
    },
  },
});

export default AddUserInput;
