import { CreateTenantUseCase } from '@/api/application/use_case/tenant/create_tenant';
import { TenantRepository } from '@/api/domain/repository/tenant_repository';
import { CreateTenantController } from '@/api/presentation/controller/tenant/create_tenant_controller';
import { TenantFirebaseRepository } from '../firebase_repository/tenant_firebase_repository';

export class TenantDi {
  tenantRepository: TenantRepository;
  constructor() {
    this.tenantRepository = new TenantFirebaseRepository();
  }

  makeCreateTenantUseCase() {
    return new CreateTenantUseCase(this.tenantRepository);
  }

  makeCreateTenantController() {
    return new CreateTenantController(this.makeCreateTenantUseCase());
  }
}
