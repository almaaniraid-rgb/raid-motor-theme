<?php
/**
 * RAID MOTOR Theme Functions
 */

if (!defined('ABSPATH')) {
    exit;
}

function raid_motor_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption'));
    
    // Supporto per Custom Logo con dimensioni consigliate
    add_theme_support('custom-logo', array(
        'height'      => 120,
        'width'       => 400,
        'flex-height' => true,
        'flex-width'  => true,
    ));

    register_nav_menus(array(
        'primary' => __('Primary Menu', 'raid-motor'),
    ));
}
add_action('after_setup_theme', 'raid_motor_setup');

/**
 * Registra il Custom Post Type 'service' (Servizi)
 */
function raid_motor_register_service_post_type() {
    $labels = array(
        'name'                  => 'Servizi',
        'singular_name'         => 'Servizio',
        'menu_name'             => 'Servizi',
        'name_admin_bar'        => 'Servizio',
        'add_new'               => 'Aggiungi nuovo',
        'add_new_item'          => 'Aggiungi nuovo servizio',
        'new_item'              => 'Nuovo servizio',
        'edit_item'             => 'Modifica servizio',
        'view_item'             => 'Visualizza servizio',
        'all_items'             => 'Tutti i servizi',
        'search_items'          => 'Cerca servizi',
        'parent_item_colon'     => 'Servizio padre:',
        'not_found'             => 'Nessun servizio trovato.',
        'not_found_in_trash'    => 'Nessun servizio trovato nel cestino.',
        'archives'              => 'Archivio servizi',
        'insert_into_item'      => 'Inserisci nel servizio',
        'uploaded_to_this_item' => 'Caricato in questo servizio',
        'filter_items_list'     => 'Filtra elenco servizi',
        'items_list_navigation' => 'Navigazione elenco servizi',
        'items_list'            => 'Elenco servizi',
    );

    $args = array(
        'labels'             => $labels,
        'public'             => true,
        'publicly_queryable' => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'show_in_rest'       => true,
        'query_var'          => true,
        'rewrite'            => array('slug' => 'servizi'),
        'capability_type'    => 'post',
        'has_archive'        => true,
        'hierarchical'       => false,
        'menu_position'      => 5,
        'menu_icon'          => 'dashicons-admin-tools',
        'supports'           => array('title', 'editor', 'thumbnail', 'excerpt'),
    );

    register_post_type('service', $args);
}
add_action('init', 'raid_motor_register_service_post_type');

function raid_motor_scripts() {
    // Usa filemtime per cache-busting con fallback sicuro
    $stylesheet_path = get_template_directory() . '/style.css';
    $theme_version = file_exists($stylesheet_path) ? filemtime($stylesheet_path) : '1.0.0';
    
    wp_enqueue_style('raid-motor-style', get_stylesheet_uri(), array(), $theme_version);
    wp_enqueue_script('raid-motor-particles', get_template_directory_uri() . '/js/particles.js', array(), '1.0.0', true);
    wp_enqueue_script('raid-motor-main', get_template_directory_uri() . '/js/main.js', array('jquery'), '1.0.0', true);

    wp_localize_script('raid-motor-main', 'raidMotor', array(
        'ajaxurl' => admin_url('admin-ajax.php'),
        'nonce' => wp_create_nonce('raid_motor_nonce'),
        'apiEndpoint' => get_option('raid_motor_api_endpoint', ''),
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
