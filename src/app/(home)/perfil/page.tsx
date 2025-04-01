import { DatosRandom } from '@/components/sobre-mi/datos-random/DatosRandom';
import { SobreMi } from '@/components/sobre-mi/SobreMi';
import StyleContainer from '@/components/ui/contenedor/StyleContainer';
import { Titulo } from '@/components/ui/titulo/Titulo';

export default function PerfilPage() {
  return (
    <StyleContainer>
      <Titulo
        styles='text-center text-4xl text-gray-800 font-semibold font-sans'
        title='Gustos, intereses y actividades.'
      />
      <DatosRandom />
      <SobreMi />
    </StyleContainer>
  );
}
