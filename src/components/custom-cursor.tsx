import React, { useEffect, useRef, useState } from 'react';

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  
  const [isHoverSupported, setIsHoverSupported] = useState(true);

  useEffect(() => {
    // Check if hover is supported
    const hoverQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    setIsHoverSupported(hoverQuery.matches);
    
    if (!hoverQuery.matches) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;
    let isVisible = false;
    let isInitialized = false;
    let animationFrameId: number;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const lerpAmt = prefersReducedMotion ? 1 : 0.15;
    
    const interactiveSelectors = 'a, button, [role="button"], input, textarea, select, [tabindex]:not([tabindex="-1"]), [data-cursor="interactive"], summary, label';

    const render = () => {
      if (!isInitialized) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }
      
      const dx = targetX - currentX;
      const dy = targetY - currentY;
      
      currentX += dx * lerpAmt;
      currentY += dy * lerpAmt;
      
      let rotation = 0;
      if (!prefersReducedMotion) {
        rotation = Math.min(Math.max(dx * 0.4, -8), 8);
      }
      
      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) rotate(${rotation}deg)`;
      
      animationFrameId = requestAnimationFrame(render);
    };
    
    animationFrameId = requestAnimationFrame(render);

    const onMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      
      if (!isInitialized) {
        currentX = targetX;
        currentY = targetY;
        isInitialized = true;
      }
      
      if (!isVisible) {
        cursor.style.opacity = '1';
        isVisible = true;
      }
    };

    const onMouseLeave = () => {
      cursor.style.opacity = '0';
      isVisible = false;
    };
    
    const onMouseEnter = () => {
      if (isInitialized) {
        cursor.style.opacity = '1';
        isVisible = true;
      }
    };

    const onBlur = () => {
      cursor.style.opacity = '0';
      isVisible = false;
    };
    
    const onFocus = () => {
      if (isInitialized) {
        cursor.style.opacity = '1';
        isVisible = true;
      }
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest) {
        const specificStateEl = target.closest('[data-cursor]');
        const interactiveEl = target.closest(interactiveSelectors);
        
        if (specificStateEl) {
          const state = specificStateEl.getAttribute('data-cursor');
          if (state === 'hidden' || state === 'none') {
            cursor.classList.add('is-hidden');
          } else if (state === 'large') {
            cursor.classList.add('is-large');
          } else {
            cursor.classList.add('is-interactive');
          }
        } else if (interactiveEl) {
          cursor.classList.add('is-interactive');
        }
      }
    };

    const onMouseOut = () => {
      cursor.classList.remove('is-interactive', 'is-large', 'is-hidden');
    };

    const onMouseDown = () => {
      cursor.classList.add('is-clicking');
    };
    
    const onMouseUp = () => {
      cursor.classList.remove('is-clicking');
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    window.addEventListener('blur', onBlur);
    window.addEventListener('focus', onFocus);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      window.removeEventListener('blur', onBlur);
      window.removeEventListener('focus', onFocus);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  if (!isHoverSupported) return null;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @media (hover: hover) and (pointer: fine) {
          html, body, a, button, [role="button"], input, textarea, select, summary, label, [tabindex], [data-cursor] {
            cursor: none !important;
          }
          
          input[type="text"], input[type="email"], input[type="password"], input[type="search"], input[type="number"], input[type="tel"], input[type="url"], textarea, [contenteditable="true"] {
            cursor: text !important;
          }
        }

        :root {
          --cursor-size: 52px;
        }

        #custom-cursor {
          position: fixed;
          top: 0;
          left: 0;
          width: var(--cursor-size);
          height: var(--cursor-size);
          pointer-events: none;
          z-index: 99999;
          display: none;
          opacity: 0;
          transition: opacity 0.3s ease;
          will-change: transform;
          margin-top: calc(var(--cursor-size) / -2);
          margin-left: calc(var(--cursor-size) / -2);
        }

        @media (hover: hover) and (pointer: fine) {
          #custom-cursor {
            display: block;
          }
        }

        #custom-cursor img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          background: transparent;
          border: none;
          box-shadow: none;
          transition: transform 0.25s cubic-bezier(0.2, 0, 0.2, 1);
          transform-origin: center center;
          will-change: transform;
          transform: scale(1);
        }

        #custom-cursor.is-interactive img {
          transform: scale(1.15);
        }

        #custom-cursor.is-large img {
          transform: scale(1.3);
        }

        #custom-cursor.is-clicking img {
          transform: scale(0.9) !important;
        }

        #custom-cursor.is-hidden {
          opacity: 0 !important;
        }

        @media (prefers-reduced-motion: reduce) {
          #custom-cursor {
            transition: opacity 0.1s ease;
          }
          #custom-cursor img {
            transition: none !important;
            transform: none !important;
          }
        }
      `}} />
      <div id="custom-cursor" aria-hidden="true" ref={cursorRef}>
        <img src="/straw-hat-cursor.png" alt="" ref={imgRef} />
      </div>
    </>
  );
}
