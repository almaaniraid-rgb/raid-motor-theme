# ✅ Checklist Installazione RAID MOTOR Theme
## WordPress Localhost (http://localhost:8080)

---

## 📋 FASE 1: PREPARAZIONE

### Prima di iniziare:

- [ ] **WordPress installato e funzionante**
  - Test: Apri `http://localhost:8080` nel browser
  - Vedi il sito WordPress? ✅ Sì → Continua | ❌ No → Installa WordPress

- [ ] **Accesso al pannello admin**
  - Test: Apri `http://localhost:8080/wp-admin`
  - Riesci ad accedere? ✅ Sì → Continua | ❌ No → Verifica credenziali

- [ ] **File tema scaricato**
  - Percorso: `wordpress-theme/raid-motor-theme.zip`
  - File presente? ✅ Sì → Continua | ❌ No → Scarica dal repository

- [ ] **Requisiti di sistema**
  - WordPress 5.0+: ✅ Sì | ❌ No
  - PHP 7.4+: ✅ Sì | ❌ No

---

## 📦 FASE 2: INSTALLAZIONE TEMA

### Opzione A: Tramite Dashboard WordPress (Consigliato)

#### Step 1: Login
- [ ] Apri browser
- [ ] Vai a: `http://localhost:8080/wp-admin`
- [ ] Inserisci username: _______________
- [ ] Inserisci password: _______________
- [ ] Clicca "Accedi"
- [ ] Dashboard caricato? ✅

#### Step 2: Naviga ai Temi
- [ ] Trova menu "Aspetto" nel menu laterale sinistro
- [ ] Clicca su "Temi"
- [ ] Vedi la pagina dei temi? ✅

#### Step 3: Aggiungi Nuovo Tema
- [ ] Clicca pulsante "Aggiungi nuovo" (in alto)
- [ ] Clicca pulsante "Carica tema" (in alto)
- [ ] Vedi form di upload? ✅

#### Step 4: Upload File
- [ ] Clicca "Scegli file"
- [ ] Naviga alla cartella: `wordpress-theme/`
- [ ] Seleziona: `raid-motor-theme.zip`
- [ ] Clicca "Apri"
- [ ] Clicca "Installa ora"

#### Step 5: Attendi Installazione
- [ ] Vedi barra di caricamento? ✅
- [ ] Attendi messaggio: "Tema installato con successo"
- [ ] Installazione completata? ✅

#### Step 6: Attiva Tema
- [ ] Vedi pulsante "Attiva"? ✅
- [ ] Clicca "Attiva"
- [ ] Vedi messaggio "Nuovo tema attivato"? ✅

---

### Opzione B: Installazione Manuale (Alternativa)

Solo se Opzione A non funziona:

#### Step 1: Trova Cartella WordPress
- [ ] Apri Esplora File / Finder
- [ ] Naviga a (scegli il tuo):
  - [ ] Windows XAMPP: `C:\xampp\htdocs\wordpress\`
  - [ ] Windows WAMP: `C:\wamp64\www\wordpress\`
  - [ ] Mac MAMP: `/Applications/MAMP/htdocs/wordpress/`
  - [ ] Linux: `/var/www/html/wordpress/`

#### Step 2: Entra in Cartella Temi
- [ ] Apri cartella: `wp-content/`
- [ ] Apri cartella: `themes/`
- [ ] Percorso completo raggiunto? ✅

#### Step 3: Estrai Tema
- [ ] Trova file: `raid-motor-theme.zip`
- [ ] Clic destro → "Estrai qui"
- [ ] Cartella `raid-motor-theme` creata? ✅

#### Step 4: Copia Cartella
- [ ] Copia cartella: `raid-motor-theme`
- [ ] Incolla in: `wp-content/themes/`
- [ ] Verifica struttura:
  ```
  wp-content/
    └── themes/
        └── raid-motor-theme/
            ├── style.css ✅
            ├── functions.php ✅
            ├── index.php ✅
            └── ...altri file ✅
  ```

#### Step 5: Attiva da WordPress
- [ ] Vai a: `http://localhost:8080/wp-admin/themes.php`
- [ ] Trova "RAID MOTOR" nella lista
- [ ] Passa mouse sopra il tema
- [ ] Clicca "Attiva"
- [ ] Tema attivato? ✅

---

## 🎯 FASE 3: VERIFICA INSTALLAZIONE

### Test Base

- [ ] **Homepage funzionante**
  - Apri: `http://localhost:8080`
  - Vedi il design cyberpunk nero con neon? ✅

- [ ] **Background animato**
  - Vedi particelle animate nello sfondo? ✅
  - Le particelle si connettono con linee? ✅

- [ ] **Header presente**
  - Vedi header in alto? ✅
  - Logo o titolo visibile? ✅

- [ ] **Footer presente**
  - Scroll in fondo alla pagina
  - Vedi footer? ✅

### Test Console (Errori JavaScript)

- [ ] Premi `F12` per aprire DevTools
- [ ] Clicca tab "Console"
- [ ] Nessun errore rosso? ✅
  - Se vedi errori rossi: annotali _______________

### Test Responsive

- [ ] DevTools aperti (F12)
- [ ] Clicca icona device toggle (smartphone/tablet icon)
- [ ] Testa dimensioni:
  - [ ] iPhone SE (375px) ✅
  - [ ] iPad (768px) ✅
  - [ ] Desktop (1920px) ✅
- [ ] Il layout si adatta correttamente? ✅

### Test Browser Multipli

- [ ] Chrome/Edge: ✅ Funziona | ❌ Problemi
- [ ] Firefox: ✅ Funziona | ❌ Problemi
- [ ] Safari (se Mac): ✅ Funziona | ❌ Problemi

---

## ⚙️ FASE 4: CONFIGURAZIONE POST-INSTALLAZIONE

### 1. Configura Menu di Navigazione

#### Crea Menu
- [ ] Vai a: `http://localhost:8080/wp-admin/nav-menus.php`
- [ ] Clicca "Crea un nuovo menu"
- [ ] Nome menu: "Menu Principale" (o altro)
- [ ] Clicca "Crea menu"
- [ ] Menu creato? ✅

#### Aggiungi Pagine al Menu
- [ ] Nella colonna sinistra, trova "Pagine"
- [ ] Clicca "Visualizza tutti"
- [ ] Seleziona pagine da aggiungere:
  - [ ] Home
  - [ ] Chi siamo / About
  - [ ] Contatti / Contact
  - [ ] Blog
  - [ ] Altre pagine: _______________
- [ ] Clicca "Aggiungi al menu"
- [ ] Pagine aggiunte al menu? ✅

#### Assegna Posizione Menu
- [ ] Scroll in basso nella pagina
- [ ] Trova "Impostazioni del menu"
- [ ] Spunta checkbox: ☑️ "Primary Menu"
- [ ] Clicca "Salva menu"
- [ ] Messaggio "Menu salvato"? ✅

#### Verifica Menu
- [ ] Vai a: `http://localhost:8080`
- [ ] Menu visibile in alto? ✅
- [ ] Clicca su voci del menu
- [ ] Link funzionanti? ✅

### 2. Configura API n8n (Opzionale)

Solo se hai un webhook n8n:

- [ ] Vai a: Dashboard → RAID MOTOR
- [ ] Trova campo "n8n Webhook URL"
- [ ] Inserisci URL: `https://raidoneone.app.n8n.cloud/webhook/search`
  (o il tuo URL personalizzato): _______________
- [ ] Clicca "Salva impostazioni"
- [ ] Messaggio "Impostazioni salvate"? ✅

**Nota:** Se non hai webhook n8n, salta questo step. Il tema funziona senza.

### 3. Personalizzazione (Opzionale)

#### Logo e Titolo Sito
- [ ] Vai a: `http://localhost:8080/wp-admin/customize.php`
- [ ] Sezione "Identità del sito"
- [ ] Modifica titolo sito: _______________
- [ ] Modifica descrizione: _______________
- [ ] Carica logo (se desiderato)
- [ ] Clicca "Pubblica"

#### Colori (Opzionale)
- [ ] Nel Personalizzatore, cerca "Colori"
- [ ] Modifica colori se desiderato
- [ ] Clicca "Pubblica"

---

## 🧪 FASE 5: TEST COMPLETO

### Test Funzionalità

- [ ] **Test Homepage**
  - URL: `http://localhost:8080`
  - Design corretto? ✅
  - Animazioni funzionanti? ✅

- [ ] **Test Pagina Singola**
  - Apri una pagina qualsiasi
  - Layout corretto? ✅
  - Contenuto leggibile? ✅

- [ ] **Test Articolo Blog**
  - Vai a un post del blog
  - Layout corretto? ✅
  - Immagini caricate? ✅

- [ ] **Test Ricerca**
  - Usa la barra di ricerca
  - Risultati visualizzati? ✅
  - Pagina risultati funzionante? ✅

- [ ] **Test Form di Contatto** (se presente)
  - Compila form di contatto
  - Invio funzionante? ✅

### Test Performance

- [ ] **Velocità Caricamento**
  - F12 → Network tab
  - Ricarica pagina
  - Tempo caricamento < 3 secondi? ✅

- [ ] **Dimensione Pagina**
  - Controlla in Network tab
  - Dimensione totale < 2MB? ✅

---

## 🔧 FASE 6: RISOLUZIONE PROBLEMI

### Se qualcosa non funziona:

#### Problema: Tema non appare nella lista
- [ ] File in posizione corretta? (`wp-content/themes/raid-motor-theme/`)
- [ ] File `style.css` presente nella cartella tema?
- [ ] Ricaricato la pagina temi? (Ctrl+F5)
- [ ] Problema risolto? ✅

#### Problema: Schermata bianca
- [ ] PHP versione 7.4+? (Verifica in Site Health)
- [ ] Attivato WP_DEBUG in wp-config.php?
- [ ] Controllato file debug.log?
- [ ] Tema predefinito ripristinato temporaneamente?
- [ ] Problema risolto? ✅

#### Problema: Particelle non animate
- [ ] File `js/particles.js` presente?
- [ ] Errori JavaScript nella console? (F12)
- [ ] Cache browser svuotata? (Ctrl+Shift+Delete)
- [ ] Problema risolto? ✅

#### Problema: Stili CSS mancanti
- [ ] File `style.css` caricato? (verifica in Network tab)
- [ ] Permessi file corretti? (755 per cartelle, 644 per file)
- [ ] Permalink rigenerati? (Impostazioni → Permalink → Salva)
- [ ] Problema risolto? ✅

#### Problema: Menu non appare
- [ ] Menu creato in Aspetto → Menu?
- [ ] Menu assegnato a "Primary Menu"?
- [ ] Pagine aggiunte al menu?
- [ ] Problema risolto? ✅

---

## ✅ CHECKLIST FINALE

### Tutto Completato?

- [ ] ✅ Tema installato e attivato
- [ ] ✅ Homepage visualizzata correttamente
- [ ] ✅ Background animato funzionante
- [ ] ✅ Menu di navigazione configurato
- [ ] ✅ Testato su desktop
- [ ] ✅ Testato su mobile (responsive)
- [ ] ✅ Testato su multipli browser
- [ ] ✅ Nessun errore nella console
- [ ] ✅ API configurata (se necessaria)
- [ ] ✅ Personalizzazione completata (se desiderata)

---

## 📊 RISULTATO FINALE

### Stato Installazione:

- **Data completamento:** ___/___/2025
- **Tempo impiegato:** ___ minuti
- **Metodo usato:** ⬜ Dashboard Upload | ⬜ Manuale
- **Problemi riscontrati:** ⬜ Nessuno | ⬜ Sì (quali?) _______________
- **Risultato:** ⬜ ✅ Successo | ⬜ ❌ Da risolvere

### URL Sito:
- **Frontend:** http://localhost:8080
- **Backend:** http://localhost:8080/wp-admin

---

## 🎉 CONGRATULAZIONI!

Se hai spuntato tutte le checkbox, hai installato con successo il tema RAID MOTOR!

Il tuo sito cyberpunk futuristico è ora live su:
### 🌐 http://localhost:8080

---

## 📞 SUPPORTO

Se hai ancora problemi:

1. **Consulta guide dettagliate:**
   - `INSTALLAZIONE_LOCALHOST.md` - Guida completa
   - `GUIDA_RAPIDA_LOCALHOST.md` - Guida rapida

2. **Verifica log:**
   - `wp-content/debug.log` (se WP_DEBUG attivo)
   - Console browser (F12)

3. **Contatta supporto:**
   - Email: support@raidmotor.com
   - Sito: https://raidmotor.com

---

**Checklist versione:** 1.0  
**Creata da:** RAID MOTOR Team  
**Licenza:** GPL v2+  

🚀 **Buon lavoro con RAID MOTOR!**
