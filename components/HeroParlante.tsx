import Image from 'next/image';
import { EquipoParlante, HeroProps } from '../types/Product';

const HeroParlante = ({ equipo }: HeroProps) => {
  const imagenRuta = equipo ? '/images/' + equipo.marca + '_' + equipo.modelo + '.png' : '';
  return (
    <div className='hero flex flex-col md:flex-row items-center justify-center p-4'>
      <div className='md:mr-4 mb-4 md:mb-0'>
        {equipo && (
          <Image
            src={imagenRuta} // Usa el campo correspondiente del objeto equipo
            alt='Product Image' 
            width={200} 
            height={200}
            className=''
          />
        )}
      </div>
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h1 className="hero__subtitle mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Equipo
        </h1>
        <ul className='hero__subsubtitle list-none p-0'>
          {equipo && (
            <>
              <li className='mb-2 grid grid-cols-1 md:grid-cols-2'>
                <span className='font-bold mr-2'>ID:</span> <span>{equipo.id}</span>
              </li>
              <li className='mb-2 grid grid-cols-1 md:grid-cols-2'>
                <span className='font-bold mr-2'>Tipo:</span> <span>{equipo.tipo}</span>
              </li>
              <li className='mb-2 grid grid-cols-1 md:grid-cols-2'>
                <span className='font-bold mr-2'>Marca:</span> <span>{equipo.marca}</span>
              </li>
              <li className='mb-2 grid grid-cols-1 md:grid-cols-2'>
                <span className='font-bold mr-2'>Modelo:</span> <span>{equipo.modelo}</span>
              </li>
              <li className='mb-2 grid grid-cols-1 md:grid-cols-2'>
                <span className='font-bold mr-2'>Ubicación:</span> <span>{equipo.ubicacion}</span>
              </li>
              <li className='mb-2 grid grid-cols-1 md:grid-cols-2'>
                <span className='font-bold mr-2'>Potencia:</span> <span>{equipo.potencia}</span>
              </li>
              <li className='mb-2 grid grid-cols-1 md:grid-cols-2'>
                <span className='font-bold mr-2'>Cantidad de Altavoces:</span> <span>{equipo.cantidadAltavoces}</span>
              </li>
              <li className='mb-2 grid grid-cols-1 md:grid-cols-2'>
                <span className='font-bold mr-2'>Bluetooth:</span> <span>{equipo.bluetooth ? 'Sí' : 'No'}</span>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default HeroParlante;
