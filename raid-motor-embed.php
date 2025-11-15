<?php
/**
 * Plugin Name: RAID MOTOR Embed
 * Plugin URI: https://raidmotor.com
 * Description: Embed RAID MOTOR AI-powered search engine with a simple [raid_motor] shortcode. Ultra-lightweight and easy to use.
 * Version: 1.0.0
 * Author: RAID MOTOR Team
 * Author URI: https://raidmotor.com
 * License: GPL v2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: raid-motor-embed
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Register shortcode [raid_motor]
 */
function raid_motor_embed_shortcode( $atts ) {
	// Parse attributes
	$atts = shortcode_atts(
		array(
			'url'    => 'https://unspecified-project-niun.bolt.host',
			'height' => '800',
		),
		$atts,
		'raid_motor'
	);

	// Sanitize inputs
	$url    = esc_url( $atts['url'] );
	$height = absint( $atts['height'] );

	// Validate URL
	if ( empty( $url ) || ! filter_var( $url, FILTER_VALIDATE_URL ) ) {
		return '<p style="color: #dc2626; padding: 20px; text-align: center;">Invalid RAID MOTOR URL</p>';
	}

	// Generate unique ID
	$id = 'raid-motor-' . wp_rand( 1000, 9999 );

	// Build iframe HTML
	ob_start();
	?>
	<div class="raid-motor-wrapper" id="<?php echo esc_attr( $id ); ?>">
		<iframe
			src="<?php echo esc_url( $url ); ?>"
			class="raid-motor-iframe"
			style="height: <?php echo esc_attr( $height ); ?>px;"
			frameborder="0"
			allowfullscreen
			loading="lazy"
			title="RAID MOTOR Search Engine"
		></iframe>
	</div>
	<?php
	return ob_get_clean();
}
add_shortcode( 'raid_motor', 'raid_motor_embed_shortcode' );

/**
 * Enqueue plugin styles
 */
function raid_motor_embed_enqueue_styles() {
	// Only enqueue if shortcode is present
	if ( ! is_admin() ) {
		wp_add_inline_style( 'wp-block-library', raid_motor_embed_get_css() );
	}
}
add_action( 'wp_enqueue_scripts', 'raid_motor_embed_enqueue_styles' );

/**
 * Get inline CSS
 */
function raid_motor_embed_get_css() {
	return '
		/* RAID MOTOR Embed Styles */
		.raid-motor-wrapper {
			position: relative;
			width: 100%;
			max-width: 100%;
			margin: 20px 0;
			padding-bottom: 56.25%;
			height: 0;
			overflow: hidden;
			border-radius: 8px;
			box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
			background: #f8fafc;
		}

		.raid-motor-iframe {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100% !important;
			border: none;
			display: block;
		}

		/* Loading indicator */
		.raid-motor-wrapper::before {
			content: "";
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 40px;
			height: 40px;
			border: 4px solid #e5e7eb;
			border-top-color: #6366f1;
			border-radius: 50%;
			animation: raid-motor-spin 1s linear infinite;
			z-index: 1;
		}

		@keyframes raid-motor-spin {
			to { transform: translate(-50%, -50%) rotate(360deg); }
		}

		/* Mobile responsive */
		@media screen and (max-width: 768px) {
			.raid-motor-wrapper {
				padding-bottom: 75%;
				margin: 15px 0;
			}
		}

		@media screen and (max-width: 480px) {
			.raid-motor-wrapper {
				padding-bottom: 100%;
				margin: 10px 0;
			}
		}

		/* Dark mode support */
		@media (prefers-color-scheme: dark) {
			.raid-motor-wrapper {
				background: #1f2937;
				box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
			}
		}
	';
}

/**
 * Add settings link on plugins page
 */
function raid_motor_embed_plugin_links( $links ) {
	$usage_text = sprintf(
		'<span style="color: #2563eb;">Usage: %s</span>',
		'<code>[raid_motor]</code>'
	);
	array_unshift( $links, $usage_text );
	return $links;
}
add_filter( 'plugin_action_links_' . plugin_basename( __FILE__ ), 'raid_motor_embed_plugin_links' );
