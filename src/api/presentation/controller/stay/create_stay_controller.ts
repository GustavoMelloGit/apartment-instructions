import { NextResponse } from 'next/server';
import { z } from 'zod';
import { CreateStayUseCase } from '../../../application/use_case/stay/create_stay';
import { Controller } from '../controller';

const inputSchema = z.object({
  guests: z.number().gt(0),
  guest_id: z.string().length(20),
  password: z.string(),
  check_in: z.coerce.date(),
  check_out: z.coerce.date(),
});

type CreateStayInput = z.infer<typeof inputSchema>;

export class CreateStayController implements Controller<CreateStayInput> {
  constructor(private readonly useCase: CreateStayUseCase) {}

  async validate(request: Request): Promise<Response | CreateStayInput> {
    const requestJson = await request.json();

    const parsedInput = inputSchema.safeParse(requestJson);

    if (!parsedInput.success) {
      const errors = parsedInput.error.flatten();
      return NextResponse.json({ error: errors.fieldErrors }, { status: 422 });
    }

    return parsedInput.data;
  }

  async handle(request: Request): Promise<Response> {
    const validationResponse = await this.validate(request);
    if (validationResponse instanceof Response) {
      return validationResponse;
    }

    const output = await this.useCase.execute(validationResponse);
    return NextResponse.json(
      {
        message: 'Stay created successfully',
        data: output,
      },
      { status: 200 }
    );
  }
}
