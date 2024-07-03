import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  const alice = await prisma.test.create({
    data: {
      name: "hello",
      description: "lorem Ipsum",
    },
  });
  const bi = await prisma.test.create({
    data: {
      name: "bi",
      description: "Testing one two",
    },
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
