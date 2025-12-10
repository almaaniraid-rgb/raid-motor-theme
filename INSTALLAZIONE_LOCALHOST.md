# 🚀 Guida Installazione RAID MOTOR Theme su Localhost

## Guida Completa per Installare il Tema sul tuo WordPress Locale

**URL Localhost:** http://localhost:8080/wp-admin

---

## 📋 Indice Rapido

1. [Prerequisiti](#-prerequisiti)
2. [Metodo 1: Installazione tramite Dashboard WordPress](#-metodo-1-installazione-tramite-dashboard-wordpress-consigliato)
3. [Metodo 2: Installazione Manuale via File](#-metodo-2-installazione-manuale-via-file)
4. [Metodo 3: Estrazione Diretta nella Cartella Temi](#-metodo-3-estrazione-diretta-nella-cartella-temi)
5. [Configurazione Post-Installazione](#-configurazione-post-installazione)
6. [Verifica Installazione](#-verifica-installazione)
7. [Risoluzione Problemi](#-risoluzione-problemi)

---

## ✅ Prerequisiti

Prima di iniziare, assicurati di avere:

- ✅ WordPress installato e funzionante su http://localhost:8080
- ✅ Accesso al pannello amministrativo: http://localhost:8080/wp-admin
- ✅ Credenziali di accesso WordPress (username e password)
- ✅ File del tema: `wordpress-theme/raid-motor-theme.zip` (presente in questo repository)
- ✅ Browser web (Chrome, Firefox, Safari o Edge)

### Verifica che WordPress Funzioni

1. Apri il browser
2. Vai a: `http://localhost:8080`
3. Dovresti vedere il tuo sito WordPress
4. Vai a: `http://localhost:8080/wp-admin`
5. Dovresti vedere la pagina di login

✅ Se tutto funziona, sei pronto per installare il tema!

---

## 🎯 Metodo 1: Installazione tramite Dashboard WordPress (Consigliato)

Questo è il metodo più semplice e sicuro.

### Passo 1: Scarica il File del Tema

1. Vai alla cartella del repository sul tuo computer
2. Naviga in: `wordpress-theme/`
3. Trova il file: `raid-motor-theme.zip`
4. Copia questo file sul desktop o in una cartella facile da trovare

### Passo 2: Accedi al Pannello WordPress

1. Apri il browser
2. Vai a: `http://localhost:8080/wp-admin`
3. Inserisci le tue credenziali:
   - **Username:** (il tuo username WordPress)
   - **Password:** (la tua password WordPress)
4. Clicca **"Accedi"** o **"Log In"**

### Passo 3: Vai alla Sezione Temi

1. Nel menu laterale sinistro, trova **"Aspetto"** (o **"Appearance"**)
2. Clicca su **"Temi"** (o **"Themes"**)
3. Vedrai i temi attualmente installati

### Passo 4: Carica il Nuovo Tema

1. In alto, clicca sul pulsante **"Aggiungi nuovo"** (o **"Add New"**)
2. Nella nuova pagina, clicca su **"Carica tema"** (o **"Upload Theme"**)
3. Clicca sul pulsante **"Scegli file"** (o **"Choose File"**)
4. Seleziona il file `raid-motor-theme.zip` che hai copiato prima
5. Clicca **"Installa ora"** (o **"Install Now"**)

### Passo 5: Attendi l'Installazione

Il processo richiede pochi secondi:
- Vedrai una barra di caricamento
- WordPress decomprimerà il file
- Vedrai il messaggio: **"Tema installato con successo"**

### Passo 6: Attiva il Tema

1. Dopo l'installazione, vedrai il messaggio di successo
2. Clicca sul pulsante **"Attiva"** (o **"Activate"**)
3. Il tema RAID MOTOR è ora attivo!

### Passo 7: Visualizza il Sito

1. In alto, nella barra nera, trova il nome del tuo sito
2. Clicca sul nome del sito (o sull'icona casa)
3. Si aprirà una nuova scheda con: `http://localhost:8080`
4. Vedrai il tuo sito con il nuovo tema RAID MOTOR attivato! 🎉

---

## 💻 Metodo 2: Installazione Manuale via File

Se il metodo 1 non funziona, usa questo metodo.

### Prerequisiti per Questo Metodo

Devi sapere dove si trova la cartella di WordPress sul tuo computer. Solitamente:

- **Windows (XAMPP):** `C:\xampp\htdocs\wordpress\`
- **Windows (WAMP):** `C:\wamp64\www\wordpress\`
- **Mac (MAMP):** `/Applications/MAMP/htdocs/wordpress/`
- **Linux:** `/var/www/html/wordpress/`

### Passo 1: Trova la Cartella dei Temi

1. Apri Esplora File (Windows) o Finder (Mac)
2. Naviga nella cartella di WordPress
3. Entra in: `wp-content/themes/`
4. Questa è la cartella dove sono installati tutti i temi

### Passo 2: Estrai il Tema

1. Trova il file `raid-motor-theme.zip` nel repository
2. **Clic destro** sul file
3. Seleziona **"Estrai qui"** o **"Extract Here"**
4. Si creerà una cartella chiamata `raid-motor-theme`

### Passo 3: Copia la Cartella

1. Copia l'intera cartella `raid-motor-theme`
2. Vai in `wp-content/themes/` (trovata al Passo 1)
3. Incolla la cartella qui

**Struttura Finale:**
```
wp-content/
  └── themes/
      ├── twentytwentyfour/    (tema predefinito WordPress)
      ├── twentytwentythree/   (tema predefinito WordPress)
      └── raid-motor-theme/    ← Il tuo nuovo tema!
          ├── style.css
          ├── functions.php
          ├── header.php
          ├── footer.php
          ├── index.php
          └── ...altri file
```

### Passo 4: Attiva il Tema in WordPress

1. Vai a: `http://localhost:8080/wp-admin`
2. Menu laterale → **Aspetto** → **Temi**
3. Dovresti vedere **"RAID MOTOR"** tra i temi disponibili
4. Passa il mouse sopra il tema
5. Clicca **"Attiva"**
6. Fatto! 🎉

---

## 📁 Metodo 3: Estrazione Diretta nella Cartella Temi

Metodo veloce per utenti esperti.

### Usando Esplora File / Finder

1. Apri due finestre:
   - **Finestra 1:** Repository → `wordpress-theme/raid-motor-theme.zip`
   - **Finestra 2:** `wp-content/themes/` della tua installazione WordPress

2. Trascina `raid-motor-theme.zip` nella cartella `themes`

3. Estrai il file ZIP nella cartella `themes`

4. Verifica la struttura:
   ```
   wp-content/themes/raid-motor-theme/
   ```

5. Vai su WordPress e attiva il tema

### Usando il Terminale / Prompt dei Comandi

#### Windows (PowerShell o CMD):

```cmd
cd C:\xampp\htdocs\wordpress\wp-content\themes
```

Poi copia e estrai il tema:

```cmd
copy "PERCORSO\raid-motor-theme.zip" .
tar -xf raid-motor-theme.zip
```

#### Mac/Linux (Terminal):

```bash
cd /Applications/MAMP/htdocs/wordpress/wp-content/themes
```

Poi copia e estrai:

```bash
cp ~/Downloads/raid-motor-theme.zip .
unzip raid-motor-theme.zip
```

---

## ⚙️ Configurazione Post-Installazione

Dopo aver attivato il tema, configura queste impostazioni.

### 1. Configura il Menu di Navigazione

1. Vai su **Aspetto** → **Menu**
2. Clicca **"Crea un nuovo menu"**
3. Dagli un nome: es. "Menu Principale"
4. Aggiungi le pagine che vuoi nel menu:
   - Clicca su **"Visualizza tutti"** sotto "Pagine"
   - Seleziona le pagine (Home, Chi siamo, Contatti, ecc.)
   - Clicca **"Aggiungi al menu"**
5. In basso, sotto **"Impostazioni del menu"**:
   - ☑️ Spunta **"Primary Menu"**
6. Clicca **"Salva menu"**

### 2. Configura l'API n8n (Opzionale)

Il tema ha integrazione con n8n per la ricerca AI.

1. Vai su **Dashboard** → **RAID MOTOR**
2. Vedrai un campo: **"n8n Webhook URL"**
3. Inserisci il tuo URL webhook, ad esempio:
   ```
   https://raidoneone.app.n8n.cloud/webhook/search
   ```
4. Clicca **"Salva impostazioni"**

**Nota:** Se non hai un webhook n8n, puoi saltare questo passaggio. Il tema funzionerà comunque!

### 3. Personalizza il Design (Opzionale)

1. Vai su **Aspetto** → **Personalizza**
2. Qui puoi modificare:
   - Colori del tema
   - Logo del sito
   - Titolo e descrizione
   - Widget della sidebar
   - CSS personalizzato

---

## ✅ Verifica Installazione

Usa questa checklist per verificare che tutto funzioni.

### Checklist di Verifica

- [ ] **Tema visibile nella lista temi**
  - Vai su: Aspetto → Temi
  - Vedi "RAID MOTOR" tra i temi?
  
- [ ] **Tema attivato correttamente**
  - Il tema ha uno sfondo azzurro con scritta "Attivo"?
  
- [ ] **Homepage visualizzata correttamente**
  - Vai su: http://localhost:8080
  - Vedi il design cyberpunk nero con neon?
  
- [ ] **Background animato funzionante**
  - Vedi le particelle animate nello sfondo?
  - Le particelle si connettono tra loro con linee?
  
- [ ] **Menu di navigazione presente**
  - Vedi il menu in alto nella homepage?
  
- [ ] **Responsive design funzionante**
  - Apri gli strumenti sviluppatore (F12)
  - Attiva la modalità dispositivo mobile
  - Il sito si adatta allo schermo piccolo?
  
- [ ] **Nessun errore nella console**
  - Apri la console del browser (F12 → Console)
  - Non devono esserci errori in rosso

### Test Completo

1. **Test Homepage:**
   - Vai su `http://localhost:8080`
   - Verifica header, menu, contenuto, footer
   - Controlla animazioni e effetti hover

2. **Test Pagina Singola:**
   - Vai su `http://localhost:8080/sample-page/`
   - Verifica che il layout funzioni

3. **Test Ricerca:**
   - Usa la barra di ricerca del sito
   - Verifica che la pagina risultati funzioni

4. **Test Mobile:**
   - F12 → Toggle device toolbar
   - Simula iPhone, iPad, Android
   - Verifica responsività

---

## 🔧 Risoluzione Problemi

### Problema 1: Il tema non appare nella lista

**Sintomo:** Vai su Aspetto → Temi ma non vedi "RAID MOTOR"

**Soluzioni:**

1. **Verifica la struttura delle cartelle:**
   - Apri: `wp-content/themes/raid-motor-theme/`
   - Controlla che ci siano i file: `style.css`, `index.php`, `functions.php`
   - **Corretta:** `wp-content/themes/raid-motor-theme/style.css` ✅
   - **Errata:** `wp-content/themes/raid-motor-theme/raid-motor-theme/style.css` ❌

2. **Permessi dei file (Linux/Mac):**
   ```bash
   chmod -R 755 wp-content/themes/raid-motor-theme
   ```

3. **Ricarica la pagina temi:**
   - Premi `Ctrl+F5` (o `Cmd+R` su Mac) nella pagina Temi

### Problema 2: Errore durante l'upload

**Sintomo:** "Il file caricato supera la direttiva upload_max_filesize in php.ini"

**Soluzioni:**

1. **Aumenta il limite di upload (XAMPP):**
   - Apri: `C:\xampp\php\php.ini`
   - Trova: `upload_max_filesize = 2M`
   - Cambia in: `upload_max_filesize = 20M`
   - Trova: `post_max_size = 8M`
   - Cambia in: `post_max_size = 20M`
   - Riavvia Apache

2. **Usa il Metodo 2 o 3:**
   - Invece dell'upload, copia manualmente i file

### Problema 3: Schermata bianca dopo attivazione

**Sintomo:** Dopo aver attivato il tema, il sito mostra una pagina bianca

**Soluzioni:**

1. **Attiva debug WordPress:**
   - Apri: `wp-config.php`
   - Trova: `define('WP_DEBUG', false);`
   - Cambia in: `define('WP_DEBUG', true);`
   - Ricarica la pagina per vedere gli errori

2. **Verifica versione PHP:**
   - Il tema richiede PHP 7.4 o superiore
   - Controlla su: http://localhost:8080/wp-admin/site-health.php

3. **Ripristina tema predefinito:**
   - Via phpMyAdmin:
     - Apri: http://localhost:8080/phpmyadmin
     - Database WordPress → Tabella `wp_options`
     - Cerca: `template` e `stylesheet`
     - Cambia valore in: `twentytwentyfour`

### Problema 4: Le particelle animate non funzionano

**Sintomo:** Vedi il tema ma lo sfondo è statico, senza animazioni

**Soluzioni:**

1. **Verifica che JavaScript sia attivo:**
   - F12 → Console
   - Cerca errori JavaScript in rosso

2. **Controlla che il file particles.js esista:**
   - URL: `http://localhost:8080/wp-content/themes/raid-motor-theme/js/particles.js`
   - Se ottieni errore 404, il file manca

3. **Svuota cache del browser:**
   - `Ctrl+Shift+Delete` → Svuota cache
   - Ricarica con `Ctrl+F5`

### Problema 5: Stili CSS non applicati

**Sintomo:** Il sito appare senza stili, tutto testo normale

**Soluzioni:**

1. **Verifica che style.css esista:**
   - URL: `http://localhost:8080/wp-content/themes/raid-motor-theme/style.css`

2. **Controlla la console:**
   - F12 → Network
   - Cerca errori di caricamento CSS (in rosso)

3. **Rigenera permalink:**
   - Vai su: Impostazioni → Permalink
   - Clicca "Salva modifiche" (anche senza cambiare nulla)

### Problema 6: Menu non appare

**Sintomo:** Tema attivato ma non vedo il menu di navigazione

**Soluzione:**

1. Devi **creare un menu** (vedi sezione Configurazione Post-Installazione)
2. Vai su: Aspetto → Menu
3. Crea menu e assegnalo alla posizione "Primary Menu"

---

## 🎨 Personalizzazione Rapida

### Cambiare i Colori Neon

1. Vai su: `wp-content/themes/raid-motor-theme/style.css`
2. Trova le variabili di colore in cima:
   ```css
   --neon-blue: #00d9ff;
   --neon-orange: #ff8800;
   --neon-purple: #9d00ff;
   ```
3. Modifica i valori esadecimali
4. Salva il file
5. Ricarica il sito con `Ctrl+F5`

### Modificare il Logo

1. Vai su: Aspetto → Personalizza → Identità del sito
2. Carica il tuo logo
3. Salva e pubblica

---

## 📞 Supporto

### Ho ancora problemi, cosa faccio?

1. **Controlla di nuovo i prerequisiti**
   - WordPress versione 5.0+
   - PHP versione 7.4+

2. **Verifica i log di WordPress:**
   - `wp-content/debug.log` (se WP_DEBUG è attivo)

3. **Cerca soluzioni online:**
   - [WordPress.org Support](https://wordpress.org/support/)
   - [Stack Overflow](https://stackoverflow.com/)

4. **Contatta il team RAID MOTOR:**
   - Email: support@raidmotor.com
   - Sito: https://raidmotor.com

---

## ✅ Checklist Finale

Prima di considerare l'installazione completata:

- [ ] Tema caricato in `wp-content/themes/raid-motor-theme/`
- [ ] Tema visibile in Aspetto → Temi
- [ ] Tema attivato correttamente
- [ ] Homepage visualizzata correttamente su http://localhost:8080
- [ ] Background animato funzionante
- [ ] Menu di navigazione configurato
- [ ] Testato su diversi browser
- [ ] Testato su mobile (modalità responsive)
- [ ] Nessun errore nella console del browser
- [ ] Configurazione API (se necessaria) completata

---

## 🎉 Congratulazioni!

Hai installato con successo il tema RAID MOTOR sul tuo WordPress locale!

Il tuo sito cyberpunk futuristico è ora attivo su:
🌐 **http://localhost:8080**

**Buon lavoro con RAID MOTOR! 🚀**

---

## 📌 Link Utili

- 🏠 **Homepage Locale:** http://localhost:8080
- 🔧 **Pannello Admin:** http://localhost:8080/wp-admin
- 🎨 **Gestione Temi:** http://localhost:8080/wp-admin/themes.php
- 📝 **Editor Menu:** http://localhost:8080/wp-admin/nav-menus.php
- ⚙️ **Personalizza:** http://localhost:8080/wp-admin/customize.php

---

**Guida creata da:** RAID MOTOR Team  
**Versione:** 1.0  
**Data:** Dicembre 2025  
**Licenza:** GPL v2 o successiva
