import { GuestRepository } from '@/api/domain/repository/guest_repository';
import { UseCase } from '../use_case';

type Input = {
  name: string;
  phone: string;
};

type Output = {
  id: string;
  name: string;
  phone: string;
};

export class CreateGuestUseCase implements UseCase {
  constructor(private readonly repository: GuestRepository) {}

  async execute(input: Input): Promise<Output> {
    return this.repository.save(input);
  }
}
