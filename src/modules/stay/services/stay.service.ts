'use server';

import { StayDi } from '@/api/infra/di/stay/stay_di';
import { GetStayOutput, getStayOutputSchema } from './stay.dto';

export async function getStay(stay_id: string): Promise<GetStayOutput> {
  const di = new StayDi();
  const useCase = di.makeGetStayUseCase();
  const output = await useCase.execute({ stay_id });
  const parsedOutput = getStayOutputSchema.parse(output);
  return parsedOutput;
}
