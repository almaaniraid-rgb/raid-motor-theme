/**
 * RAID MOTOR - Three.js Logo 3D
 * Animazione 3D del logo con anello neon e particelle
 * Include supporto per prefer-reduced-motion
 */

(function() {
    'use strict';
    
    // Verifica se l'utente preferisce movimento ridotto
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    /**
     * Inizializza la scena Three.js con il logo 3D
     * @param {string} canvasId - ID del canvas dove renderizzare
     * @param {string} logoPath - Percorso del logo da caricare
     */
    function initThreeLogo(canvasId, logoPath) {
        const canvas = document.getElementById(canvasId);
        if (!canvas || typeof THREE === 'undefined') {
            console.warn('Three.js non disponibile o canvas non trovato');
            return;
        }
        
        // Configurazione scena
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            45,
            canvas.clientWidth / canvas.clientHeight,
            0.1,
            1000
        );
        camera.position.z = 8;
        
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            alpha: true,
            antialias: true
        });
        renderer.setSize(canvas.clientWidth, canvas.clientHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        
        // Gruppo per il logo
        const logoGroup = new THREE.Group();
        scene.add(logoGroup);
        
        // Carica il logo come texture
        const textureLoader = new THREE.TextureLoader();
        textureLoader.load(
            logoPath,
            function(texture) {
                // Crea sprite con il logo
                const spriteMaterial = new THREE.SpriteMaterial({
                    map: texture,
                    transparent: true,
                    opacity: 0.9
                });
                const sprite = new THREE.Sprite(spriteMaterial);
                sprite.scale.set(3, 3, 1);
                logoGroup.add(sprite);
                
                // Aggiungi glow effect al logo
                const glowGeometry = new THREE.PlaneGeometry(3.5, 3.5);
                const glowMaterial = new THREE.MeshBasicMaterial({
                    color: 0x00d9ff,
                    transparent: true,
                    opacity: 0.2,
                    side: THREE.DoubleSide
                });
                const glow = new THREE.Mesh(glowGeometry, glowMaterial);
                glow.position.z = -0.1;
                logoGroup.add(glow);
            },
            undefined,
            function(error) {
                console.error('Errore caricamento logo:', error);
            }
        );
        
        // Crea anello neon attorno al logo
        const ringGeometry = new THREE.TorusGeometry(2.5, 0.08, 16, 100);
        const ringMaterial = new THREE.MeshBasicMaterial({
            color: 0x00d9ff,
            transparent: true,
            opacity: 0.8
        });
        const ring = new THREE.Mesh(ringGeometry, ringMaterial);
        ring.rotation.x = Math.PI / 2;
        logoGroup.add(ring);
        
        // Secondo anello interno
        const ring2Geometry = new THREE.TorusGeometry(1.8, 0.06, 16, 100);
        const ring2Material = new THREE.MeshBasicMaterial({
            color: 0xb24bf3,
            transparent: true,
            opacity: 0.6
        });
        const ring2 = new THREE.Mesh(ring2Geometry, ring2Material);
        ring2.rotation.x = Math.PI / 2;
        logoGroup.add(ring2);
        
        // Sistema di particelle
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 200;
        const posArray = new Float32Array(particlesCount * 3);
        
        // Genera posizioni casuali per le particelle
        for (let i = 0; i < particlesCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 10;
        }
        
        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        
        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.03,
            color: 0x00d9ff,
            transparent: true,
            opacity: 0.6,
            blending: THREE.AdditiveBlending
        });
        
        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesMesh);
        
        // Luci per effetto neon
        const light1 = new THREE.PointLight(0x00d9ff, 1, 10);
        light1.position.set(2, 2, 3);
        scene.add(light1);
        
        const light2 = new THREE.PointLight(0xb24bf3, 1, 10);
        light2.position.set(-2, -2, 3);
        scene.add(light2);
        
        // Variabili per animazione
        let animationId;
        let time = 0;
        
        // Loop di animazione
        function animate() {
            animationId = requestAnimationFrame(animate);
            time += 0.01;
            
            // Animazioni ridotte se l'utente preferisce
            const animationSpeed = prefersReducedMotion ? 0.2 : 1;
            
            // Rotazione lenta del logo
            if (!prefersReducedMotion) {
                logoGroup.rotation.y = time * 0.3 * animationSpeed;
            }
            
            // Pulsazione anelli
            const pulse = Math.sin(time * 2) * 0.05 + 1;
            ring.scale.set(pulse, pulse, pulse);
            ring2.scale.set(pulse * 0.95, pulse * 0.95, pulse * 0.95);
            
            // Rotazione anelli
            ring.rotation.z = time * 0.5 * animationSpeed;
            ring2.rotation.z = -time * 0.7 * animationSpeed;
            
            // Movimento particelle
            if (!prefersReducedMotion) {
                particlesMesh.rotation.y = time * 0.1 * animationSpeed;
                
                // Movimento ondulatorio delle particelle
                const positions = particlesGeometry.attributes.position.array;
                for (let i = 0; i < positions.length; i += 3) {
                    const x = positions[i];
                    const y = positions[i + 1];
                    positions[i + 2] = Math.sin(time + x * 0.5) * Math.cos(time + y * 0.5) * 0.3;
                }
                particlesGeometry.attributes.position.needsUpdate = true;
            }
            
            renderer.render(scene, camera);
        }
        
        // Gestione resize
        function handleResize() {
            const width = canvas.clientWidth;
            const height = canvas.clientHeight;
            
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        }
        
        window.addEventListener('resize', handleResize);
        
        // Avvia animazione
        animate();
        
        // Cleanup function
        return function cleanup() {
            if (animationId) {
                cancelAnimationFrame(animationId);
            }
            window.removeEventListener('resize', handleResize);
            renderer.dispose();
        };
    }
    
    // Espone la funzione globalmente
    window.RaidMotorThreeLogo = {
        init: initThreeLogo
    };
    
    // Auto-inizializzazione quando il DOM è pronto
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', autoInit);
    } else {
        autoInit();
    }
    
    function autoInit() {
        // Cerca tutti i canvas con classe three-logo-canvas
        const canvases = document.querySelectorAll('.three-logo-canvas');
        canvases.forEach(function(canvas) {
            if (canvas.dataset.logo) {
                initThreeLogo(canvas.id, canvas.dataset.logo);
            }
        });
    }
})();
