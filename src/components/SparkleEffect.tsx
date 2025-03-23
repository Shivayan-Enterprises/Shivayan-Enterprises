
import { useRef, useEffect } from "react";

interface Sparkle {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
}

const SparkleEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sparklesRef = useRef<Sparkle[]>([]);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      const footerElement = canvas.parentElement;
      if (footerElement) {
        canvas.width = footerElement.offsetWidth;
        canvas.height = footerElement.offsetHeight;
      }
    };

    // Initial resize
    resizeCanvas();

    // Generate sparkles
    const generateSparkles = () => {
      const sparkleCount = Math.floor(canvas.width / 20); // Adjust density based on width
      const sparkles: Sparkle[] = [];

      for (let i = 0; i < sparkleCount; i++) {
        sparkles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5, // Size between 0.5 and 2.5
          opacity: Math.random() * 0.5 + 0.1, // Opacity between 0.1 and 0.6
          speed: Math.random() * 0.3 + 0.1, // Speed between 0.1 and 0.4
        });
      }

      return sparkles;
    };

    sparklesRef.current = generateSparkles();

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw and update sparkles
      sparklesRef.current.forEach((sparkle) => {
        // Draw sparkle
        ctx.beginPath();
        ctx.arc(sparkle.x, sparkle.y, sparkle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 215, 0, ${sparkle.opacity})`;
        ctx.fill();

        // Update position - floating upward
        sparkle.y -= sparkle.speed;

        // Reset if out of bounds
        if (sparkle.y < 0) {
          sparkle.y = canvas.height;
          sparkle.x = Math.random() * canvas.width;
        }

        // Randomly adjust opacity for twinkling effect
        if (Math.random() > 0.95) {
          sparkle.opacity = Math.random() * 0.5 + 0.1;
        }
      });

      frameRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    animate();

    // Handle resize
    window.addEventListener("resize", resizeCanvas);

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
};

export default SparkleEffect;
