'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";
import '../styles/configuracion.css';

const Configuracion = () => {
    const router = useRouter();
    const [menuAbierto, setMenuAbierto] = useState(false);
    const [submenuAbierto, setSubmenuAbierto] = useState("");

    const imagenes = {
        iconomenu:  "../img/icon-menuDesplegable.png",
        tituloE: "../img/tituloEncabezado.webp",
        user: "../img/foto-user.png", 
        iconEpisodio: "../img/episodioGeneral.jpg",
        logomenu: "../img/logo.ico",
        home: "../img/home.png",
        lista: "../img/lista.png",
        favoritos: "../img/favoritos.png",
        configuracion: "../img/configuracion.png",
        salir: "../img/salir.png"
    };

    const imagenesTemporadas = {
        config1: "../img/config-louis.png",
        config2: "../img/config-Tina.png",
        config3: "../img/config-Gene.png",
        config4: "../img/config-Linda.png",
        config5: "../img/config-Bob.png",
        config6: "../img/config-Teddy.png",
        config7: "../img/config-Gene2.png",
        config8: "../img/config-Louis2.png",
        config9: "../img/config-Mort.png",
        config10: "../img/config-Burger.png",
    };


    return (
        <div className="bob-container4">
             <link rel="icon" href="/img/logo.ico"></link>
             <header className="encabezado">
                 <img className="menu" src={imagenes.iconomenu} alt="icono menu" onClick={() => setMenuAbierto(!menuAbierto)}/>  
                 <img className="tituloE" src={imagenes.tituloE} alt="tituloE" onClick={() => router.push('/inicio')} />  
                 <img className="user" src={imagenes.user} alt="foto usuario" onClick={() => router.push('/inicio')}/>  
             </header>

             {/* Esto es del menu desplegable */}
             {menuAbierto && (
                <div className="sidebar">
                    <div className="sidebar-header">
                    <img className="Logomenu" src={imagenes.logomenu} alt="icono menu"/>  
                    <h2 className="titulo-menuD">Bob Burgers</h2>  
                    <button className="close-btn" onClick={() => setMenuAbierto(false)}>
                       <img className="LogoM2" src={imagenes.iconomenu} alt="icono menu"/>  
                    </button>
                    </div>

                    <span className="section-title">MENU</span>

                    <div className="sidebar-item" onClick={() => router.push('/base') }>
                    <img className="Logohome" src={imagenes.home} alt="icono menu" onClick={() => router.push('/base') }/>  
                    <span className="Home" onClick={() => router.push('/base') }> Home</span>
                    </div>

                    <div className="sidebar-item" onClick={() => setSubmenuAbierto(submenuAbierto === "table" ? "" : "table")}>
                    <img className="Logolista" src={imagenes.lista} alt="icono menu"/>  
                    <span> Season list</span>
                    <span className="arrow">{submenuAbierto === "table" ? "▲" : "▼"}</span>
                    </div>
                    {submenuAbierto === "table" && (
                    <div className="submenu">
                       <span onClick={() => router.push('/temporadas')}>Seasons List</span>
                        <span onClick={() => router.push('/detallesTemporada/Temporada1')}>Season 1</span>
                        <span onClick={() => router.push('/detallesTemporada/Temporada2')}>Season 2</span>
                        <span onClick={() => router.push('/detallesTemporada/Temporada3')}>Season 3</span>
                        <span onClick={() => router.push('/detallesTemporada/Temporada4')}>Season 4</span>
                        <span onClick={() => router.push('/detallesTemporada/Temporada5')}>Season 5</span>
                        <span onClick={() => router.push('/detallesTemporada/Temporada6')}>Season 6</span>
                        <span onClick={() => router.push('/detallesTemporada/Temporada7')}>Season 7</span>
                        <span onClick={() => router.push('/detallesTemporada/Temporada8')}>Season 8</span>
                        <span onClick={() => router.push('/detallesTemporada/Temporada9')}>Season 9</span>
                        <span onClick={() => router.push('/detallesTemporada/Temporada10')}>Season 10</span>
                        <span onClick={() => router.push('/detallesTemporada/Temporada11')}>Season 11</span>
                        <span onClick={() => router.push('/detallesTemporada/Temporada12')}>Season 12</span>
                        <span onClick={() => router.push('/detallesTemporada/Temporada13')}>Season 13</span>
                        <span onClick={() => router.push('/detallesTemporada/Temporada14')}>Season 14</span>
                        <span onClick={() => router.push('/detallesTemporada/Temporada14')}>Season 15</span>        
                    </div>
                    )}

                    <div className="sidebar-item" onClick={() => router.push('/favoritos')}>
                        <img className="Logofavoritos" src={imagenes.favoritos} alt="icono menu"  onClick={() => router.push('/favoritos')}/>  
                        <span  onClick={() => router.push('/favoritos')}>Favorites</span>
                    </div>                  


                    <span className="section-title">GENERAL</span>
                    
                    <div className="sidebar-item" onClick={() => router.push('/configuracion')}>
                        <img className="Logoconfiguracion" src={imagenes.configuracion} onClick={() => router.push('/configuracion')} alt="icono menu"/>  
                        <span onClick={() => router.push('/configuracion')}>Settings</span>
                    </div>

                    <div className="sidebar-item" onClick={() => router.push('/inicio') }>
                    <img className="Logosalir" src={imagenes.salir} alt="icono menu" onClick={() => router.push('/inicio')}/>  
                    <span onClick={() => router.push('/inicio') }>Log out</span>
                    </div>

                    <span className="section-title2">USER</span>
                    <div className="sidebar-item user">
                         <img className="logoU" src={imagenes.user} alt="icono menu"/>  
                        <span className="name-user">Gandul</span>
                    </div>
                </div>
                )}

                <div className="cuadro-configuracion">
                <div className="titulo-configuracion">
                    <img className="imagen-configuracion" src={imagenesTemporadas.config6} alt="configuración" />
                    <h2 className="titulo-temporadas"></h2>
                    <p className="titulo-C">Settings</p>
                </div>
                <p className="sub1">Solo puede configurar su foto de perfil, por el momento.</p>
                <p className="sub2">Seleccione su nueva foto de perfil:</p>
                </div>


                <div className="cuadro-temporadas">
                     <img className="Temporada1" src={imagenesTemporadas.config1} alt="icono menu" />  
                     <img className="Temporada2" src={imagenesTemporadas.config2} alt="icono menu" />  
                     <img className="Temporada3" src={imagenesTemporadas.config3} alt="icono menu" />  
                     <img className="Temporada4" src={imagenesTemporadas.config4} alt="icono menu" />  
                     <img className="Temporada5" src={imagenesTemporadas.config5} alt="icono menu" />  

                     <img className="Temporada6" src={imagenesTemporadas.config6} alt="icono menu" />  
                     <img className="Temporada7" src={imagenesTemporadas.config7} alt="icono menu" />  
                     <img className="Temporada8" src={imagenesTemporadas.config8} alt="icono menu" />  
                     <img className="Temporada9" src={imagenesTemporadas.config9} alt="icono menu" />  
                     <img className="Temporada10" src={imagenesTemporadas.config10} alt="icono menu"/>  

                </div>

        </div>
    )
}

export default Configuracion;
