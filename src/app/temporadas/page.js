'use client';

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import '../styles/temporadas.css';

const Temporadas = () => {
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
        temp1: "../img/Temp1.png",
        temp2: "../img/Temp2.webp",
        temp3: "../img/Temp3.webp",
        temp4: "../img/Temp4.webp",   
        temp5: "../img/Temp5.webp",   
        temp6: "../img/Temp6.webp",   
        temp7: "../img/Temp7.webp",   
        temp8: "../img/Temp8.webp",   
        temp9: "../img/Temp9.webp",   
        temp10: "../img/Temp10.png",   
        temp11: "../img/Temp11.webp",   
        temp12: "../img/Temp12.webp",   
        temp13: "../img/Temp13.webp",   
        temp14: "../img/Temp14.webp",   
        temp15: "../img/Temp15.webp",   
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

                    <div className="sidebar-item">
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
                        <span onClick={() => router.push('/temporadas')}>Seasons</span>
                        <span>Season 1</span>
                        <span>Season 2</span>
                        <span>Season 3</span>
                        <span>Season 4</span>
                        <span>Season 5</span>
                        <span>Season 6</span>
                        <span>Season 7</span>
                        <span>Season 8</span>
                        <span>Season 9</span>
                        <span>Season 10</span>
                        <span>Season 11</span>
                        <span>Season 12</span>
                        <span>Season 13</span>
                        <span>Season 14</span>
                        <span>Season 15</span>
                        
                    </div>
                    )}

                    <div className="sidebar-item">
                    <img className="Logofavoritos" src={imagenes.favoritos} alt="icono menu"/>  
                    <span> Favorites</span>
                    </div>


                    <span className="section-title">GENERAL</span>
                    
                    <div className="sidebar-item" onClick={() => setSubmenuAbierto(submenuAbierto === "settings" ? "" : "settings")}>
                    <img className="Logoconfiguracion" src={imagenes.configuracion} alt="icono menu"/>  
                    <span>Settings</span>
                    <span className="arrow">{submenuAbierto === "settings" ? "▲" : "▼"}</span>
                    </div>
                    {submenuAbierto === "settings" && (
                    <div className="submenu">
                        <span>Sub Item 01</span>
                        <span>Sub Item 02</span>
                    </div>
                    )}

                    <div className="sidebar-item">
                    <img className="Logosalir" src={imagenes.salir} alt="icono menu" onClick={() => router.push('/inicio')}/>  
                    <span onClick={() => router.push('/inicio') }>Log out</span>
                    </div>

                    <span className="section-title2">USER</span>
                    <div className="sidebar-item user">
                         <img className="logoU" src={imagenes.user} alt="icono menu"/>  
                        <span className="name-user">Raquel Amezcua</span>
                    </div>
                </div>
                )}

                
                
                <h2 className="titulo-temporadas">Season List</h2>
                
                <div className="cuadro-temporadas">
                     <img className="Temporada1" src={imagenesTemporadas.temp1} alt="icono menu" onClick={() => router.push('/inicio')}/>  
                     <img className="Temporada2" src={imagenesTemporadas.temp2} alt="icono menu" onClick={() => router.push('/inicio')}/>  
                     <img className="Temporada3" src={imagenesTemporadas.temp3} alt="icono menu" onClick={() => router.push('/inicio')}/>  
                     <img className="Temporada4" src={imagenesTemporadas.temp4} alt="icono menu" onClick={() => router.push('/inicio')}/>  
                     <img className="Temporada5" src={imagenesTemporadas.temp5} alt="icono menu" onClick={() => router.push('/inicio')}/>  

                     <img className="Temporada6" src={imagenesTemporadas.temp6} alt="icono menu" onClick={() => router.push('/inicio')}/>  
                     <img className="Temporada7" src={imagenesTemporadas.temp7} alt="icono menu" onClick={() => router.push('/inicio')}/>  
                     <img className="Temporada8" src={imagenesTemporadas.temp8} alt="icono menu" onClick={() => router.push('/inicio')}/>  
                     <img className="Temporada9" src={imagenesTemporadas.temp9} alt="icono menu" onClick={() => router.push('/inicio')}/>  
                     <img className="Temporada10" src={imagenesTemporadas.temp10} alt="icono menu" onClick={() => router.push('/inicio')}/>  

                     <img className="Temporada11" src={imagenesTemporadas.temp11} alt="icono menu" onClick={() => router.push('/inicio')}/>  
                     <img className="Temporada12" src={imagenesTemporadas.temp12} alt="icono menu" onClick={() => router.push('/inicio')}/>  
                     <img className="Temporada13" src={imagenesTemporadas.temp13} alt="icono menu" onClick={() => router.push('/inicio')}/>  
                     <img className="Temporada14" src={imagenesTemporadas.temp14} alt="icono menu" onClick={() => router.push('/inicio')}/>  
                     <img className="Temporada15" src={imagenesTemporadas.temp15} alt="icono menu" onClick={() => router.push('/inicio')}/>        
                </div>

        </div>
    )
}

export default Temporadas;
