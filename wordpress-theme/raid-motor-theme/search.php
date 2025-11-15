<?php get_header(); ?>

<main class="site-main">
    <div class="results-container">
        <h1>Risultati per: <?php echo get_search_query(); ?></h1>

        <div id="ai-summary-container"></div>

        <?php if (have_posts()) : ?>
            <div class="results-grid">
                <?php while (have_posts()) : the_post(); ?>
                    <article class="result-card">
                        <?php if (has_post_thumbnail()) : ?>
                            <div class="result-thumbnail">
                                <a href="<?php the_permalink(); ?>">
                                    <?php the_post_thumbnail('medium'); ?>
                                </a>
                            </div>
                        <?php endif; ?>

                        <div class="result-content">
                            <h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>

                            <div class="result-meta">
                                <span class="date"><?php echo get_the_date(); ?></span>
                                <span class="author">di <?php the_author(); ?></span>
                                <?php if (get_the_category()) : ?>
                                    <span class="category"><?php the_category(', '); ?></span>
                                <?php endif; ?>
                            </div>

                            <div class="result-excerpt">
                                <?php the_excerpt(); ?>
                            </div>

                            <a href="<?php the_permalink(); ?>" class="read-more">Leggi di più &rarr;</a>
                        </div>
                    </article>
                <?php endwhile; ?>
            </div>

            <div class="pagination">
                <?php
                the_posts_pagination(array(
                    'mid_size' => 2,
                    'prev_text' => __('&laquo; Precedente', 'raid-motor'),
                    'next_text' => __('Successivo &raquo;', 'raid-motor'),
                ));
                ?>
            </div>
        <?php else : ?>
            <div class="no-results">
                <h2>Nessun risultato trovato</h2>
                <p>Nessun contenuto corrisponde alla tua ricerca per "<strong><?php echo get_search_query(); ?></strong>".</p>
                <p>Prova con parole chiave diverse o più generiche.</p>

                <div class="search-container" style="margin-top: 2rem;">
                    <form class="search-form" method="get" action="<?php echo esc_url(home_url('/')); ?>">
                        <input type="text"
                               name="s"
                               class="search-input"
                               placeholder="Cerca di nuovo..."
                               value="<?php echo get_search_query(); ?>">
                        <button type="submit" class="search-button">Cerca</button>
                    </form>
                </div>
            </div>
        <?php endif; ?>
    </div>
</main>

<?php get_footer(); ?>
