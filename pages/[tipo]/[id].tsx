import { GetServerSideProps, GetServerSidePropsResult, GetServerSidePropsContext } from 'next';
import axios from 'axios';
import { HeroParlante } from "@/components";
import { EquipoParlante } from '../../types/Product';
import { EquipoParlanteProps } from '../../types/Product';
import Image from 'next/image';
import '../../app/globals.css';

const ProductPage = ({ equipo }: EquipoParlanteProps) => {
  return (
    <main className='flex items-center justify-center min-h-screen'>
      <HeroParlante equipo={equipo} />
    </main>
  );
};

export default ProductPage;

export const getServerSideProps: GetServerSideProps<EquipoParlanteProps> = async ({ query }): Promise<GetServerSidePropsResult<EquipoParlanteProps>> => {
  console.log('query:', query);
  const id = query.id as string; // Asegúrate de que id sea de tipo string
  const tipo = query.tipo as string; // Asegúrate de que tipo sea de tipo string
  try {
    // Hacer una llamada al backend con el ID del producto
    const response = await axios.get(`https://qrinventory-production.up.railway.app/api/post/${tipo}/${id}`);
    const equipo: EquipoParlante = response.data;
  
    // Pasar los datos del producto como props a la página
    return {
      props: {
        equipo,
      },
    };
  } catch (error) {
    console.error('Error fetching product data:', error);
    return {
      props: {
        equipo: null, // Maneja errores aquí
      },
    };
  }
};
