# RAID MOTOR WordPress Theme

Tema WordPress cyberpunk futuristico con design nero e neon, background animato con particelle, integrazione AI e ricerca avanzata.

## 🚀 Caratteristiche

- **Design Cyberpunk** con colori neon (blu elettrico, arancio, viola)
- **Background Animato** con particelle e connessioni dinamiche
- **Integrazione API n8n** per ricerca AI avanzata
- **Custom Logo** con supporto per loghi personalizzati
- **Custom Post Type "Servizi"** per gestire i servizi offerti
- **Template Dedicati** per servizi singoli e archivio
- **Responsive Design** ottimizzato per tutti i dispositivi
- **Menu Personalizzati** con posizione primary
- **Script WP-CLI** per installazione automatizzata
- **Effetti Hover** e animazioni fluide

## 📋 Requisiti

- WordPress 5.0 o superiore
- PHP 7.4 o superiore
- Docker e Docker Compose (per installazione locale)
- WP-CLI (opzionale, per automazione)

## 🔧 Installazione Locale con Docker

### 1. Clona il Repository

```bash
git clone https://github.com/almaaniraid-rgb/raid-motor-theme.git
cd raid-motor-theme
```

### 2. Configura il File .env

Copia il file `.env.example` in `.env` e modifica i parametri se necessario:

```bash
cp .env.example .env
```

### 3. Avvia i Container Docker

```bash
docker-compose up -d
```

### 4. Completa l'Installazione di WordPress

Apri il browser e vai su `http://localhost:8080`

Completa l'installazione guidata di WordPress:
- Lingua: Italiano
- Titolo sito: RAID MOTOR
- Username: admin (o a tua scelta)
- Password: scegli una password sicura
- Email: la tua email

### 5. Attiva il Tema

#### Opzione A: Via Interfaccia Web
1. Accedi al pannello di amministrazione WordPress: `http://localhost:8080/wp-admin`
2. Vai su **Aspetto → Temi**
3. Trova "RAID MOTOR" e clicca "Attiva"

#### Opzione B: Via WP-CLI
```bash
docker-compose exec wordpress wp theme activate raid-motor-theme
```

### 6. Esegui lo Script di Installazione Automatica (Consigliato)

Lo script WP-CLI automatizza la configurazione del tema:

```bash
docker-compose exec wordpress bash /var/www/html/wp-content/themes/raid-motor-theme/install-theme-wpcli.sh
```

Lo script:
- ✅ Importa il logo nella Media Library
- ✅ Imposta il logo come custom_logo del tema
- ✅ Crea pagine principali (Home, Chi Siamo, Servizi, Contatti, Blog)
- ✅ Crea 10 pagine di esempio
- ✅ Crea 8 servizi di esempio (CPT 'service')
- ✅ Configura i permalink

## 🎨 Personalizzazione del Logo

### Via Customizer (Interfaccia WordPress)

1. Vai su **Aspetto → Personalizza**
2. Clicca su **Identità del sito**
3. Nella sezione "Logo", clicca su "Seleziona logo"
4. Carica il tuo logo personalizzato (dimensioni consigliate: 400x120 px)
5. Clicca "Pubblica" per salvare

### Logo di Default

Il tema include un logo predefinito in `assets/images/logo.png` che viene mostrato automaticamente se non viene impostato un custom logo.

## 🛠 Custom Post Type "Servizi"

Il tema include un Custom Post Type chiamato "service" per gestire i servizi offerti:

### Accesso ai Servizi

1. Nel pannello di amministrazione, vai su **Servizi** nel menu laterale
2. Clicca "Aggiungi Nuovo" per creare un nuovo servizio
3. Compila:
   - **Titolo**: Nome del servizio
   - **Contenuto**: Descrizione completa
   - **Riassunto**: Breve descrizione (usata nell'archivio)
   - **Immagine in evidenza**: Immagine rappresentativa

### Visualizzazione dei Servizi

- **Archivio servizi**: `http://localhost:8080/servizi/`
- **Servizio singolo**: `http://localhost:8080/servizi/nome-servizio/`

I template dedicati (`single-service.php` e `archive-service.php`) gestiscono la visualizzazione ottimizzata dei servizi.

## 🔄 Creazione di un Archivio ZIP del Tema

Per creare un archivio ZIP del tema per l'installazione manuale:

```bash
cd wordpress-theme
zip -r raid-motor-theme.zip raid-motor-theme/ -x "*.git*" "*.DS_Store"
```

Oppure usa il comando tar:

```bash
cd wordpress-theme
tar -czf raid-motor-theme.tar.gz raid-motor-theme/ --exclude=".git" --exclude=".DS_Store"
```

## 📝 Configurazione Avanzata

### Impostazioni API n8n

1. Vai su **Dashboard → RAID MOTOR**
2. Inserisci l'URL del tuo webhook n8n
3. Salva le impostazioni

### Creazione Menu

1. Vai su **Aspetto → Menu**
2. Crea un nuovo menu
3. Aggiungi le pagine desiderate
4. Assegnalo alla posizione **"Menu Principale"**
5. Salva il menu

### Configurazione Permalink

Per assicurarti che i servizi siano accessibili:

1. Vai su **Impostazioni → Permalink**
2. Seleziona "Nome articolo" o una struttura personalizzata
3. Clicca "Salva modifiche"

## 🚀 Guida Rapida per Perplexity

**Come installare e configurare il tema RAID MOTOR su WordPress locale:**

1. Clona il repository e avvia Docker con `docker-compose up -d`
2. Completa l'installazione WordPress su http://localhost:8080
3. Attiva il tema da Aspetto → Temi o via CLI: `docker-compose exec wordpress wp theme activate raid-motor-theme`
4. Esegui lo script di setup automatico: `docker-compose exec wordpress bash /var/www/html/wp-content/themes/raid-motor-theme/install-theme-wpcli.sh`
5. Personalizza il logo da Aspetto → Personalizza → Identità del sito
6. Visualizza i servizi su http://localhost:8080/servizi/
7. Crea un menu da Aspetto → Menu e assegnalo a "Menu Principale"

Il tema include un CPT "Servizi" accessibile da /servizi/ con template dedicati per singolo servizio e archivio.

## 📂 Struttura del Tema

```
raid-motor-theme/
├── assets/
│   └── images/
│       ├── logo.png          # Logo predefinito
│       └── logo.svg          # Logo vettoriale
├── js/
│   ├── particles.js          # Animazione particelle
│   └── main.js               # Script principale
├── functions.php             # Funzioni del tema + CPT
├── header.php                # Header con logo
├── footer.php                # Footer
├── index.php                 # Template principale
├── page.php                  # Template pagine
├── single.php                # Template post singoli
├── single-service.php        # Template servizio singolo
├── archive-service.php       # Template archivio servizi
├── search.php                # Template ricerca
├── style.css                 # Stili del tema
├── screenshot.png            # Screenshot tema
├── install-theme-wpcli.sh    # Script installazione WP-CLI
└── README.md                 # Questo file
```

## 🐛 Troubleshooting

### Il logo non viene visualizzato

- Verifica che il file `assets/images/logo.png` esista
- Controlla le impostazioni in Aspetto → Personalizza → Identità del sito
- Svuota la cache del browser

### I servizi non sono accessibili

- Vai su Impostazioni → Permalink e salva di nuovo
- Verifica che il tema sia attivato correttamente
- Esegui: `docker-compose exec wordpress wp rewrite flush`

### Lo script WP-CLI non funziona

- Verifica che WP-CLI sia installato nel container
- Controlla i permessi del file: `chmod +x install-theme-wpcli.sh`
- Esegui lo script dal container WordPress

## 📞 Supporto

Per assistenza, problemi o richieste:
- Repository: https://github.com/almaaniraid-rgb/raid-motor-theme
- Sito web: https://raidmotor.com

## 📄 Licenza

GNU General Public License v2 o successiva

---

**Sviluppato con ❤️ dal Team RAID MOTOR**
