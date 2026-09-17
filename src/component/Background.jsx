import { useEffect, useRef } from 'react';

const Background = ({ darkMode = false }) => {
    const canvasRef = useRef(null);
    const mouseRef = useRef({ x: -9999, y: -9999, vx: 0, vy: 0, active: false });

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d', { alpha: true });
        let raf = null;
        let particles = [];
        let DPR = Math.max(1, window.devicePixelRatio || 1);

        const config = {
            count: 48,
            baseSize: 12,
            sizeVariance: 8,
            speed: 0.18,
            attraction: 0.06,
            bgAlpha: 0.06,
        };

        const resize = () => {
            DPR = Math.max(1, window.devicePixelRatio || 1);
            canvas.width = Math.floor(window.innerWidth * DPR);
            canvas.height = Math.floor(window.innerHeight * DPR);
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;
            ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
        };

        const initParticles = () => {
            particles = [];
            for (let i = 0; i < config.count; i++) {
                const size = config.baseSize + (Math.random() - 0.5) * config.sizeVariance;
                particles.push({
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                    vx: (Math.random() - 0.5) * config.speed,
                    vy: (Math.random() - 0.5) * config.speed,
                    size,
                    wobble: Math.random() * Math.PI * 2,
                    wobbleSpeed: 0.002 + Math.random() * 0.008,
                    hueShift: Math.random() * 24 - 8,
                });
            }
        };

        const onPointerMove = (e) => {
            const x = e.clientX;
            const y = e.clientY;
            const m = mouseRef.current;
            m.vx = (x - (m.x || x)) * 0.12;
            m.vy = (y - (m.y || y)) * 0.12;
            m.x = x;
            m.y = y;
            m.active = true;
            document.documentElement.style.setProperty('--mouse-x', `${(x / window.innerWidth) * 100}%`);
            document.documentElement.style.setProperty('--mouse-y', `${(y / window.innerHeight) * 100}%`);
        };

        const onPointerLeave = () => {
            mouseRef.current.active = false;
            mouseRef.current.x = -9999;
            mouseRef.current.y = -9999;
        };

        const update = () => {
            ctx.clearRect(0, 0, canvas.width / DPR, canvas.height / DPR);
            ctx.fillStyle = `rgba(0,0,0,${config.bgAlpha})`;
            ctx.fillRect(0, 0, canvas.width / DPR, canvas.height / DPR);

            const m = mouseRef.current;

            for (let p of particles) {
                p.wobble += p.wobbleSpeed;
                p.x += p.vx + Math.sin(p.wobble) * 0.18;
                p.y += p.vy + Math.cos(p.wobble) * 0.18;

                if (m.active) {
                    const dx = m.x - p.x;
                    const dy = m.y - p.y;
                    const dist = Math.sqrt(dx * dx + dy * dy) + 0.001;
                    const influence = Math.max(0, 140 - dist) / 140;
                    if (influence > 0) {
                        p.vx += (dx / dist) * config.attraction * influence;
                        p.vy += (dy / dist) * config.attraction * influence;
                    }
                }

                p.vx *= 0.986;
                p.vy *= 0.986;

                if (p.x < -60) p.x = window.innerWidth + 60;
                if (p.x > window.innerWidth + 60) p.x = -60;
                if (p.y < -60) p.y = window.innerHeight + 60;
                if (p.y > window.innerHeight + 60) p.y = -60;

                const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 2.2);
                const blend = Math.abs(Math.sin(p.wobble * 0.5));
                const stopA = 0.46 * (0.6 + blend * 0.3);
                const stopB = 0.32 * (0.6 + blend * 0.3);
                grd.addColorStop(0, `rgba(34,153,90,${stopA})`);
                grd.addColorStop(0.45, `rgba(10,70,55,${stopB})`);
                grd.addColorStop(1, `rgba(6,50,40,0)`);
                ctx.beginPath();
                ctx.fillStyle = grd;
                ctx.globalCompositeOperation = 'lighter';
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.globalCompositeOperation = 'source-over';
            }

            raf = requestAnimationFrame(update);
        };

        resize();
        initParticles();
        window.addEventListener('resize', () => {
            resize();
            initParticles();
        });
        window.addEventListener('pointermove', onPointerMove);
        window.addEventListener('pointerdown', onPointerMove);
        window.addEventListener('pointerleave', onPointerLeave);
        raf = requestAnimationFrame(update);

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener('resize', resize);
            window.removeEventListener('pointermove', onPointerMove);
            window.removeEventListener('pointerdown', onPointerMove);
            window.removeEventListener('pointerleave', onPointerLeave);
        };
    }, []);

    return (
        <div className={`pointer-events-none fixed inset-0 z-0 ${darkMode ? 'bg-black' : 'bg-transparent'}`}>
            <div className="absolute left-16 top-14 w-96 h-72 rounded-full bg-emerald-700/12 blur-3xl forest-blob" />
            <div className="absolute right-20 top-28 w-72 h-56 rounded-full bg-slate-800/10 blur-3xl forest-blob delayed" />

            {/* canvas for particles */}
            <canvas ref={canvasRef} className={`absolute inset-0 w-full h-full z-0 ${darkMode ? 'bg-black' : 'bg-transparent'}`} />
        </div>
    );
};

export default Background;