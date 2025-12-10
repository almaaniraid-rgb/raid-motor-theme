<?php
/**
 * Template Part: Hero Section Animato
 * Sezione hero con animazioni e contenuti dinamici
 * 
 * @package RAID_MOTOR
 */
?>

<section class="hero-animated" role="banner">
    <div class="hero-content">
        <h1 class="hero-title">
            <?php 
            // Mostra il titolo della pagina o un titolo predefinito
            if (is_front_page()) {
                echo esc_html(get_bloginfo('name'));
            } else {
                echo esc_html(get_the_title());
            }
            ?>
        </h1>
        
        <p class="hero-description">
            <?php
            // Mostra la descrizione del sito o l'excerpt della pagina
            if (is_front_page()) {
                echo esc_html(get_bloginfo('description'));
            } elseif (has_excerpt()) {
                echo esc_html(get_the_excerpt());
            } else {
                echo 'Ricerca AI avanzata con tecnologia multi-origine';
            }
            ?>
        </p>
        
        <?php if (is_front_page()) : ?>
            <div class="hero-actions" style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; margin-top: 2rem;">
                <a href="#content" class="btn btn-primary" style="display: inline-block; padding: 1rem 2rem; background: linear-gradient(135deg, #00d9ff, #b24bf3); color: white; text-decoration: none; border-radius: 8px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">
                    Inizia Ora
                </a>
                <a href="<?php echo esc_url(get_permalink(get_page_by_path('chi-siamo'))); ?>" class="btn btn-secondary" style="display: inline-block; padding: 1rem 2rem; background: transparent; color: #00d9ff; text-decoration: none; border: 2px solid #00d9ff; border-radius: 8px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">
                    Scopri di Più
                </a>
            </div>
        <?php endif; ?>
        
        <?php
        // Aggiungi lo shortcode del logo 3D se siamo nella home
        if (is_front_page()) {
            echo '<div class="hero-three-logo" style="margin-top: 3rem;">';
            echo do_shortcode('[rm_three_logo height="400"]');
            echo '</div>';
        }
        ?>
    </div>
    
    <?php if (!is_front_page() && has_post_thumbnail()) : ?>
        <div class="hero-background" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: -1; opacity: 0.2; overflow: hidden;">
            <?php the_post_thumbnail('full', array('style' => 'width: 100%; height: 100%; object-fit: cover;')); ?>
        </div>
    <?php endif; ?>
</section>

<style>
/* Stili specifici per hero-animated */
.hero-animated {
    position: relative;
    min-height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 4rem 2rem;
    overflow: hidden;
}

.hero-content {
    position: relative;
    z-index: 10;
    max-width: 1000px;
    margin: 0 auto;
}

.hero-title {
    font-size: clamp(2.5rem, 8vw, 5rem);
    font-weight: 900;
    margin-bottom: 1.5rem;
    background: linear-gradient(135deg, #00d9ff, #b24bf3, #ff6b35);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1.2;
    animation: fadeInUp 1s ease-out;
}

.hero-description {
    font-size: clamp(1.1rem, 3vw, 1.5rem);
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 2rem;
    animation: fadeInUp 1s ease-out 0.2s both;
}

.hero-actions {
    animation: fadeInUp 1s ease-out 0.4s both;
}

.btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 217, 255, 0.5);
    transition: all 0.3s ease;
}

.btn-secondary:hover {
    background: rgba(0, 217, 255, 0.1);
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Disabilita animazioni per prefer-reduced-motion */
@media (prefers-reduced-motion: reduce) {
    .hero-title,
    .hero-description,
    .hero-actions {
        animation: none;
        opacity: 1;
        transform: none;
    }
    
    .btn:hover {
        transform: none;
    }
}

/* Responsive */
@media (max-width: 768px) {
    .hero-animated {
        min-height: 50vh;
        padding: 2rem 1rem;
    }
    
    .hero-actions {
        flex-direction: column;
    }
    
    .btn {
        width: 100%;
        max-width: 300px;
    }
}
</style>
