export type createTest = {
  name: string;
  description: string;
};

export type updateTest = {
  name?: string;
  description?: string;
};

export interface TestRepoInterface {
  createTest(data: createTest): Object;
  updateTest(id: string, data: updateTest): Object;
}
