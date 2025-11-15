/**
 * RAID MOTOR Search Plugin JavaScript
 *
 * @package RaidMotorSearch
 */

(function($) {
	'use strict';

	/**
	 * RAID MOTOR Plugin Class
	 */
	var RaidMotor = {

		/**
		 * Initialize plugin
		 */
		init: function() {
			this.setupIframes();
			this.handleResponsive();
			this.registerGutenbergBlock();
		},

		/**
		 * Setup iframe loading and events
		 */
		setupIframes: function() {
			$('.raid-motor-iframe').each(function() {
				var $iframe = $(this);
				var $wrapper = $iframe.closest('.raid-motor-wrapper');

				// Handle iframe load
				$iframe.on('load', function() {
					$wrapper.addClass('raid-motor-loaded');
					RaidMotor.handleIframeMessages($iframe);
				});

				// Handle iframe errors
				$iframe.on('error', function() {
					$wrapper.html(
						'<div class="raid-motor-error">' +
						'Failed to load RAID MOTOR. Please check your connection.' +
						'</div>'
					);
				});

				// Store URL for print
				$wrapper.attr('data-url', $iframe.attr('src'));
			});
		},

		/**
		 * Handle messages from iframe
		 */
		handleIframeMessages: function($iframe) {
			window.addEventListener('message', function(event) {
				// Verify origin for security
				var iframeSrc = $iframe.attr('src');
				if (iframeSrc.indexOf(event.origin) !== 0) {
					return;
				}

				// Handle height changes
				if (event.data && event.data.type === 'resize') {
					var height = parseInt(event.data.height, 10);
					if (height && height > 0) {
						$iframe.height(height);
					}
				}

				// Handle navigation events
				if (event.data && event.data.type === 'navigation') {
					// Track or handle navigation if needed
					console.log('RAID MOTOR navigation:', event.data.url);
				}
			}, false);
		},

		/**
		 * Handle responsive behavior
		 */
		handleResponsive: function() {
			var resizeTimer;

			$(window).on('resize', function() {
				clearTimeout(resizeTimer);
				resizeTimer = setTimeout(function() {
					RaidMotor.adjustIframeHeights();
				}, 250);
			});

			// Initial adjustment
			this.adjustIframeHeights();
		},

		/**
		 * Adjust iframe heights based on screen size
		 */
		adjustIframeHeights: function() {
			$('.raid-motor-iframe').each(function() {
				var $iframe = $(this);
				var $wrapper = $iframe.closest('.raid-motor-wrapper');

				if (!$wrapper.hasClass('raid-motor-responsive')) {
					return;
				}

				var windowWidth = $(window).width();
				var minHeight = 500;
				var maxHeight = 1200;
				var calculatedHeight = Math.min(maxHeight, Math.max(minHeight, windowWidth * 0.75));

				$iframe.css('min-height', calculatedHeight + 'px');
			});
		},

		/**
		 * Register Gutenberg block (if in editor)
		 */
		registerGutenbergBlock: function() {
			if (typeof wp === 'undefined' || !wp.blocks) {
				return;
			}

			var el = wp.element.createElement;
			var registerBlockType = wp.blocks.registerBlockType;
			var InspectorControls = wp.blockEditor.InspectorControls;
			var PanelBody = wp.components.PanelBody;
			var TextControl = wp.components.TextControl;
			var ToggleControl = wp.components.ToggleControl;

			registerBlockType('raid-motor/search-embed', {
				title: 'RAID MOTOR Search',
				icon: 'search',
				category: 'embed',
				attributes: {
					url: {
						type: 'string',
						default: ''
					},
					height: {
						type: 'number',
						default: 800
					},
					responsive: {
						type: 'boolean',
						default: true
					}
				},

				edit: function(props) {
					var attributes = props.attributes;
					var setAttributes = props.setAttributes;

					return [
						el(InspectorControls, {},
							el(PanelBody, { title: 'Settings', initialOpen: true },
								el(TextControl, {
									label: 'Embed URL',
									value: attributes.url,
									onChange: function(value) {
										setAttributes({ url: value });
									},
									help: 'Leave empty to use default URL from settings'
								}),
								el(TextControl, {
									label: 'Height (px)',
									type: 'number',
									value: attributes.height,
									onChange: function(value) {
										setAttributes({ height: parseInt(value) });
									}
								}),
								el(ToggleControl, {
									label: 'Responsive Mode',
									checked: attributes.responsive,
									onChange: function(value) {
										setAttributes({ responsive: value });
									}
								})
							)
						),
						el('div', { className: 'raid-motor-admin-preview' },
							el('strong', {}, 'RAID MOTOR Search Engine'),
							el('p', {}, 'Preview not available in editor. View the page to see the embedded search.')
						)
					];
				},

				save: function() {
					return null; // Rendered via PHP
				}
			});
		}
	};

	/**
	 * Initialize on document ready
	 */
	$(document).ready(function() {
		RaidMotor.init();
	});

	/**
	 * Re-initialize on AJAX complete (for dynamic content)
	 */
	$(document).ajaxComplete(function() {
		setTimeout(function() {
			RaidMotor.setupIframes();
		}, 100);
	});

	/**
	 * Expose to global scope if needed
	 */
	window.RaidMotor = RaidMotor;

})(jQuery);
