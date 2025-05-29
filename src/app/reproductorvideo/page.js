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
    const [loading, setLoading] = useState(false);  // Estado para saber si el video está cargando

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

    const videoLinks = {
        1: {1: '1AsJLtXd8cgrXJ8TYGfZbF3K_vKvcw-yW', 2: '1R-i7XpqKZt19bjMZi1lQYlHABPD9_9dp', 3: '15Dnw_SvVSO1RL1jItRhP_KPVDNVNFEei', 4: '1RyRBmNW_eNFQCNkiGtI_lOXo1FfQEked'},
        2: {1: '1wdYAoo0FWcuB9A68wFBlKpNLrIdBHgDf', 2: '1Lt9HZR2CEOW_aflZx74uvrQHIPQT7F1E', 3: '1_ve0IHgyx5QFII3NYjXw-67ffyx400u1', 4: '1R-i7XpqKZt19bjMZi1lQYlHABPD9_9dp', 5: '1v_2QzQh8q3ivwH3wJG0DMNuFQ0gZxntW', 6: '1JwaFNARqgBnmkZjjT-agzw5EyB0sBY-t', 7: '18sP_92PnvX8y7rUa4mOYv97syDCcYlXA', 8: '1zZaNn0e0l5O2_Ln7OUefk_vslh_mwueZ', 9: '1N3MquGxG-hqwoKHdL2R5Ruei8PniPopM'},
        3: {1: '1JwaFNARqgBnmkZjjT-agzw5EyB0sBY-t', 2: '1R-i7XpqKZt19bjMZi1lQYlHABPD9_9dp', 3: '1v_2QzQh8q3ivwH3wJG0DMNuFQ0gZxntW'},
        // ... resto de temporadas igual
    };

    // Función para cargar el video según temporada y episodio
    const handlePlay = () => {
        const id = videoLinks[season]?.[episode];
        if (id) {
            setVideoId(id);
            setLoading(true); // Inicia la carga
        } else {
            alert("El video no está disponible aún.");
            setVideoId('');
        }
    };

    // Cuando cambie videoId, dejamos que el iframe cargue, y ponemos loading false en onLoad
    // Aquí no creamos ni manipulamos iframe manualmente, solo controlamos loading.
    useEffect(() => {
        if (videoId) {
            setLoading(true);
        } else {
            setLoading(false);
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

             {/* Menu desplegable */}
             {menuAbierto && (
                <div className="sidebar">
                    {/* ... menú igual que tu código ... */}
                </div>
             )}

             <main>
                <div>
                    <input
                        type="text"
                        placeholder="Temporada"
                        value={season}
                        onChange={e => setSeason(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Episodio"
                        value={episode}
                        onChange={e => setEpisode(e.target.value)}
                    />
                    <button onClick={handlePlay}>Reproducir</button>
                </div>

                <div className="video-container" style={{ marginTop: '20px' }}>
                    {loading && <p>Cargando video...</p>}

                    {videoId && (
                        <iframe
                            key={videoId} 
                            src={`https://drive.google.com/file/d/${videoId}/preview`}
                            width="640"
                            height="360"
                            allow="autoplay"
                            onLoad={() => setLoading(false)}
                            frameBorder="0"
                            allowFullScreen
                            title="Video Player"
                        ></iframe>
                    )}
                </div>
             </main>
         </div>
    );
};

export default ReproductorV;
