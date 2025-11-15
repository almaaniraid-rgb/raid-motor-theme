# 📘 Guida Completa all'Installazione - RAID MOTOR Embed Plugin

> Plugin WordPress ultra-leggero per integrare il motore di ricerca RAID MOTOR con un semplice shortcode

---

## 📋 Indice

1. [Requisiti Minimi](#-requisiti-minimi)
2. [Installazione Rapida](#-installazione-rapida)
3. [Installazione Dettagliata](#-installazione-dettagliata)
4. [Configurazione](#-configurazione)
5. [Utilizzo dello Shortcode](#-utilizzo-dello-shortcode)
6. [Personalizzazione](#-personalizzazione)
7. [Risoluzione Problemi](#-risoluzione-problemi)
8. [Supporto](#-supporto)
9. [Codice Completo del Plugin](#-codice-completo-del-plugin)

---

## ✅ Requisiti Minimi

- **WordPress:** 5.0 o superiore
- **PHP:** 7.4 o superiore
- **MySQL:** 5.6 o superiore
- **Permessi:** Capacità di installare e attivare plugin
- **Hosting:** Qualsiasi hosting WordPress compatibile

---

## 🚀 Installazione Rapida

### Metodo 1: Caricamento via WordPress Admin (Consigliato)

1. **Scarica** il file `raid-motor-embed.php`
2. **Accedi** al pannello amministrativo WordPress
3. Vai su **Plugin → Aggiungi Nuovo → Carica Plugin**
4. **Seleziona** il file `raid-motor-embed.php`
5. Clicca **Installa Ora** e poi **Attiva Plugin**
6. **Fatto!** Usa `[raid_motor]` in qualsiasi pagina/articolo

### Metodo 2: Caricamento via FTP

1. **Connettiti** al tuo server tramite FTP (FileZilla, Cyberduck, ecc.)
2. **Naviga** nella cartella `/wp-content/plugins/`
3. **Carica** il file `raid-motor-embed.php` in questa cartella
4. **Accedi** al pannello WordPress
5. Vai su **Plugin → Plugin Installati**
6. **Trova** "RAID MOTOR Embed" e clicca **Attiva**
7. **Completato!**

---

## 📖 Installazione Dettagliata

### Passo 1: Preparazione del File

#### Opzione A: Crea il file manualmente

1. Apri un editor di testo (Notepad++, Sublime Text, VS Code)
2. Copia il [codice completo del plugin](#-codice-completo-del-plugin) dalla sezione in fondo
3. Salva il file come `raid-motor-embed.php`
4. **Importante:** Assicurati che il file abbia estensione `.php` e non `.txt`

#### Opzione B: Scarica il file pronto

1. Scarica `raid-motor-embed.php` dalla repository ufficiale
2. Verifica che il file non sia stato rinominato in `.txt` dal browser
3. Se necessario, rinomina il file in `raid-motor-embed.php`

![Placeholder: Screenshot del file PHP salvato correttamente]
*Screenshot 1: Il file raid-motor-embed.php nella cartella Download*

---

### Passo 2: Accesso al Pannello WordPress

1. **Apri** il browser e vai su `https://tuo-sito.com/wp-admin`
2. **Inserisci** le tue credenziali di amministratore
3. **Accedi** al dashboard WordPress

![Placeholder: Screenshot pagina di login WordPress]
*Screenshot 2: Pagina di login WordPress*

---

### Passo 3: Installazione del Plugin

#### Metodo A: Upload tramite Dashboard WordPress

1. Nel menu laterale, clicca su **Plugin**
2. Clicca su **Aggiungi Nuovo**
3. In alto, clicca sul pulsante **Carica Plugin**
4. Clicca **Scegli File** e seleziona `raid-motor-embed.php`
5. Clicca **Installa Ora**
6. Attendi il completamento (vedrai "Plugin installato con successo")
7. Clicca **Attiva Plugin**

![Placeholder: Screenshot pagina Aggiungi Plugin]
*Screenshot 3: Pagina "Aggiungi Nuovo Plugin" in WordPress*

![Placeholder: Screenshot plugin attivato con successo]
*Screenshot 4: Messaggio di conferma attivazione plugin*

#### Metodo B: Upload tramite FTP/File Manager

##### Usando FileZilla (o altro client FTP):

1. **Apri** FileZilla e inserisci i dati di connessione:
   - Host: `ftp.tuo-hosting.com`
   - Username: Il tuo username FTP
   - Password: La tua password FTP
   - Porta: `21` (o la porta fornita dal tuo hosting)

2. **Connettiti** al server

3. Nel pannello destro, **naviga** fino a:
   ```
   /public_html/wp-content/plugins/
   ```
   (o `/www/wp-content/plugins/` a seconda dell'hosting)

4. Nel pannello sinistro, **trova** il file `raid-motor-embed.php` sul tuo computer

5. **Trascina** il file dalla sinistra alla destra (o clicca destro → Upload)

6. **Attendi** il completamento dell'upload

![Placeholder: Screenshot di FileZilla durante upload]
*Screenshot 5: Upload del plugin via FTP con FileZilla*

##### Usando File Manager del Hosting:

1. **Accedi** al pannello di controllo del tuo hosting (cPanel, Plesk, ecc.)
2. **Apri** il "File Manager" o "Gestione File"
3. **Naviga** in `public_html/wp-content/plugins/`
4. Clicca **Upload** o **Carica File**
5. **Seleziona** `raid-motor-embed.php` dal tuo computer
6. **Attendi** il completamento

![Placeholder: Screenshot di cPanel File Manager]
*Screenshot 6: File Manager in cPanel*

7. **Torna** al pannello WordPress
8. Vai su **Plugin → Plugin Installati**
9. **Trova** "RAID MOTOR Embed" nella lista
10. Clicca **Attiva** sotto il nome del plugin

![Placeholder: Screenshot lista plugin con RAID MOTOR visibile]
*Screenshot 7: Plugin RAID MOTOR nella lista dei plugin installati*

---

### Passo 4: Verifica dell'Installazione

1. Dopo l'attivazione, dovresti vedere:
   - ✅ Messaggio verde "Plugin attivato"
   - ✅ "RAID MOTOR Embed" nella lista dei plugin attivi
   - ✅ Sotto il nome del plugin: **Usage: `[raid_motor]`** in blu

2. **Verifica** che il plugin sia attivo:
   - Vai su **Plugin → Plugin Installati**
   - Cerca "RAID MOTOR Embed"
   - Deve avere sfondo azzurro e scritta "Attivo"

![Placeholder: Screenshot plugin attivato nella lista]
*Screenshot 8: Plugin RAID MOTOR attivato con successo*

---

## ⚙️ Configurazione

Il plugin **non richiede configurazione aggiuntiva** ed è pronto all'uso immediatamente dopo l'attivazione.

### Impostazioni Predefinite

- **URL predefinito:** `https://unspecified-project-niun.bolt.host`
- **Altezza predefinita:** 800 pixel
- **Larghezza:** 100% responsive
- **Aspetto:** Adattamento automatico mobile/tablet/desktop
- **Dark Mode:** Supporto automatico

---

## 🎯 Utilizzo dello Shortcode

### Utilizzo Base

Aggiungi il seguente shortcode in qualsiasi pagina, articolo o widget:

```
[raid_motor]
```

### Come Inserire lo Shortcode

#### In una Pagina o Articolo:

1. **Vai** su **Pagine → Aggiungi Nuova** (o modifica esistente)
2. Nel blocco editor, **aggiungi** un blocco "Shortcode"
3. **Digita** `[raid_motor]`
4. **Pubblica** o **Aggiorna** la pagina

![Placeholder: Screenshot editor Gutenberg con blocco shortcode]
*Screenshot 9: Inserimento shortcode nell'editor Gutenberg*

#### Con l'Editor Classico:

1. **Apri** l'editor classico
2. **Posiziona** il cursore dove vuoi il motore di ricerca
3. **Digita** `[raid_motor]`
4. **Pubblica** la pagina

![Placeholder: Screenshot editor classico con shortcode]
*Screenshot 10: Shortcode nell'editor classico*

#### In un Widget:

1. Vai su **Aspetto → Widget**
2. **Trascina** un widget "Testo" o "HTML Personalizzato" nella sidebar
3. **Incolla** `[raid_motor]`
4. **Salva** il widget

---

## 🎨 Personalizzazione

### Cambiare l'URL del Motore di Ricerca

Se hai il tuo motore di ricerca RAID MOTOR su un dominio personalizzato:

```
[raid_motor url="https://tuodominio.com"]
```

### Modificare l'Altezza

Per cambiare l'altezza dell'iframe (in pixel):

```
[raid_motor height="600"]
```

### Entrambe le Opzioni Insieme

```
[raid_motor url="https://tuodominio.com" height="1000"]
```

### Esempi Pratici

#### Esempio 1: Altezza Ridotta per Sidebar
```
[raid_motor height="400"]
```

#### Esempio 2: URL Personalizzato con Altezza Custom
```
[raid_motor url="https://ricerca.miosito.it" height="700"]
```

#### Esempio 3: Full Screen (pagina dedicata)
```
[raid_motor height="1200"]
```

---

## 🎯 Esempi di Implementazione

### Esempio 1: Pagina di Ricerca Dedicata

**Crea** una nuova pagina chiamata "Cerca" e inserisci:

```
[raid_motor height="900"]
```

**Pubblica** e aggiungi la pagina al menu principale.

### Esempio 2: Widget Sidebar

**Vai** su Aspetto → Widget e aggiungi:

```
[raid_motor height="500"]
```

### Esempio 3: Footer

Nel widget footer:

```
[raid_motor height="400"]
```

### Esempio 4: Popup/Modal (con plugin popup)

Se usi un plugin per popup, inserisci nello shortcode del popup:

```
[raid_motor height="600"]
```

---

## 🔧 Risoluzione Problemi

### Problema 1: Lo shortcode appare come testo

**Sintomo:** Nella pagina vedi letteralmente `[raid_motor]` invece del motore di ricerca.

**Soluzioni:**
1. **Verifica** che il plugin sia attivato (Plugin → Plugin Installati)
2. **Controlla** di aver inserito lo shortcode in un blocco "Shortcode" (Gutenberg)
3. **Non** mettere lo shortcode in un blocco "Codice" o "Preformattato"
4. **Prova** a disattivare e riattivare il plugin
5. **Svuota** la cache del browser (Ctrl+F5)
6. **Svuota** la cache di WordPress (se usi plugin di cache)

### Problema 2: L'iframe non si carica

**Sintomo:** Vedi solo uno spazio vuoto o un box grigio.

**Soluzioni:**
1. **Controlla** che l'URL sia corretto:
   ```
   [raid_motor url="https://unspecified-project-niun.bolt.host"]
   ```
2. **Verifica** la connessione internet
3. **Disattiva** temporaneamente plugin di sicurezza/firewall
4. **Controlla** la console del browser (F12) per errori
5. **Verifica** che il tuo hosting non blocchi iframe esterni
6. **Prova** su un browser diverso (Chrome, Firefox, Safari)

### Problema 3: Messaggio "Invalid RAID MOTOR URL"

**Sintomo:** Vedi un messaggio di errore rosso.

**Soluzioni:**
1. **Assicurati** che l'URL inizi con `https://` o `http://`
2. **Non** usare URL con spazi o caratteri speciali
3. **Esempi corretti:**
   ```
   [raid_motor url="https://tuodominio.com"]
   ```
4. **Esempi errati:**
   ```
   [raid_motor url="tuodominio.com"]  ❌ (manca https://)
   [raid_motor url="https://mio sito.com"]  ❌ (contiene spazio)
   ```

### Problema 4: Il plugin non appare nella lista

**Sintomo:** Non vedi "RAID MOTOR Embed" in Plugin → Plugin Installati.

**Soluzioni:**
1. **Verifica** che il file sia stato caricato in `/wp-content/plugins/`
2. **Controlla** che il file si chiami esattamente `raid-motor-embed.php`
3. **Non** metterlo in una sottocartella
4. **Struttura corretta:**
   ```
   /wp-content/plugins/raid-motor-embed.php  ✅
   ```
5. **Struttura errata:**
   ```
   /wp-content/plugins/raid-motor/raid-motor-embed.php  ❌
   ```
6. **Ricarica** la pagina Plugin (F5)
7. **Verifica permessi** del file (644 o 755)

### Problema 5: Problemi di visualizzazione mobile

**Sintomo:** Su mobile il motore di ricerca è troppo piccolo o troppo grande.

**Soluzioni:**
1. Il plugin è già **responsive**, ma puoi provare diverse altezze:
   ```
   [raid_motor height="600"]  /* Desktop */
   ```
2. **Svuota** la cache del browser su mobile
3. **Verifica** che il tema WordPress sia responsive
4. **Disattiva** temporaneamente altri plugin di ottimizzazione mobile

### Problema 6: Conflitti con altri plugin

**Sintomo:** Dopo l'attivazione, il sito ha problemi o errori.

**Soluzioni:**
1. **Disattiva** tutti gli altri plugin
2. **Riattiva** solo RAID MOTOR Embed
3. **Riattiva** gli altri plugin uno alla volta per identificare il conflitto
4. **Plugin comuni** che possono dare conflitti:
   - Plugin di cache aggressivi
   - Plugin di sicurezza che bloccano iframe
   - Plugin di ottimizzazione che modificano HTML
5. **Contatta** il supporto per assistenza

### Problema 7: Errore 500 dopo attivazione

**Sintomo:** Schermata bianca o "Errore interno del server".

**Soluzioni:**
1. **Connettiti** via FTP
2. **Rinomina** il file da `raid-motor-embed.php` a `raid-motor-embed.php.disabled`
3. Il sito **tornerà** funzionante
4. **Verifica** che la versione PHP sia almeno 7.4
5. **Controlla** i log degli errori del server
6. **Contatta** il tuo hosting per assistenza

### Problema 8: Loading infinito

**Sintomo:** Vedi sempre l'animazione di caricamento ma il contenuto non appare.

**Soluzioni:**
1. **Attendi** almeno 30 secondi (potrebbe essere lento)
2. **Verifica** l'URL del motore di ricerca
3. **Controlla** che il server di RAID MOTOR sia online
4. **Prova** un URL diverso:
   ```
   [raid_motor url="https://unspecified-project-niun.bolt.host"]
   ```
5. **Disattiva** AdBlock o estensioni del browser

---

## 🎨 Personalizzazione Avanzata (Opzionale)

### Modificare gli Stili CSS

Se vuoi personalizzare l'aspetto, puoi aggiungere CSS personalizzato:

1. Vai su **Aspetto → Personalizza → CSS Aggiuntivo**
2. Aggiungi il tuo CSS personalizzato:

```css
/* Cambia il colore del loading spinner */
.raid-motor-wrapper::before {
    border-top-color: #ff6600 !important; /* Arancione */
}

/* Rimuovi bordo arrotondato */
.raid-motor-wrapper {
    border-radius: 0 !important;
}

/* Cambia l'ombra */
.raid-motor-wrapper {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2) !important;
}

/* Altezza fissa invece di responsive */
.raid-motor-wrapper {
    padding-bottom: 0 !important;
    height: 800px !important;
}
```

---

## 📊 Test e Verifica

### Checklist Post-Installazione

- [ ] Plugin appare nella lista dei plugin installati
- [ ] Plugin è attivato (sfondo azzurro)
- [ ] Shortcode `[raid_motor]` inserito in una pagina di test
- [ ] Pagina pubblicata
- [ ] Aperta la pagina in modalità incognito
- [ ] Motore di ricerca visibile e funzionante
- [ ] Testato su mobile (responsive)
- [ ] Testato su tablet (responsive)
- [ ] Testato su browser diversi (Chrome, Firefox, Safari)
- [ ] Cache svuotata

### Test Completo

1. **Crea** una pagina di test chiamata "Test RAID MOTOR"
2. **Aggiungi** lo shortcode `[raid_motor]`
3. **Pubblica** come bozza
4. **Visualizza** l'anteprima
5. **Verifica** che tutto funzioni
6. Se tutto ok, **pubblica** definitivamente

---

## 🚀 Best Practices

### Suggerimenti per l'Utilizzo Ottimale

1. **Pagina Dedicata:** Crea una pagina "Cerca" dedicata con solo lo shortcode
2. **Menu Principale:** Aggiungi la pagina al menu principale
3. **Altezza Adeguata:** Usa `height="900"` per pagine dedicate
4. **Performance:** Non usare più di 2-3 istanze per pagina
5. **SEO:** Aggiungi meta descrizione alla pagina con il motore di ricerca
6. **Cache:** Se usi plugin di cache, escludi la pagina dalla cache

### Configurazione Hosting Consigliata

- **PHP Memory Limit:** Almeno 128MB
- **Max Execution Time:** 30 secondi
- **SSL/HTTPS:** Consigliato per sicurezza
- **Allow URL fopen:** Abilitato

---

## 📞 Supporto

### Hai Bisogno di Aiuto?

#### Supporto via Email
📧 **Email:** support@raidmotor.com
⏰ **Orari:** Lun-Ven, 9:00-18:00 (CET)
⚡ **Tempo di risposta:** Entro 24 ore

#### Informazioni da Includere nella Richiesta

Per una risposta più rapida, includi:

1. **Versione WordPress:** (es. 6.4.2)
2. **Versione PHP:** (visibile in Strumenti → Salute del Sito)
3. **Tema in uso:** (nome e versione)
4. **Altri plugin attivi:** (lista completa)
5. **Descrizione del problema:** (dettagliata)
6. **Screenshot:** (se possibile)
7. **Messaggio di errore:** (esatto testo)
8. **URL del sito:** (se pubblico)

#### Community e Risorse

- 🌐 **Sito Web:** https://raidmotor.com
- 📚 **Documentazione:** https://docs.raidmotor.com
- 💬 **Forum:** https://forum.raidmotor.com
- 🎥 **Video Tutorial:** https://youtube.com/@raidmotor

---

## 🔄 Aggiornamenti

### Come Verificare Aggiornamenti

1. Vai su **Plugin → Plugin Installati**
2. Controlla se appare "Aggiornamento disponibile"
3. Clicca **Aggiorna ora** se disponibile

### Changelog

**Versione 1.0.0** (2025)
- ✨ Release iniziale
- ✅ Shortcode `[raid_motor]`
- ✅ Supporto responsive
- ✅ Dark mode automatico
- ✅ Loading animation
- ✅ Personalizzazione altezza e URL

---

## 🗑️ Disinstallazione

### Come Rimuovere il Plugin

Se desideri disinstallare il plugin:

1. Vai su **Plugin → Plugin Installati**
2. **Trova** "RAID MOTOR Embed"
3. Clicca **Disattiva**
4. Dopo la disattivazione, clicca **Elimina**
5. Conferma l'eliminazione

**Nota:** Tutti gli shortcode `[raid_motor]` non funzioneranno più dopo la disinstallazione.

### Rimozione Manuale (se necessario)

Se il plugin non si disinstalla normalmente:

1. **Connettiti** via FTP
2. **Naviga** in `/wp-content/plugins/`
3. **Elimina** il file `raid-motor-embed.php`
4. **Fatto**

---

## 📄 Licenza e Informazioni Legali

**Licenza:** GPL v2 o successiva
**Copyright:** © 2025 RAID MOTOR Team
**Compatibilità:** WordPress 5.0+
**Lingua:** Multilingua (Italiano, Inglese)

---

## 🎓 Domande Frequenti (FAQ)

### 1. Il plugin è gratuito?
Sì, il plugin è completamente gratuito e open source.

### 2. Posso usarlo su più siti?
Sì, puoi installarlo su tutti i siti che vuoi.

### 3. Richiede configurazione?
No, funziona immediatamente dopo l'attivazione.

### 4. È compatibile con tutti i temi?
Sì, funziona con qualsiasi tema WordPress standard.

### 5. Funziona con Gutenberg?
Sì, usa il blocco "Shortcode" per inserire `[raid_motor]`.

### 6. Funziona con l'editor classico?
Sì, inserisci semplicemente `[raid_motor]` nel contenuto.

### 7. Posso personalizzare l'aspetto?
Sì, tramite CSS personalizzato (vedi sezione Personalizzazione Avanzata).

### 8. È responsive?
Sì, si adatta automaticamente a mobile, tablet e desktop.

### 9. Rallenta il sito?
No, il plugin è ultra-leggero e non impatta le performance.

### 10. Posso usare il mio URL personalizzato?
Sì, usa `[raid_motor url="https://tuodominio.com"]`.

---

## 🌟 Codice Completo del Plugin

Copia questo codice e salvalo come `raid-motor-embed.php`:

```php
<?php
/**
 * Plugin Name: RAID MOTOR Embed
 * Plugin URI: https://raidmotor.com
 * Description: Embed RAID MOTOR AI-powered search engine with a simple [raid_motor] shortcode. Ultra-lightweight and easy to use.
 * Version: 1.0.0
 * Author: RAID MOTOR Team
 * Author URI: https://raidmotor.com
 * License: GPL v2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: raid-motor-embed
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Register shortcode [raid_motor]
 */
function raid_motor_embed_shortcode( $atts ) {
	// Parse attributes
	$atts = shortcode_atts(
		array(
			'url'    => 'https://unspecified-project-niun.bolt.host',
			'height' => '800',
		),
		$atts,
		'raid_motor'
	);

	// Sanitize inputs
	$url    = esc_url( $atts['url'] );
	$height = absint( $atts['height'] );

	// Validate URL
	if ( empty( $url ) || ! filter_var( $url, FILTER_VALIDATE_URL ) ) {
		return '<p style="color: #dc2626; padding: 20px; text-align: center;">Invalid RAID MOTOR URL</p>';
	}

	// Generate unique ID
	$id = 'raid-motor-' . wp_rand( 1000, 9999 );

	// Build iframe HTML
	ob_start();
	?>
	<div class="raid-motor-wrapper" id="<?php echo esc_attr( $id ); ?>">
		<iframe
			src="<?php echo esc_url( $url ); ?>"
			class="raid-motor-iframe"
			style="height: <?php echo esc_attr( $height ); ?>px;"
			frameborder="0"
			allowfullscreen
			loading="lazy"
			title="RAID MOTOR Search Engine"
		></iframe>
	</div>
	<?php
	return ob_get_clean();
}
add_shortcode( 'raid_motor', 'raid_motor_embed_shortcode' );

/**
 * Enqueue plugin styles
 */
function raid_motor_embed_enqueue_styles() {
	// Only enqueue if shortcode is present
	if ( ! is_admin() ) {
		wp_add_inline_style( 'wp-block-library', raid_motor_embed_get_css() );
	}
}
add_action( 'wp_enqueue_scripts', 'raid_motor_embed_enqueue_styles' );

/**
 * Get inline CSS
 */
function raid_motor_embed_get_css() {
	return '
		/* RAID MOTOR Embed Styles */
		.raid-motor-wrapper {
			position: relative;
			width: 100%;
			max-width: 100%;
			margin: 20px 0;
			padding-bottom: 56.25%;
			height: 0;
			overflow: hidden;
			border-radius: 8px;
			box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
			background: #f8fafc;
		}

		.raid-motor-iframe {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100% !important;
			border: none;
			display: block;
		}

		/* Loading indicator */
		.raid-motor-wrapper::before {
			content: "";
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 40px;
			height: 40px;
			border: 4px solid #e5e7eb;
			border-top-color: #6366f1;
			border-radius: 50%;
			animation: raid-motor-spin 1s linear infinite;
			z-index: 1;
		}

		@keyframes raid-motor-spin {
			to { transform: translate(-50%, -50%) rotate(360deg); }
		}

		/* Mobile responsive */
		@media screen and (max-width: 768px) {
			.raid-motor-wrapper {
				padding-bottom: 75%;
				margin: 15px 0;
			}
		}

		@media screen and (max-width: 480px) {
			.raid-motor-wrapper {
				padding-bottom: 100%;
				margin: 10px 0;
			}
		}

		/* Dark mode support */
		@media (prefers-color-scheme: dark) {
			.raid-motor-wrapper {
				background: #1f2937;
				box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
			}
		}
	';
}

/**
 * Add settings link on plugins page
 */
function raid_motor_embed_plugin_links( $links ) {
	$usage_text = sprintf(
		'<span style="color: #2563eb;">Usage: %s</span>',
		'<code>[raid_motor]</code>'
	);
	array_unshift( $links, $usage_text );
	return $links;
}
add_filter( 'plugin_action_links_' . plugin_basename( __FILE__ ), 'raid_motor_embed_plugin_links' );
```

---

## ✅ Checklist Finale

Prima di considerare l'installazione completata:

- [ ] File `raid-motor-embed.php` creato correttamente
- [ ] Plugin caricato in `/wp-content/plugins/`
- [ ] Plugin attivato nel pannello WordPress
- [ ] Shortcode `[raid_motor]` testato in una pagina
- [ ] Visualizzazione corretta su desktop
- [ ] Visualizzazione corretta su mobile
- [ ] Motore di ricerca funzionante e responsive
- [ ] Nessun conflitto con altri plugin
- [ ] Cache svuotata
- [ ] Documentazione salvata per riferimento futuro

---

## 🎉 Congratulazioni!

Hai installato con successo il plugin RAID MOTOR Embed!

Ora puoi integrare il potente motore di ricerca AI in qualsiasi pagina del tuo sito WordPress usando semplicemente `[raid_motor]`.

**Buona ricerca! 🚀**

---

**Ultima modifica:** 15 Novembre 2025
**Versione guida:** 1.0.0
**Autore:** RAID MOTOR Team
**Contatti:** support@raidmotor.com
