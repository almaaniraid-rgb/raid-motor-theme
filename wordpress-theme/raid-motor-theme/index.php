<?php get_header(); ?>

<main class="site-main">
    <div class="hero-section">
        <div class="hero-content">
            <h1>RAID MOTOR</h1>
            <p>Ricerca Intelligente Powered by AI</p>

            <div class="search-container">
                <form class="search-form" id="raid-search-form" method="get" action="<?php echo esc_url(home_url('/')); ?>">
                    <input type="text"
                           name="s"
                           id="search-input"
                           class="search-input"
                           placeholder="Cerca informazioni..."
                           required>
                    <button type="submit" class="search-button">Cerca</button>
                </form>
            </div>
        </div>
    </div>

    <?php if (have_posts()) : ?>
        <div class="results-container">
            <h2>Risultati della ricerca</h2>

            <?php while (have_posts()) : the_post(); ?>
                <article class="result-card">
                    <h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
                    <div class="result-meta">
                        Pubblicato il <?php echo get_the_date(); ?> da <?php the_author(); ?>
                    </div>
                    <div class="result-excerpt">
                        <?php the_excerpt(); ?>
                    </div>
                </article>
            <?php endwhile; ?>

            <div class="pagination">
                <?php
                the_posts_pagination(array(
                    'mid_size' => 2,
                    'prev_text' => __('&laquo; Precedente', 'raid-motor'),
                    'next_text' => __('Successivo &raquo;', 'raid-motor'),
                ));
                ?>
            </div>
        </div>
    <?php else : ?>
        <div class="no-results">
            <h2>Nessun risultato trovato</h2>
            <p>Prova con una ricerca diversa.</p>
        </div>
    <?php endif; ?>
</main>

<?php get_footer(); ?>
