# 🚀 Guida Rapida - Installa RAID MOTOR su localhost:8080

## ⚡ Installazione in 5 Minuti

### Prerequisiti
- ✅ WordPress funzionante su http://localhost:8080
- ✅ Accesso a http://localhost:8080/wp-admin
- ✅ File `raid-motor-theme.zip` (in cartella `wordpress-theme/`)

---

## 🎯 Procedura Veloce

### 1. Accedi a WordPress
```
http://localhost:8080/wp-admin
```
Inserisci username e password

### 2. Vai ai Temi
```
Menu laterale → Aspetto → Temi
```

### 3. Carica Tema
1. Clicca **"Aggiungi nuovo"**
2. Clicca **"Carica tema"**
3. Seleziona `wordpress-theme/raid-motor-theme.zip`
4. Clicca **"Installa ora"**

### 4. Attiva
1. Attendi l'installazione
2. Clicca **"Attiva"**

### 5. Verifica
```
http://localhost:8080
```
Dovresti vedere il tema cyberpunk nero con neon! 🎉

---

## 🔧 Configurazione Post-Installazione (2 minuti)

### Crea Menu
1. **Aspetto → Menu**
2. **"Crea un nuovo menu"**
3. Nome: "Menu Principale"
4. Aggiungi pagine al menu
5. Spunta **"Primary Menu"**
6. **"Salva menu"**

### Configura API (Opzionale)
1. **Dashboard → RAID MOTOR**
2. Inserisci URL webhook n8n (se disponibile)
3. **"Salva impostazioni"**

---

## ❓ Problemi Comuni

### Tema non visibile nella lista?
- Verifica che il file sia in: `wp-content/themes/raid-motor-theme/`
- Ricarica la pagina: `Ctrl+F5`

### Errore upload file troppo grande?
- Usa installazione manuale (vedi guida completa)
- Oppure aumenta `upload_max_filesize` in `php.ini`

### Schermata bianca dopo attivazione?
- Verifica PHP versione 7.4+
- Attiva WP_DEBUG in `wp-config.php`
- Controlla `wp-content/debug.log`

---

## 📚 Guide Complete

Per istruzioni dettagliate e risoluzione problemi:
- **Guida Completa:** `INSTALLAZIONE_LOCALHOST.md`
- **Guida Generale:** `INSTALLATION_GUIDE.md`

---

## ✅ Checklist Rapida

- [ ] WordPress funziona su localhost:8080
- [ ] File tema scaricato/trovato
- [ ] Accesso al pannello admin
- [ ] Tema caricato e installato
- [ ] Tema attivato
- [ ] Sito visualizzato correttamente
- [ ] Menu configurato

---

## 🌐 Link Rapidi Localhost

| Risorsa | URL |
|---------|-----|
| **Sito** | http://localhost:8080 |
| **Admin** | http://localhost:8080/wp-admin |
| **Temi** | http://localhost:8080/wp-admin/themes.php |
| **Menu** | http://localhost:8080/wp-admin/nav-menus.php |
| **Personalizza** | http://localhost:8080/wp-admin/customize.php |

---

**Tempo totale:** 5-10 minuti  
**Difficoltà:** Facile  
**Supporto:** support@raidmotor.com  

🚀 **Buona installazione!**
