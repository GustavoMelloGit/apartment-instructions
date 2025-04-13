import { ResourceNotFoundError } from '@/api/domain/error/resource_not_found_error';
import { ValidationError } from '@/api/domain/error/validation_error';
import { StayRepository } from '@/api/domain/repository/stay_repository';
import { TenantRepository } from '@/api/domain/repository/tenant_repository';
import { UseCase } from '../use_case';

type Input = {
  guests: number;
  guest_id: string;
  password: string;
  check_in: Date;
  check_out: Date;
};

type Output = {
  id: string;
  guests: number;
  password: string;
  guest_id: string;
  check_in: string;
  check_out: string;
};

export class CreateStayUseCase implements UseCase<Input, Output> {
  constructor(
    private readonly stayRepository: StayRepository,
    private readonly guestRepository: TenantRepository
  ) {}

  async execute(input: Input): Promise<Output> {
    const [tenant, hasUsedPassword] = await Promise.all([
      this.guestRepository.findById(input.guest_id),
      this.stayRepository.findByPassword(input.password),
    ]);

    if (!tenant) {
      throw new ResourceNotFoundError('Guest');
    }
    if (hasUsedPassword) {
      throw new ValidationError('Invalid password');
    }

    const stay = await this.stayRepository.save(input);
    return {
      id: stay.id,
      password: stay.password,
      guest_id: stay.guest_id,
      guests: stay.guests,
      check_in: stay.check_in.toISOString(),
      check_out: stay.check_out.toISOString(),
    };
  }
}
