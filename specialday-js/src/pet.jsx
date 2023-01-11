import React, { useState } from 'react';

const Pet = () => {
  const [petImage, setPetImage] = useState('idle1.gif');

  const handleClick = () => {
    const images = ['idle1.gif', 'idle2.gif', 'pet1.gif', 'pet2.gif'];
    setPetImage(images[Math.floor(Math.random() * images.length)]);
  }

  return (
    <div onClick={handleClick}>
      <img src={`src/crab/${petImage}`} alt='Virtual pet' />
    </div>
  )
}

export default Pet;