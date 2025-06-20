import { Suspense } from 'react';
import ReproductorV from '@/components/ReproductorV'; // O donde tengas tu componente

export default function Page() {
  return (
    <Suspense fallback={<p>Cargando reproductor...</p>}>
      <ReproductorV />
    </Suspense>
  );
}
