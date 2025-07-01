"use client"

import { useState, useEffect } from "react"

export function MouseTracker() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      {/* Hide default cursor */}
      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>
      
      {/* Outer glow */}
      <div 
        className="fixed w-12 h-12 pointer-events-none z-50 transition-all duration-200 ease-out"
        style={{
          left: mousePosition.x - 24,
          top: mousePosition.y - 24,
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(147, 51, 234, 0.3) 40%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(12px)',
          animation: 'pulse 2s ease-in-out infinite',
        }}
      />
      {/* Middle glow */}
      <div 
        className="fixed w-6 h-6 pointer-events-none z-50 transition-all duration-150 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.8) 0%, rgba(147, 51, 234, 0.6) 50%, transparent 80%)',
          borderRadius: '50%',
          filter: 'blur(4px)',
        }}
      />
      {/* Core glowing dot */}
      <div 
        className="fixed w-2 h-2 pointer-events-none z-50"
        style={{
          left: mousePosition.x - 4,
          top: mousePosition.y - 4,
          background: 'radial-gradient(circle, #ffffff 0%, rgba(59, 130, 246, 0.9) 70%, transparent 100%)',
          borderRadius: '50%',
          boxShadow: '0 0 20px rgba(59, 130, 246, 0.8), 0 0 40px rgba(147, 51, 234, 0.4)',
          animation: 'glow 1.5s ease-in-out infinite alternate',
        }}
      />
      
      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.1); opacity: 0.4; }
        }
        
        @keyframes glow {
          0% { 
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.8), 0 0 40px rgba(147, 51, 234, 0.4);
            transform: scale(1);
          }
          100% { 
            box-shadow: 0 0 30px rgba(59, 130, 246, 1), 0 0 60px rgba(147, 51, 234, 0.6);
            transform: scale(1.2);
          }
        }
      `}</style>
    </>
  )
}
