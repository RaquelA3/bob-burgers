import dynamic from 'next/dynamic';

const ReproductorV = dynamic(() => import('./ReproductorV'), { ssr: false });

export default function Page() {
  return <ReproductorV />;
}
