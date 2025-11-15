# RAID MOTOR Search WordPress Plugin - Installation Guide

## Quick Start

### Step 1: Download or Prepare the Plugin

The plugin is located in: `wordpress-plugin/raid-motor-search/`

### Step 2: Create ZIP File (Optional)

If you want to install via WordPress admin:

```bash
cd wordpress-plugin
zip -r raid-motor-search.zip raid-motor-search/
```

### Step 3: Install the Plugin

**Option A: Via WordPress Admin (Recommended)**

1. Log in to your WordPress admin panel
2. Go to **Plugins → Add New**
3. Click **Upload Plugin**
4. Choose the `raid-motor-search.zip` file
5. Click **Install Now**
6. Click **Activate Plugin**

**Option B: Via FTP/File Manager**

1. Upload the entire `raid-motor-search` folder to `/wp-content/plugins/`
2. Go to **Plugins** in WordPress admin
3. Find "RAID MOTOR Search" and click **Activate**

**Option C: Via WP-CLI**

```bash
wp plugin install /path/to/raid-motor-search.zip --activate
```

### Step 4: Configure Settings

1. Go to **Settings → RAID MOTOR**
2. Configure these options:
   - **Embed URL**: `https://unspecified-project-niun.bolt.host` (default)
   - **iFrame Height**: `800` (or your preference)
   - **Responsive Mode**: Enable (recommended)
3. Click **Save Settings**

### Step 5: Use the Plugin

**Method 1: Shortcode**
Add to any post or page:
```
[raid_motor]
```

**Method 2: Gutenberg Block**
1. Edit a page with Gutenberg
2. Click the "+" button
3. Search for "RAID MOTOR"
4. Add the block

**Method 3: PHP in Theme**
```php
<?php echo do_shortcode('[raid_motor]'); ?>
```

## Advanced Configuration

### Custom Shortcode Parameters

Override default settings per instance:

```
[raid_motor url="https://custom-url.com" height="600" responsive="true"]
```

Parameters:
- `url` - Custom embed URL
- `height` - Height in pixels (300-3000)
- `responsive` - Enable/disable responsive mode (true/false)

### Custom CSS

Add to your theme's `style.css` or Customizer:

```css
/* Custom wrapper styling */
.raid-motor-wrapper {
    margin: 40px 0;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

/* Custom height on mobile */
@media (max-width: 768px) {
    .raid-motor-iframe {
        min-height: 700px;
    }
}
```

### Page Builder Integration

**Elementor:**
1. Add a "Shortcode" widget
2. Enter: `[raid_motor]`

**Beaver Builder:**
1. Add a "HTML" module
2. Enter: `[raid_motor]`

**Divi:**
1. Add a "Code" module
2. Enter: `[raid_motor]`

## Troubleshooting

### iFrame Not Loading

1. Check if the embed URL is correct in **Settings → RAID MOTOR**
2. Ensure your site allows iframes (check security plugins)
3. Check browser console for errors
4. Try disabling "Content Security Policy" plugins temporarily

### Responsive Mode Not Working

1. Ensure "Responsive Mode" is enabled in settings
2. Check for CSS conflicts with your theme
3. Try adding `responsive="true"` to the shortcode

### Plugin Conflicts

If you experience issues:

1. Deactivate all other plugins
2. Activate RAID MOTOR Search
3. Test if it works
4. Reactivate other plugins one by one to find conflicts

### iFrame Security Blocked

Some hosts block iframes. Add this to `.htaccess`:

```apache
Header set X-Frame-Options "SAMEORIGIN"
```

Or add to `wp-config.php`:

```php
define('X_FRAME_OPTIONS', 'SAMEORIGIN');
```

## Requirements

- **WordPress**: 5.0 or higher
- **PHP**: 7.2 or higher
- **MySQL**: 5.6 or higher
- **HTTPS**: Recommended for security

## File Structure

```
raid-motor-search/
├── raid-motor-search.php      # Main plugin file
├── README.txt                  # WordPress.org readme
├── INSTALLATION.md            # This file
├── includes/
│   ├── admin-settings.php    # Settings page
│   └── shortcode.php         # Shortcode handler
└── assets/
    ├── css/
    │   └── raid-motor.css    # Plugin styles
    └── js/
        └── raid-motor.js     # Plugin scripts
```

## Uninstallation

To completely remove the plugin:

1. Deactivate the plugin
2. Delete the plugin from **Plugins → Installed Plugins**
3. Settings are automatically removed

## Support

For help and support:
- Website: https://raidmotor.com
- Documentation: https://raidmotor.com/docs
- GitHub: https://github.com/raidmotor/wordpress-plugin

## Security

The plugin follows WordPress security best practices:
- ✅ Nonce validation on all forms
- ✅ Data sanitization and escaping
- ✅ iFrame sandboxing
- ✅ URL validation
- ✅ Capability checks
- ✅ No SQL queries (uses Options API)

## Performance

The plugin is optimized for performance:
- ✅ Lazy loading iframes
- ✅ Conditional script loading
- ✅ Minified assets (in production)
- ✅ No database queries on frontend
- ✅ Efficient CSS with no bloat

## Compatibility

Tested with:
- ✅ WordPress 6.4
- ✅ PHP 8.2
- ✅ Gutenberg Editor
- ✅ Classic Editor
- ✅ Multisite
- ✅ Most popular themes
- ✅ Major page builders

## License

GPL v2 or later - Free to use and modify
