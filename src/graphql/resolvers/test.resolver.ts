import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const testResolver = {
  Query: {
    tests: async () => {
      return prisma.test.findMany();
    },
    test: async (parent, args, contextValue, info) => {
      return prisma.test.findUnique({ where: { id: parseInt(args.id) } });
    },
  },
  Mutation: {
    createTest: async (parent, args, contextValue, info) => {
      return await prisma.test.create({
        data: { name: args.name, description: args.description },
      });
    },
  },
};
