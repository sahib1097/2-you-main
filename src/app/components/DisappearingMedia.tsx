
import { useState, useEffect, useRef } from 'react';
import { Progress } from "../components/ui/progress";
import image from "../Assets/Disappear.png";

const DisappearingMedia = () => {
  const [timerValue, setTimerValue] = useState<number>(5);
  const [isVisible, setIsVisible] = useState(true);
  const [countdown, setCountdown] = useState<number | null>(null);
  const [progress, setProgress] = useState(100); // Progress as percentage (0-100)
  
  // Use a ref for smoother animation
  const animationFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const durationRef = useRef<number>(0);
  
  useEffect(() => {
    // Cleanup animation frame on unmount
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      setIsVisible(false);
      // Reset after 3 seconds
      const resetTimer = setTimeout(() => {
        setIsVisible(true);
        setCountdown(null);
        setProgress(100);
      }, 3000);
      
      return () => clearTimeout(resetTimer);
    }
  }, [countdown]);

  const animateProgress = (timestamp: number) => {
    if (startTimeRef.current === null) {
      startTimeRef.current = timestamp;
    }
    
    // Calculate elapsed time
    const elapsed = timestamp - startTimeRef.current;
    
    // Calculate remaining percentage based on elapsed time
    const remainingPercentage = Math.max(0, 100 - (elapsed / durationRef.current * 100));
    
    // Update progress state
    setProgress(remainingPercentage);
    
    // Update countdown display (whole seconds)
    const remainingSeconds = Math.ceil((durationRef.current - elapsed) / 1000);
    if (remainingSeconds !== countdown && remainingSeconds >= 0) {
      setCountdown(remainingSeconds);
    }
    
    // Continue animation if not complete
    if (remainingPercentage > 0) {
      animationFrameRef.current = requestAnimationFrame(animateProgress);
    } else {
      setCountdown(0);
      setProgress(0);
    }
  };

  const startTimer = () => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    
    // Set duration in milliseconds
    durationRef.current = timerValue * 1000;
    startTimeRef.current = null;
    
    // Set initial countdown
    setCountdown(timerValue);
    
    // Start smooth animation using requestAnimationFrame
    animationFrameRef.current = requestAnimationFrame(animateProgress);
  };

  return (
    <div className="space-y-6">
      <div className="relative">
        {isVisible ? (
          <div className="relative">
            <img
              src={image}
              alt="Disappearing Media Example"
              className="w-[60%] mx-auto rounded-xl shadow-lg"
            />
          </div>
        ) : (
          <div className="h-[600px] bg-gray-900 rounded-xl flex items-center justify-center">
            <p className="text-gray-400 text-xl">Media has disappeared</p>
          </div>
        )}
      </div>
      
      <div className="space-y-4 bg-gray-900/50 p-6 rounded-xl">
        <div className="flex justify-between items-center mb-2">
          <label className="text-sm font-medium text-gray-200">
            Timer Duration: {timerValue} seconds
          </label>
          {countdown !== null && (
            <span className="text-red-500 font-bold">{countdown}s</span>
          )}
        </div>
        
        {/* Use Progress component for smooth animation */}
        <div className="relative h-6">
          {countdown === null ? (
            <div className="w-full">
              <input
                type="range"
                min="1"
                max="10"
                step="1"
                value={timerValue}
                onChange={(e) => setTimerValue(parseInt(e.target.value))}
                className="w-full h-2 bg-white rounded-lg appearance-none cursor-pointer"
              />
            </div>
          ) : (
            <Progress 
              value={progress} 
              className="h-2 bg-secondary"
              style={{ 
                "--progress-foreground": "var(--red-500)",
                transition: "all 100ms linear" 
              } as React.CSSProperties}
            />
          )}
        </div>
        
        <button
          onClick={startTimer}
          disabled={countdown !== null}
          className={`
            w-full px-4 py-2 rounded-lg font-medium transition-all duration-300
            ${countdown !== null
              ? 'bg-gray-600 cursor-not-allowed'
              : 'bg-red-500 hover:bg-red-500/90'}
          `}
        >
          Start Timer
        </button>
      </div>
    </div>
  );
};

export default DisappearingMedia;
