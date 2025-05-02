import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Página de Inicio</h1>
      <nav>
        <ul>
          <li><Link href="/inicio"> Inicio</Link></li>
          <li><Link href="/base"> Base</Link></li>
          <li><Link href="/reproductorvideo"> ReproductorV</Link></li>
          <li><Link href="/temporadas"> Temporadas</Link></li>
          <li><Link href="/detallesTemporada/Temporada1"> Temporada1</Link></li>
          <li><Link href="/detallesTemporada/Temporada2"> Temporada2</Link></li>
          <li><Link href="/detallesTemporada/Temporada3"> Temporada3</Link></li>
          <li><Link href="/detallesTemporada/Temporada4"> Temporada4</Link></li>
          <li><Link href="/detallesTemporada/Temporada5"> Temporada5</Link></li>

          <li><Link href="/detallesTemporada/Temporada6"> Temporada6</Link></li>
          <li><Link href="/detallesTemporada/Temporada7"> Temporada7</Link></li>
          <li><Link href="/detallesTemporada/Temporada8"> Temporada8</Link></li>
          <li><Link href="/detallesTemporada/Temporada9"> Temporada9</Link></li>
          <li><Link href="/detallesTemporada/Temporada10"> Temporada10</Link></li>

          <li><Link href="/detallesTemporada/Temporada11"> Temporada11</Link></li>
          <li><Link href="/detallesTemporada/Temporada12"> Temporada12</Link></li>
          <li><Link href="/detallesTemporada/Temporada13"> Temporada13</Link></li>
          <li><Link href="/detallesTemporada/Temporada14"> Temporada14</Link></li>
          <li><Link href="/detallesTemporada/Temporada15"> Temporada15</Link></li>
        </ul>
      </nav>
    </div>
  );
}
