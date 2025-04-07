import { Separator } from '@/components/ui/separator';
import { FC } from 'react';
import { GetStayOutput } from '../services/stay.dto';

const dateFormatter = Intl.DateTimeFormat('pt-BR', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
});

type Props = {
  stay: GetStayOutput;
};

export const StayView: FC<Props> = ({ stay }) => {
  const checkInDate = dateFormatter.format(new Date(stay.check_in));
  const checkOutDate = dateFormatter.format(new Date(stay.check_out));

  return (
    <div className='space-y-4'>
      <div className='space-y-2'>
        <h1 className='text-lg'>
          Olá, <b>{stay.guest.name}</b>
        </h1>
        <h2>
          Estamos muito felizes com a sua reserva, e para que ela seja ainda
          melhor, aqui você poderá consultar algumas instruções:
        </h2>
      </div>

      <div className='text-sm space-y-3 [&>section]:space-y-2 [&_h4]:font-bold [&_h4]:text-md'>
        <section>
          <div>
            <h3 className='text-lg font-black'>Sobre como chegar</h3>
            <Separator />
          </div>

          <div>
            <h4>Endereço</h4>
            <p>
              Rua: R. Salma Souki Oliveira, S/N <br />
              Bairro: Praia dos Castelhanos
              <br />
              Complemento: Ed. Bandeira Azul, Ap. 201
            </p>
            <a
              className='underline'
              href='https://maps.app.goo.gl/qtJszgeturfyeqDL7'
              target='_blank'
            >
              Clique aqui para abrir o mapa
            </a>
          </div>

          <div>
            <h4>Horários</h4>
            <p>Check-in (à partir de): {checkInDate}</p>
            <p>Check-out (até): {checkOutDate}</p>
          </div>

          <div>
            <h4>Como realizar o check-in</h4>
            <p>
              O check-in será realizado pelo Paulo, meu coanfitrião, onde ele
              irá recebê-los e entregar as chaves. <br />
              Para isso, é{' '}
              <strong>
                muito importante que seja comunicado com ele o horário da sua
                chegada
              </strong>
              . Número de contato do Paulo:{' '}
              <a className='underline' href='tel:+5528999849054'>
                +55 28 99984-9054
              </a>
            </p>
          </div>
          <div>
            <h4>Como realizar o check-out</h4>
            <p>
              O coanfitrião também será o responsável pelo check-out, portanto é
              necessário que comuniquem o horário de saída para que seja
              entregue as chaves.
            </p>
          </div>
        </section>
        <section>
          <div>
            <h3 className='text-lg font-black'>Regras</h3>
            <Separator />
          </div>
          <ul>
            <li>
              O apartamento possui 1 (uma) vaga de garagem e deve ser utilizada
              apenas a vaga do apartamento, a vaga 201.
            </li>
            <li>
              É proibida a entrada de pets sem o prévio acordo com o anfitrião.
            </li>
            <li>
              É proibida a estadia de mais pessoas do que a acordada com o
              anfitrião.
            </li>
            <li>Preze por sempre manter as portas do condomínios fechadas.</li>
            <li>
              Caso quebre ou encontre algo quebrado/defeituoso, comunique
              imediatamente o anfitrião e/ou coanfitrião.
            </li>
          </ul>
        </section>
        <section>
          <div>
            <h3 className='text-lg font-black'>Instruções extras</h3>
            <Separator />
          </div>
          <div>
            <h4>Sobre a fechadura eletrônica</h4>
            <div>
              <p>
                A fechadura eletrônica é muito segura e prática, porém fique
                atento às seguintes observações:
              </p>
              <ul>
                <li>
                  Não é necessário trancar a porta do lado de fora, ela se
                  tranca sozinha.
                </li>
                <li>
                  Do lado de dentro, para reforçar a tranca, levemente faça o
                  movimento contrário de abrir a maçaneta, ou seja, levante ela.
                  Isso irá trancar reforçar a tranca da porta.
                </li>
                <li>
                  Para evitar transtornos, não utilize o pequeno
                  &quot;interruptor&quot; em baixo da maçaneta do lado de
                  dentro, mantenha sempre ele pro ícone de cadeado destrancado.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
