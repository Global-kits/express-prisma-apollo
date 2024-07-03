import { TestServiceInterface } from "../interfaces/service/test-service.interface";
import { TestRepository } from "../models/repositories/test.repo";

export class TestService implements TestServiceInterface {
  constructor(private repo: TestRepository) {}

  get() {
    return this.repo.get();
  }
}
