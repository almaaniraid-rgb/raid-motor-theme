# RAID MOTOR - Tema WordPress 🚀

Tema WordPress completo con design neon 3D moderno, animazioni Three.js, Custom Post Types (Agent e Service) e installazione automatizzata con Docker.

![RAID MOTOR Theme](wordpress-theme/raid-motor-theme/assets/images/logo.png)

## ✨ Caratteristiche

### Design e UI
- **Design Neon 3D Moderno** - Interfaccia futuristica con gradiente neon (blu elettrico, viola, arancione)
- **Logo 3D Animato** - Animazione Three.js con anello neon e particelle
- **Header Personalizzato** - Logo a sinistra, scritta "Raid Motor" e menu di navigazione
- **Responsive Design** - Ottimizzato per tutti i dispositivi
- **Accessibilità** - Supporto completo per `prefers-reduced-motion`

### Funzionalità WordPress
- **Custom Post Types**:
  - `agent` - Agenti AI con supporto REST API
  - `service` - Servizi con supporto REST API
- **Shortcode Dashboard 3D** - `[rm_three_logo height="360"]` per inserire il logo 3D in qualsiasi pagina
- **Template Personalizzati**:
  - `single-agent.php` e `archive-agent.php`
  - `single-service.php` e `archive-service.php`
  - `template-parts/hero-animated.php`
- **Custom Logo Support** - Gestione logo personalizzato con fallback
- **Menu di Navigazione** - Menu principale responsive

### Tecnologie
- WordPress 6.4+ con PHP 8.1
- Three.js per animazioni 3D
- CSS moderno con variabili e gradients
- JavaScript vanilla con supporto accessibility
- Docker Compose per sviluppo locale

## 📦 Struttura File

```
wordpress-theme/raid-motor-theme/
├── assets/
│   ├── css/
│   │   └── theme-base.css          # Stili tema neon
│   ├── js/
│   │   ├── three-logo.js           # Animazione Three.js logo
│   │   └── theme.js                # JavaScript tema
│   └── images/
│       ├── logo.png                # Logo tema (512x512)
│       └── logo.svg                # Versione SVG
├── template-parts/
│   └── hero-animated.php           # Hero section animato
├── functions.php                   # Funzioni tema e CPT
├── style.css                       # Stile principale
├── header.php                      # Header con logo 3D
├── footer.php                      # Footer minimale
├── index.php                       # Template index
├── single-agent.php                # Template singolo agente
├── archive-agent.php               # Archivio agenti
├── single-service.php              # Template singolo servizio
├── archive-service.php             # Archivio servizi
└── screenshot.png                  # Screenshot tema
```

## 🚀 Installazione Rapida

### Prerequisiti
- Docker e Docker Compose installati
- Porta 8080 libera

### Passo 1: Clone del Repository
```bash
git clone https://github.com/almaaniraid-rgb/raid-motor-theme.git
cd raid-motor-theme
```

### Passo 2: Avvia l'Installazione Automatica
```bash
chmod +x install.sh
./install.sh
```

Lo script automaticamente:
1. ✅ Verifica Docker e Docker Compose
2. ✅ Avvia i container (MySQL, WordPress, WP-CLI)
3. ✅ Installa e configura WordPress
4. ✅ Attiva il tema RAID MOTOR
5. ✅ Importa il logo nella media library
6. ✅ Crea pagine demo (Home, Chi Siamo, Servizi, Contatti, Blog, +10)
7. ✅ Crea 3 agenti AI demo (Perplexity, Cometa, Search-AI)
8. ✅ Crea 8 servizi demo
9. ✅ Configura menu di navigazione

### Passo 3: Accedi a WordPress
Apri il browser su: **http://localhost:8080**

**Credenziali di accesso:**
- Username: `admin`
- Password: `admin123`

## 🎨 Uso del Tema

### Logo 3D Personalizzato
Il tema include un logo 3D animato che può essere inserito in qualsiasi pagina con lo shortcode:

```
[rm_three_logo height="360"]
```

Il logo viene automaticamente mostrato nell'header di tutte le pagine.

### Custom Post Types

#### Agenti AI
Gestisci gli agenti AI dal menu **Agenti AI** nel backend di WordPress.

**Campi disponibili:**
- Titolo
- Descrizione (Editor)
- Immagine in evidenza
- Meta fields: `agent_model`, `agent_capabilities`

**URL:** `/agent/nome-agente` e `/agent` (archivio)

#### Servizi
Gestisci i servizi dal menu **Servizi** nel backend.

**Campi disponibili:**
- Titolo
- Descrizione (Editor)
- Immagine in evidenza
- Excerpt

**URL:** `/service/nome-servizio` e `/service` (archivio)

### Personalizzazione Logo
1. Vai su **Aspetto > Personalizza > Identità del sito**
2. Clicca su **Seleziona logo**
3. Carica il tuo logo personalizzato

Il tema usa automaticamente il logo caricato. Se non carichi un logo, usa il logo predefinito in `assets/images/logo.png`.

### Menu di Navigazione
1. Vai su **Aspetto > Menu**
2. Crea o modifica il menu "Menu Principale"
3. Assegna il menu alla posizione **Menu Principale**

## 🛠️ Comandi Docker Utili

```bash
# Fermare i container
docker-compose -f docker-compose.wordpress.yml stop

# Riavviare i container
docker-compose -f docker-compose.wordpress.yml start

# Vedere i log
docker-compose -f docker-compose.wordpress.yml logs -f

# Accedere al container WordPress
docker exec -it raid-motor-wordpress bash

# Eseguire comandi WP-CLI
docker exec -it raid-motor-wpcli wp --info --allow-root

# Rimuovere tutto (inclusi volumi)
docker-compose -f docker-compose.wordpress.yml down -v
```

## 🎯 Contenuti Demo Creati

### Pagine (15+)
- Home (con logo 3D)
- Chi Siamo
- Servizi
- Contatti
- Blog
- 10 pagine di esempio

### Agenti AI (3)
1. **Perplexity** - Agente AI avanzato per ricerche approfondite
2. **Cometa** - Agente specializzato in ricerca multi-fonte
3. **Search-AI** - Motore di ricerca AI generalista

### Servizi (8)
1. Ricerca AI Avanzata
2. Analisi Semantica
3. Aggregazione Multi-Fonte
4. Ranking Intelligente
5. Filtri Contestuali
6. Sintesi Automatica
7. Suggerimenti Predittivi
8. API Integration

## 🔧 Sviluppo e Personalizzazione

### Modificare gli Stili
Gli stili principali si trovano in:
- `style.css` - Stili base tema
- `assets/css/theme-base.css` - Stili neon e componenti

**Colori tema:**
```css
--electric-blue: #00d9ff;
--neon-purple: #b24bf3;
--neon-orange: #ff6b35;
--dark-bg: #0a0a0a;
```

### Modificare le Animazioni Three.js
Il file `assets/js/three-logo.js` contiene la logica per:
- Caricamento del logo come texture
- Creazione anelli neon
- Sistema di particelle
- Animazioni e rotazioni

### Aggiungere Nuovi Template
Crea nuovi file PHP nella root del tema seguendo la [gerarchia template WordPress](https://developer.wordpress.org/themes/basics/template-hierarchy/).

## 📱 Supporto Browser

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance e Ottimizzazioni

- **Prefer Reduced Motion** - Animazioni disabilitate per utenti che preferiscono meno movimento
- **Lazy Loading** - Immagini caricate on-demand
- **Mobile Optimized** - Riduzione effetti su dispositivi mobili
- **Minimal Dependencies** - Solo Three.js come dipendenza esterna

## 🔒 Sicurezza

- ✅ Nessuna credenziale sensibile nel repository
- ✅ Escape di tutti gli output (`esc_html`, `esc_url`, `esc_attr`)
- ✅ Nonce per operazioni AJAX
- ✅ Sanitizzazione input utente
- ⚠️ Le credenziali di default sono per sviluppo locale - **cambiarle in produzione!**

## 📝 Note di Sviluppo

### Credenziali Docker (Solo Sviluppo)
Le credenziali nel file `docker-compose.wordpress.yml` sono predefinite per facilità di sviluppo:
- Database: `wordpress` / `wordpress`
- Root DB: `wordpress_root`
- WordPress Admin: `admin` / `admin123`

**⚠️ IMPORTANTE:** Cambia tutte le password prima di usare in produzione!

### Volumi Docker
I dati persistono in volumi Docker:
- `db_data` - Database MySQL
- `wordpress_data` - File WordPress

Per reset completo: `docker-compose -f docker-compose.wordpress.yml down -v`

## 🤝 Contribuire

Contributi sono benvenuti! Per contribuire:
1. Fork del repository
2. Crea un branch per la tua feature (`git checkout -b feature/amazing-feature`)
3. Commit dei cambiamenti (`git commit -m 'Add amazing feature'`)
4. Push al branch (`git push origin feature/amazing-feature`)
5. Apri una Pull Request

## 📄 Licenza

Questo tema è rilasciato sotto licenza GPL v2 o successiva, come richiesto da WordPress.

## 🙏 Crediti

- **Three.js** - Libreria 3D (MIT License)
- **WordPress** - CMS (GPL v2+)
- **Docker** - Containerizzazione

---

**Sviluppato con ❤️ dal team RAID MOTOR**

Per supporto o domande, apri una issue su GitHub.
