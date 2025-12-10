<?php
/**
 * Template per visualizzare singolo Servizio
 * 
 * @package RAID_MOTOR
 */

get_header();
?>

<article id="post-<?php the_ID(); ?>" <?php post_class('service-single'); ?>>
    <div class="container" style="max-width: 1200px; margin: 0 auto; padding: 3rem 2rem;">
        
        <?php if (has_post_thumbnail()) : ?>
            <div class="service-thumbnail" style="margin-bottom: 2rem; border-radius: 16px; overflow: hidden;">
                <?php the_post_thumbnail('large', array('style' => 'width: 100%; height: auto;')); ?>
            </div>
        <?php endif; ?>
        
        <header class="service-header" style="margin-bottom: 2rem;">
            <h1 class="service-title" style="font-size: clamp(2rem, 5vw, 3rem); margin-bottom: 1rem; background: linear-gradient(135deg, #00d9ff, #b24bf3); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
                <?php the_title(); ?>
            </h1>
            
            <?php if (has_excerpt()) : ?>
                <div class="service-excerpt" style="font-size: 1.2rem; color: rgba(255, 255, 255, 0.8); margin-bottom: 1.5rem;">
                    <?php the_excerpt(); ?>
                </div>
            <?php endif; ?>
            
            <div class="service-meta" style="color: rgba(255, 255, 255, 0.6); font-size: 0.9rem;">
                <time datetime="<?php echo get_the_date('c'); ?>">
                    <?php echo get_the_date(); ?>
                </time>
            </div>
        </header>
        
        <div class="service-content entry-content" style="color: rgba(255, 255, 255, 0.8); line-height: 1.8; font-size: 1.1rem;">
            <?php
            while (have_posts()) :
                the_post();
                the_content();
            endwhile;
            ?>
        </div>
        
        <footer class="service-footer" style="margin-top: 3rem; padding-top: 2rem; border-top: 2px solid rgba(0, 217, 255, 0.3);">
            <div class="service-navigation" style="display: flex; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
                <?php
                $prev_post = get_previous_post();
                $next_post = get_next_post();
                
                if ($prev_post) : ?>
                    <a href="<?php echo get_permalink($prev_post); ?>" class="btn" style="flex: 1; min-width: 200px;">
                        &larr; <?php echo esc_html($prev_post->post_title); ?>
                    </a>
                <?php endif; ?>
                
                <a href="<?php echo get_post_type_archive_link('service'); ?>" class="btn" style="flex: 1; min-width: 200px; text-align: center;">
                    Tutti i Servizi
                </a>
                
                <?php if ($next_post) : ?>
                    <a href="<?php echo get_permalink($next_post); ?>" class="btn" style="flex: 1; min-width: 200px; text-align: right;">
                        <?php echo esc_html($next_post->post_title); ?> &rarr;
                    </a>
                <?php endif; ?>
            </div>
        </footer>
    </div>
</article>

<?php
get_footer();
