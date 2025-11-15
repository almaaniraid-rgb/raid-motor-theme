# RAID MOTOR WordPress Plugin - Installation Guide

## Quick Overview
This plugin allows you to embed the RAID MOTOR AI-powered search engine into any WordPress page, post, or widget using a simple shortcode.

---

## 📦 Installation Methods

### Method 1: SFTP Upload (Recommended)

#### Step 1: Download the Plugin File
- File name: `raid-motor-embed.php`
- Location: Root of your RAID MOTOR project

#### Step 2: Connect via SFTP
Use your preferred SFTP client (FileZilla, Cyberduck, WinSCP, etc.):

```
Host: your-wordpress-site.com
Username: your-sftp-username
Password: your-sftp-password
Port: 22 (or as provided by your host)
```

#### Step 3: Navigate to Plugins Directory
```
/public_html/wp-content/plugins/
```
or
```
/www/wp-content/plugins/
```
or
```
/htdocs/wp-content/plugins/
```

(The exact path depends on your hosting provider)

#### Step 4: Create Plugin Folder
Create a new folder named:
```
raid-motor-embed
```

Full path should be:
```
/wp-content/plugins/raid-motor-embed/
```

#### Step 5: Upload Plugin File
Upload `raid-motor-embed.php` into the `raid-motor-embed` folder:
```
/wp-content/plugins/raid-motor-embed/raid-motor-embed.php
```

#### Step 6: Activate Plugin
1. Log into your WordPress admin dashboard
2. Go to **Plugins → Installed Plugins**
3. Find **RAID MOTOR Embed**
4. Click **Activate**

---

### Method 2: WordPress Admin Upload

#### Step 1: Create ZIP File
1. Create a folder named `raid-motor-embed`
2. Place `raid-motor-embed.php` inside it
3. Compress the folder to `raid-motor-embed.zip`

#### Step 2: Upload via WordPress
1. Log into WordPress admin
2. Go to **Plugins → Add New**
3. Click **Upload Plugin** button
4. Click **Choose File** and select `raid-motor-embed.zip`
5. Click **Install Now**
6. Click **Activate Plugin**

---

### Method 3: Direct File Manager (cPanel)

#### Step 1: Log into cPanel
Access your hosting control panel

#### Step 2: Open File Manager
Navigate to:
```
public_html/wp-content/plugins/
```

#### Step 3: Create Directory
Click **+ Folder** and create:
```
raid-motor-embed
```

#### Step 4: Upload File
1. Enter the `raid-motor-embed` folder
2. Click **Upload**
3. Select `raid-motor-embed.php` from your computer
4. Wait for upload to complete

#### Step 5: Activate
Go to WordPress admin → Plugins → Activate **RAID MOTOR Embed**

---

## 🚀 Usage

### Basic Usage
Add this shortcode to any page or post:

```
[raid_motor]
```

This will embed RAID MOTOR with default settings.

### Custom URL
If you have a custom RAID MOTOR installation:

```
[raid_motor url="https://your-raid-motor-domain.com"]
```

### Custom Height
Adjust the iframe height (default is 800px):

```
[raid_motor height="600"]
```

### Combined Attributes

```
[raid_motor url="https://search.yoursite.com" height="1000"]
```

---

## 📍 Where to Add the Shortcode

### In Pages
1. Go to **Pages → All Pages**
2. Edit the page where you want RAID MOTOR
3. Add a **Shortcode block** (Block Editor) or paste directly (Classic Editor)
4. Insert: `[raid_motor]`
5. Update/Publish the page

### In Posts
1. Go to **Posts → All Posts**
2. Edit or create a new post
3. Add the shortcode where you want the search engine to appear
4. Publish the post

### In Widgets
1. Go to **Appearance → Widgets**
2. Add a **Custom HTML** or **Shortcode** widget
3. Paste: `[raid_motor]`
4. Save

### In Template Files (Advanced)
Add to any PHP template file:

```php
<?php echo do_shortcode('[raid_motor]'); ?>
```

---

## 🎨 Styling & Customization

The plugin includes built-in responsive styles with:
- Responsive design for mobile, tablet, desktop
- Loading animation
- Dark mode support
- Rounded corners and shadows

### Custom CSS (Optional)
To further customize, add to your theme's custom CSS:

```css
.raid-motor-wrapper {
    border-radius: 16px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}
```

---

## 🔧 Troubleshooting

### Plugin Not Appearing
- Verify the file is in the correct directory
- Check file permissions (should be 644)
- Make sure the file is named exactly `raid-motor-embed.php`

### Shortcode Not Working
- Ensure plugin is activated
- Check for typos in the shortcode
- Try clearing WordPress cache

### iframe Not Loading
- Verify the URL is correct and accessible
- Check if your site allows iframes
- Disable any security plugins temporarily to test

### SFTP Connection Issues
- Verify credentials with your hosting provider
- Check if SSH/SFTP is enabled on your account
- Try changing SFTP port (usually 22)

---

## 📂 File Structure

After installation, your structure should look like:

```
wp-content/
└── plugins/
    └── raid-motor-embed/
        └── raid-motor-embed.php
```

---

## 🔐 Security Notes

- Plugin uses WordPress security functions (esc_url, esc_attr, etc.)
- All inputs are sanitized and validated
- No external dependencies
- No database queries
- Lightweight single-file plugin

---

## 📄 Plugin Information

- **Plugin Name:** RAID MOTOR Embed
- **Version:** 1.0.0
- **License:** GPL v2 or later
- **File Size:** ~5 KB
- **WordPress Compatibility:** 5.0+
- **PHP Compatibility:** 7.0+

---

## 🆘 Support

For issues or questions:
1. Check this documentation first
2. Verify all installation steps
3. Test with default shortcode `[raid_motor]`
4. Contact your hosting provider for SFTP/server issues

---

## ✅ Installation Checklist

- [ ] Downloaded `raid-motor-embed.php` file
- [ ] Connected to server via SFTP/cPanel
- [ ] Created folder `/wp-content/plugins/raid-motor-embed/`
- [ ] Uploaded file to the folder
- [ ] Activated plugin in WordPress admin
- [ ] Added shortcode `[raid_motor]` to a page
- [ ] Tested and verified it works

---

## 🎯 Quick Start Example

1. Upload `raid-motor-embed.php` via SFTP to:
   ```
   /wp-content/plugins/raid-motor-embed/raid-motor-embed.php
   ```

2. Activate plugin in WordPress

3. Create a new page called "Search"

4. Add this shortcode:
   ```
   [raid_motor]
   ```

5. Publish and view the page

Done! RAID MOTOR is now embedded on your WordPress site.

---

**Plugin Ready for Production Use**
