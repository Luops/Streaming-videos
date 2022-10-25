import React, { Component, useState, useEffect, useRef } from 'react'

//Styled components
import { 
    BarraPlayer,
    Video,
    Barra,
    VideoFull,
    Expandir
} from "./styles"

//Bootstrap
import { 
  
} from 'react-bootstrap';

//Icons
import { FaPlay, FaPause, FaExpand } from 'react-icons/fa'

function usePlayerState($videoPlayer){
    const [playerState, setPlayerState] = useState({
        playing: false,
        percentage: 0,
    });

    

    useEffect(() => {
        playerState.playing ? $videoPlayer.current.play() : $videoPlayer.current.pause();
    }, [$videoPlayer, playerState.playing])

    function toggleVideoPlay(){
        setPlayerState({
            ...playerState,
            playing: !playerState.playing,
        })
    }

    function handleTimeUpdate() {
        const currentPercentage = ($videoPlayer.current.currentTime / $videoPlayer.current.duration) * 100

        setPlayerState({
            ...playerState,
            percentage: currentPercentage,
        })
    }

    function handleChangeVideoPercentage(event) {
        const currentPercentageValue = event.target.value;

        $videoPlayer.current.currentTime = $videoPlayer.current.duration / 100 * currentPercentageValue

        setPlayerState({
            ...playerState,
            percentage: currentPercentageValue,
        })

    }


    return {
        playerState,
        toggleVideoPlay,
        handleTimeUpdate,
        handleChangeVideoPercentage,
        
    }
}

function useFullScreen(){
    const [fullScreen, setFullScreen] = useState(false)
}

const Player = ({conteudo, destaque}) => {
    const $videoPlayer = useRef(null);

    const [fullScreen, setFullScreen] = useState(false)

    const {
        playerState,
        toggleVideoPlay,
        handleTimeUpdate,
        handleChangeVideoPercentage,
    } = usePlayerState($videoPlayer);

    console.log(fullScreen)

  return (
    <div className='w-100'>
        {conteudo ? 
            <div className='my-5 d-flex flex-column align-items-center justify-content-center w-100'>
                <p className='text-white fw-bold h3'>
                    {conteudo.titulo}
                </p>
                <div className='w-100 d-flex flex-column align-items-center justify-content-center'>
                    {!fullScreen ? 
                    <Video 
                    className=''
                    ref={$videoPlayer}
                    src={conteudo.videoURL}
                    onTimeUpdate={handleTimeUpdate}
                    onClick={toggleVideoPlay}
                    /> :
                    <VideoFull 
                    className=''
                    ref={$videoPlayer}
                    src={conteudo.videoURL}
                    onTimeUpdate={handleTimeUpdate}
                    onClick={toggleVideoPlay}
                    />
                }
                    
                    <BarraPlayer>
                        <Barra 
                        type="range" 
                        min="0"
                        max="100"
                        onChange={handleChangeVideoPercentage}
                        value={playerState.percentage}/>
                        <div className='d-flex align-items-start justify-content-between w-100 gap-4'>
                            <div className='gap-3 d-flex align-items-center justify-content-center text-align-center'>
                                <button 
                                className="d-flex align-items-center justify-content-center bg-transparent border-0 fs-5 text-white"
                                onClick={toggleVideoPlay}
                                >
                                    {playerState.playing ? <FaPause /> : <FaPlay />}
                                </button>
                                {$videoPlayer.current && (
                                    <p className='text-white fw-bold m-auto'> 
                                        {Math.trunc($videoPlayer.current.currentTime / 60 )}:{Math.round($videoPlayer.current.currentTime % 60)} / {Math.trunc($videoPlayer.current.duration / 60)}:{Math.round($videoPlayer.current.duration % 60)}
                                    </p>
                                )}
                                {!$videoPlayer.current && (
                                    <p className='text-white fw-bold d-flex m-auto'> 
                                        0:0 / 0:0
                                    </p>
                                )}
                            </div>
                            <div className='gap-3 d-flex align-items-center justify-content-center text-align-center'>
                                <FaExpand 
                                className='text-white fs-4'
                                onClick={(e) => setFullScreen(true)}
                                />
                                
                                <select >
                                    {[1,2,3].map(speed => (
                                        <option key={`speedChange_${speed}`}>
                                            {speed}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        
                    </BarraPlayer>
                </div>
            </div> 
            
            : 
            
            <div className='my-5 d-flex flex-column align-items-center justify-content-center w-100'>
                <p className='text-white fw-bold h3'>
                    {destaque.titulo}
                </p>
                <div className='w-100 d-flex flex-column align-items-center justify-content-center'>
                    {!fullScreen ? 
                    <Video 
                    className=''
                    ref={$videoPlayer}
                    src={destaque.videoURL}
                    onTimeUpdate={handleTimeUpdate}
                    onClick={toggleVideoPlay}
                    /> :
                    <VideoFull 
                    className=''
                    ref={$videoPlayer}
                    src={destaque.videoURL}
                    onTimeUpdate={handleTimeUpdate}
                    onClick={toggleVideoPlay}
                    />
                }
                    
                    <BarraPlayer>
                        <Barra 
                        type="range" 
                        min="0"
                        max="100"
                        onChange={handleChangeVideoPercentage}
                        value={playerState.percentage}/>
                        <div className='d-flex align-items-start justify-content-between w-100 gap-4'>
                            <div className='gap-3 d-flex align-items-center justify-content-center text-align-center'>
                                <button 
                                className="d-flex align-items-center justify-content-center bg-transparent border-0 fs-5 text-white"
                                onClick={toggleVideoPlay}
                                >
                                    {playerState.playing ? <FaPause /> : <FaPlay />}
                                </button>
                                {$videoPlayer.current && (
                                    <p className='text-white fw-bold m-auto'> 
                                        {Math.trunc($videoPlayer.current.currentTime / 60 )}:{Math.round($videoPlayer.current.currentTime % 60)} / {Math.trunc($videoPlayer.current.duration / 60)}:{Math.round($videoPlayer.current.duration % 60)}
                                    </p>
                                )}
                                {!$videoPlayer.current && (
                                    <p className='text-white fw-bold d-flex m-auto'> 
                                        0:0 / 0:0
                                    </p>
                                )}
                            </div>
                            <div className='gap-3 d-flex align-items-center justify-content-center text-align-center'>
                                <FaExpand 
                                className='text-white fs-4'
                                onClick={(e) => setFullScreen(true)}
                                />
                                
                                <select >
                                    {[1,2,3].map(speed => (
                                        <option key={`speedChange_${speed}`}>
                                            {speed}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        
                    </BarraPlayer>
                </div>
            </div>
            }
    </div>
  )
}

export default Player