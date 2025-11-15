=== RAID MOTOR Search ===
Contributors: raidmotor
Tags: search, ai, embed, iframe, gutenberg
Requires at least: 5.0
Tested up to: 6.4
Requires PHP: 7.2
Stable tag: 1.0.0
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

Embed the RAID MOTOR AI-powered search engine into your WordPress site with a simple shortcode or Gutenberg block.

== Description ==

RAID MOTOR Search is a WordPress plugin that allows you to easily embed the RAID MOTOR AI-powered search engine into your website. RAID MOTOR (Rapid AI Discovery & Multi-Origin Retrieval) provides intelligent, contextual answers powered by Comet AI & Perplexity Technology.

= Features =

* **Simple Shortcode**: Use `[raid_motor]` to embed the search engine anywhere
* **Gutenberg Block**: Add RAID MOTOR search with the block editor
* **Customizable Settings**: Configure embed URL, height, and responsive mode
* **Responsive Design**: Automatically adapts to all screen sizes
* **Security**: Proper nonce validation and data sanitization
* **Performance**: Lazy loading and optimized scripts
* **Accessibility**: ARIA labels and keyboard navigation support
* **Dark Mode**: Automatic dark mode support

= How to Use =

**Method 1: Shortcode**
Add this shortcode to any post or page:
`[raid_motor]`

With custom parameters:
`[raid_motor url="https://your-url.com" height="600" responsive="true"]`

**Method 2: Gutenberg Block**
1. Click the "+" button in the block editor
2. Search for "RAID MOTOR"
3. Add the block and configure settings in the sidebar

**Method 3: PHP Template**
Add this to your theme files:
`<?php echo do_shortcode('[raid_motor]'); ?>`

= Settings =

Configure the plugin under **Settings > RAID MOTOR**:

* **Embed URL**: The URL of your RAID MOTOR instance (default: https://unspecified-project-niun.bolt.host)
* **iFrame Height**: Height in pixels (300-3000, default: 800)
* **Responsive Mode**: Enable/disable responsive iframe (recommended: enabled)

= About RAID MOTOR =

RAID MOTOR is an AI-powered search engine featuring:
* Multi-source aggregation across 10+ search engines
* AI-generated summaries with source citations
* Real-time results with instant responses
* Clean, professional Perplexity-inspired design

== Installation ==

= Automatic Installation =

1. Log in to your WordPress dashboard
2. Go to Plugins > Add New
3. Search for "RAID MOTOR Search"
4. Click "Install Now" and then "Activate"

= Manual Installation =

1. Download the plugin ZIP file
2. Log in to your WordPress dashboard
3. Go to Plugins > Add New > Upload Plugin
4. Choose the ZIP file and click "Install Now"
5. Activate the plugin

= Configuration =

1. Go to Settings > RAID MOTOR
2. Configure your embed URL and preferences
3. Save settings
4. Add the shortcode or block to your content

== Frequently Asked Questions ==

= What is RAID MOTOR? =

RAID MOTOR (Rapid AI Discovery & Multi-Origin Retrieval) is an AI-powered search engine that aggregates results from multiple sources and provides intelligent, contextual answers with source citations.

= Do I need a RAID MOTOR account? =

No, the plugin embeds the public RAID MOTOR search interface. However, you can configure a custom URL if you have your own RAID MOTOR instance.

= Can I customize the appearance? =

Yes, you can adjust the iframe height and enable/disable responsive mode in the plugin settings. Advanced customization can be done via CSS.

= Is the plugin responsive? =

Yes, the plugin includes responsive CSS that adapts to all screen sizes, from mobile to desktop.

= Can I use multiple instances on one page? =

Yes, you can use the shortcode or block multiple times on the same page with different settings.

= Is it compatible with page builders? =

Yes, the shortcode works with popular page builders like Elementor, Beaver Builder, and Divi.

= How do I change the embed URL? =

Go to Settings > RAID MOTOR and update the "Embed URL" field. This allows you to use your own RAID MOTOR instance.

= Is the plugin secure? =

Yes, the plugin follows WordPress security best practices including nonce validation, data sanitization, and iframe sandboxing.

== Screenshots ==

1. RAID MOTOR search embedded in a WordPress page
2. Plugin settings page with configuration options
3. Gutenberg block in the editor
4. Responsive view on mobile devices
5. Admin settings with usage instructions

== Changelog ==

= 1.0.0 =
* Initial release
* Shortcode support: [raid_motor]
* Gutenberg block integration
* Admin settings page
* Responsive iframe support
* Security features: nonce validation and sanitization
* Customizable embed URL, height, and responsive mode
* Loading states and error handling
* Accessibility improvements
* Dark mode support
* Print styles
* Mobile optimization

== Upgrade Notice ==

= 1.0.0 =
Initial release of RAID MOTOR Search plugin.

== Additional Information ==

= Support =

For support, please visit [raidmotor.com](https://raidmotor.com) or create an issue on GitHub.

= Contributing =

Contributions are welcome! Visit our GitHub repository to contribute.

= Privacy =

This plugin embeds an external service (RAID MOTOR). When users interact with the embedded search, their queries may be processed by the RAID MOTOR service. Please review the RAID MOTOR privacy policy for details on data handling.

= Credits =

* Developed by the RAID MOTOR Team
* Powered by Comet AI & Perplexity Technology
* Icons from Lucide React

== Shortcode Parameters ==

The `[raid_motor]` shortcode accepts the following optional parameters:

* `url` - Custom embed URL (overrides setting)
* `height` - Custom height in pixels (overrides setting)
* `responsive` - Enable/disable responsive mode (true/false)

Examples:
`[raid_motor]`
`[raid_motor height="600"]`
`[raid_motor url="https://custom-url.com" height="900" responsive="false"]`

== Developer Notes ==

= Hooks & Filters =

The plugin provides hooks for developers:

**Actions:**
* `raid_motor_before_render` - Fires before shortcode renders
* `raid_motor_after_render` - Fires after shortcode renders

**Filters:**
* `raid_motor_embed_url` - Filter the embed URL
* `raid_motor_iframe_height` - Filter the iframe height
* `raid_motor_wrapper_class` - Filter wrapper CSS classes

= Custom CSS =

Add custom styles to your theme:
`.raid-motor-wrapper { /* Your styles */ }`

= Custom JavaScript =

Access the plugin JS object:
`window.RaidMotor.init();`
