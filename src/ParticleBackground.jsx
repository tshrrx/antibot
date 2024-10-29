import React, { useEffect, useRef } from 'react';
import './ParticleBackground.css';

const ParticleBackground = () => {
    const canvasRef = useRef(null);
    let particles = [];
    let particleCount = calculateParticleCount();

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        initParticles();

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(particle => {
                particle.update(canvas);
                particle.draw(ctx);
            });
            requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            particleCount = calculateParticleCount();
            initParticles();
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    function calculateParticleCount() {
        return Math.floor((window.innerWidth * window.innerHeight) / 6000);
    }

    class Particle {
        constructor(canvas) {
            this.reset(canvas);
            this.y = Math.random() * canvas.height;
            this.fadeDelay = Math.random() * 600 + 100;
            this.fadeStart = Date.now() + this.fadeDelay;
            this.fadingOut = false;
        }

        reset(canvas) {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.speed = Math.random() / 8 + 0.1;
            this.opacity = 1;
            this.fadeDelay = Math.random() * 600 + 100;
            this.fadeStart = Date.now() + this.fadeDelay;
            this.fadingOut = false;
        }

        update(canvas) {
            this.y -= this.speed;
            if (this.y < 0) {
                this.reset(canvas);
            }
            if (!this.fadingOut && Date.now() > this.fadeStart) {
                this.fadingOut = true;
            }
            if (this.fadingOut) {
                this.opacity -= 0.008;
                if (this.opacity <= 0) {
                    this.reset(canvas);
                }
            }
        }

        draw(ctx) {
            ctx.fillStyle = `rgba(${255 - (Math.random() * 255/2)}, 255, 255, ${this.opacity})`;
            ctx.fillRect(this.x, this.y, 0.4, Math.random() * 2 + 1);
        }
    }

    function initParticles() {
        particles = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle(canvasRef.current));
        }
    }

    return <canvas ref={canvasRef} className="particle-canvas"></canvas>;
};

export default ParticleBackground;