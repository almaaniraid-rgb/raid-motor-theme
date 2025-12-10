# RAID MOTOR WordPress Theme

Tema WordPress cyberpunk futuristico con design nero e neon, background animato con particelle, integrazione AI e ricerca avanzata.

## Caratteristiche

- Design cyberpunk con colori neon (blu elettrico, arancio, viola)
- Background animato con particelle e connessioni
- **Logo personalizzato AI MOTOR** con fallback automatico
- **Custom Post Type "Servizi"** per gestire i servizi offerti
- Integrazione API n8n per ricerca AI
- Responsive design ottimizzato per mobile
- Supporto per menu personalizzati e thumbnail
- Template dedicati per servizi (singolo e archivio)
- Effetti hover e animazioni fluide
- Script WP-CLI per installazione automatica

## Installazione

### Metodo 1: Installazione tramite WordPress (Consigliato)

1. Scarica il file `raid-motor-theme.zip`
2. Vai su **Aspetto → Temi** nel pannello WordPress
3. Clicca **"Aggiungi nuovo" → "Carica tema"**
4. Seleziona il file ZIP e clicca **"Installa ora"**
5. Attiva il tema

### Metodo 2: Installazione locale con Docker

Se vuoi testare il tema in locale usando Docker Compose:

```bash
# 1. Clona il repository
git clone https://github.com/almaaniraid-rgb/raid-motor-theme.git
cd raid-motor-theme

# 2. Avvia i container Docker
docker-compose up -d

# 3. Attendi che WordPress sia pronto (circa 30-60 secondi)
docker-compose logs -f wordpress

# 4. Visita http://localhost:8080 per completare l'installazione di WordPress
```

Dopo aver completato l'installazione di WordPress:

1. Accedi al pannello di amministrazione: http://localhost:8080/wp-admin
2. Vai su **Aspetto → Temi**
3. Attiva il tema **RAID MOTOR**

### Metodo 3: Installazione automatica con WP-CLI (Avanzato)

Per una configurazione completa e automatica del tema con contenuti di esempio:

```bash
# Dal container WordPress
docker-compose exec wordpress bash

# Naviga nella directory del tema
cd /var/www/html/wp-content/themes/raid-motor-theme

# Esegui lo script di installazione
bash install-theme-wpcli.sh

# Esci dal container
exit
```

Lo script WP-CLI creerà automaticamente:
- Logo importato e configurato come custom logo
- 5 pagine principali (Home, Chi siamo, Servizi, Contatti, Blog)
- Homepage configurata
- 10 pagine di esempio
- 8 servizi di esempio
- Permalink aggiornati

## Configurazione

### Logo Personalizzato

Il tema include un logo predefinito "AI MOTOR" situato in `assets/images/logo.png`.

**Opzione 1: Usa il logo predefinito**
- Il logo verrà visualizzato automaticamente su tutte le pagine

**Opzione 2: Personalizza il logo dal Customizer**
1. Vai su **Aspetto → Personalizza → Identità del sito**
2. Clicca su **"Seleziona logo"**
3. Carica il tuo logo personalizzato
4. Regola le dimensioni (consigliato: 400x120px)
5. Clicca **"Pubblica"**

### Gestione Servizi

Il tema include un Custom Post Type chiamato **"Servizi"** per gestire i servizi offerti:

1. Vai su **Dashboard → Servizi**
2. Clicca **"Aggiungi nuovo"**
3. Inserisci titolo, descrizione e immagine in evidenza
4. Pubblica il servizio

I servizi saranno visibili:
- Archivio completo: `https://tuo-sito.com/servizi/`
- Singolo servizio: `https://tuo-sito.com/servizi/nome-servizio/`

### Impostazioni API

1. Vai su **Dashboard → RAID MOTOR**
2. Inserisci l'URL del tuo webhook n8n
3. Salva le impostazioni

### Menu di Navigazione

1. Vai su **Aspetto → Menu**
2. Crea un nuovo menu
3. Aggiungi le pagine desiderate
4. Assegnalo alla posizione **"Primary Menu"**
5. Salva il menu

## Creazione Archivio ZIP del Tema

Per creare un file ZIP del tema da distribuire:

```bash
# Dalla root del repository
cd wordpress-theme
zip -r raid-motor-theme.zip raid-motor-theme/ -x "*.git*" "*.DS_Store" "*node_modules*"
```

Oppure puoi utilizzare il file già pronto nella directory `wordpress-theme/`.

## Template Disponibili

- `index.php` - Template principale
- `header.php` - Header con logo e menu di navigazione
- `footer.php` - Footer del sito
- `single.php` - Singolo post del blog
- `page.php` - Pagine statiche
- `search.php` - Risultati di ricerca
- `single-service.php` - Singolo servizio
- `archive-service.php` - Archivio dei servizi

## Requisiti

- WordPress 5.0 o superiore
- PHP 7.4 o superiore
- WP-CLI (opzionale, per lo script di installazione automatica)

## Istruzioni per Perplexity

Per installare e configurare il tema RAID MOTOR su WordPress in localhost:

1. Scarica il file ZIP del tema dalla repository GitHub
2. Accedi al pannello WordPress (http://localhost:8080/wp-admin)
3. Vai su Aspetto → Temi → Aggiungi nuovo → Carica tema
4. Seleziona il file ZIP e installa
5. Attiva il tema
6. Per caricare il logo: vai su Aspetto → Personalizza → Identità del sito → Seleziona logo e carica il file logo.png dalla cartella assets/images
7. Per gestire i servizi: vai su Dashboard → Servizi e crea nuovi servizi con titolo, descrizione e immagine
8. Configura il menu di navigazione in Aspetto → Menu assegnandolo alla posizione "Primary Menu"
9. Visita /servizi/ per vedere l'archivio dei servizi

## Struttura File

```
raid-motor-theme/
├── assets/
│   └── images/
│       └── logo.png          # Logo AI MOTOR predefinito
├── js/
│   ├── particles.js          # Animazione particelle
│   └── main.js               # JavaScript principale
├── functions.php             # Funzioni del tema e CPT
├── header.php                # Header con logo e menu
├── footer.php                # Footer
├── index.php                 # Template principale
├── single.php                # Singolo post
├── page.php                  # Pagina statica
├── search.php                # Ricerca
├── single-service.php        # Template singolo servizio
├── archive-service.php       # Template archivio servizi
├── style.css                 # Stili del tema
├── install-theme-wpcli.sh    # Script installazione automatica
├── screenshot.png            # Screenshot del tema
└── README.md                 # Questo file
```

## Supporto e Sviluppo

Per assistenza o segnalazioni:
- Repository: https://github.com/almaaniraid-rgb/raid-motor-theme
- Website: https://raidmotor.com

## Licenza

GNU General Public License v2 o successiva

## Changelog

### Versione 1.1.0 (Corrente)
- ✨ Aggiunto supporto logo personalizzato con fallback
- ✨ Aggiunto Custom Post Type "Servizi"
- ✨ Creati template single-service.php e archive-service.php
- ✨ Aggiunto script WP-CLI per installazione automatica
- 🎨 Migliorati stili per logo responsive
- 📝 Documentazione aggiornata con istruzioni complete

### Versione 1.0.0
- 🎉 Rilascio iniziale con design cyberpunk
- ⚡ Background animato con particelle
- 🔍 Integrazione ricerca AI con n8n
