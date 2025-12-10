# 🔧 Risoluzione Problemi Rapida - RAID MOTOR Theme

## Guida Veloce per Risolvere i Problemi Più Comuni

---

## 🚨 PROBLEMI DURANTE L'INSTALLAZIONE

### ❌ Tema non appare nella lista temi

**Cause possibili:**
- File non nella posizione corretta
- Struttura cartelle errata
- Manca il file style.css

**Soluzioni immediate:**
```bash
# Verifica la struttura corretta:
wp-content/themes/raid-motor-theme/style.css  ✅ CORRETTO

# NON così:
wp-content/themes/raid-motor-theme/raid-motor-theme/style.css  ❌ ERRATO
```

**Azioni:**
1. Verifica che la cartella sia in: `wp-content/themes/raid-motor-theme/`
2. Verifica che `style.css` sia direttamente in `raid-motor-theme/`
3. Ricarica la pagina temi: `Ctrl+F5`
4. Se Linux/Mac, controlla permessi: `chmod -R 755 wp-content/themes/raid-motor-theme`

---

### ❌ Errore "File troppo grande" durante upload

**Messaggio completo:**
> "Il file caricato supera la direttiva upload_max_filesize in php.ini"

**Soluzione Rapida:** Usa installazione manuale (Metodo 2)

**Soluzione Permanente - XAMPP:**
1. Apri: `C:\xampp\php\php.ini`
2. Trova e modifica:
   ```ini
   upload_max_filesize = 20M
   post_max_size = 20M
   ```
3. Salva il file
4. Riavvia Apache
5. Riprova l'upload

**Soluzione Permanente - MAMP:**
1. Apri MAMP
2. File → Edit Template → PHP (php.ini)
3. Modifica come sopra
4. Riavvia server

---

### ❌ Schermata bianca dopo attivazione tema

**Sintomo:** Sito mostra pagina bianca completamente vuota

**Causa:** Errore PHP o incompatibilità

**Soluzione Immediata - Via FTP:**
1. Connetti via FTP a localhost
2. Vai in: `wp-content/themes/`
3. Rinomina: `raid-motor-theme` → `raid-motor-theme.disabled`
4. Il sito tornerà funzionante con tema precedente

**Soluzione Immediata - Via File Manager:**
1. Apri: `wp-content/themes/`
2. Rinomina cartella `raid-motor-theme` aggiungendo `.disabled`
3. Ricarica il sito

**Diagnostica:**
1. Verifica versione PHP:
   - Vai su: `http://localhost:8080/wp-admin/site-health.php`
   - Verifica: PHP 7.4 o superiore ✅

2. Attiva debug WordPress:
   - Apri: `wp-config.php`
   - Trova: `define('WP_DEBUG', false);`
   - Cambia in: `define('WP_DEBUG', true);`
   - Aggiungi sotto:
     ```php
     define('WP_DEBUG_LOG', true);
     define('WP_DEBUG_DISPLAY', false);
     ```
   - Salva e ricarica il sito
   - Controlla: `wp-content/debug.log`

---

## 🎨 PROBLEMI VISIVI

### ❌ Particelle animate non funzionano

**Sintomo:** Sfondo statico, nessuna animazione

**Soluzioni:**
1. **Verifica file JavaScript:**
   - Apri: `http://localhost:8080/wp-content/themes/raid-motor-theme/js/particles.js`
   - Se ottieni 404: il file manca

2. **Controlla errori JavaScript:**
   - Premi `F12`
   - Tab "Console"
   - Cerca errori in rosso
   - Screenshot gli errori se presenti

3. **Svuota cache browser:**
   - `Ctrl+Shift+Delete` (Windows/Linux)
   - `Cmd+Shift+Delete` (Mac)
   - Seleziona "Cached images and files"
   - Clicca "Clear data"
   - Ricarica: `Ctrl+F5`

4. **Disattiva estensioni browser:**
   - Prova in modalità incognito: `Ctrl+Shift+N`
   - Se funziona: un'estensione blocca JavaScript

---

### ❌ Stili CSS non applicati (sito senza colori)

**Sintomo:** Sito appare come testo semplice, senza design

**Soluzioni:**
1. **Verifica caricamento CSS:**
   - `F12` → Tab "Network"
   - Ricarica pagina
   - Cerca `style.css`
   - Se rosso (404): file mancante
   - Se verde (200): problema di cache

2. **Svuota cache:**
   - Browser: `Ctrl+Shift+Delete`
   - WordPress (se plugin cache installato): svuota cache plugin

3. **Rigenera permalink:**
   - Vai a: `http://localhost:8080/wp-admin/options-permalink.php`
   - Clicca "Salva modifiche" (anche senza cambiare nulla)
   - Ricarica il sito

4. **Verifica permessi file:**
   ```bash
   # Linux/Mac:
   chmod 644 wp-content/themes/raid-motor-theme/style.css
   ```

---

### ❌ Layout rotto su mobile

**Sintomo:** Su smartphone il design è distorto

**Soluzioni:**
1. **Svuota cache mobile:**
   - Chrome mobile: Menu → Impostazioni → Privacy → Cancella dati
   - Safari iOS: Impostazioni → Safari → Cancella cronologia

2. **Verifica viewport:**
   - `F12` → Toggle device toolbar
   - Prova diverse dimensioni
   - Se su desktop funziona: problema specifico del device

3. **Disattiva tema temporaneamente:**
   - Attiva tema predefinito WordPress
   - Se funziona: problema del tema
   - Se non funziona: problema WordPress o plugin

---

## 🔗 PROBLEMI DI CONFIGURAZIONE

### ❌ Menu non appare nel sito

**Sintomo:** Header presente ma nessun menu di navigazione

**Causa:** Menu non creato o non assegnato

**Soluzione:**
1. Vai a: `http://localhost:8080/wp-admin/nav-menus.php`
2. Se nessun menu esistente:
   - Clicca "Crea un nuovo menu"
   - Nome: "Menu Principale"
   - Clicca "Crea menu"
3. Aggiungi pagine:
   - Colonna sinistra → Pagine → Visualizza tutti
   - Seleziona pagine → "Aggiungi al menu"
4. **IMPORTANTE:** Assegna posizione:
   - Scroll in basso
   - Spunta ☑️ "Primary Menu"
   - Clicca "Salva menu"
5. Verifica sul sito

---

### ❌ Link del menu non funzionano (404)

**Sintomo:** Menu visibile ma cliccando le voci → errore 404

**Soluzioni:**
1. **Rigenera permalink:**
   - `http://localhost:8080/wp-admin/options-permalink.php`
   - Clicca "Salva modifiche"

2. **Verifica URL pagine:**
   - Vai su Pagine → Tutte le pagine
   - Clicca "Modifica" su una pagina
   - Verifica che "Permalink" sia corretto

3. **Verifica .htaccess:**
   - Apri: `.htaccess` nella root WordPress
   - Se manca o vuoto: crea/rigenera da permalink

---

## 🔌 PROBLEMI DI PLUGIN

### ❌ Conflitto con altri plugin

**Sintomo:** Tema funziona ma sito ha errori strani

**Diagnostica:**
1. **Disattiva tutti i plugin:**
   - `http://localhost:8080/wp-admin/plugins.php`
   - Seleziona tutti i plugin (checkbox in alto)
   - Azioni di massa → Disattiva → Applica

2. **Verifica se problema risolto:**
   - Se sì: un plugin causa conflitto
   - Riattiva plugin uno alla volta per identificare il colpevole

3. **Plugin problematici comuni:**
   - Cache aggressivi (W3 Total Cache, WP Super Cache)
   - Security plugin che bloccano iframe/JavaScript
   - Page builder che sovrascrivono stili

---

## 🌐 PROBLEMI DI CONNETTIVITÀ

### ❌ API n8n non risponde

**Sintomo:** Ricerca non funziona o infinita loading

**Soluzioni:**
1. **Verifica URL webhook:**
   - Dashboard → RAID MOTOR
   - Controlla che URL inizi con `https://`
   - Esempio corretto: `https://raidoneone.app.n8n.cloud/webhook/search`

2. **Testa webhook manualmente:**
   - Apri Postman o browser
   - Fai richiesta POST all'URL
   - Se non risponde: webhook offline

3. **Disabilita temporaneamente:**
   - Lascia campo API vuoto
   - Tema funzionerà senza ricerca AI

---

## 🖥️ PROBLEMI AMBIENTE LOCALHOST

### ❌ Localhost:8080 non raggiungibile

**Sintomo:** Errore "Impossibile raggiungere il sito"

**Soluzioni:**
1. **Verifica server web attivo:**
   - **XAMPP:** Apri XAMPP Control Panel → Apache deve essere verde
   - **MAMP:** Apri MAMP → Clicca "Start Servers"
   - **WAMP:** Icona tray deve essere verde

2. **Verifica porta 8080:**
   - Prova: `http://localhost:80` (porta predefinita)
   - Se funziona: WordPress su porta 80, non 8080

3. **Trova porta corretta:**
   - XAMPP: `http://localhost`
   - MAMP: `http://localhost:8888`
   - WAMP: `http://localhost`

---

## 📊 DIAGNOSTICA AVANZATA

### Strumenti Utili

#### 1. Console Browser (F12)
```
F12 → Console → Cerca errori rossi
```
**Errori comuni:**
- `404 Not Found`: File mancante
- `Uncaught TypeError`: Errore JavaScript
- `Failed to load resource`: Risorsa non caricabile

#### 2. Network Tab
```
F12 → Network → Ricarica pagina
```
**Cosa controllare:**
- Tutti file caricano (status 200)? ✅
- File mancanti (status 404)? ❌
- Tempo caricamento < 3s? ✅

#### 3. WordPress Site Health
```
http://localhost:8080/wp-admin/site-health.php
```
**Verifica:**
- PHP version: 7.4+ ✅
- MySQL version: 5.6+ ✅
- Memory limit: 128MB+ ✅

---

## 🆘 QUANDO TUTTO FALLISCE

### Reset Completo

1. **Backup:**
   - Copia cartella: `wp-content/themes/raid-motor-theme/`
   - Esporta database (phpMyAdmin)

2. **Reinstalla tema:**
   - Disattiva tema
   - Elimina cartella `raid-motor-theme`
   - Re-installa da zero

3. **Verifica WordPress:**
   - Aggiorna WordPress all'ultima versione
   - Controlla integrità file core: `wp core verify-checksums`

4. **Fresh install test:**
   - Installa nuovo WordPress locale
   - Installa solo RAID MOTOR theme
   - Se funziona: problema con installazione originale

---

## 📞 CONTATTA SUPPORTO

### Prima di Contattare

Raccogli queste informazioni:

- [ ] Versione WordPress: _______________
- [ ] Versione PHP: _______________
- [ ] Metodo installazione usato: _______________
- [ ] Errori nella console (screenshot): _______________
- [ ] Altri plugin attivi: _______________
- [ ] Browser usato: _______________
- [ ] Messaggio errore esatto: _______________

### Contatti

📧 **Email:** support@raidmotor.com  
🌐 **Sito:** https://raidmotor.com  
📚 **Docs:** https://docs.raidmotor.com  

---

## ✅ RISOLTO?

Se hai risolto il problema:
- [ ] Annota la soluzione per riferimento futuro
- [ ] Testa che tutto funzioni
- [ ] Crea backup del sito funzionante

---

**Guida troubleshooting versione:** 1.0  
**Ultimo aggiornamento:** Dicembre 2025  
**RAID MOTOR Team**  

🔧 **Buona risoluzione!**
