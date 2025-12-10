<?php
/**
 * Template per l'archivio dei servizi
 * 
 * Questo template viene utilizzato per mostrare la lista
 * di tutti i post di tipo 'service' (Servizi).
 * 
 * @package RAID MOTOR
 */

get_header();
?>

<main class="site-main">
    <div class="container">
        
        <header class="page-header">
            <h1 class="page-title">I Nostri Servizi</h1>
            <?php
            // Mostra la descrizione dell'archivio se disponibile
            $description = get_the_archive_description();
            if ($description) {
                echo '<div class="archive-description">' . wp_kses_post($description) . '</div>';
            }
            ?>
        </header>

        <?php if (have_posts()) : ?>
            
            <div class="services-grid">
                <?php
                // Loop attraverso tutti i servizi
                while (have_posts()) :
                    the_post();
                    ?>
                    
                    <article id="post-<?php the_ID(); ?>" <?php post_class('service-card'); ?>>
                        
                        <?php if (has_post_thumbnail()) : ?>
                            <div class="service-thumbnail">
                                <a href="<?php the_permalink(); ?>">
                                    <?php the_post_thumbnail('medium', array('class' => 'service-image')); ?>
                                </a>
                            </div>
                        <?php endif; ?>

                        <div class="service-content">
                            <h2 class="service-title">
                                <a href="<?php the_permalink(); ?>">
                                    <?php the_title(); ?>
                                </a>
                            </h2>

                            <?php if (has_excerpt()) : ?>
                                <div class="service-excerpt">
                                    <?php the_excerpt(); ?>
                                </div>
                            <?php else : ?>
                                <div class="service-excerpt">
                                    <?php echo wp_trim_words(get_the_content(), 20, '...'); ?>
                                </div>
                            <?php endif; ?>

                            <div class="service-footer">
                                <a href="<?php the_permalink(); ?>" class="service-link">
                                    Scopri di più →
                                </a>
                            </div>
                        </div>

                    </article>

                <?php
                endwhile;
                ?>
            </div>

            <?php
            // Paginazione
            the_posts_pagination(array(
                'mid_size'  => 2,
                'prev_text' => '← Precedenti',
                'next_text' => 'Successivi →',
            ));
            ?>

        <?php else : ?>
            
            <div class="no-services">
                <p>Nessun servizio disponibile al momento.</p>
            </div>

        <?php endif; ?>
        
    </div>
</main>

<?php
get_footer();
