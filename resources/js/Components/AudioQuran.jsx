
import React, { useState } from "react";


export default function AudioPlayer({ nomor }) {

    const [isPlaying, setIsPlaying] = useState(false);

    const handleTogglePlay = () => {
        setIsPlaying(!isPlaying);
    };
    return (
    <div className="pt-5">
      <button className="audioplay" onClick={handleTogglePlay}>
        {isPlaying ? 'Stop' : 'Play'}
      </button>
      {isPlaying && (
        <audio
          controls
          src={`https://download.quranicaudio.com/qdc/mishari_al_afasy/murattal/${nomor}.mp3`}
          type="audio/mp3"
        />
      )}
    </div>
  );
}
