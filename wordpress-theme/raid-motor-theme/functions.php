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
    add_theme_support('custom-logo');

    register_nav_menus(array(
        'primary' => __('Primary Menu', 'raid-motor'),
    ));
}
add_action('after_setup_theme', 'raid_motor_setup');

function raid_motor_scripts() {
    wp_enqueue_style('raid-motor-style', get_stylesheet_uri(), array(), '1.0.0');
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
