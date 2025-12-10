<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<div id="particles-background"></div>

<header class="site-header">
    <div class="container">
        <div class="site-branding">
            <?php 
            // Mostra il custom logo se impostato, altrimenti usa il logo di default
            if (has_custom_logo()) {
                the_custom_logo();
            } else {
                $logo_path = get_template_directory_uri() . '/assets/images/logo.png';
                ?>
                <a href="<?php echo esc_url(home_url('/')); ?>" class="site-logo" rel="home">
                    <img src="<?php echo esc_url($logo_path); ?>" alt="<?php bloginfo('name'); ?>" class="custom-logo" />
                </a>
                <?php
            }
            ?>
        </div>

        <nav class="main-navigation">
            <?php
            wp_nav_menu(array(
                'theme_location' => 'primary',
                'container' => false,
                'fallback_cb' => false,
            ));
            ?>
        </nav>
    </div>
</header>
