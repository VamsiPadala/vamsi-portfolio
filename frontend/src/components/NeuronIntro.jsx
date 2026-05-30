import React, { useEffect, useRef, useState } from 'react';

const NeuronIntro = ({ onComplete }) => {
    const canvasRef = useRef(null);
    const [scrollPos, setScrollPos] = useState(0);
    const [viewportHeight, setViewportHeight] = useState(800);
    const animationFrameRef = useRef(null);
    const neuronsRef = useRef([]);
    const mouseRef = useRef({ x: null, y: null, radius: 150 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        let width = window.innerWidth;
        let height = window.innerHeight;
        setViewportHeight(height);
        canvas.width = width;
        canvas.height = height;

        const neuronCount = Math.floor((width * height) / 12000);
        const connectionDistance = 120;
        const baseSpeed = 0.5;

        class Neuron {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * baseSpeed;
                this.vy = (Math.random() - 0.5) * baseSpeed;
                this.radius = Math.random() * 2 + 1;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;

                if (mouseRef.current.x != null) {
                    let dx = mouseRef.current.x - this.x;
                    let dy = mouseRef.current.y - this.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < mouseRef.current.radius) {
                        const forceDirectionX = dx / distance;
                        const forceDirectionY = dy / distance;
                        const force = (mouseRef.current.radius - distance) / mouseRef.current.radius;
                        this.x += forceDirectionX * force * 2;
                        this.y += forceDirectionY * force * 2;
                    }
                }
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(255, 87, 34, 0.8)';
                ctx.fill();
                ctx.shadowBlur = 10;
                ctx.shadowColor = 'rgba(255, 87, 34, 0.5)';
            }
        }

        for (let i = 0; i < neuronCount; i++) {
            neuronsRef.current.push(new Neuron());
        }

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            for (let i = 0; i < neuronsRef.current.length; i++) {
                neuronsRef.current[i].update();
                neuronsRef.current[i].draw();
            }

            for (let i = 0; i < neuronsRef.current.length; i++) {
                for (let j = i + 1; j < neuronsRef.current.length; j++) {
                    let dx = neuronsRef.current[i].x - neuronsRef.current[j].x;
                    let dy = neuronsRef.current[i].y - neuronsRef.current[j].y;
                    let distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        ctx.beginPath();
                        let opacity = 1 - (distance / connectionDistance);
                        ctx.strokeStyle = `rgba(255, 87, 34, ${opacity * 0.4})`;
                        ctx.lineWidth = 1;
                        ctx.moveTo(neuronsRef.current[i].x, neuronsRef.current[i].y);
                        ctx.lineTo(neuronsRef.current[j].x, neuronsRef.current[j].y);
                        ctx.stroke();
                    }
                }
            }

            animationFrameRef.current = requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            setViewportHeight(height);
            canvas.width = width;
            canvas.height = height;
        };

        const handleMouseMove = (e) => {
            mouseRef.current.x = e.x;
            mouseRef.current.y = e.y;
        };

        const handleMouseOut = () => {
            mouseRef.current.x = null;
            mouseRef.current.y = null;
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseout', handleMouseOut);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseout', handleMouseOut);
            cancelAnimationFrame(animationFrameRef.current);
        };
    }, []);

    const maxScroll = Math.min(viewportHeight * 0.8, 600); // Distance to fully lift the page

    useEffect(() => {
        // Prevent body from scrolling while intro is active
        document.body.classList.add('no-scroll');

        const handleWheel = (e) => {
            e.preventDefault();
            setScrollPos(prev => {
                const next = prev + e.deltaY * 0.8; // Smooth factor
                if (next < 0) return 0;
                if (next > maxScroll + 50) {
                    if (onComplete) onComplete();
                    return maxScroll + 50;
                }
                return next;
            });
        };

        let touchStart = 0;
        const handleTouchStart = (e) => {
            touchStart = e.touches[0].clientY;
        };
        
        const handleTouchMove = (e) => {
            e.preventDefault();
            const touchCurrent = e.touches[0].clientY;
            const delta = touchStart - touchCurrent;
            touchStart = touchCurrent; // reset for next move tick
            
            setScrollPos(prev => {
                const next = prev + delta * 2; // Sensitivity for mobile
                if (next < 0) return 0;
                if (next > maxScroll + 50) {
                    if (onComplete) onComplete();
                    return maxScroll + 50;
                }
                return next;
            });
        };

        // Add event listeners with non-passive to allow preventDefault
        window.addEventListener('wheel', handleWheel, { passive: false });
        window.addEventListener('touchstart', handleTouchStart, { passive: false });
        window.addEventListener('touchmove', handleTouchMove, { passive: false });

        return () => {
            document.body.classList.remove('no-scroll');
            window.removeEventListener('wheel', handleWheel);
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchmove', handleTouchMove);
        };
    }, [onComplete, maxScroll]);

    // Calculate progression based on the scroll amount (0 to 1)
    const progress = Math.min(scrollPos / maxScroll, 1);

    return (
        <div className="fixed inset-0 z-[100] pointer-events-none overflow-hidden">
            {/* 1. The Background Canvas (Lifts up like a physical page revealing content below) */}
            <div 
                className="absolute inset-x-0 top-0 h-full bg-background pointer-events-auto"
                style={{ 
                    // Move up completely out of bounds (105% just to be safe)
                    transform: `translateY(-${progress * 105}%)`,
                    borderBottom: '1px solid rgba(255,87,34,0.2)',
                    boxShadow: '0px 20px 40px rgba(0,0,0,0.8)'
                }}
            >
                <canvas ref={canvasRef} className="w-full h-full" />
                {/* Glowing edge indicator for the lift */}
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />
            </div>

            {/* 2. The Text (Transitions gracefully to Top-Center) */}
            <div
                className="absolute z-[101] text-center w-full transform-gpu"
                style={{
                    // As progress goes 0 -> 1:
                    // top moves from 50% to roughly 4% (header height)
                    // left stays exactly at 50%
                    top: `calc(50% - ${progress * 46}%)`, 
                    left: `50%`, 
                    // Scale from 1 to 0.45, becoming smaller like a branding logo
                    transform: `translate(-50%, -50%) scale(${1 - progress * 0.55})`,
                    // Keep visible then fade out very fast at the exact end to reveal actual header
                    opacity: progress < 0.85 ? 1 : 1 - ((progress - 0.85) * (1 / 0.15))
                }}
            >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-[0.2em] text-primary mb-6 drop-shadow-[0_0_20px_rgba(255,87,34,0.6)] uppercase whitespace-nowrap">
                    VAMSI PADALA
                </h1>
                
                {/* Fading controls cluster */}
                <div style={{ opacity: Math.max(0, 1 - progress * 4) }} className="flex flex-col items-center">
                    <button
                        onClick={() => {
                            if (progress > 0) return;
                            // Animate the scroll position to maxScroll programmatically
                            let startTime;
                            const animateScroll = (time) => {
                                if (!startTime) startTime = time;
                                const t = Math.min((time - startTime) / 800, 1);
                                const ease = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
                                setScrollPos(maxScroll * ease + 60); 
                                if (t < 1) {
                                    requestAnimationFrame(animateScroll);
                                } else if (onComplete) {
                                    onComplete();
                                }
                            };
                            requestAnimationFrame(animateScroll);
                        }}
                        className="mt-4 flex items-center justify-center gap-3 px-8 py-3.5 bg-primary/10 border border-primary/40 text-primary hover:bg-primary hover:text-foreground rounded-sm shadow-[0_0_15px_rgba(255,87,34,0.15)] hover:shadow-[0_0_30px_rgba(255,87,34,0.4)] transition-all duration-300 uppercase tracking-widest text-xs font-bold font-mono group"
                        style={{ cursor: progress > 0 ? 'default' : 'pointer' }}
                        disabled={progress > 0}
                    >
                        Lift Page
                        <svg className="w-5 h-5 animate-bounce group-hover:animate-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                    </button>
                    <p className="mt-6 text-muted-foreground text-[10px] uppercase tracking-[0.3em] font-medium">
                        Or scroll to continue
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NeuronIntro;
