import React, { useEffect, useState } from "react";
import "./CustomCursor.css";

const CustomCursor = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    setIsDesktop(mediaQuery.matches);
  }, []);

  useEffect(() => {
    if (!isDesktop) return; // 🚀 Stop everything on mobile/tablet

    const cursor = document.querySelector(".cursor");
    const cursorDot = document.querySelector(".cursor-dot");

    let mouseX = 0;
    let mouseY = 0;
    let posX = 0;
    let posY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorDot.style.left = mouseX + "px";
      cursorDot.style.top = mouseY + "px";
    };

    document.addEventListener("mousemove", handleMouseMove);

    function animate() {
      posX += (mouseX - posX) * 0.1;
      posY += (mouseY - posY) * 0.1;

      cursor.style.left = posX + "px";
      cursor.style.top = posY + "px";

      requestAnimationFrame(animate);
    }

    animate();

    const links = document.querySelectorAll("a, button");

    links.forEach(link => {
      link.addEventListener("mouseenter", () => {
        cursor.classList.add("cursor-grow");
      });
      link.addEventListener("mouseleave", () => {
        cursor.classList.remove("cursor-grow");
      });
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };

  }, [isDesktop]);

  if (!isDesktop) return null; // ❌ Do not render on mobile

  return (
    <>
      <div className="cursor"></div>
      <div className="cursor-dot"></div>
    </>
  );
};

export default CustomCursor;