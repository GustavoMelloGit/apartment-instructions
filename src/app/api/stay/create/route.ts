import { makeCreateStayController } from '@/api/infra/di/stay/create_stay_di';

export async function POST(request: Request): Promise<Response> {
  const controller = makeCreateStayController();
  return controller.handle(request);
}
