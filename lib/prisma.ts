import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";

const prismaClient = new PrismaClient().$extends(withAccelerate());

type PrismaClientType = typeof prismaClient;

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientType | undefined;
};

export const prisma = globalForPrisma.prisma ?? prismaClient;

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export default prisma;
