import React, { Component, useState, useEffect, useRef } from 'react'

//Styled components
import { 
  
} from "./styles"

//Bootstrap
import { 
  
} from 'react-bootstrap';

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
        handleChangeVideoPercentage
    }
}

const Player = ({conteudo, destaque}) => {
    const $videoPlayer = useRef(null);

    const {
        playerState,
        toggleVideoPlay,
        handleTimeUpdate,
        handleChangeVideoPercentage
    } = usePlayerState($videoPlayer);

  return (
    <div>
        {conteudo ? 
            <div className='my-5 d-flex flex-column align-items-center'>
                <p className='text-white fw-bold h3'>
                    {conteudo.titulo}
                </p>
                <div>
                    <video 
                    ref={$videoPlayer}
                    src={conteudo.videoURL}
                    onTimeUpdate={handleTimeUpdate}
                    />

                    <div>
                        <button onClick={toggleVideoPlay}>
                            {playerState.playing ? "Pause" : "Play"}
                        </button>
                        <input 
                        type="range" 
                        min="0"
                        max="100"
                        onChange={handleChangeVideoPercentage}
                        value={playerState.percentage}/>
                        <select >
                            {[1,2,3].map(speed => (
                                <option key={`speedChange_${speed}`}>
                                    {speed}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div> 
            
            : 
            
            <div className='my-5 d-flex flex-column align-items-center'>
                <p className='text-white fw-bold h3'>
                    {destaque.titulo}
                </p>
                <div>
                    <video 
                    ref={$videoPlayer}
                    src={destaque.videoURL}
                    onTimeUpdate={handleTimeUpdate}
                    />

                    <div>
                        <button onClick={toggleVideoPlay}>
                            {playerState.playing ? "Pause" : "Play"}
                        </button>
                        <input 
                        type="range" 
                        min="0"
                        max="100"
                        onChange={handleChangeVideoPercentage}
                        value={playerState.percentage}/>
                        <select >
                            {[1,2,3].map(speed => (
                                <option key={`speedChange_${speed}`}>
                                    {speed}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
            }
            {/* 
        {conteudo && (
            <div className='my-5 d-flex flex-column align-items-center'>
                <p className='text-white fw-bold h3'>
                    {conteudo.titulo}
                </p>
                <div>
                    <video 
                    ref={$videoPlayer}
                    src={conteudo.videoURL}
                    onTimeUpdate={handleTimeUpdate}
                    />

                    <div>
                        <button onClick={toggleVideoPlay}>
                            {playerState.playing ? "Pause" : "Play"}
                        </button>
                        <input 
                        type="range" 
                        min="0"
                        max="100"
                        onChange={handleChangeVideoPercentage}
                        value={playerState.percentage}/>
                        <select >
                            {[1,2,3].map(speed => (
                                <option key={`speedChange_${speed}`}>
                                    {speed}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        )}
            
        {destaque && (
            <p>Teste</p>
        )}
        */}
    </div>
  )
}

export default Player