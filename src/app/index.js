import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Página de Inicio</h1>
      <nav>
        <ul>
          <li><Link href="/inicio"> Inicio</Link></li>
        </ul>
      </nav>
    </div>
  );
}
