export type GetStayOutput = {
  id: string;
  guest: {
    id: string;
    name: string;
    email: string;
  };
  guests: number;
  check_in: Date;
  check_out: Date;
};
