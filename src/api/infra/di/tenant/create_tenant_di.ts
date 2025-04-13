import { CreateTenantUseCase } from '@/api/application/use_case/tenant/create_tenant';
import { CreateTenantController } from '@/api/presentation/controller/tenant/create_tenant_controller';
import { TenantFirebaseRepository } from '../../firebase_repository/tenant_firebase_repository';

export function makeCreateTenantController(): CreateTenantController {
  const repository = new TenantFirebaseRepository();
  const useCase = new CreateTenantUseCase(repository);
  return new CreateTenantController(useCase);
}
