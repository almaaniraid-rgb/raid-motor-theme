<?php
/**
 * Template per la visualizzazione di un singolo Servizio
 * 
 * Questo template viene utilizzato per mostrare i dettagli completi
 * di un singolo servizio del Custom Post Type 'service'.
 * 
 * @package RAID_MOTOR
 */

get_header();
?>

<main class="site-main service-single">
    <div class="container">
        <?php
        while (have_posts()) :
            the_post();
            ?>
            
            <article id="service-<?php the_ID(); ?>" <?php post_class('service-content'); ?>>
                
                <!-- Titolo del servizio -->
                <header class="entry-header">
                    <h1 class="entry-title"><?php the_title(); ?></h1>
                </header>

                <?php if (has_post_thumbnail()) : ?>
                    <!-- Immagine in evidenza del servizio -->
                    <div class="service-thumbnail">
                        <?php the_post_thumbnail('large'); ?>
                    </div>
                <?php endif; ?>

                <!-- Contenuto completo del servizio -->
                <div class="entry-content">
                    <?php the_content(); ?>
                </div>

                <?php if (get_the_excerpt()) : ?>
                    <!-- Riepilogo/estratto del servizio -->
                    <div class="service-excerpt">
                        <h3><?php _e('Riepilogo', 'raid-motor'); ?></h3>
                        <?php the_excerpt(); ?>
                    </div>
                <?php endif; ?>

                <!-- Navigazione tra servizi -->
                <nav class="service-navigation">
                    <div class="nav-previous">
                        <?php previous_post_link('%link', '&larr; ' . __('Servizio Precedente', 'raid-motor')); ?>
                    </div>
                    <div class="nav-next">
                        <?php next_post_link('%link', __('Servizio Successivo', 'raid-motor') . ' &rarr;'); ?>
                    </div>
                </nav>

                <!-- Link per tornare all'archivio -->
                <div class="back-to-services">
                    <a href="<?php echo esc_url(get_post_type_archive_link('service')); ?>" class="button">
                        &larr; <?php _e('Torna a tutti i Servizi', 'raid-motor'); ?>
                    </a>
                </div>

            </article>

        <?php
        endwhile;
        ?>
    </div>
</main>

<?php
get_footer();
