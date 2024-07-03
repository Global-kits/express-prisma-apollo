import { testResolver } from "./test.resolver";

export const resolvers = {
  Query: {
    ...testResolver.Query,
  },
  Mutation: {
    ...testResolver.Mutation,
  },
};
