<?php get_header(); ?>

<main class="site-main">
    <?php while (have_posts()) : the_post(); ?>
        <article class="single-post">
            <div class="post-container">
                <header class="post-header">
                    <h1><?php the_title(); ?></h1>

                    <div class="post-meta">
                        <span class="date"><?php echo get_the_date(); ?></span>
                        <span class="author">di <?php the_author(); ?></span>
                        <?php if (get_the_category()) : ?>
                            <span class="category"><?php the_category(', '); ?></span>
                        <?php endif; ?>
                    </div>
                </header>

                <?php if (has_post_thumbnail()) : ?>
                    <div class="post-thumbnail">
                        <?php the_post_thumbnail('large'); ?>
                    </div>
                <?php endif; ?>

                <div class="post-content">
                    <?php the_content(); ?>
                </div>

                <?php if (get_the_tags()) : ?>
                    <div class="post-tags">
                        <?php the_tags('<strong>Tags:</strong> ', ', '); ?>
                    </div>
                <?php endif; ?>

                <div class="post-navigation">
                    <?php
                    previous_post_link('<div class="nav-previous">%link</div>', '&larr; %title');
                    next_post_link('<div class="nav-next">%link</div>', '%title &rarr;');
                    ?>
                </div>

                <?php if (comments_open() || get_comments_number()) : ?>
                    <div class="comments-section">
                        <?php comments_template(); ?>
                    </div>
                <?php endif; ?>
            </div>
        </article>
    <?php endwhile; ?>
</main>

<style>
.single-post {
    max-width: 900px;
    margin: 4rem auto;
    padding: 0 2rem;
}

.post-header {
    margin-bottom: 2rem;
    text-align: center;
}

.post-header h1 {
    font-size: 3rem;
    font-weight: 900;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, var(--electric-blue), var(--purple-glow));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.post-meta {
    color: rgba(255, 255, 255, 0.6);
    font-size: 1rem;
}

.post-meta span {
    margin: 0 1rem;
}

.post-thumbnail {
    margin-bottom: 2rem;
    border-radius: 12px;
    overflow: hidden;
}

.post-thumbnail img {
    width: 100%;
    height: auto;
    display: block;
}

.post-content {
    font-size: 1.1rem;
    line-height: 1.8;
    color: rgba(255, 255, 255, 0.9);
}

.post-content p {
    margin-bottom: 1.5rem;
}

.post-content h2,
.post-content h3,
.post-content h4 {
    color: var(--electric-blue);
    margin-top: 2rem;
    margin-bottom: 1rem;
}

.post-tags {
    margin-top: 3rem;
    padding-top: 2rem;
    border-top: 1px solid rgba(0, 217, 255, 0.2);
    color: rgba(255, 255, 255, 0.7);
}

.post-navigation {
    display: flex;
    justify-content: space-between;
    margin-top: 3rem;
    padding-top: 2rem;
    border-top: 1px solid rgba(0, 217, 255, 0.2);
}

.post-navigation a {
    color: var(--electric-blue);
    text-decoration: none;
    transition: color 0.3s;
}

.post-navigation a:hover {
    color: var(--purple-glow);
}

.comments-section {
    margin-top: 4rem;
}
</style>

<?php get_footer(); ?>
