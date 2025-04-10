import { Separator } from '@/components/ui/separator';
import { Info, MapPinned, ScrollText } from 'lucide-react';
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

      <div className='text-sm space-y-3 [&>section]:space-y-2 [&_h4]:font-bold [&_h4]:text-md [&_.title]:flex [&_.title]:gap-1 [&_.title]:items-center'>
        <section>
          <div>
            <div className='title'>
              <MapPinned size={18} />
              <h3 className='text-lg font-black'>Sobre como chegar</h3>
            </div>
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
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d932.2379714097891!2d-40.62667!3d-20.8336493!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb8e2a2fdfd4037%3A0x279932b7f21eb269!2sR.%20Salma%20Souki%20Oliveira%2C%20707-639%20-%20Guanabara%2C%20Anchieta%20-%20ES%2C%2029230-000!5e0!3m2!1spt-BR!2sbr!4v1744243351464!5m2!1spt-BR!2sbr'
              className='border-none w-full mt-1 mb-4'
              allowFullScreen={false}
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
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
              irá recebê-los e entregar as chaves do condomínio.
              <br />
              Para isso, é{' '}
              <strong>
                muito importante que seja comunicado com ele o horário da sua
                chegada
              </strong>
              . Número de contato do Paulo:{' '}
              <a className='underline' href='tel:+5528999849054'>
                +55 28 99984-9054
              </a>
              .
              <br />A sua senha para entrar no apartamento é{' '}
              <strong>{stay.password}</strong>. <br />
              <br />
              Não se preocupe, essa senha é gerada para cada inquilino e deixa
              de funcionar imediatamente após o horário de check-out do mesmo.
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
            <div className='title'>
              <ScrollText size={18} />
              <h3 className='text-lg font-black'>Regras</h3>
            </div>
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
            <div className='title'>
              <Info size={18} />
              <h3 className='text-lg font-black'>Instruções extras</h3>
            </div>
            <Separator />
          </div>
          <div>
            <h4>Fechadura eletrônica</h4>
            <div>
              <p>
                A fechadura eletrônica é muito segura e prática e para
                utilizá-la da forma correta, fique atento às seguintes
                observações:
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
