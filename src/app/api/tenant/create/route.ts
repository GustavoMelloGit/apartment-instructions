import { TenantDi } from '@/api/infra/di/tenant_di';

export async function POST(request: Request): Promise<Response> {
  const di = new TenantDi();
  const controller = di.makeCreateTenantController();
  return controller.handle(request);
}
