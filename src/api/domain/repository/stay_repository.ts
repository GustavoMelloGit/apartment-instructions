import { Stay } from '../entity/stay';

export interface StayRepository {
  save(input: Omit<Stay, 'id'>): Promise<Stay>;
  findByPassword(password: string): Promise<Stay | null>;
  findById(id: string): Promise<Stay | null>;
}
