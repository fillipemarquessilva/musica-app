'use client'
import React, { useEffect, useRef, useState } from 'react';

function BackgroundAudio() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1); // Volume entre 0 e 1

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
    setVolume(newVolume);
  };

  return (
    <div className="flex flex-col items-center p-4 bg-gray-800 text-white rounded-lg shadow-lg space-y-4">
      <audio ref={audioRef} loop>
        <source src="/audio/musica.mp3" type="audio/mp3" />
        Seu navegador não suporta o elemento de áudio.
      </audio>

      <div className="flex space-x-4">
        <button
          onClick={handlePlay}
          disabled={isPlaying}
          className={`px-4 py-2 rounded ${isPlaying ? 'bg-gray-600 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'}`}
        >
          Play
        </button>
        <button
          onClick={handlePause}
          disabled={!isPlaying}
          className={`px-4 py-2 rounded ${!isPlaying ? 'bg-gray-600 cursor-not-allowed' : 'bg-red-500 hover:bg-red-600'}`}
        >
          Pause
        </button>
      </div>

      <div className="flex flex-col items-center">
        <label htmlFor="volume" className="mb-2 text-sm font-semibold">Volume</label>
        <input
          id="volume"
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="w-32 h-2 bg-gray-300 rounded-lg cursor-pointer"
        />
      </div>
    </div>
  );
}

export default BackgroundAudio;
