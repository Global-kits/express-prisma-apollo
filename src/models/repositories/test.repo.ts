import { createTest, RepositoryInterface, updateTest } from "../../interfaces/repository";
import { TestRepoInterface } from "../../interfaces/repository";
import { TestModel } from "../test.model";

export class TestRepository implements TestRepoInterface, RepositoryInterface {

    constructor(private model: TestModel) {}

    get(): Object {
        return this.model.get()
    }
    getAll(): Object[] {
        return [{}]
    }
    createTest(data: createTest): Object {
        return {}
    }
    updateTest(id: string, data: updateTest): Object {
        return {}
    }

}