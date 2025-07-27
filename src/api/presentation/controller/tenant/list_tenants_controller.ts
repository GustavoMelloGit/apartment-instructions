import { ListTenantsUseCase } from '@/api/application/use_case/tenant/list_tenents';
import { Controller } from '../controller';

export class ListTenantsController implements Controller {
  constructor(private readonly useCase: ListTenantsUseCase) {}

  async handle(): Promise<Response> {
    const tenants = await this.useCase.execute();
    return Response.json(tenants);
  }
}
