<?php
/**
 * Admin Settings Page
 *
 * @package RaidMotorSearch
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Admin Settings Class
 */
class Raid_Motor_Admin_Settings {

	/**
	 * Constructor.
	 */
	public function __construct() {
		add_action( 'admin_menu', array( $this, 'add_settings_page' ) );
		add_action( 'admin_init', array( $this, 'register_settings' ) );
	}

	/**
	 * Add settings page to WordPress admin.
	 */
	public function add_settings_page() {
		add_options_page(
			__( 'RAID MOTOR Settings', 'raid-motor-search' ),
			__( 'RAID MOTOR', 'raid-motor-search' ),
			'manage_options',
			'raid-motor-settings',
			array( $this, 'render_settings_page' )
		);
	}

	/**
	 * Register plugin settings.
	 */
	public function register_settings() {
		// Register settings.
		register_setting(
			'raid_motor_settings_group',
			'raid_motor_embed_url',
			array(
				'type'              => 'string',
				'sanitize_callback' => 'esc_url_raw',
				'default'           => 'https://unspecified-project-niun.bolt.host',
			)
		);

		register_setting(
			'raid_motor_settings_group',
			'raid_motor_iframe_height',
			array(
				'type'              => 'integer',
				'sanitize_callback' => 'absint',
				'default'           => 800,
			)
		);

		register_setting(
			'raid_motor_settings_group',
			'raid_motor_responsive_mode',
			array(
				'type'              => 'boolean',
				'sanitize_callback' => array( $this, 'sanitize_checkbox' ),
				'default'           => true,
			)
		);

		// Add settings section.
		add_settings_section(
			'raid_motor_main_section',
			__( 'Embed Settings', 'raid-motor-search' ),
			array( $this, 'render_section_description' ),
			'raid-motor-settings'
		);

		// Add settings fields.
		add_settings_field(
			'raid_motor_embed_url',
			__( 'Embed URL', 'raid-motor-search' ),
			array( $this, 'render_embed_url_field' ),
			'raid-motor-settings',
			'raid_motor_main_section'
		);

		add_settings_field(
			'raid_motor_iframe_height',
			__( 'iFrame Height (px)', 'raid-motor-search' ),
			array( $this, 'render_iframe_height_field' ),
			'raid-motor-settings',
			'raid_motor_main_section'
		);

		add_settings_field(
			'raid_motor_responsive_mode',
			__( 'Responsive Mode', 'raid-motor-search' ),
			array( $this, 'render_responsive_mode_field' ),
			'raid-motor-settings',
			'raid_motor_main_section'
		);
	}

	/**
	 * Sanitize checkbox value.
	 *
	 * @param mixed $value Checkbox value.
	 * @return bool
	 */
	public function sanitize_checkbox( $value ) {
		return (bool) $value;
	}

	/**
	 * Render section description.
	 */
	public function render_section_description() {
		echo '<p>' . esc_html__( 'Configure how RAID MOTOR search engine appears on your site.', 'raid-motor-search' ) . '</p>';
	}

	/**
	 * Render embed URL field.
	 */
	public function render_embed_url_field() {
		$value = get_option( 'raid_motor_embed_url', 'https://unspecified-project-niun.bolt.host' );
		printf(
			'<input type="url" id="raid_motor_embed_url" name="raid_motor_embed_url" value="%s" class="regular-text" required />',
			esc_attr( $value )
		);
		echo '<p class="description">' . esc_html__( 'The URL of your RAID MOTOR search engine instance.', 'raid-motor-search' ) . '</p>';
	}

	/**
	 * Render iframe height field.
	 */
	public function render_iframe_height_field() {
		$value = get_option( 'raid_motor_iframe_height', 800 );
		printf(
			'<input type="number" id="raid_motor_iframe_height" name="raid_motor_iframe_height" value="%s" min="300" max="3000" step="50" />',
			esc_attr( $value )
		);
		echo '<p class="description">' . esc_html__( 'Height of the embedded iframe in pixels (300-3000).', 'raid-motor-search' ) . '</p>';
	}

	/**
	 * Render responsive mode field.
	 */
	public function render_responsive_mode_field() {
		$value = get_option( 'raid_motor_responsive_mode', true );
		printf(
			'<label><input type="checkbox" id="raid_motor_responsive_mode" name="raid_motor_responsive_mode" value="1" %s /> %s</label>',
			checked( $value, true, false ),
			esc_html__( 'Enable responsive iframe (recommended)', 'raid-motor-search' )
		);
		echo '<p class="description">' . esc_html__( 'When enabled, the iframe will adapt to different screen sizes.', 'raid-motor-search' ) . '</p>';
	}

	/**
	 * Render settings page.
	 */
	public function render_settings_page() {
		// Check user capabilities.
		if ( ! current_user_can( 'manage_options' ) ) {
			wp_die( esc_html__( 'You do not have sufficient permissions to access this page.', 'raid-motor-search' ) );
		}

		// Handle form submission.
		if ( isset( $_GET['settings-updated'] ) && 'true' === $_GET['settings-updated'] ) {
			add_settings_error(
				'raid_motor_messages',
				'raid_motor_message',
				__( 'Settings saved successfully.', 'raid-motor-search' ),
				'updated'
			);
		}
		?>
		<div class="wrap">
			<h1><?php echo esc_html( get_admin_page_title() ); ?></h1>

			<?php settings_errors( 'raid_motor_messages' ); ?>

			<div class="raid-motor-admin-container">
				<div class="raid-motor-admin-main">
					<form method="post" action="options.php">
						<?php
						settings_fields( 'raid_motor_settings_group' );
						do_settings_sections( 'raid-motor-settings' );
						submit_button( __( 'Save Settings', 'raid-motor-search' ) );
						?>
					</form>
				</div>

				<div class="raid-motor-admin-sidebar">
					<div class="raid-motor-admin-box">
						<h2><?php esc_html_e( 'How to Use', 'raid-motor-search' ); ?></h2>
						<p><?php esc_html_e( 'There are three ways to add RAID MOTOR search to your site:', 'raid-motor-search' ); ?></p>

						<h3><?php esc_html_e( '1. Shortcode', 'raid-motor-search' ); ?></h3>
						<p><?php esc_html_e( 'Add this shortcode to any post or page:', 'raid-motor-search' ); ?></p>
						<code>[raid_motor]</code>

						<h3><?php esc_html_e( '2. Gutenberg Block', 'raid-motor-search' ); ?></h3>
						<p><?php esc_html_e( 'In the block editor, search for "RAID MOTOR" and add the block.', 'raid-motor-search' ); ?></p>

						<h3><?php esc_html_e( '3. PHP Template', 'raid-motor-search' ); ?></h3>
						<p><?php esc_html_e( 'Add this to your theme files:', 'raid-motor-search' ); ?></p>
						<code>&lt;?php echo do_shortcode('[raid_motor]'); ?&gt;</code>
					</div>

					<div class="raid-motor-admin-box">
						<h2><?php esc_html_e( 'About RAID MOTOR', 'raid-motor-search' ); ?></h2>
						<p><?php esc_html_e( 'RAID MOTOR is an AI-powered search engine with multi-source aggregation, powered by Comet AI & Perplexity Technology.', 'raid-motor-search' ); ?></p>
						<p>
							<strong><?php esc_html_e( 'Version:', 'raid-motor-search' ); ?></strong> <?php echo esc_html( RAID_MOTOR_VERSION ); ?><br>
							<a href="https://raidmotor.com" target="_blank"><?php esc_html_e( 'Visit Website', 'raid-motor-search' ); ?></a>
						</p>
					</div>
				</div>
			</div>
		</div>

		<style>
			.raid-motor-admin-container {
				display: flex;
				gap: 30px;
				margin-top: 20px;
			}
			.raid-motor-admin-main {
				flex: 1;
				max-width: 800px;
			}
			.raid-motor-admin-sidebar {
				width: 300px;
			}
			.raid-motor-admin-box {
				background: #fff;
				border: 1px solid #ccd0d4;
				padding: 20px;
				margin-bottom: 20px;
			}
			.raid-motor-admin-box h2 {
				margin-top: 0;
				font-size: 16px;
			}
			.raid-motor-admin-box h3 {
				font-size: 14px;
				margin-top: 15px;
				margin-bottom: 5px;
			}
			.raid-motor-admin-box code {
				display: block;
				background: #f0f0f1;
				padding: 10px;
				margin: 10px 0;
				border-radius: 3px;
			}
			@media (max-width: 782px) {
				.raid-motor-admin-container {
					flex-direction: column;
				}
				.raid-motor-admin-sidebar {
					width: 100%;
				}
			}
		</style>
		<?php
	}
}

// Initialize admin settings.
new Raid_Motor_Admin_Settings();
