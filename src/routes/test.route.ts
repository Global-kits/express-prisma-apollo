import { Router } from "express";
import { TestController } from "../controllers";
import { TestService } from "../services/test.service";
import { TestModel } from "../models/test.model";
import { TestRepository } from "../models/repositories/test.repo";

const router = Router();

const model = new TestModel();
const repo = new TestRepository(model);
const service = new TestService(repo);
const controller = new TestController(service);

const routeName = "/test";

router.get(routeName, controller.getAll);

router.get("/abc", (req, res) => {
  return res.json("hello testing auth route");
});

export default router;
