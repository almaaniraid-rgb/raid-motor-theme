</main><!-- Chiusura del main aperto in header.php -->

<footer class="site-footer" role="contentinfo">
    <div class="footer-content">
        <p>&copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?>. Tutti i diritti riservati.</p>
        <p>Powered by <a href="<?php echo esc_url(home_url('/')); ?>">RAID MOTOR</a> - Ricerca Intelligente AI</p>
        <?php if (has_nav_menu('footer')) : ?>
            <nav class="footer-navigation" aria-label="<?php esc_attr_e('Menu footer', 'raid-motor'); ?>">
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'footer',
                    'container' => false,
                    'depth' => 1,
                ));
                ?>
            </nav>
        <?php endif; ?>
    </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
