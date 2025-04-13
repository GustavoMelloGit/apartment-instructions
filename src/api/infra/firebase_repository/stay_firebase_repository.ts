import { Stay } from '@/api/domain/entity/stay';
import { Tenant } from '@/api/domain/entity/tenant';
import {
  SaveStayDto,
  StayRepository,
} from '@/api/domain/repository/stay_repository';
import { db } from '@/api/infra/db/firebase';
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from 'firebase/firestore';

export class StayFirebaseRepository implements StayRepository {
  async findById(id: string): Promise<Stay | null> {
    const stayRef = doc(db, 'stays', id);
    const staySnap = await getDoc(stayRef);

    if (!staySnap.exists()) {
      return null;
    }

    const stay = staySnap.data();
    const tenantRef = stay.tenant_id;
    const tenantSnap = await getDoc(tenantRef);
    const tenant = {
      id: tenantRef.id,
      ...(tenantSnap.data() as Omit<Tenant, 'id'>),
    } satisfies Tenant;

    return {
      check_in: new Date(stay.check_in),
      check_out: new Date(stay.check_out),
      tenant,
      guests: stay.guests,
      id: stayRef.id,
      password: stay.password,
    } satisfies Stay;
  }

  async findByPassword(password: string): Promise<Stay | null> {
    const q = query(collection(db, 'stays'), where('password', '==', password));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      return null;
    }
    const stay = querySnapshot.docs[0].data();
    return stay as Stay;
  }

  async save(input: SaveStayDto): Promise<SaveStayDto> {
    const tenantRef = doc(db, 'guests', input.tenant_id);

    const stay = {
      check_in: input.check_in.toISOString(),
      check_out: input.check_out.toISOString(),
      tenant_id: tenantRef,
      guests: input.guests,
      password: input.password,
    };

    const docRef = await addDoc(collection(db, 'stays'), stay);

    return {
      ...stay,
      check_in: input.check_in,
      check_out: input.check_out,
      tenant_id: input.tenant_id,
      id: docRef.id,
    };
  }
}
