import { Tenant } from '@/api/domain/entity/tenant';
import { TenantRepository } from '@/api/domain/repository/tenant_repository';
import { db } from '@/db/firebase';
import {
  addDoc,
  and,
  collection,
  getDocs,
  query,
  where,
} from 'firebase/firestore';

export class TenantFirebaseRepository implements TenantRepository {
  async findById(id: string): Promise<Tenant | null> {
    const q = query(collection(db, 'guests'), where('id', '==', id));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      return null;
    }
    const tenant = querySnapshot.docs[0].data();
    return tenant as Tenant;
  }

  async save(input: { name: string; phone: string }): Promise<Tenant> {
    const tenant = {
      id: crypto.randomUUID(),
      name: input.name,
      phone: input.phone,
    };
    await addDoc(collection(db, 'guests'), tenant);
    return tenant;
  }

  async isDuplicate(tenant: Tenant): Promise<boolean> {
    const q = query(
      collection(db, 'guests'),
      and(where('name', '==', tenant.name), where('name', '==', tenant.name))
    );
    const querySnapshot = await getDocs(q);
    return !querySnapshot.empty;
  }
}
