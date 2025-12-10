<?php
/**
 * Template per l'archivio dei Servizi
 * 
 * Questo template mostra l'elenco completo dei servizi disponibili.
 * Viene utilizzato quando si visita la pagina archivio del CPT 'service'.
 * 
 * @package RAID_MOTOR
 */

get_header();
?>

<main class="site-main services-archive">
    <div class="container">
        
        <!-- Intestazione dell'archivio -->
        <header class="archive-header">
            <h1 class="archive-title">I Nostri Servizi</h1>
            <?php if (get_the_archive_description()) : ?>
                <div class="archive-description">
                    <?php the_archive_description(); ?>
                </div>
            <?php endif; ?>
        </header>

        <?php if (have_posts()) : ?>
            
            <!-- Griglia dei servizi -->
            <div class="services-grid">
                
                <?php
                while (have_posts()) :
                    the_post();
                    ?>
                    
                    <article id="service-<?php the_ID(); ?>" <?php post_class('service-card'); ?>>
                        
                        <?php if (has_post_thumbnail()) : ?>
                            <!-- Immagine del servizio -->
                            <div class="service-thumbnail">
                                <a href="<?php the_permalink(); ?>">
                                    <?php the_post_thumbnail('medium'); ?>
                                </a>
                            </div>
                        <?php endif; ?>
                        
                        <!-- Contenuto del servizio -->
                        <div class="service-content">
                            
                            <!-- Titolo del servizio -->
                            <h2 class="service-title">
                                <a href="<?php the_permalink(); ?>">
                                    <?php the_title(); ?>
                                </a>
                            </h2>
                            
                            <?php if (has_excerpt()) : ?>
                                <!-- Estratto/anteprima del servizio -->
                                <div class="service-excerpt">
                                    <?php the_excerpt(); ?>
                                </div>
                            <?php endif; ?>
                            
                            <!-- Link per maggiori dettagli -->
                            <div class="service-link">
                                <a href="<?php the_permalink(); ?>" class="button">
                                    Scopri di più &rarr;
                                </a>
                            </div>
                            
                        </div>
                        
                    </article>
                    
                <?php
                endwhile;
                ?>
                
            </div>

            <!-- Paginazione -->
            <nav class="pagination">
                <div class="nav-previous">
                    <?php previous_posts_link('&larr; Servizi Precedenti'); ?>
                </div>
                <div class="nav-next">
                    <?php next_posts_link('Servizi Successivi &rarr;'); ?>
                </div>
            </nav>

        <?php else : ?>
            
            <!-- Messaggio quando non ci sono servizi -->
            <div class="no-services">
                <p>Nessun servizio disponibile al momento.</p>
            </div>
            
        <?php endif; ?>
        
    </div>
</main>

<?php
get_footer();
