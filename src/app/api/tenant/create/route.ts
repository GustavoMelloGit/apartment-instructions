import { makeCreateTenantController } from '@/api/infra/di/tenant/create_tenant_di';

export async function POST(request: Request): Promise<Response> {
  const controller = makeCreateTenantController();
  return controller.handle(request);
}
