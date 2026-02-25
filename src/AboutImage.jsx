import React, { useRef } from 'react';

const AboutImage = () => {
  const imageRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = imageRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    const rotateX = y * -20;
    const rotateY = x * 20;

    imageRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    imageRef.current.style.transform = 'rotateX(0deg) rotateY(0deg)';
  };

  return (
    <div
      className="about-image"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img ref={imageRef} src="Murtaza.png" alt="Murtaza" />
    </div>
  );
};

export default AboutImage;
