import { GetStayUseCase } from '@/api/application/use_case/stay/get_stay';
import { StayRepository } from '@/api/domain/repository/stay_repository';
import { TenantRepository } from '@/api/domain/repository/tenant_repository';
import { StayFirebaseRepository } from '../../firebase_repository/stay_firebase_repository';
import { TenantFirebaseRepository } from '../../firebase_repository/tenant_firebase_repository';

export class StayDi {
  stayRepository: StayRepository;
  tenantRepository: TenantRepository;

  constructor() {
    this.stayRepository = new StayFirebaseRepository();
    this.tenantRepository = new TenantFirebaseRepository();
  }

  makeGetStayUseCase() {
    return new GetStayUseCase(this.stayRepository, this.tenantRepository);
  }
}
