'use client';

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import '../styles/base.css';

const Base = () => {
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
        salir: "../img/salir.png",
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

    const keys = Object.keys(imagenesTemporadas);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(4);

    // Detectar pantalla para cambiar cantidad de imágenes visibles
    useEffect(() => {
        const handleResize = () => {
            setVisibleCount(window.innerWidth <= 768 ? 2 : 4);
        };

        handleResize(); 
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Avanza una imagen cada 5 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % keys.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [keys.length]);

    const getVisibleImages = () => {
        return Array.from({ length: visibleCount }, (_, i) => {
            const index = (currentIndex + i) % keys.length;
            return imagenesTemporadas[keys[index]];
        });
    };
    

    /* Esto es para mostrar 6 episodios en celular y 5 en compu */
    const [episodiosAMostrar, setEpisodiosAMostrar] = useState(5);
    const [mounted, setMounted] = useState(false); 

    useEffect(() => {
    setMounted(true); // <- Solo montar en el cliente
    const handleResize = () => {
        setEpisodiosAMostrar(window.innerWidth <= 768 ? 6 : 5);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    }, []);


    return (
        <div className="bob-container2">
            <link rel="icon" href="/img/logo.ico" />
            <header className="encabezado">
                <img className="menu" src={imagenes.iconomenu} alt="icono menu" onClick={() => setMenuAbierto(!menuAbierto)}/>  
                <img className="tituloE" src={imagenes.tituloE} alt="tituloE" onClick={() => router.push('/inicio')} />  
                <img className="user" src={imagenes.user} alt="foto usuario" onClick={() => router.push('/inicio')}/>  
            </header>

           {/*  Esto es del menu menu desplegable */}
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


            {/* Carrusel de imagenes de cada temporada con links */}
            <div className="carrusel-container">
                {getVisibleImages().map((src, i) => {
                    const realIndex = currentIndex + i; // índice real de la imagen
                    return (
                        <img
                            key={realIndex}
                            src={src}
                            alt={`Temporada ${realIndex + 1}`}
                            className="carrusel-img"
                            onClick={() => router.push(`/detallesTemporada/Temporada${realIndex + 1}`)}
                        />
                    );
                })}
            </div>


            {mounted && (
                <div className="episodios">
                    {[...Array(episodiosAMostrar)].map((_, index) => (
                    <div className="episodio" key={index}>
                        <label>Episode {index + 1}</label>
                        {index === 0 ? (
                        <a
                            /* href="https://drive.google.com/file/d/1_ve0IHgyx5QFII3NYjXw-67ffyx400u1/view?usp=sharing" */
                            target="_blank"
                            rel="noopener noreferrer"
                        > 
                            <img className="episodioG" src={imagenes.iconEpisodio} alt={`Episodio ${index + 1}`} onClick={() => router.push('/reproductorvideo')}/>
                        </a>


                        ) : index === 1 ? (
                        <a
                           /*  href="https://drive.google.com/file/d/1R-i7XpqKZt19bjMZi1lQYlHABPD9_9dp/view?usp=sharing" */
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img className="episodioG" src={imagenes.iconEpisodio} alt={`Episodio ${index + 1}`} onClick={() => router.push('/reproductorvideo')}/>
                        </a>

                        ) : index === 2 ? (
                        <a
                            /* href="https://drive.google.com/file/d/1v_2QzQh8q3ivwH3wJG0DMNuFQ0gZxntW/view?usp=sharing" */
                            target="_blank"
                            rel="noopener noreferrer"
                         >
                            <img className="episodioG" src={imagenes.iconEpisodio} alt={`Episodio ${index + 1}`} onClick={() => router.push('/reproductorvideo')}/>
                        </a>

                        ) : index === 3 ? (
                        <a
                          /*   href="https://drive.google.com/file/d/1JwaFNARqgBnmkZjjT-agzw5EyB0sBY-t/view?usp=sharing" */
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img className="episodioG" src={imagenes.iconEpisodio} alt={`Episodio ${index + 1}`} onClick={() => router.push('/reproductorvideo')}/>
                        </a>

                        ) : index === 4 ? (
                        <a
                            /* href="https://drive.google.com/file/d/18sP_92PnvX8y7rUa4mOYv97syDCcYlXA/view?usp=sharing" */
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img className="episodioG" src={imagenes.iconEpisodio} alt={`Episodio ${index + 1}`} onClick={() => router.push('/reproductorvideo')}/>
                        </a>

                        ) : index === 5 ? (
                        <a
                           /*  href="https://drive.google.com/file/d/1zZaNn0e0l5O2_Ln7OUefk_vslh_mwueZ/view?usp=sharing" */
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img className="episodioG" src={imagenes.iconEpisodio} alt={`Episodio ${index + 1}`} onClick={() => router.push('/reproductorvideo')}/>
                        </a>

                        ) : (
                        <img
                            className="episodioG"
                            src={imagenes.iconEpisodio}
                            alt={`Episodio ${index + 1}`}
                            onClick={() => router.push('/reproductorvideo')}
                        />
                        )}
                    </div>
                    ))}
                </div>
                )}
            
        </div>  
    );
};

export default Base;
