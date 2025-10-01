import React, { useRef, useState } from "react";
import miss from "./images/miss1.jpg"
import poly from "./images/poly1.jpg"
import shad from "./images/shad1.jpg"
import vilvik from "./images/vivek1.jpg"
import xabz from "./images/xabz1.jpg"
import himanshu from "./images/himanshu1.jpg"
import oleg from "./images/oleg1.jpg"
import abhiseck from "./images/abhiseck1.jpg"
import dobbymoon from "./images/dobbymoon1.jpg"
import dobbykaito from "./images/dobbykaito1.jpg"

export default function InfiniteRoad() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const images = [
    miss.src,
    shad.src,
    vilvik.src,
    xabz.src,
    himanshu.src,
    oleg.src,
    abhiseck.src,
    poly.src,
    dobbymoon.src,
    dobbykaito.src
  ];

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => setIsPlaying(true));
    }
  };

  return (
    <>
    <div className="perspective relative overflow-hidden cursor-pointer" onClick={toggleMusic}>
    <audio ref={audioRef} loop>
        <source src="https://res.cloudinary.com/de0ghhr8k/video/upload/v1749660484/uploads/musics/bat_coc_con_tim.mp3" type="audio/mpeg" />
      </audio>
      {/* Hành lang */}
      <div className="slider cursor-pointer">
        {images.map((_, i) => (
          <div className="corridor cursor-pointer" key={i}>
            <div className="wall left-wall">
              <img className="wall-img" src={images[7]} />
              <img className="wall-img" src={images[2]} />
              <img className="wall-img" src={images[4]} />
              <img className="wall-img" src={images[5]} />
              <img className="wall-img" src={images[9]} />
            </div>

            <div className="wall-down">
              <img
                className="wall-iii"
                src="https://png.pngtree.com/png-clipart/20250109/original/pngtree-red-carpet-png-image_19854010.png"
              />
            </div>

            <div className="wall right-wall">
              <img className="wall-img" src={images[0]} />
              <img className="wall-img" src={images[8]} />
              <img className="wall-img" src={images[1]} />
              <img className="wall-img" src={images[6]} />
              <img className="wall-img" src={images[3]} />
            </div>

            <div className="wall"></div>
            <div className="end-frame cursor-pointer" >
              <img 
                className="rounded-full w-20 h-20"
                src="https://pbs.twimg.com/profile_images/1966252290500710400/iacpKDQc_400x400.jpg"
                alt="End of corridor"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
