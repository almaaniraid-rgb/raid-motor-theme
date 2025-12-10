<?php
/**
 * RAID MOTOR Theme Functions
 * Tema WordPress con design neon 3D moderno e integrazione Three.js
 */

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Setup del tema - supporti e funzionalità
 */
function raid_motor_setup() {
    // Supporto per tag title
    add_theme_support('title-tag');
    
    // Supporto per immagini in evidenza
    add_theme_support('post-thumbnails');
    
    // Supporto HTML5
    add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption'));
    
    // Supporto per logo personalizzato
    add_theme_support('custom-logo', array(
        'height'      => 100,
        'width'       => 100,
        'flex-height' => true,
        'flex-width'  => true,
    ));
    
    // Supporto per editor a blocchi
    add_theme_support('align-wide');
    add_theme_support('responsive-embeds');

    // Registra menu di navigazione
    register_nav_menus(array(
        'primary' => __('Menu Principale', 'raid-motor'),
    ));
}
add_action('after_setup_theme', 'raid_motor_setup');

/**
 * Carica gli script e gli stili del tema
 */
function raid_motor_scripts() {
    // Stile principale del tema
    wp_enqueue_style('raid-motor-style', get_stylesheet_uri(), array(), '1.0.0');
    
    // Stili aggiuntivi del tema
    wp_enqueue_style('raid-motor-theme-base', get_template_directory_uri() . '/assets/css/theme-base.css', array(), '1.0.0');
    
    // Three.js per animazioni 3D
    wp_enqueue_script('threejs', 'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.min.js', array(), '0.160.0', true);
    
    // Script Three.js per il logo
    wp_enqueue_script('raid-motor-three-logo', get_template_directory_uri() . '/assets/js/three-logo.js', array('threejs'), '1.0.0', true);
    
    // Script principale del tema
    wp_enqueue_script('raid-motor-theme', get_template_directory_uri() . '/assets/js/theme.js', array('jquery'), '1.0.0', true);
    
    // Script legacy (se esistono)
    if (file_exists(get_template_directory() . '/js/particles.js')) {
        wp_enqueue_script('raid-motor-particles', get_template_directory_uri() . '/js/particles.js', array(), '1.0.0', true);
    }
    if (file_exists(get_template_directory() . '/js/main.js')) {
        wp_enqueue_script('raid-motor-main', get_template_directory_uri() . '/js/main.js', array('jquery'), '1.0.0', true);
    }

    // Localizzazione per AJAX
    wp_localize_script('raid-motor-theme', 'raidMotor', array(
        'ajaxurl' => admin_url('admin-ajax.php'),
        'nonce' => wp_create_nonce('raid_motor_nonce'),
        'apiEndpoint' => get_option('raid_motor_api_endpoint', ''),
        'themeUrl' => get_template_directory_uri(),
    ));
}
add_action('wp_enqueue_scripts', 'raid_motor_scripts');

function raid_motor_theme_options() {
    add_menu_page(
        'RAID MOTOR Settings',
        'RAID MOTOR',
        'manage_options',
        'raid-motor-settings',
        'raid_motor_settings_page',
        'dashicons-search'
    );
}
add_action('admin_menu', 'raid_motor_theme_options');

function raid_motor_settings_page() {
    if (isset($_POST['raid_motor_save_settings'])) {
        check_admin_referer('raid_motor_settings');
        update_option('raid_motor_api_endpoint', sanitize_text_field($_POST['raid_motor_api_endpoint']));
        echo '<div class="notice notice-success"><p>Impostazioni salvate!</p></div>';
    }

    $api_endpoint = get_option('raid_motor_api_endpoint', '');
    ?>
    <div class="wrap">
        <h1>Impostazioni RAID MOTOR</h1>
        <form method="post" action="">
            <?php wp_nonce_field('raid_motor_settings'); ?>
            <table class="form-table">
                <tr>
                    <th scope="row">
                        <label for="raid_motor_api_endpoint">Endpoint API n8n</label>
                    </th>
                    <td>
                        <input type="url"
                               id="raid_motor_api_endpoint"
                               name="raid_motor_api_endpoint"
                               value="<?php echo esc_attr($api_endpoint); ?>"
                               class="regular-text"
                               placeholder="https://your-n8n-instance.com/webhook/search">
                        <p class="description">Inserisci l'URL del webhook n8n per la ricerca AI</p>
                    </td>
                </tr>
            </table>
            <?php submit_button('Salva Impostazioni', 'primary', 'raid_motor_save_settings'); ?>
        </form>
    </div>
    <?php
}

function raid_motor_ajax_search() {
    check_ajax_referer('raid_motor_nonce', 'nonce');

    $query = sanitize_text_field($_POST['query']);
    $api_endpoint = get_option('raid_motor_api_endpoint', '');

    if (empty($api_endpoint)) {
        wp_send_json_error(array('message' => 'API endpoint non configurato'));
        return;
    }

    $response = wp_remote_post($api_endpoint, array(
        'body' => json_encode(array('query' => $query)),
        'headers' => array('Content-Type' => 'application/json'),
        'timeout' => 30,
    ));

    if (is_wp_error($response)) {
        wp_send_json_error(array('message' => $response->get_error_message()));
        return;
    }

    $body = wp_remote_retrieve_body($response);
    $data = json_decode($body, true);

    wp_send_json_success($data);
}
add_action('wp_ajax_raid_motor_search', 'raid_motor_ajax_search');
add_action('wp_ajax_nopriv_raid_motor_search', 'raid_motor_ajax_search');

function raid_motor_custom_excerpt_length($length) {
    return 30;
}
add_filter('excerpt_length', 'raid_motor_custom_excerpt_length');

/**
 * Registra Custom Post Type: Agent
 */
function raid_motor_register_agent_cpt() {
    $labels = array(
        'name'                  => 'Agenti',
        'singular_name'         => 'Agente',
        'menu_name'             => 'Agenti AI',
        'add_new'               => 'Aggiungi Nuovo',
        'add_new_item'          => 'Aggiungi Nuovo Agente',
        'edit_item'             => 'Modifica Agente',
        'new_item'              => 'Nuovo Agente',
        'view_item'             => 'Visualizza Agente',
        'search_items'          => 'Cerca Agenti',
        'not_found'             => 'Nessun agente trovato',
        'not_found_in_trash'    => 'Nessun agente nel cestino',
    );

    $args = array(
        'labels'                => $labels,
        'public'                => true,
        'has_archive'           => true,
        'publicly_queryable'    => true,
        'show_ui'               => true,
        'show_in_menu'          => true,
        'show_in_rest'          => true, // Supporto per Gutenberg e REST API
        'menu_icon'             => 'dashicons-admin-users',
        'supports'              => array('title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'),
        'rewrite'               => array('slug' => 'agent'),
        'capability_type'       => 'post',
    );

    register_post_type('agent', $args);
}
add_action('init', 'raid_motor_register_agent_cpt');

/**
 * Registra Custom Post Type: Service
 */
function raid_motor_register_service_cpt() {
    $labels = array(
        'name'                  => 'Servizi',
        'singular_name'         => 'Servizio',
        'menu_name'             => 'Servizi',
        'add_new'               => 'Aggiungi Nuovo',
        'add_new_item'          => 'Aggiungi Nuovo Servizio',
        'edit_item'             => 'Modifica Servizio',
        'new_item'              => 'Nuovo Servizio',
        'view_item'             => 'Visualizza Servizio',
        'search_items'          => 'Cerca Servizi',
        'not_found'             => 'Nessun servizio trovato',
        'not_found_in_trash'    => 'Nessun servizio nel cestino',
    );

    $args = array(
        'labels'                => $labels,
        'public'                => true,
        'has_archive'           => true,
        'publicly_queryable'    => true,
        'show_ui'               => true,
        'show_in_menu'          => true,
        'show_in_rest'          => true, // Supporto per Gutenberg e REST API
        'menu_icon'             => 'dashicons-admin-tools',
        'supports'              => array('title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'),
        'rewrite'               => array('slug' => 'service'),
        'capability_type'       => 'post',
    );

    register_post_type('service', $args);
}
add_action('init', 'raid_motor_register_service_cpt');

/**
 * Shortcode per la dashboard 3D con logo Three.js
 * Uso: [rm_three_logo height="360"]
 */
function raid_motor_three_logo_shortcode($atts) {
    $atts = shortcode_atts(array(
        'height' => '360',
        'width' => '100%',
    ), $atts, 'rm_three_logo');
    
    $height = esc_attr($atts['height']);
    $width = esc_attr($atts['width']);
    $logo_url = get_template_directory_uri() . '/assets/images/logo.png';
    
    // ID unico per il canvas
    $canvas_id = 'three-logo-' . uniqid();
    
    ob_start();
    ?>
    <div class="three-logo-container" style="width: <?php echo $width; ?>; max-width: 100%;">
        <canvas 
            id="<?php echo $canvas_id; ?>" 
            class="three-logo-canvas" 
            style="width: 100%; height: <?php echo $height; ?>px; display: block;"
            data-logo="<?php echo esc_url($logo_url); ?>"
        ></canvas>
    </div>
    <script>
    (function() {
        if (typeof window.RaidMotorThreeLogo !== 'undefined') {
            window.RaidMotorThreeLogo.init('<?php echo $canvas_id; ?>', '<?php echo esc_js($logo_url); ?>');
        }
    })();
    </script>
    <?php
    return ob_get_clean();
}
add_shortcode('rm_three_logo', 'raid_motor_three_logo_shortcode');

/**
 * Flush rewrite rules all'attivazione del tema
 */
function raid_motor_rewrite_flush() {
    raid_motor_register_agent_cpt();
    raid_motor_register_service_cpt();
    flush_rewrite_rules();
}
add_action('after_switch_theme', 'raid_motor_rewrite_flush');
