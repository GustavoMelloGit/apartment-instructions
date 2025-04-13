import { CreateStayUseCase } from '@/api/application/use_case/stay/create_stay';
import { CreateStayController } from '@/api/presentation/controller/stay/create_stay_controller';
import { GuestFirebaseRepository } from '../../firebase_repository/guest_firebase_repository';
import { StayFirebaseRepository } from '../../firebase_repository/stay_firebase_repository';

export function makeCreateStayController(): CreateStayController {
  const stayRepository = new StayFirebaseRepository();
  const tenantRepository = new GuestFirebaseRepository();
  const useCase = new CreateStayUseCase(stayRepository, tenantRepository);
  const controller = new CreateStayController(useCase);
  return controller;
}
