<?php
/**
 * Shortcode Handler
 *
 * @package RaidMotorSearch
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Shortcode Class
 */
class Raid_Motor_Shortcode {

	/**
	 * Constructor.
	 */
	public function __construct() {
		add_shortcode( 'raid_motor', array( $this, 'render_shortcode' ) );
	}

	/**
	 * Render shortcode.
	 *
	 * @param array $atts Shortcode attributes.
	 * @return string
	 */
	public function render_shortcode( $atts ) {
		// Parse attributes.
		$atts = shortcode_atts(
			array(
				'url'        => '',
				'height'     => '',
				'responsive' => '',
			),
			$atts,
			'raid_motor'
		);

		// Get settings from options or use shortcode attributes.
		$embed_url       = ! empty( $atts['url'] ) ? esc_url( $atts['url'] ) : get_option( 'raid_motor_embed_url', 'https://unspecified-project-niun.bolt.host' );
		$iframe_height   = ! empty( $atts['height'] ) ? absint( $atts['height'] ) : get_option( 'raid_motor_iframe_height', 800 );
		$responsive_mode = ! empty( $atts['responsive'] ) ? filter_var( $atts['responsive'], FILTER_VALIDATE_BOOLEAN ) : get_option( 'raid_motor_responsive_mode', true );

		// Validate URL.
		if ( empty( $embed_url ) || ! filter_var( $embed_url, FILTER_VALIDATE_URL ) ) {
			return '<div class="raid-motor-error">' . esc_html__( 'Invalid RAID MOTOR embed URL. Please check your settings.', 'raid-motor-search' ) . '</div>';
		}

		// Build wrapper classes.
		$wrapper_classes = array( 'raid-motor-wrapper' );
		if ( $responsive_mode ) {
			$wrapper_classes[] = 'raid-motor-responsive';
		}

		// Generate unique ID for this instance.
		$instance_id = 'raid-motor-' . wp_rand( 1000, 9999 );

		// Build inline styles.
		$inline_styles = sprintf(
			'height: %dpx;',
			$iframe_height
		);

		// Build output.
		ob_start();
		?>
		<div class="<?php echo esc_attr( implode( ' ', $wrapper_classes ) ); ?>" id="<?php echo esc_attr( $instance_id ); ?>">
			<iframe
				src="<?php echo esc_url( $embed_url ); ?>"
				class="raid-motor-iframe"
				style="<?php echo esc_attr( $inline_styles ); ?>"
				frameborder="0"
				allowfullscreen
				loading="lazy"
				title="<?php esc_attr_e( 'RAID MOTOR Search Engine', 'raid-motor-search' ); ?>"
				sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox"
			></iframe>
			<noscript>
				<div class="raid-motor-noscript">
					<p><?php esc_html_e( 'JavaScript is required to use RAID MOTOR search.', 'raid-motor-search' ); ?></p>
					<p><a href="<?php echo esc_url( $embed_url ); ?>" target="_blank"><?php esc_html_e( 'Open RAID MOTOR in a new window', 'raid-motor-search' ); ?></a></p>
				</div>
			</noscript>
		</div>
		<?php
		return ob_get_clean();
	}
}

// Initialize shortcode.
new Raid_Motor_Shortcode();
