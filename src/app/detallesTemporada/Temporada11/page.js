'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";
import '../../styles/detallestemporada.css';

const detallesTemporada = () => {
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
    }

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
        <div className="bob-container5">
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
                        <span onClick={() => router.push('/detallesTemporada/Temporada15')}>Season 15</span>        
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

                    <div className="sidebar-item"  onClick={() => router.push('/inicio') }>
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


            <div className="contenedor-temporada">
                 <img className="imagenTemporada" src={imagenesTemporadas.temp11} alt="imagenT"/>  
                 
                 <div className="detalles-temporada">
                     <h1 className="titulo-serie">Bob Burgers</h1>
                     <h2 className="titulo-temporada">Temporada 11</h2>
                     <label className="descripcion-temporada">A tiny VS Code extension made up of a few commands that generate and insert lorem ipsum text into a text file. To use the extension, open the command palette (F1 or cmd/ctrl+shift+p, type "lorem ipsum" and select to insert either a line or paragraph.</label>

                        <div className="cuadro-episodiosTemporada">
                            <h2 className="episodiosTitulo">Episodios</h2>
                            {[
                                'Episode 1 "Sueña un pequeño Bob de Bob"',
                                'Episode 2 "Gusanos de la cría interna"',
                                'Episode 3 "Copa-Bob-bana"',
                                'Episode 4 "Heartbreak Hotel-oween"',
                                'Episode 5 "Cápsulas del tiempo rápido en la escuela Wagstaff"',
                                'Episode 6 "Bob Belcher y los niños terribles, horribles, no buenos, muy malos"',
                                'Episode 7 "Diarrea de un niño con caca"',
                                'Episode 8 "El Terminalador II: Terminales del Cariño"',
                                'Episode 9 "Mami Niño"',
                                'Episode 10 "Yate o Niza"',
                                'Episode 11 "Romance con la carne de res"',
                                'Episode 12 "Carta de troquel, o carta intentando"',
                                'Episode 13 "Una verdad incon-caballito"',
                                'Episode 14 "El Sr. Pedos Solitarios"',
                                'Episode 15 "Revolcado de Sheshank"',
                                'Episode 16 "Y Tu Tina También"',
                                'Episode 17 "Dedos sueltos"',
                                'Episode 18 "Una especie de doblador de guardabarros"',
                                'Episode 19 "Puente sobre el atribulado Rudy"',
                                'Episode 20 "Robar Revista-olias"',
                                'Episode 21 "Dime cosas tontas buenas"',
                                'Episode 22 "Vampire Disco Death Dance"',

                            ].map((ep, index) => (
                                <button
                                key={index}
                                className="episodioBtn"
                                onClick={() => router.push(`/reproductorvideo?season=11&episode=${index + 1}`)}
                                >
                                {ep}
                                </button>
                            ))}
                        </div>

                </div>
            </div>
            
        </div>
    )
}

export default detallesTemporada;
