/* eslint-disable no-undef */
'use client';
import { useEffect } from 'react';

const GalaxyCanvas = () => {
  useEffect(() => {
    const canvas = document.getElementById('galaxyCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.body.scrollHeight; // Full scrollable height
    };

    resizeCanvas();

    const centerX = canvas.width / 2;
    const centerY = window.innerHeight / 2; // Only center on screen, not whole scroll

    const stars = Array.from({ length: 800 }, () => createStar());

    function createStar() {
      return {
        x: Math.random() * canvas.width - centerX,
        y: Math.random() * canvas.height - centerY,
        z: Math.random() * canvas.width,
        size: Math.random() * 2 + 0.5,
        fade: 0, // Fade-in progress, starts from 0
      };
    }

    function animate() {
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star, index) => {
        star.z -= 0.2;
        if (star.z <= 0.1) {
          stars[index] = createStar();
          return;
        }

        const k = 128 / star.z;
        const sx = star.x * k + centerX;
        const sy = star.y * k + centerY + window.scrollY;

        const radius = star.size * (1 - star.z / canvas.width);
        const fadeSpeed = 0.01; // The speed at which the star fades in
        star.fade = Math.min(1, star.fade + fadeSpeed); // Gradually increase the fade value (max is 1)

        const brightness = Math.min(
          255,
          Math.max(0, star.fade * 255 - (star.z / canvas.width) * 255)
        );

        ctx.fillStyle = `rgb(${brightness}, ${brightness}, ${brightness})`;

        if (sx >= 0 && sx <= canvas.width && sy >= 0 && sy <= canvas.height) {
          ctx.beginPath();
          ctx.arc(sx, sy, radius, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener('resize', resizeCanvas);
    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  return (
    <canvas
      id="galaxyCanvas"
      className="absolute top-0 left-0 w-full pointer-events-none z-[-1]"
      style={{ height: '100%', backgroundColor: 'transparent' }}
    />
  );
};

export default GalaxyCanvas;
