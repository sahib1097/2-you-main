import React, { useEffect, useRef } from 'react';
import { useSecurityContext } from '../../contexts/SecurityContext';

const EncryptionAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { fortressMode } = useSecurityContext();
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    
    // Animation variables
    let animationFrameId: number;
    let packets: {x: number, y: number, size: number, encrypted: boolean, alpha: number}[] = [];
    
    // Create initial packets
    for (let i = 0; i < 5; i++) {
      packets.push({
        x: Math.random() * 50,
        y: canvas.height / 2 + (Math.random() * 20 - 10),
        size: 4 + Math.random() * 4,
        encrypted: false,
        alpha: 0.7 + Math.random() * 0.3
      });
    }
    
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw tunnel
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
      gradient.addColorStop(0, 'rgba(255, 59, 48, 0.1)');
      gradient.addColorStop(0.5, 'rgba(255, 59, 48, 0.3)');
      gradient.addColorStop(1, 'rgba(255, 59, 48, 0.1)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, canvas.height / 2 - 20, canvas.width, 40);
      
      // Draw encryption barrier
      ctx.fillStyle = 'rgba(255, 59, 48, 0.8)';
      ctx.fillRect(canvas.width / 2 - 2, canvas.height / 2 - 25, 4, 50);
      
      // Draw encryption text
      ctx.fillStyle = '#FF3B30';
      ctx.font = '10px Arial';
      ctx.fillText('ENCRYPT', canvas.width / 2 - 25, canvas.height / 2 - 30);
      
      // Draw and update packets
      packets.forEach(packet => {
        ctx.globalAlpha = packet.alpha;
        
        if (packet.encrypted) {
          ctx.fillStyle = fortressMode ? '#FFFFFF' : '#1A1A1A';
        } else {
          ctx.fillStyle = '#FF3B30';
        }
        
        ctx.beginPath();
        ctx.arc(packet.x, packet.y, packet.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Move packet
        packet.x += 2;
        
        // Check if packet crossed encryption barrier
        if (!packet.encrypted && packet.x > canvas.width / 2) {
          packet.encrypted = true;
        }
        
        // Reset packet when it goes off screen
        if (packet.x > canvas.width + packet.size) {
          packet.x = -packet.size;
          packet.y = canvas.height / 2 + (Math.random() * 20 - 10);
          packet.encrypted = false;
        }
      });
      
      ctx.globalAlpha = 1;
      
      animationFrameId = requestAnimationFrame(draw);
    };
    
    draw();
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [fortressMode]);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="w-full h-full"
    />
  );
};

export default EncryptionAnimation;