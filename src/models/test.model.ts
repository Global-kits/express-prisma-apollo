import { PrismaClient } from "@prisma/client";
import prisma from "../config/prisma";
import { createTest } from "../interfaces/repository";

export class TestModel {
  protected prisma: PrismaClient;
  constructor() {
    this.prisma = prisma;
  }

  async createTest(data: createTest) {
    try {
      let result = await this.prisma.test.create({ data });
      return result;
    } catch (error) {
      let err = error as Error;
      throw new Error(err.message);
    }
  }

  async updateTest(data: any) {
    try {
    } catch (error) {
      let err = error as Error;
      throw new Error(err.message);
    }
  }

  async getOneTest(data: any) {
    try {
    } catch (error) {
      let err = error as Error;
      throw new Error(err.message);
    }
  }

  async getAllTest() {
    try {
      let result = await this.prisma.test.findMany();
      return result;
    } catch (error) {
      let err = error as Error;
      throw new Error(err.message);
    }
  }

  async get() {
    try {
      let result = await this.prisma.test.findMany();
      return result;
    } catch (error) {
      let err = error as Error;
      throw new Error(err.message);
    }
  }
}
