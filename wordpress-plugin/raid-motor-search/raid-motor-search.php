<?php
/**
 * Plugin Name: RAID MOTOR Search
 * Plugin URI: https://raidmotor.com
 * Description: Embed the RAID MOTOR AI-powered search engine into your WordPress site with a simple shortcode or Gutenberg block.
 * Version: 1.0.0
 * Author: RAID MOTOR Team
 * Author URI: https://raidmotor.com
 * License: GPL v2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: raid-motor-search
 * Domain Path: /languages
 *
 * @package RaidMotorSearch
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Define plugin constants.
define( 'RAID_MOTOR_VERSION', '1.0.0' );
define( 'RAID_MOTOR_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );
define( 'RAID_MOTOR_PLUGIN_URL', plugin_dir_url( __FILE__ ) );
define( 'RAID_MOTOR_PLUGIN_BASENAME', plugin_basename( __FILE__ ) );

/**
 * Main Plugin Class
 */
class Raid_Motor_Search {

	/**
	 * Instance of this class.
	 *
	 * @var object
	 */
	private static $instance = null;

	/**
	 * Get instance of this class.
	 *
	 * @return object
	 */
	public static function get_instance() {
		if ( null === self::$instance ) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	/**
	 * Constructor.
	 */
	private function __construct() {
		$this->init_hooks();
		$this->load_dependencies();
	}

	/**
	 * Initialize hooks.
	 */
	private function init_hooks() {
		// Enqueue scripts and styles.
		add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_frontend_assets' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_admin_assets' ) );

		// Register Gutenberg block.
		add_action( 'init', array( $this, 'register_gutenberg_block' ) );

		// Add settings link on plugins page.
		add_filter( 'plugin_action_links_' . RAID_MOTOR_PLUGIN_BASENAME, array( $this, 'add_settings_link' ) );

		// Load text domain.
		add_action( 'plugins_loaded', array( $this, 'load_textdomain' ) );
	}

	/**
	 * Load plugin dependencies.
	 */
	private function load_dependencies() {
		require_once RAID_MOTOR_PLUGIN_DIR . 'includes/admin-settings.php';
		require_once RAID_MOTOR_PLUGIN_DIR . 'includes/shortcode.php';
	}

	/**
	 * Enqueue frontend assets.
	 */
	public function enqueue_frontend_assets() {
		wp_enqueue_style(
			'raid-motor-css',
			RAID_MOTOR_PLUGIN_URL . 'assets/css/raid-motor.css',
			array(),
			RAID_MOTOR_VERSION
		);

		wp_enqueue_script(
			'raid-motor-js',
			RAID_MOTOR_PLUGIN_URL . 'assets/js/raid-motor.js',
			array( 'jquery' ),
			RAID_MOTOR_VERSION,
			true
		);

		// Pass data to JavaScript.
		wp_localize_script(
			'raid-motor-js',
			'raidMotorData',
			array(
				'ajaxUrl' => admin_url( 'admin-ajax.php' ),
				'nonce'   => wp_create_nonce( 'raid_motor_nonce' ),
			)
		);
	}

	/**
	 * Enqueue admin assets.
	 *
	 * @param string $hook Current admin page hook.
	 */
	public function enqueue_admin_assets( $hook ) {
		// Only load on our settings page.
		if ( 'settings_page_raid-motor-settings' !== $hook ) {
			return;
		}

		wp_enqueue_style(
			'raid-motor-admin-css',
			RAID_MOTOR_PLUGIN_URL . 'assets/css/raid-motor.css',
			array(),
			RAID_MOTOR_VERSION
		);
	}

	/**
	 * Register Gutenberg block.
	 */
	public function register_gutenberg_block() {
		// Check if Gutenberg is available.
		if ( ! function_exists( 'register_block_type' ) ) {
			return;
		}

		// Register block.
		register_block_type(
			'raid-motor/search-embed',
			array(
				'editor_script'   => 'raid-motor-block-editor',
				'editor_style'    => 'raid-motor-block-editor',
				'style'           => 'raid-motor-css',
				'render_callback' => array( $this, 'render_gutenberg_block' ),
			)
		);

		// Enqueue block editor assets.
		wp_register_script(
			'raid-motor-block-editor',
			RAID_MOTOR_PLUGIN_URL . 'assets/js/raid-motor.js',
			array( 'wp-blocks', 'wp-element', 'wp-editor' ),
			RAID_MOTOR_VERSION,
			true
		);
	}

	/**
	 * Render Gutenberg block.
	 *
	 * @param array $attributes Block attributes.
	 * @return string
	 */
	public function render_gutenberg_block( $attributes ) {
		return do_shortcode( '[raid_motor]' );
	}

	/**
	 * Add settings link on plugins page.
	 *
	 * @param array $links Plugin action links.
	 * @return array
	 */
	public function add_settings_link( $links ) {
		$settings_link = sprintf(
			'<a href="%s">%s</a>',
			esc_url( admin_url( 'options-general.php?page=raid-motor-settings' ) ),
			esc_html__( 'Settings', 'raid-motor-search' )
		);
		array_unshift( $links, $settings_link );
		return $links;
	}

	/**
	 * Load plugin text domain.
	 */
	public function load_textdomain() {
		load_plugin_textdomain(
			'raid-motor-search',
			false,
			dirname( RAID_MOTOR_PLUGIN_BASENAME ) . '/languages'
		);
	}
}

// Initialize plugin.
Raid_Motor_Search::get_instance();
