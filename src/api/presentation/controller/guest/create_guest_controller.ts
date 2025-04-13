import { CreateGuestUseCase } from '@/api/application/use_case/guest/create_guest';
import { NextResponse } from 'next/server';
import { z } from 'zod';
import { Controller } from '../controller';

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  phone: z.string().length(13),
});

type Input = z.infer<typeof schema>;

export class CreateGuestController implements Controller<Input> {
  constructor(private readonly useCase: CreateGuestUseCase) {}

  async validate(request: Request): Promise<Input | Response> {
    const data = await request.json();

    const parsedInput = schema.safeParse(data);

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
        message: 'Guest created successfully',
        data: output,
      },
      { status: 200 }
    );
  }
}
