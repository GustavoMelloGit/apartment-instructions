import { CreateTenantUseCase } from '@/api/application/use_case/tenant/create_tenant';
import { ListTenantsUseCase } from '@/api/application/use_case/tenant/list_tenents';
import { TenantRepository } from '@/api/domain/repository/tenant_repository';
import { CreateTenantController } from '@/api/presentation/controller/tenant/create_tenant_controller';
import { ListTenantsController } from '@/api/presentation/controller/tenant/list_tenants_controller';
import { TenantFirebaseRepository } from '../firebase_repository/tenant_firebase_repository';

export class TenantDi {
  #tenantRepository: TenantRepository;
  constructor() {
    this.#tenantRepository = new TenantFirebaseRepository();
  }

  // Use Cases
  makeCreateTenantUseCase() {
    return new CreateTenantUseCase(this.#tenantRepository);
  }

  makeListTenantsUseCase() {
    return new ListTenantsUseCase(this.#tenantRepository);
  }

  // Controllers
  makeCreateTenantController() {
    return new CreateTenantController(this.makeCreateTenantUseCase());
  }

  makeListTenantsController() {
    return new ListTenantsController(this.makeListTenantsUseCase());
  }
}
