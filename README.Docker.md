# 🐳 RAID MOTOR - Installazione Docker

Guida completa all'installazione e deployment di RAID MOTOR con Docker.

---

## 📋 Prerequisiti

- **Docker** installato (versione 20.10+)
- **Docker Compose** installato (versione 2.0+)
- **Git** per clonare il repository
- 2GB di spazio disco libero

### Verifica installazione Docker

```bash
docker --version
docker-compose --version
```

---

## 🚀 Installazione Rapida con Docker Compose

### Passo 1: Clona il repository

```bash
git clone https://github.com/almaaniraid-rgb/raid-motor-theme.git
cd raid-motor-theme
```

### Passo 2: Configura le variabili ambiente

```bash
# Copia il file .env.example
cp .env.example .env

# Modifica il file .env con le tue credenziali
nano .env  # oppure usa vim, code, notepad++, ecc.
```

**Contenuto minimo di `.env`:**

```env
VITE_API_URL=https://raidoneone.app.n8n.cloud/webhook/search
VITE_SUPABASE_URL=your_supabase_url_here
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

### Passo 3: Avvia il container

```bash
# Build e avvio con docker-compose
docker-compose up -d
```

### Passo 4: Verifica che funzioni

Apri il browser e vai a:

```
http://localhost:8080
```

✅ RAID MOTOR dovrebbe ora essere attivo!

---

## 🛠️ Installazione Manuale (senza Docker Compose)

### Passo 1: Clona il repository

```bash
git clone https://github.com/almaaniraid-rgb/raid-motor-theme.git
cd raid-motor-theme
```

### Passo 2: Crea il file .env

```bash
cp .env.example .env
# Modifica .env con le tue credenziali
```

### Passo 3: Build dell'immagine Docker

```bash
docker build -t raid-motor:latest .
```

### Passo 4: Avvia il container

```bash
docker run -d \
  --name raid-motor-app \
  -p 8080:80 \
  --env-file .env \
  --restart unless-stopped \
  raid-motor:latest
```

### Passo 5: Verifica

```bash
# Controlla i log
docker logs raid-motor-app

# Controlla lo stato
docker ps
```

Apri: `http://localhost:8080`

---

## 📦 Comandi Utili

### Con Docker Compose

```bash
# Avvia i container
docker-compose up -d

# Ferma i container
docker-compose down

# Riavvia i container
docker-compose restart

# Visualizza i log
docker-compose logs -f

# Rebuild dopo modifiche
docker-compose up -d --build

# Ferma e rimuovi tutto (inclusi volumi)
docker-compose down -v
```

### Senza Docker Compose

```bash
# Avvia il container
docker start raid-motor-app

# Ferma il container
docker stop raid-motor-app

# Riavvia il container
docker restart raid-motor-app

# Visualizza i log
docker logs -f raid-motor-app

# Rimuovi il container
docker rm -f raid-motor-app

# Rimuovi l'immagine
docker rmi raid-motor:latest
```

---

## 🔧 Configurazione Avanzata

### Cambiare la porta

Modifica nel file `docker-compose.yml`:

```yaml
ports:
  - "3000:80"  # Cambia 8080 con la porta desiderata
```

Oppure con Docker run:

```bash
docker run -d -p 3000:80 ...
```

### Variabili ambiente personalizzate

Aggiungi nel file `.env`:

```env
VITE_API_URL=https://tuo-webhook.esempio.com
VITE_SUPABASE_URL=https://tuo-progetto.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOi...
```

---

## 🩺 Troubleshooting

### Container non si avvia

```bash
# Controlla i log
docker logs raid-motor-app

# Verifica che la porta 8080 sia libera
sudo netstat -tulpn | grep 8080

# Verifica il file .env
cat .env
```

### Errore "bind: address already in use"

La porta 8080 è occupata. Cambia porta:

```bash
docker run -d -p 8081:80 ...
```

### Build fallisce

```bash
# Pulisci la cache Docker
docker system prune -a

# Riprova il build
docker-compose build --no-cache
```

### Pagina bianca o errori 404

Controlla le variabili ambiente nel file `.env` e riavvia:

```bash
docker-compose restart
```

---

## 📊 Monitoraggio

### Health Check

Il container include un health check automatico:

```bash
# Verifica stato health
docker inspect raid-motor-app | grep Health -A 10
```

### Verifica endpoint di salute

```bash
curl http://localhost:8080/health
# Risposta attesa: OK
```

---

## 🌐 Deploy in Produzione

### Docker Swarm

```bash
docker stack deploy -c docker-compose.yml raid-motor
```

### Kubernetes

Esegui il build, pusha l'immagine su Docker Hub o registry privato:

```bash
docker tag raid-motor:latest yourusername/raid-motor:latest
docker push yourusername/raid-motor:latest
```

Crea deployment e service Kubernetes (esempio base):

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: raid-motor
spec:
  replicas: 3
  selector:
    matchLabels:
      app: raid-motor
  template:
    metadata:
      labels:
        app: raid-motor
    spec:
      containers:
      - name: raid-motor
        image: yourusername/raid-motor:latest
        ports:
        - containerPort: 80
        env:
        - name: VITE_API_URL
          value: "https://raidoneone.app.n8n.cloud/webhook/search"
```

---

## 📄 Struttura dei File Docker

```
raid-motor-theme/
├── Dockerfile              # Definizione immagine (build multi-stage)
├── docker-compose.yml      # Orchestrazione container
├── nginx.conf              # Configurazione Nginx per SPA
├── .env.example            # Template variabili ambiente
└── README.Docker.md        # Questa guida
```

---

## 🔐 Sicurezza

1. **Non committare mai il file `.env` con credenziali reali**
2. Usa secret management in produzione (Docker secrets, Kubernetes secrets)
3. Abilita HTTPS con reverse proxy (Nginx, Traefik, Caddy)
4. Limita l'accesso alla porta 8080 con firewall

---

## 📞 Supporto

Per problemi o domande:

- Apri un issue su [GitHub](https://github.com/almaaniraid-rgb/raid-motor-theme/issues)
- Controlla la documentazione principale nel README.md

---

**Buon deployment! 🚀**
