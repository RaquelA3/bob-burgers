import { useRouter } from 'next/navigation'; 
import '/src/app/styles/inicio.css';
import Image from 'next/image'; 

export default Inicio() {
  const router = useRouter();  // Sirve para navegar entre las páginas

  const imagenes = {
    iconotemporada: "../img/icono2.png",
  };

  return (
    <div className='bob-container'>
      <h1 className='titulo-principal'>BOB BURGERS</h1>

      <div className='form-temporada'>
        <Image
          className='icon'
          src={imagenes.iconotemporada}
          alt='icono temporada'
          width={50}   // Asegúrate de poner el tamaño adecuado
          height={50}  // Asegúrate de poner el tamaño adecuado
        />
        <span className='temp'>14 temporada</span>
      </div>
      
      <div className='form-group'>
         <label className='registro'>Registrarse</label> 
         <label className='inicio'>Iniciar sesión</label> 
      </div>
      <div className='boton-container'>
        <button className='botonComenzar' 
          onClick={() => router.push('/base')}  
        >
           Comenzar a ver
        </button>
      </div>
    
    </div>
  );
}

