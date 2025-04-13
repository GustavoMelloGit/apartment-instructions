import { GetStayUseCase } from '@/api/application/use_case/stay/get_stay';
import { GetStayController } from '@/api/presentation/controller/stay/get_stay_controller';
import { StayFirebaseRepository } from '../../firebase_repository/stay_firebase_repository';
import { TenantFirebaseRepository } from '../../firebase_repository/tenant_firebase_repository';

export function makeGetStayController(): GetStayController {
  const stayRepository = new StayFirebaseRepository();
  const tenantRepository = new TenantFirebaseRepository();
  const useCase = new GetStayUseCase(stayRepository, tenantRepository);
  const controller = new GetStayController(useCase);
  return controller;
}
