import { ResourceNotFoundError } from '@/api/application/error/resource_not_found_error';
import { StayRepository } from '@/api/domain/repository/stay_repository';
import { TenantRepository } from '@/api/domain/repository/tenant_repository';
import { formatISO } from 'date-fns';
import { UseCase } from '../use_case';

type Input = {
  stay_id: string;
};

type Output = {
  check_in: string;
  check_out: string;
  guests: number;
  id: string;
  password: string;
  tenant: {
    id: string;
    name: string;
    phone: string;
  };
};

export class GetStayUseCase implements UseCase<Input, Output> {
  constructor(
    private readonly stayRepository: StayRepository,
    private readonly tenantRepository: TenantRepository
  ) {}

  async execute(input: Input): Promise<Output> {
    const stay = await this.stayRepository.findById(input.stay_id);

    if (!stay) {
      throw new ResourceNotFoundError('Stay');
    }

    return {
      id: stay.id,
      check_in: formatISO(stay.check_in),
      check_out: formatISO(stay.check_out),
      guests: stay.guests,
      password: stay.password,
      tenant: stay.tenant,
    };
  }
}
