<?php
/**
 * Template per la visualizzazione di un singolo servizio
 * 
 * Questo template viene utilizzato per mostrare i dettagli
 * di un singolo post di tipo 'service' (Servizio).
 * 
 * @package RAID MOTOR
 */

get_header();
?>

<main class="site-main">
    <div class="container">
        <?php
        while (have_posts()) :
            the_post();
            ?>
            <article id="post-<?php the_ID(); ?>" <?php post_class('service-single'); ?>>
                
                <header class="entry-header">
                    <h1 class="entry-title"><?php the_title(); ?></h1>
                </header>

                <?php if (has_post_thumbnail()) : ?>
                    <div class="service-thumbnail">
                        <?php the_post_thumbnail('large', array('class' => 'service-image')); ?>
                    </div>
                <?php endif; ?>

                <div class="entry-content">
                    <?php the_content(); ?>
                </div>

                <?php if (get_the_excerpt()) : ?>
                    <div class="service-excerpt">
                        <h3>Riepilogo</h3>
                        <?php the_excerpt(); ?>
                    </div>
                <?php endif; ?>

                <footer class="entry-footer">
                    <div class="service-meta">
                        <span class="posted-on">
                            Pubblicato il <?php echo get_the_date(); ?>
                        </span>
                    </div>
                </footer>

            </article>

            <nav class="service-navigation">
                <div class="nav-previous">
                    <?php 
                    $prev_post = get_previous_post();
                    if ($prev_post) {
                        echo '<a href="' . get_permalink($prev_post->ID) . '">← ' . esc_html($prev_post->post_title) . '</a>';
                    }
                    ?>
                </div>
                <div class="nav-next">
                    <?php 
                    $next_post = get_next_post();
                    if ($next_post) {
                        echo '<a href="' . get_permalink($next_post->ID) . '">' . esc_html($next_post->post_title) . ' →</a>';
                    }
                    ?>
                </div>
            </nav>

        <?php
        endwhile;
        ?>
    </div>
</main>

<?php
get_footer();
