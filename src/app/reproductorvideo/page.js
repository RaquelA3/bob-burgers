import React, { Suspense } from 'react';
import ReproductorV from './ReproductorV';

export default function Page() {
  return (
    <Suspense fallback={<p>Cargando reproductor...</p>}>
      <ReproductorV />
    </Suspense>
  );
}
