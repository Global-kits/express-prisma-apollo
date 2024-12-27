import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const testResolver = {
  Query: {
    tests: async (parent, args, contextValue, info) => {
      const { page = 1, perPage = 10 } = args;

      const skip = (page - 1) * perPage;
      const take = perPage;

      const [tests, totalCount] = await Promise.all([
        prisma.test.findMany({ skip, take }),
        prisma.test.count(),
      ]);
      return {
        items: tests,
        totalCount,
        totalPages: Math.ceil(totalCount / perPage),
        currentPage: page,
      };
    },
    test: async (parent, args, contextValue, info) => {
      return prisma.test.findUnique({ where: { id: parseInt(args.id) } });
    },
  },
  Mutation: {
    createTest: async (parent, args, contextValue, info) => {
      console.log("Args received:", args.data.name);
      return await prisma.test.create({
        data: { name: args.data.name, description: args.data.description },
      });
    },
    updateTest: async (parent, args, contextValue, info) => {
      return await prisma.test.update({
        where: { id: parseInt(args.id) },
        data: { name: args.data.name, description: args.data.description },
      });
    },
    deleteTest: async (parent, args, contextValue, info) => {
      return await prisma.test.delete({ where: { id: parseInt(args.id) } });
    },

  },
};
