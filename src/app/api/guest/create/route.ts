import { makeCreateGuestController } from '@/api/infra/di/guest/create_guest_di';

export async function POST(request: Request): Promise<Response> {
  const controller = makeCreateGuestController();
  return controller.handle(request);
}
