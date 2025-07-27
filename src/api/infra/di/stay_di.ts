import { CreateStayUseCase } from '@/api/application/use_case/stay/create_stay';
import { GetStayUseCase } from '@/api/application/use_case/stay/get_stay';
import { StayRepository } from '@/api/domain/repository/stay_repository';
import { TenantRepository } from '@/api/domain/repository/tenant_repository';
import { CreateStayController } from '@/api/presentation/controller/stay/create_stay_controller';
import { GetStayController } from '@/api/presentation/controller/stay/get_stay_controller';
import { StayFirebaseRepository } from '../firebase_repository/stay_firebase_repository';
import { TenantFirebaseRepository } from '../firebase_repository/tenant_firebase_repository';

export class StayDi {
  #stayRepository: StayRepository;
  #tenantRepository: TenantRepository;

  constructor() {
    this.#stayRepository = new StayFirebaseRepository();
    this.#tenantRepository = new TenantFirebaseRepository();
  }

  // Use Cases
  makeGetStayUseCase() {
    return new GetStayUseCase(this.#stayRepository, this.#tenantRepository);
  }
  makeCreateStayUseCase() {
    return new CreateStayUseCase(this.#stayRepository, this.#tenantRepository);
  }

  // Controllers
  makeCreateStayController() {
    return new CreateStayController(this.makeCreateStayUseCase());
  }
  makeGetStayController() {
    return new GetStayController(this.makeGetStayUseCase());
  }
}
