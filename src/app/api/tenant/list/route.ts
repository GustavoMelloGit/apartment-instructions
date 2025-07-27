import { TenantDi } from '@/api/infra/di/tenant_di';

export async function GET(): Promise<Response> {
  const di = new TenantDi();
  const controller = di.makeListTenantsController();
  return controller.handle();
}
