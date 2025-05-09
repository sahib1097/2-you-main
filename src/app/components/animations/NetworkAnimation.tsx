import React, { useEffect, useRef } from 'react';
import { useSecurityContext } from '../../contexts/SecurityContext';

const NetworkAnimation: React.FC = () => {
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
    const nodes: {x: number, y: number, size: number}[] = [];
    const connections: {from: number, to: number, progress: number, active: boolean}[] = [];
    
    // Create nodes
    for (let i = 0; i < 6; i++) {
      nodes.push({
        x: 20 + (canvas.width - 40) * (i % 3) / 2,
        y: 20 + (canvas.height - 40) * Math.floor(i / 3),
        size: 6
      });
    }
    
    // Create connections
    connections.push(
      { from: 0, to: 1, progress: 0, active: false },
      { from: 1, to: 2, progress: 0, active: false },
      { from: 0, to: 3, progress: 0, active: false },
      { from: 3, to: 4, progress: 0, active: false },
      { from: 4, to: 5, progress: 0, active: false },
      { from: 2, to: 5, progress: 0, active: false }
    );
    
    // Activate random connection every 1s
    const activateConnection = () => {
      const inactiveConnections = connections.filter(c => !c.active);
      if (inactiveConnections.length > 0) {
        const randomConnection = inactiveConnections[Math.floor(Math.random() * inactiveConnections.length)];
        randomConnection.active = true;
        randomConnection.progress = 0;
      }
    };
    
    const intervalId = setInterval(activateConnection, 1000);
    activateConnection(); // Activate one immediately
    
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connections
      connections.forEach(connection => {
        const fromNode = nodes[connection.from];
        const toNode = nodes[connection.to];
        
        if (connection.active) {
          // Draw connection path
          ctx.strokeStyle = '#333';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(fromNode.x, fromNode.y);
          ctx.lineTo(toNode.x, toNode.y);
          ctx.stroke();
          
          // Draw active path
          const dx = toNode.x - fromNode.x;
          const dy = toNode.y - fromNode.y;
          const length = Math.sqrt(dx * dx + dy * dy);
          
          ctx.strokeStyle = '#FF3B30';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(fromNode.x, fromNode.y);
          ctx.lineTo(
            fromNode.x + (dx * connection.progress) / 100,
            fromNode.y + (dy * connection.progress) / 100
          );
          ctx.stroke();
          
          // Update progress
          connection.progress += 2;
          if (connection.progress >= 100) {
            connection.active = false;
          }
        } else {
          // Draw inactive path
          ctx.strokeStyle = fortressMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(fromNode.x, fromNode.y);
          ctx.lineTo(toNode.x, toNode.y);
          ctx.stroke();
        }
      });
      
      // Draw nodes
      nodes.forEach(node => {
        ctx.fillStyle = fortressMode ? '#FFFFFF' : '#1A1A1A';
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.strokeStyle = '#FF3B30';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size + 2, 0, Math.PI * 2);
        ctx.stroke();
      });
      
      animationFrameId = requestAnimationFrame(draw);
    };
    
    draw();
    
    return () => {
      cancelAnimationFrame(animationFrameId);
      clearInterval(intervalId);
    };
  }, [fortressMode]);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="w-full h-full bg-black"
    />
  );
};

export default NetworkAnimation;