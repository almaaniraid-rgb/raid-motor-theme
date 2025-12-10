/**
 * RAID MOTOR Theme - JavaScript principale
 * Gestisce interazioni e funzionalità del tema
 */

(function($) {
    'use strict';
    
    // Verifica se l'utente preferisce movimento ridotto
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    /**
     * Inizializzazione tema
     */
    $(document).ready(function() {
        initMobileMenu();
        initSmoothScroll();
        initLazyLoad();
        initAccessibility();
        
        // Log per debug
        console.log('RAID MOTOR Theme caricato');
        if (prefersReducedMotion) {
            console.log('Modalità movimento ridotto attiva');
        }
    });
    
    /**
     * Menu mobile responsive
     */
    function initMobileMenu() {
        // Crea toggle button se non esiste
        if (!$('.menu-toggle').length) {
            $('.site-header .container').prepend(
                '<button class="menu-toggle" aria-label="Menu" aria-expanded="false">' +
                '<span class="menu-icon"></span>' +
                '</button>'
            );
        }
        
        $('.menu-toggle').on('click', function() {
            const $nav = $('.main-navigation');
            const isExpanded = $(this).attr('aria-expanded') === 'true';
            
            $(this).attr('aria-expanded', !isExpanded);
            $nav.toggleClass('toggled');
            $('body').toggleClass('menu-open');
        });
        
        // Chiudi menu su ESC
        $(document).on('keydown', function(e) {
            if (e.key === 'Escape' && $('.main-navigation').hasClass('toggled')) {
                $('.menu-toggle').trigger('click');
            }
        });
        
        // Chiudi menu quando si clicca su un link (mobile)
        $('.main-navigation a').on('click', function() {
            if ($(window).width() < 768) {
                $('.menu-toggle').trigger('click');
            }
        });
    }
    
    /**
     * Scroll fluido per ancoraggi
     */
    function initSmoothScroll() {
        if (prefersReducedMotion) return;
        
        $('a[href*="#"]:not([href="#"])').on('click', function(e) {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') &&
                location.hostname === this.hostname) {
                
                const target = $(this.hash);
                const $target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                
                if ($target.length) {
                    e.preventDefault();
                    $('html, body').animate({
                        scrollTop: $target.offset().top - 80
                    }, 800);
                    
                    // Focus sull'elemento per accessibilità
                    $target.focus();
                }
            }
        });
    }
    
    /**
     * Lazy loading per immagini
     */
    function initLazyLoad() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver(function(entries, observer) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.removeAttribute('data-src');
                        }
                        imageObserver.unobserve(img);
                    }
                });
            });
            
            document.querySelectorAll('img[data-src]').forEach(function(img) {
                imageObserver.observe(img);
            });
        }
    }
    
    /**
     * Migliora accessibilità
     */
    function initAccessibility() {
        // Aggiungi skip link se non esiste
        if (!$('.skip-link').length) {
            $('body').prepend(
                '<a class="skip-link screen-reader-text" href="#content">Salta al contenuto</a>'
            );
        }
        
        // Gestisci focus visibile solo con tastiera
        $('body').on('mousedown', function() {
            $('body').addClass('using-mouse');
        });
        
        $(document).on('keydown', function(e) {
            if (e.key === 'Tab') {
                $('body').removeClass('using-mouse');
            }
        });
        
        // Aria labels dinamici
        updateAriaLabels();
    }
    
    /**
     * Aggiorna aria labels
     */
    function updateAriaLabels() {
        // Menu corrente
        $('.main-navigation .current-menu-item a').attr('aria-current', 'page');
        
        // Link esterni
        $('a[target="_blank"]').each(function() {
            if (!$(this).attr('aria-label')) {
                $(this).attr('aria-label', $(this).text() + ' (si apre in una nuova finestra)');
            }
        });
    }
    
    /**
     * Animazione scroll reveal (solo se non prefer-reduced-motion)
     */
    if (!prefersReducedMotion && 'IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });
        
        $(document).ready(function() {
            $('.service-card, .agent-card, .hero-content').each(function() {
                $(this).addClass('reveal-on-scroll');
                revealObserver.observe(this);
            });
        });
    }
    
    /**
     * Gestione performance su mobile
     */
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        // Riduci effetti su mobile
        $('body').addClass('is-mobile');
        
        // Disabilita hover su mobile
        $('*').on('touchstart', function() {
            $(this).addClass('touch-device');
        });
    }
    
    /**
     * Utility: debounce function
     */
    function debounce(func, wait) {
        let timeout;
        return function executedFunction() {
            const context = this;
            const args = arguments;
            const later = function() {
                timeout = null;
                func.apply(context, args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    /**
     * Gestione resize window
     */
    $(window).on('resize', debounce(function() {
        // Chiudi menu mobile su resize
        if ($(window).width() >= 768 && $('.main-navigation').hasClass('toggled')) {
            $('.menu-toggle').trigger('click');
        }
    }, 250));
    
})(jQuery);

/**
 * CSS per animazioni reveal
 */
const revealStyles = `
    .reveal-on-scroll {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .reveal-on-scroll.revealed {
        opacity: 1;
        transform: translateY(0);
    }
    
    @media (prefers-reduced-motion: reduce) {
        .reveal-on-scroll {
            opacity: 1;
            transform: none;
            transition: none;
        }
    }
`;

// Aggiungi stili al documento
if (document.head && !document.getElementById('reveal-styles')) {
    const style = document.createElement('style');
    style.id = 'reveal-styles';
    style.textContent = revealStyles;
    document.head.appendChild(style);
}
