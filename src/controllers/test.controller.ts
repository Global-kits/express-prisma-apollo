import { TestService } from "../services/test.service";
import { BaseResponse } from "../utils/base-response";
import AutoBindMethod from "../utils/auto-bind-method";

export class TestController {
  constructor(private service: TestService) {}

  @AutoBindMethod
  async getAll(req, res) {
    try {
      let data = await this.service.get();
      return BaseResponse.susRes(res, data, "test all data.");
    } catch (error) {
      const err = error as Error;
      return BaseResponse.errRes(res, err.message);
    }
  }
}
