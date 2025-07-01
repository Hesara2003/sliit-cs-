"use client"

import { useState, useEffect } from "react"

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [loadingText, setLoadingText] = useState("Initializing...")

  useEffect(() => {
    const loadingMessages = [
      "🚀 Booting up systems...",
      "⚡ Connecting to servers...",
      "📡 Loading resources...",
      "🎨 Rendering interface...",
      "🔥 Optimizing performance...",
      "🌟 Preparing your experience...",
      "✨ Almost ready!"
    ]

    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 12 + 3
        
        // Update loading text based on progress
        const messageIndex = Math.floor((newProgress / 100) * loadingMessages.length)
        if (messageIndex < loadingMessages.length) {
          setLoadingText(loadingMessages[messageIndex])
        }
        
        if (newProgress >= 100) {
          clearInterval(progressInterval)
          setLoadingText("🎉 Welcome to SLIIT CS Hub!")
          // Hide loading screen after animation completes
          setTimeout(() => setIsLoading(false), 1000)
          return 100
        }
        return newProgress
      })
    }, 80)

    return () => clearInterval(progressInterval)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-[100] bg-black overflow-hidden">
      {/* Animated particle background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-70"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-orange-900/30 to-black" />
      
      {/* Animated grid */}
      <div className="absolute inset-0 opacity-20" style={{ 
        backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
        animation: 'gridMove 15s linear infinite'
      }} />

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center space-y-12 max-w-lg mx-auto px-6">
          
          {/* Enhanced Logo */}
          <div className="relative">
            {/* Outer rotating ring */}
            <div className="absolute inset-0 w-32 h-32 mx-auto">
              <div className="w-full h-full border-2 border-blue-500/30 rounded-full animate-spin-slow" />
              <div className="absolute inset-2 border-2 border-orange-500/50 rounded-full animate-ping" />
            </div>
            
            {/* Logo container */}
            <div className="relative w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-500 via-orange-600 to-blue-700 p-1 shadow-2xl shadow-blue-500/50">
              <div className="w-full h-full bg-black rounded-full flex items-center justify-center relative overflow-hidden">
                {/* Inner glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-orange-600/20 rounded-full animate-pulse" />
                
                {/* Logo text */}
                <div className="relative z-10 text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent animate-pulse">
                    CS
                  </div>
                  <div className="text-xs text-blue-300 font-medium tracking-widest">
                    HUB
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Brand name with enhanced styling */}
          <div className="space-y-4">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-orange-400 to-blue-500 bg-clip-text text-transparent animate-text-shimmer">
              SLIIT CS Hub
            </h1>
            <p className="text-xl text-blue-200/80 font-light tracking-wide">
              {loadingText}
            </p>
          </div>

          {/* Enhanced progress section */}
          <div className="space-y-6">
            {/* Progress bar with glow effect */}
            <div className="relative">
              <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden shadow-inner">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 to-orange-600 rounded-full transition-all duration-500 ease-out relative"
                  style={{ width: `${progress}%` }}
                >
                  {/* Animated glow on progress bar */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-orange-500 rounded-full animate-pulse opacity-75" />
                  {/* Moving highlight */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full animate-slide-right" />
                </div>
              </div>
              {/* Progress glow */}
              <div 
                className="absolute top-0 h-3 bg-gradient-to-r from-blue-500/50 to-orange-600/50 rounded-full blur-md transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
            
            {/* Progress percentage */}
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-blue-400">
                {Math.round(progress)}%
              </span>
              <span className="text-blue-300/60 text-sm font-mono">
                Loading...
              </span>
            </div>
          </div>

          {/* Enhanced loading animation */}
          <div className="flex justify-center items-center space-x-3">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 bg-gradient-to-r from-blue-400 to-orange-500 rounded-full animate-bounce"
                style={{ 
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: '1.4s'
                }}
              />
            ))}
          </div>

          {/* Fun loading facts */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-4 border border-blue-500/20">
            <p className="text-blue-200/70 text-sm">
              💡 <span className="text-blue-300 font-medium">Did you know?</span> 
              {progress < 25 && " SLIIT CS Hub connects thousands of tech enthusiasts!"}
              {progress >= 25 && progress < 50 && " We host amazing workshops and hackathons!"}
              {progress >= 50 && progress < 75 && " Our community is growing every day!"}
              {progress >= 75 && " You're about to join an incredible tech journey!"}
            </p>
          </div>
        </div>
      </div>

      {/* Enhanced CSS animations */}
      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(60px, 60px); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.7; }
          33% { transform: translateY(-20px) rotate(120deg); opacity: 1; }
          66% { transform: translateY(10px) rotate(240deg); opacity: 0.8; }
        }
        
        @keyframes text-shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        
        @keyframes slide-right {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-text-shimmer {
          background-size: 200% auto;
          animation: text-shimmer 3s ease-in-out infinite;
        }
        
        .animate-slide-right {
          animation: slide-right 2s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  )
}
