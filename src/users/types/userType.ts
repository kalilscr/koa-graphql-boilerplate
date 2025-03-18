import {
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLID,
} from "graphql";

const UserType = new GraphQLObjectType({
  name: "UserType",
  description: "An object type that holds information about an user",
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: "The unique identifier of the user",
    },
    name: {
      type: GraphQLString,
      description: "The name of the user",
    },
    //tokens: { type: GraphQLInt },
    //createdAt: { type: GraphQLString },
    //deletedAt: { type: GraphQLString },
  }),
});

export default UserType;
