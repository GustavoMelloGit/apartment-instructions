import { StayDi } from '@/api/infra/di/stay_di';

export async function GET(request: Request): Promise<Response> {
  const di = new StayDi();
  const controller = di.makeGetStayController();
  return controller.handle(request);
}
