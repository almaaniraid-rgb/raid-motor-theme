<?php
/**
 * Template per archivio Agenti AI
 * 
 * @package RAID_MOTOR
 */

get_header();
?>

<div class="container" style="max-width: 1400px; margin: 0 auto; padding: 3rem 2rem;">
    
    <header class="archive-header" style="text-align: center; margin-bottom: 3rem;">
        <h1 class="archive-title" style="font-size: clamp(2.5rem, 6vw, 4rem); font-weight: 900; margin-bottom: 1rem; background: linear-gradient(135deg, #00d9ff, #b24bf3); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
            Agenti AI
        </h1>
        <p class="archive-description" style="font-size: 1.2rem; color: rgba(255, 255, 255, 0.8); max-width: 800px; margin: 0 auto;">
            Scopri i nostri agenti AI intelligenti per la ricerca e l'analisi
        </p>
    </header>
    
    <?php if (have_posts()) : ?>
        <div class="agents-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 2rem;">
            <?php while (have_posts()) : the_post(); ?>
                <article id="post-<?php the_ID(); ?>" <?php post_class('agent-card'); ?>>
                    <?php if (has_post_thumbnail()) : ?>
                        <a href="<?php the_permalink(); ?>" class="agent-thumbnail" style="display: block; margin-bottom: 1.5rem; border-radius: 12px; overflow: hidden; text-align: center;">
                            <?php the_post_thumbnail('medium', array('style' => 'width: 100%; max-width: 300px; height: auto; margin: 0 auto;')); ?>
                        </a>
                    <?php endif; ?>
                    
                    <header class="agent-header">
                        <h2 class="agent-title" style="margin-bottom: 0.5rem; text-align: center;">
                            <a href="<?php the_permalink(); ?>" style="color: #00d9ff; text-decoration: none; font-size: 1.5rem;">
                                <?php the_title(); ?>
                            </a>
                        </h2>
                        
                        <div class="agent-meta" style="color: rgba(255, 255, 255, 0.6); font-size: 0.9rem; margin-bottom: 1rem; text-align: center;">
                            <time datetime="<?php echo get_the_date('c'); ?>">
                                <?php echo get_the_date(); ?>
                            </time>
                        </div>
                    </header>
                    
                    <div class="agent-excerpt" style="color: rgba(255, 255, 255, 0.8); line-height: 1.6; margin-bottom: 1rem; text-align: center;">
                        <?php the_excerpt(); ?>
                    </div>
                    
                    <?php
                    // Mostra modello agente se esiste
                    $agent_model = get_post_meta(get_the_ID(), 'agent_model', true);
                    if ($agent_model) : ?>
                        <div class="agent-model" style="color: rgba(255, 255, 255, 0.6); font-size: 0.9rem; margin-bottom: 1rem; text-align: center;">
                            <strong>Modello:</strong> <?php echo esc_html($agent_model); ?>
                        </div>
                    <?php endif; ?>
                    
                    <footer class="agent-footer" style="text-align: center;">
                        <a href="<?php the_permalink(); ?>" class="btn" style="display: inline-block; padding: 0.75rem 1.5rem; background: linear-gradient(135deg, #00d9ff, #b24bf3); color: white; text-decoration: none; border-radius: 8px; font-weight: 600;">
                            Scopri di più &rarr;
                        </a>
                    </footer>
                </article>
            <?php endwhile; ?>
        </div>
        
        <div class="pagination" style="margin-top: 3rem; text-align: center;">
            <?php
            the_posts_pagination(array(
                'mid_size' => 2,
                'prev_text' => __('&larr; Precedente', 'raid-motor'),
                'next_text' => __('Successivo &rarr;', 'raid-motor'),
            ));
            ?>
        </div>
        
    <?php else : ?>
        <div class="no-results" style="text-align: center; padding: 4rem 2rem;">
            <h2 style="color: rgba(255, 255, 255, 0.8); font-size: 1.5rem;">Nessun agente trovato</h2>
            <p style="color: rgba(255, 255, 255, 0.6);">Al momento non ci sono agenti disponibili.</p>
        </div>
    <?php endif; ?>
    
</div>

<?php
get_footer();
