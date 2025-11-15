<?php get_header(); ?>

<main class="site-main">
    <?php while (have_posts()) : the_post(); ?>
        <article class="page-content">
            <div class="page-container">
                <header class="page-header">
                    <h1><?php the_title(); ?></h1>
                </header>

                <?php if (has_post_thumbnail()) : ?>
                    <div class="page-thumbnail">
                        <?php the_post_thumbnail('large'); ?>
                    </div>
                <?php endif; ?>

                <div class="page-text">
                    <?php the_content(); ?>
                </div>
            </div>
        </article>
    <?php endwhile; ?>
</main>

<style>
.page-content {
    max-width: 1000px;
    margin: 4rem auto;
    padding: 0 2rem;
}

.page-header {
    margin-bottom: 2rem;
    text-align: center;
}

.page-header h1 {
    font-size: 3.5rem;
    font-weight: 900;
    background: linear-gradient(135deg, var(--electric-blue), var(--purple-glow));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.page-thumbnail {
    margin-bottom: 2rem;
    border-radius: 12px;
    overflow: hidden;
}

.page-thumbnail img {
    width: 100%;
    height: auto;
    display: block;
}

.page-text {
    font-size: 1.1rem;
    line-height: 1.8;
    color: rgba(255, 255, 255, 0.9);
}

.page-text p {
    margin-bottom: 1.5rem;
}

.page-text h2,
.page-text h3,
.page-text h4 {
    color: var(--electric-blue);
    margin-top: 2rem;
    margin-bottom: 1rem;
}

.page-text ul,
.page-text ol {
    margin-left: 2rem;
    margin-bottom: 1.5rem;
}

.page-text li {
    margin-bottom: 0.5rem;
}

.page-text a {
    color: var(--electric-blue);
    text-decoration: none;
    transition: color 0.3s;
}

.page-text a:hover {
    color: var(--purple-glow);
}
</style>

<?php get_footer(); ?>
