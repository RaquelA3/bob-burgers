'use client'; 

import { useRouter } from 'next/navigation'; 
import '../styles/inicio.css'; 


const Inicio = () => {
  const router = useRouter();  // Sirve para navegar entre las paginas

  const imagenes = {
    iconotemporada: "../img/icono2.png",
  };

  return (
    <div className='bob-container'>
      <h1 className='titulo-principal'>BOB BURGERS</h1>
      <link rel="icon" href="/img/logo.ico" />
      <div className='form-temporada'>
        <img className='icon' src={imagenes.iconotemporada} alt='icono temporada'></img>
        <span className='temp'>14 temporada</span>
      </div>
      
      <div className='form-group'>
         <label className='registro'>Registrarse</label> 
         <label className='inicio'>Iniciar sesión</label> 
      </div>
     

      <div className='boton-container'>
      <button className='botonComenzar' 
        onClick={() => router.push('../registro/page.js')}  
      >
         Comenzar a ver
      </button>
      </div>
    
    </div>
  );
};

export default Inicio;
