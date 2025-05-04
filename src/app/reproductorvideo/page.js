'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import '../styles/reproductorvideo.css';
import { useState, useEffect } from "react";
import React from 'react';

const ReproductorV = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const initialSeason = searchParams.get('season') || '';
    const initialEpisode = searchParams.get('episode') || '';

    const [menuAbierto, setMenuAbierto] = useState(false);
    const [submenuAbierto, setSubmenuAbierto] = useState("");
    const [season, setSeason] = useState(initialSeason);
    const [episode, setEpisode] = useState(initialEpisode);
    const [videoId, setVideoId] = useState('');
    const [loading, setLoading] = useState(true);  // Estado para saber si el video está cargado

    const imagenes = {
        iconomenu:  "../img/icon-menuDesplegable.png",
        tituloE: "../img/tituloEncabezado.webp",
        user: "../img/foto-user.png",
        logomenu: "../img/logo.ico",
        home: "../img/home.png",
        lista: "../img/lista.png",
        favoritos: "../img/favoritos.png",
        configuracion: "../img/configuracion.png",
        salir: "../img/salir.png"
    };


    //Esta parte es para poner el ID de los videos de Drive
    const videoLinks = {
        //Temporada 1
        1: {
            1: '1JwaFNARqgBnmkZjjT-agzw5EyB0sBY-t', 
            2: '1R-i7XpqKZt19bjMZi1lQYlHABPD9_9dp',
            3: '1v_2QzQh8q3ivwH3wJG0DMNuFQ0gZxntW',
        },

        //2 Temporada
        2: {
            1: '1JwaFNARqgBnmkZjjT-agzw5EyB0sBY-t', 
            2: '1R-i7XpqKZt19bjMZi1lQYlHABPD9_9dp',
            3: '1v_2QzQh8q3ivwH3wJG0DMNuFQ0gZxntW',
        },

        3: {
            1: '1JwaFNARqgBnmkZjjT-agzw5EyB0sBY-t', 
            2: '1R-i7XpqKZt19bjMZi1lQYlHABPD9_9dp',
            3: '1v_2QzQh8q3ivwH3wJG0DMNuFQ0gZxntW',
        },

        4: {
            1: '1JwaFNARqgBnmkZjjT-agzw5EyB0sBY-t', 
            2: '1R-i7XpqKZt19bjMZi1lQYlHABPD9_9dp',
            3: '1v_2QzQh8q3ivwH3wJG0DMNuFQ0gZxntW',
        },

        5: {
            1: '1JwaFNARqgBnmkZjjT-agzw5EyB0sBY-t', 
            2: '1R-i7XpqKZt19bjMZi1lQYlHABPD9_9dp',
            3: '1v_2QzQh8q3ivwH3wJG0DMNuFQ0gZxntW',
        },

        6: {
            1: '1JwaFNARqgBnmkZjjT-agzw5EyB0sBY-t', 
            2: '1R-i7XpqKZt19bjMZi1lQYlHABPD9_9dp',
            3: '1v_2QzQh8q3ivwH3wJG0DMNuFQ0gZxntW',
        },

        7: {
            1: '1JwaFNARqgBnmkZjjT-agzw5EyB0sBY-t', 
            2: '1R-i7XpqKZt19bjMZi1lQYlHABPD9_9dp',
            3: '1v_2QzQh8q3ivwH3wJG0DMNuFQ0gZxntW',
        },

        8: {
            1: '1JwaFNARqgBnmkZjjT-agzw5EyB0sBY-t', 
            2: '1R-i7XpqKZt19bjMZi1lQYlHABPD9_9dp',
            3: '1v_2QzQh8q3ivwH3wJG0DMNuFQ0gZxntW',
        },

        9: {
            1: '1JwaFNARqgBnmkZjjT-agzw5EyB0sBY-t', 
            2: '1R-i7XpqKZt19bjMZi1lQYlHABPD9_9dp',
            3: '1v_2QzQh8q3ivwH3wJG0DMNuFQ0gZxntW',
        },

        10: {
            1: '1JwaFNARqgBnmkZjjT-agzw5EyB0sBY-t', 
            2: '1R-i7XpqKZt19bjMZi1lQYlHABPD9_9dp',
            3: '1v_2QzQh8q3ivwH3wJG0DMNuFQ0gZxntW',
        },

        11: {
            1: '1JwaFNARqgBnmkZjjT-agzw5EyB0sBY-t', 
            2: '1R-i7XpqKZt19bjMZi1lQYlHABPD9_9dp',
            3: '1v_2QzQh8q3ivwH3wJG0DMNuFQ0gZxntW',
        },

        12: {
            1: '1JwaFNARqgBnmkZjjT-agzw5EyB0sBY-t', 
            2: '1R-i7XpqKZt19bjMZi1lQYlHABPD9_9dp',
            3: '1v_2QzQh8q3ivwH3wJG0DMNuFQ0gZxntW',
        },

        13: {
            1: '1JwaFNARqgBnmkZjjT-agzw5EyB0sBY-t', 
            2: '1R-i7XpqKZt19bjMZi1lQYlHABPD9_9dp',
            3: '1v_2QzQh8q3ivwH3wJG0DMNuFQ0gZxntW',
        },

        14: {
            1: '1JwaFNARqgBnmkZjjT-agzw5EyB0sBY-t', 
            2: '1R-i7XpqKZt19bjMZi1lQYlHABPD9_9dp',
            3: '1v_2QzQh8q3ivwH3wJG0DMNuFQ0gZxntW',
        },

        
        15: {
            1: '1JwaFNARqgBnmkZjjT-agzw5EyB0sBY-t', 
            2: '1R-i7XpqKZt19bjMZi1lQYlHABPD9_9dp',
            3: '1v_2QzQh8q3ivwH3wJG0DMNuFQ0gZxntW',
        }

    };

    //Esto busca el video, a travez de la temporada y el episodio,
    //si esta disponible lo pone, sino te manda un alert
    const handlePlay = () => {
        const id = videoLinks[season]?.[episode];
        if (id) {
            setVideoId(id);
            setLoading(true); // Reinicia el estado de carga
        } else {
            alert("El video no está disponible aún.");
            setVideoId('');
        }
    };


    // Función para hacer que el video se cargue antes de mostrarlo
    useEffect(() => {
        if (season && episode) {
            handlePlay();
        }
    }, [season, episode]);

    useEffect(() => {
        if (videoId) {
            const iframe = document.createElement('iframe');
            iframe.src = `https://drive.google.com/file/d/${videoId}/preview`;
            iframe.style.display = 'none';
            document.body.appendChild(iframe);
            iframe.onload = () => {
                setLoading(false);
                document.body.removeChild(iframe); // Limpieza del iframe oculto
            };
        }
    }, [videoId]);

    return (
         <div className='bob-container3'>
             <link rel='icon' href='/img/logo.ico'/>
             <header className='encabezado'>
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
                        <span onClick={() => router.push('/detallesTemporada/Temporada15')}>Season 15</span>  
                    </div>
                    )}

                    <div className="sidebar-item">
                    <img className="Logofavoritos" src={imagenes.favoritos} alt="icono menu"/>  
                    <span> Favorites</span>
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
                        <span className="name-user">Raquel Amezcua</span>
                    </div>
                </div>
            )}
            
            <div className='episodio-group'>
                <h2 className='titulo'>Bob Burgers</h2>

                <div className='cuadro-video'>
                {videoId ? (
                    loading ? (
                        <p>Cargando video...</p>  // Mostrar mensaje mientras carga
                    ) : (
                        <iframe className='detalles-video'
                            src={`https://drive.google.com/file/d/${videoId}/preview`}
                            title="Google Drive Video"
                            allow="autoplay; fullscreen" 
                            allowFullScreen
                        />
                    )
                    ) : (
                    <div className='minititulo'>
                        <span>Selecciona temporada y episodio</span>
                    </div>
                    )}
                </div>

                <div className='botones'>
                    <select value={season} onChange={(e) => setSeason(e.target.value)}>
                        <option  value="">Temporada</option>
                        {[...Array(15)].map((_, i) => (
                            <option key={i + 1} value={i + 1}>Temporada {i + 1}</option>
                         ))}
                    </select>

                    <select value={episode} onChange={(e) => setEpisode(e.target.value)}>
                        <option value="">Episodio</option>
                        {[...Array(25)].map((_, i) => (
                            <option key={i + 1} value={i + 1}>Episodio {i + 1}</option>
                        ))}
                    </select>

                    <button className='boton-Go' onClick={handlePlay}>Go</button>
                </div>
            </div>  

         </div>
    )
}

export default ReproductorV;
