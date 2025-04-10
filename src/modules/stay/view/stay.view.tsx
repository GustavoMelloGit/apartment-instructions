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
    <div className='space-y-4 pb-10'>
      <div className='space-y-2'>
        <h1 className='text-lg'>
          Olá, <b>{stay.guest.name}</b>
        </h1>
        <h2>
          Que bom ter você com a gente! Para tornar sua estadia ainda mais
          tranquila, reunimos aqui algumas informações importantes:
        </h2>
      </div>

      <div className='text-sm space-y-3 [&>section]:space-y-2 [&_h4]:font-bold [&_h4]:text-base [&_.title]:flex [&_.title]:gap-1 [&_.title]:items-center'>
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
              O co-anfitrião Paulo fará seu check-in, entregando as chaves do
              condomínio.
              <br />
              Por isso,{' '}
              <strong>avise o horário da sua chegada com antecedência.</strong>
              <br />
              Número de contato do Paulo:{' '}
              <a className='underline' href='tel:+5528999849054'>
                +55 28 99984-9054
              </a>
            </p>
            <div className='ring-2 flex gap-2 p-2 rounded-sm mt-1 ring-blue-800 bg-blue-500 text-white'>
              <Info size={16} className='min-w-4 mt-1' />
              <p>
                Sua senha da fechadura eletrônica é:{' '}
                <strong>{stay.password}</strong>. <br />
                Ela é exclusiva da sua estadia e será desativada logo após o
                check-out.
              </p>
            </div>
          </div>
          <div>
            <h4>Como realizar o check-out</h4>
            <p>
              O co-anfitrião também fará o check-out. Avise o horário da saída
              para combinarem a devolução das chaves.
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
          <ul className='space-y-2'>
            <li>🚗 Use apenas a vaga 201 na garagem.</li>
            <li>🐶 Pets só com autorização prévia do anfitrião.</li>
            <li>
              👥 Apenas os hóspedes combinados devem permanecer no imóvel.
            </li>
            <li>🔐 Mantenha as portas do condomínio sempre fechadas.</li>
            <li>
              🔧 Se algo estiver quebrado ou apresentar problemas, informe
              imediatamente.
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
          <div className='space-y-2'>
            <h4>Fechadura eletrônica</h4>
            <div>
              <ul className='space-y-2'>
                <li>
                  <b>Digite a senha:</b> toque na parte superior da fechadura
                  até os números acenderem. Em seguida, insira sua senha e
                  aperte &quot;#&quot;.
                </li>
                <iframe
                  className='w-full aspect-video'
                  src='https://www.youtube.com/embed/Y8eaU1zkkB8'
                  title='Tuya APP WIFI Fechadura Digital de Sobrepor, Fechadura Eletronica Fechaduras Digital de Embutir'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                  referrerPolicy='strict-origin-when-cross-origin'
                  allowFullScreen
                ></iframe>
                <li>
                  <b>Evite problemas:</b> mantenha o pequeno
                  &quot;interruptor&quot; abaixo da maçaneta (lado de dentro)
                  sempre na posição para baixo.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
