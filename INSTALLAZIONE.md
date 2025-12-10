# 🚀 Guida Installazione RAID MOTOR - Tema WordPress

## 📋 Panoramica

Questa guida ti permetterà di installare e testare il tema WordPress RAID MOTOR con design neon 3D in locale usando Docker.

## ✅ Prerequisiti

Prima di iniziare, assicurati di avere installato:

- **Docker** (versione 20.10 o superiore)
  - Download: https://docs.docker.com/get-docker/
- **Docker Compose** (versione 2.0 o superiore)
  - Solitamente incluso con Docker Desktop

### Verifica Installazione

Esegui questi comandi per verificare che Docker sia installato correttamente:

```bash
docker --version
docker compose version
```

Dovresti vedere le versioni installate.

## 🎯 Installazione Rapida (Metodo Consigliato)

### Passo 1: Clone Repository

```bash
git clone https://github.com/almaaniraid-rgb/raid-motor-theme.git
cd raid-motor-theme
```

### Passo 2: Esegui Script di Installazione

```bash
chmod +x install.sh
./install.sh
```

Lo script automaticamente:
1. Verifica che Docker sia disponibile
2. Avvia i container (MySQL, WordPress, WP-CLI)
3. Attende che i servizi siano pronti
4. Esegue l'installazione e configurazione WordPress
5. Attiva il tema RAID MOTOR
6. Importa il logo
7. Crea contenuti demo

**Tempo stimato:** 3-5 minuti

### Passo 3: Accedi a WordPress

Una volta completato, apri il browser su:

**🌐 URL:** http://localhost:8080

**Credenziali:**
- Username: `admin`
- Password: `admin123`

## 🔧 Installazione Manuale

Se preferisci maggiore controllo, puoi eseguire i passaggi manualmente:

### 1. Avvia i Container

```bash
docker compose -f docker-compose.wordpress.yml up -d
```

Attendi che tutti i servizi siano pronti (circa 2-3 minuti).

### 2. Verifica Stato Container

```bash
docker compose -f docker-compose.wordpress.yml ps
```

Dovresti vedere tre container running:
- `raid-motor-db` (MySQL)
- `raid-motor-wordpress` (WordPress)
- `raid-motor-wpcli` (WP-CLI)

### 3. Esegui Script di Installazione

```bash
docker exec -it raid-motor-wpcli sh /install-theme-wpcli.sh
```

### 4. Accedi al Sito

Apri http://localhost:8080 nel browser.

## 📦 Cosa Viene Installato

### Tema WordPress
- ✅ Tema RAID MOTOR attivato
- ✅ Logo importato e configurato
- ✅ Custom Post Types registrati (Agent, Service)
- ✅ Shortcode `[rm_three_logo]` disponibile

### Contenuti Demo

#### Pagine (15+)
- Home (con logo 3D animato)
- Chi Siamo
- Servizi
- Contatti
- Blog
- 10 pagine di esempio aggiuntive

#### Agenti AI (3)
1. **Perplexity** - Ricerche approfondite e analisi contestuali
2. **Cometa** - Ricerca multi-fonte e aggregazione dati
3. **Search-AI** - Motore di ricerca AI generalista

#### Servizi (8)
1. Ricerca AI Avanzata
2. Analisi Semantica
3. Aggregazione Multi-Fonte
4. Ranking Intelligente
5. Filtri Contestuali
6. Sintesi Automatica
7. Suggerimenti Predittivi
8. API Integration

### Menu di Navigazione
Menu principale configurato con:
- Home
- Chi Siamo
- Servizi
- Agenti AI
- Tutti i Servizi
- Contatti
- Blog

## 🎨 Funzionalità Tema

### 1. Logo 3D Animato

Il tema include animazioni Three.js del logo. Puoi inserire il logo 3D in qualsiasi pagina usando lo shortcode:

```
[rm_three_logo height="360"]
```

### 2. Custom Post Types

#### Agenti AI
Accedi da **Backend > Agenti AI**

Crea nuovi agenti con:
- Titolo e descrizione
- Immagine in evidenza
- Meta fields: modello, capacità

URL: `/agent/nome-agente`

#### Servizi
Accedi da **Backend > Servizi**

Crea nuovi servizi con:
- Titolo e descrizione
- Immagine in evidenza
- Excerpt

URL: `/service/nome-servizio`

### 3. Design Neon 3D

Il tema utilizza:
- Gradiente neon (blu elettrico #00d9ff, viola #b24bf3, arancione #ff6b35)
- Animazioni fluide
- Effetti glow su hover
- Particelle animate
- Supporto `prefers-reduced-motion`

## 🛠️ Comandi Utili

### Gestione Container

```bash
# Fermare i container
docker compose -f docker-compose.wordpress.yml stop

# Riavviare i container
docker compose -f docker-compose.wordpress.yml start

# Rimuovere i container (mantiene i volumi)
docker compose -f docker-compose.wordpress.yml down

# Rimuovere tutto inclusi i dati (ATTENZIONE!)
docker compose -f docker-compose.wordpress.yml down -v
```

### Log e Debug

```bash
# Vedere i log di tutti i servizi
docker compose -f docker-compose.wordpress.yml logs -f

# Log solo WordPress
docker logs -f raid-motor-wordpress

# Log solo Database
docker logs -f raid-motor-db
```

### WP-CLI Commands

```bash
# Eseguire comandi WP-CLI
docker exec -it raid-motor-wpcli wp --info --allow-root

# Listare tutti i temi
docker exec -it raid-motor-wpcli wp theme list --allow-root

# Listare tutti i plugin
docker exec -it raid-motor-wpcli wp plugin list --allow-root

# Listare gli agenti
docker exec -it raid-motor-wpcli wp post list --post_type=agent --allow-root

# Listare i servizi
docker exec -it raid-motor-wpcli wp post list --post_type=service --allow-root
```

### Accesso ai Container

```bash
# Shell nel container WordPress
docker exec -it raid-motor-wordpress bash

# Shell nel container Database
docker exec -it raid-motor-db bash

# Shell nel container WP-CLI
docker exec -it raid-motor-wpcli sh
```

## 🔍 Verifica Installazione

### Checklist Post-Installazione

- [ ] Sito accessibile su http://localhost:8080
- [ ] Login funzionante con admin/admin123
- [ ] Tema RAID MOTOR attivo
- [ ] Logo visibile nell'header
- [ ] Logo 3D animato presente nella homepage
- [ ] Pagina Home creata e impostata come principale
- [ ] Menu di navigazione funzionante
- [ ] Agenti AI visibili su http://localhost:8080/agent
- [ ] Servizi visibili su http://localhost:8080/service
- [ ] Shortcode `[rm_three_logo]` funzionante

### Test Funzionalità

1. **Logo 3D:**
   - Vai sulla homepage
   - Verifica che il logo 3D con anelli neon sia visibile
   - Il logo dovrebbe ruotare lentamente

2. **Agenti AI:**
   - Vai su http://localhost:8080/agent
   - Dovresti vedere 3 agenti (Perplexity, Cometa, Search-AI)
   - Clicca su un agente per vedere i dettagli

3. **Servizi:**
   - Vai su http://localhost:8080/service
   - Dovresti vedere 8 servizi
   - Verifica che il layout a griglia sia corretto

4. **Shortcode:**
   - Vai su una pagina qualsiasi
   - Aggiungi `[rm_three_logo height="300"]` in un blocco HTML
   - Salva e verifica che il logo 3D appaia

## ⚠️ Risoluzione Problemi

### Porta 8080 Già in Uso

Se vedi un errore tipo "port 8080 is already in use":

```bash
# Cambia la porta nel docker-compose.wordpress.yml
# Modifica la riga:
ports:
  - "8081:80"  # Usa 8081 invece di 8080
```

### Container Non Si Avviano

```bash
# Verifica lo stato
docker compose -f docker-compose.wordpress.yml ps

# Controlla i log
docker compose -f docker-compose.wordpress.yml logs

# Restart completo
docker compose -f docker-compose.wordpress.yml down
docker compose -f docker-compose.wordpress.yml up -d
```

### WordPress Non Risponde

```bash
# Verifica che il container sia healthy
docker inspect raid-motor-wordpress | grep -A 5 Health

# Attendi qualche minuto al primo avvio
# Il download delle immagini può richiedere tempo

# Se persiste, restart:
docker restart raid-motor-wordpress
```

### Database Connection Error

```bash
# Verifica che il database sia pronto
docker exec raid-motor-db mysqladmin ping -h localhost -u root -pwordpress_root

# Se necessario, restart database
docker restart raid-motor-db

# Attendi 30 secondi e poi restart WordPress
docker restart raid-motor-wordpress
```

### Tema Non Visibile

```bash
# Verifica che la directory sia montata correttamente
docker exec raid-motor-wordpress ls -la /var/www/html/wp-content/themes/

# Dovresti vedere raid-motor-theme nella lista

# Se manca, verifica il percorso nel docker-compose
# Deve puntare a: ./wordpress-theme/raid-motor-theme
```

### Reset Completo

Se qualcosa va storto e vuoi ricominciare da zero:

```bash
# ATTENZIONE: Questo cancella tutti i dati
docker compose -f docker-compose.wordpress.yml down -v

# Riavvia l'installazione
./install.sh
```

## 🔒 Note di Sicurezza

⚠️ **IMPORTANTE PER PRODUZIONE:**

Le credenziali di default sono pensate **SOLO per sviluppo locale**:
- Database: `wordpress` / `wordpress`
- Admin WordPress: `admin` / `admin123`

**Prima di usare in produzione:**
1. Cambia tutte le password
2. Usa variabili d'ambiente invece di valori hardcoded
3. Configura SSL/HTTPS
4. Limita l'accesso al database
5. Usa secret management appropriato

## 📚 Risorse Aggiuntive

- **README principale:** [README-WORDPRESS.md](README-WORDPRESS.md)
- **Documentazione WordPress:** https://wordpress.org/documentation/
- **Three.js Docs:** https://threejs.org/docs/
- **Docker Docs:** https://docs.docker.com/

## 💬 Supporto

Per problemi o domande:
1. Controlla la sezione "Risoluzione Problemi"
2. Cerca tra le [Issues GitHub](https://github.com/almaaniraid-rgb/raid-motor-theme/issues)
3. Apri una nuova issue con:
   - Output del comando che hai eseguito
   - Log dei container
   - Screenshot se applicabile

## 🎉 Conclusione

Ora hai un ambiente WordPress completo con il tema RAID MOTOR pronto per lo sviluppo!

**Next Steps:**
1. Esplora il backend di WordPress
2. Personalizza il tema secondo le tue esigenze
3. Crea nuovi agenti e servizi
4. Modifica gli stili in `assets/css/theme-base.css`
5. Personalizza le animazioni in `assets/js/three-logo.js`

**Buon sviluppo! 🚀**
