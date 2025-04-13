import { Guest } from '../entity/guest';

export interface GuestRepository {
  findById(id: string): Promise<Guest | null>;
  isDuplicate(guest: Guest): Promise<boolean>;
  save(input: { name: string; phone: string }): Promise<Guest>;
}
