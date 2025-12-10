<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<div id="particles-background"></div>

<header class="site-header">
    <div class="container">
        <div class="site-branding">
            <?php
            // Mostra il logo personalizzato se disponibile
            if (has_custom_logo()) {
                the_custom_logo();
            } else {
                // Fallback al logo del tema
                $logo_url = get_template_directory_uri() . '/assets/images/logo.png';
                ?>
                <a href="<?php echo esc_url(home_url('/')); ?>" class="custom-logo-link" rel="home">
                    <img src="<?php echo esc_url($logo_url); ?>" class="custom-logo" alt="<?php bloginfo('name'); ?>">
                </a>
                <?php
            }
            ?>
            
            <h1 class="site-title">
                <a href="<?php echo esc_url(home_url('/')); ?>" rel="home">
                    Raid Motor
                </a>
            </h1>
        </div>

        <nav class="main-navigation" role="navigation" aria-label="<?php esc_attr_e('Menu principale', 'raid-motor'); ?>">
            <?php
            wp_nav_menu(array(
                'theme_location' => 'primary',
                'container' => false,
                'menu_class' => 'primary-menu',
                'fallback_cb' => false,
            ));
            ?>
        </nav>
    </div>
    
    <!-- Canvas Three.js con logo 3D -->
    <div class="header-three-logo">
        <?php echo do_shortcode('[rm_three_logo height="360"]'); ?>
    </div>
</header>

<main id="content" class="site-main" role="main">
