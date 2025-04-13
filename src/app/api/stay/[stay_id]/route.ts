import { makeGetStayController } from '@/api/infra/di/stay/get_stay_di';

type Params = {
  params: Promise<{ stay_id: string }>;
};

export async function GET(
  request: Request,
  { params }: Params
): Promise<Response> {
  const controller = makeGetStayController();
  return controller.handle({
    ...request,
    params: await params,
  });
}
