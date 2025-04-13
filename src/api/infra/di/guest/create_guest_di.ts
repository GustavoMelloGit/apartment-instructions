import { CreateGuestUseCase } from '@/api/application/use_case/guest/create_guest';
import { CreateGuestController } from '@/api/presentation/controller/guest/create_guest_controller';
import { GuestFirebaseRepository } from '../../firebase_repository/guest_firebase_repository';

export function makeCreateGuestController(): CreateGuestController {
  const repository = new GuestFirebaseRepository();
  const useCase = new CreateGuestUseCase(repository);
  return new CreateGuestController(useCase);
}
