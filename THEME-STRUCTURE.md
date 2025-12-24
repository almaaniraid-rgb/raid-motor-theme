# 📁 Struttura File Tema RAID MOTOR

## Panoramica Completa

```
raid-motor-theme/
├── 📋 File Principali
│   ├── docker-compose.wordpress.yml    # Docker setup (MySQL, WordPress, WP-CLI)
│   ├── install.sh                      # Script wrapper installazione
│   ├── install-theme-wpcli.sh         # Script WP-CLI setup
│   ├── README-WORDPRESS.md            # Documentazione tema
│   ├── INSTALLAZIONE.md               # Guida installazione
│   └── PR-SUMMARY.md                  # Sommario PR
│
└── 🎨 wordpress-theme/raid-motor-theme/
    │
    ├── 📄 Template Files
    │   ├── functions.php              # Funzioni tema, CPT, shortcode
    │   ├── style.css                  # Stile principale con metadata
    │   ├── header.php                 # Header con logo 3D e menu
    │   ├── footer.php                 # Footer minimale
    │   ├── index.php                  # Template index
    │   ├── page.php                   # Template pagina singola
    │   ├── single.php                 # Template post singolo
    │   ├── search.php                 # Template ricerca
    │   │
    │   ├── 🤖 Template Custom Post Types
    │   │   ├── single-agent.php       # Singolo agente AI
    │   │   ├── archive-agent.php      # Archivio agenti
    │   │   ├── single-service.php     # Singolo servizio
    │   │   └── archive-service.php    # Archivio servizi
    │   │
    │   └── 📦 template-parts/
    │       └── hero-animated.php      # Hero section animato
    │
    ├── 🎨 assets/
    │   │
    │   ├── 📝 css/
    │   │   └── theme-base.css         # Stili neon moderni
    │   │
    │   ├── 📜 js/
    │   │   ├── three-logo.js          # Animazione Three.js logo
    │   │   └── theme.js               # JavaScript tema principale
    │   │
    │   └── 🖼️ images/
    │       ├── logo.png               # Logo 512x512px
    │       └── logo.svg               # Logo vettoriale
    │
    ├── 🔧 js/ (legacy)
    │   ├── main.js                    # JavaScript legacy
    │   └── particles.js               # Particelle legacy
    │
    └── 📸 screenshot.png              # Screenshot tema per admin

```

## Dettaglio File Principali

### 🐳 Docker & Setup
- **docker-compose.wordpress.yml** (2.4 KB)
  - Servizio MySQL 5.7
  - Servizio WordPress 6.4-php8.1
  - Servizio WP-CLI per automazione
  - Volumi persistenti per dati

- **install.sh** (3.7 KB)
  - Verifica Docker/Docker Compose
  - Avvia container
  - Esegue script di installazione
  
- **install-theme-wpcli.sh** (11 KB)
  - Installa WordPress
  - Attiva tema
  - Importa logo
  - Crea 15+ pagine demo
  - Crea 3 agenti AI
  - Crea 8 servizi
  - Configura menu

### 📚 Documentazione
- **README-WORDPRESS.md** (8.3 KB)
  - Panoramica tema
  - Caratteristiche
  - Guida uso
  - Personalizzazione
  
- **INSTALLAZIONE.md** (9.2 KB)
  - Guida step-by-step
  - Troubleshooting
  - Comandi Docker
  - Checklist verifica
  
- **PR-SUMMARY.md** (11 KB)
  - Sommario implementazione
  - File creati/modificati
  - Come testare
  - Requisiti soddisfatti

### 🎨 Tema WordPress

#### Template PHP
| File | Dimensione | Descrizione |
|------|-----------|-------------|
| functions.php | ~10 KB | CPT, shortcode, enqueue, menu |
| header.php | ~2 KB | Header con logo 3D e navigazione |
| footer.php | ~1 KB | Footer minimale con chiusura main |
| single-agent.php | ~4.4 KB | Template agente singolo |
| archive-agent.php | ~4.5 KB | Griglia agenti AI |
| single-service.php | ~3.2 KB | Template servizio singolo |
| archive-service.php | ~3.8 KB | Griglia servizi |
| template-parts/hero-animated.php | ~4.5 KB | Hero animato con logo 3D |

#### Assets

**CSS:**
- `theme-base.css` (7.3 KB)
  - Variabili CSS per colori neon
  - Stili header e navigazione
  - Card per agenti e servizi
  - Griglia responsive
  - Media queries mobile
  - Supporto accessibility

**JavaScript:**
- `three-logo.js` (7.8 KB)
  - Inizializzazione Three.js
  - Caricamento logo come texture
  - Anelli neon concentrici
  - Sistema particelle
  - Animazioni e rotazioni
  - Supporto prefer-reduced-motion
  
- `theme.js` (7.6 KB)
  - Menu mobile responsive
  - Smooth scroll
  - Lazy loading immagini
  - Miglioramenti accessibility
  - Scroll reveal animations
  - Performance mobile

**Images:**
- `logo.png` (75 KB) - Logo principale 512x512px
- `logo.svg` (1.1 KB) - Logo vettoriale scalabile

## Statistiche

### Totale File Creati: 27
- Template PHP: 11
- JavaScript: 4
- CSS: 1
- Images: 2
- Scripts: 2
- Documentation: 3
- Config: 1

### Totale Linee di Codice: ~3500+
- PHP: ~2000 linee
- JavaScript: ~800 linee
- CSS: ~400 linee
- Bash: ~250 linee
- Markdown: ~1000 linee

### Caratteristiche
- ✅ 2 Custom Post Types (Agent, Service)
- ✅ 1 Shortcode ([rm_three_logo])
- ✅ 4 Template CPT (single/archive)
- ✅ Animazione Three.js
- ✅ Design neon 3D
- ✅ Responsive mobile
- ✅ Accessibility support
- ✅ Docker setup completo
- ✅ Installazione automatizzata
- ✅ 15+ pagine demo
- ✅ 3 agenti + 8 servizi demo

## Dipendenze

### CDN
- Three.js v0.160.0 (da cdn.jsdelivr.net)

### Docker Images
- mysql:5.7
- wordpress:6.4-php8.1-apache
- wordpress:cli-2.9-php8.1

### WordPress
- WordPress 6.4+
- PHP 8.1+

## Colori Tema

```css
--electric-blue: #00d9ff;
--neon-purple: #b24bf3;
--neon-orange: #ff6b35;
--dark-bg: #0a0a0a;
--card-bg: #1a1a1a;
```

## Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

---

Generato automaticamente per la PR del tema RAID MOTOR
