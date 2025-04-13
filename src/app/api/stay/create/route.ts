import { StayDi } from '@/api/infra/di/stay_di';

export async function POST(request: Request): Promise<Response> {
  const di = new StayDi();
  const controller = di.makeCreateStayController();
  return controller.handle(request);
}
