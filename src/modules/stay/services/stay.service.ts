import { GetStayOutput } from './stay.dto';

export const StayService = {
  async get(stay_id: string): Promise<GetStayOutput> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: stay_id,
          guest: {
            id: '1',
            name: 'John Doe',
            email: 'email@example.com',
          },
          guests: 2,
          check_in: new Date(),
          check_out: new Date(new Date().setDate(new Date().getDate() + 2)),
        });
      }, 500);
    });
  },
};
