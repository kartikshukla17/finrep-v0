'use client';

import React, { useEffect, useRef } from 'react';

interface AnimatedBeamV2Props {
  pathData: string;
  viewBox: string;
  className?: string;
  delay?: number;
  strokeColor?: string;
  strokeWidth?: number;
}

export function AnimatedBeamV2({
  pathData,
  viewBox,
  className = '',
  delay = 0,
  strokeColor = 'rgba(35, 176, 138, 0.6)',
  strokeWidth = 1,
}: AnimatedBeamV2Props) {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!pathRef.current) return;

    let animationFrameId: number;
    let startTime: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp - delay * 1000;
      const elapsed = timestamp - startTime;

      // Calculate offset for animation (moves from 0 to 100 and loops)
      const progress = (elapsed / 3000) % 1; // 3 second loop
      const offset = 100 - (progress * 70); // Animate from 100 to 30

      if (pathRef.current) {
        pathRef.current.style.strokeDashoffset = `${offset}`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [delay]);

  return (
    <div
      className={className}
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        placeContent: 'center',
        placeItems: 'center',
        backgroundColor: 'transparent',
        overflow: 'hidden',
        position: 'relative',
        padding: 0,
      }}
    >
      <div
        style={{
          display: 'flex',
          placeContent: 'center',
          placeItems: 'center',
          backgroundColor: 'transparent',
          position: 'relative',
          height: '100%',
          width: '100%',
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={viewBox}
          style={{ width: '100%', height: '100%' }}
        >
          {/* Base gray path */}
          <path
            d={pathData}
            stroke="rgb(232, 232, 232)"
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
            strokeLinecap="round"
            fill="transparent"
          />
          {/* Animated colored path */}
          <path
            ref={pathRef}
            strokeDasharray="30 100"
            d={pathData}
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
            strokeLinecap="round"
            fill="transparent"
            pathLength="100"
            opacity="1"
            style={{
              strokeDashoffset: 100,
            }}
          />
        </svg>
      </div>
    </div>
  );
}
