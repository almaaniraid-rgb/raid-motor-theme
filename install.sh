#!/bin/bash
#
# RAID MOTOR - Script di installazione wrapper
# Avvia Docker Compose ed esegue lo script di installazione nel container WP-CLI
#

set -e

echo "==================================="
echo "RAID MOTOR - Setup Ambiente"
echo "==================================="
echo ""

# Verifica che Docker sia installato
if ! command -v docker &> /dev/null; then
    echo "❌ Docker non è installato. Installare Docker prima di continuare."
    echo "   Visita: https://docs.docker.com/get-docker/"
    exit 1
fi

# Verifica che Docker Compose sia installato
if ! command -v docker-compose &> /dev/null && ! docker compose version &> /dev/null; then
    echo "❌ Docker Compose non è installato. Installare Docker Compose prima di continuare."
    echo "   Visita: https://docs.docker.com/compose/install/"
    exit 1
fi

# Determina il comando docker-compose corretto
if command -v docker-compose &> /dev/null; then
    DOCKER_COMPOSE="docker-compose"
else
    DOCKER_COMPOSE="docker compose"
fi

echo "✅ Docker e Docker Compose trovati"
echo ""

# Verifica che il file docker-compose.wordpress.yml esista
if [ ! -f "docker-compose.wordpress.yml" ]; then
    echo "❌ File docker-compose.wordpress.yml non trovato nella directory corrente"
    exit 1
fi

# Verifica che il tema esista
if [ ! -d "wordpress-theme/raid-motor-theme" ]; then
    echo "❌ Directory tema non trovata: wordpress-theme/raid-motor-theme"
    exit 1
fi

echo "📁 Tema trovato: wordpress-theme/raid-motor-theme"
echo ""

# Rendi eseguibile lo script di installazione
if [ -f "install-theme-wpcli.sh" ]; then
    chmod +x install-theme-wpcli.sh
    echo "✅ Script di installazione reso eseguibile"
fi
echo ""

# Avvia i container Docker
echo "🐳 Avvio container Docker..."
echo "   Questo potrebbe richiedere alcuni minuti al primo avvio..."
echo ""

$DOCKER_COMPOSE -f docker-compose.wordpress.yml up -d

echo ""
echo "✅ Container avviati!"
echo ""

# Attendi che i container siano pronti
echo "⏳ Attendo che i servizi siano pronti..."
echo "   Database..."

# Attendi il database
max_attempts=30
attempt=0
while ! docker exec raid-motor-db mysqladmin ping -h localhost -u root -pwordpress_root --silent 2>/dev/null; do
    attempt=$((attempt + 1))
    if [ $attempt -ge $max_attempts ]; then
        echo "❌ Timeout: Database non pronto dopo ${max_attempts} tentativi"
        exit 1
    fi
    sleep 2
done

echo "   ✅ Database pronto"
echo "   WordPress..."

# Attendi WordPress
attempt=0
while ! docker exec raid-motor-wordpress curl -f http://localhost/ &>/dev/null; do
    attempt=$((attempt + 1))
    if [ $attempt -ge $max_attempts ]; then
        echo "❌ Timeout: WordPress non pronto dopo ${max_attempts} tentativi"
        exit 1
    fi
    sleep 2
done

echo "   ✅ WordPress pronto"
echo ""

# Esegui lo script di installazione nel container WP-CLI
echo "🚀 Esecuzione script di installazione tema..."
echo ""

docker exec -it raid-motor-wpcli sh /install-theme-wpcli.sh

echo ""
echo "==================================="
echo "✅ Setup completato con successo!"
echo "==================================="
echo ""
echo "📊 Informazioni accesso:"
echo "   🌐 URL: http://localhost:8080"
echo "   👤 Username: admin"
echo "   🔑 Password: admin123"
echo ""
echo "🔧 Comandi utili:"
echo "   Fermare i container:  $DOCKER_COMPOSE -f docker-compose.wordpress.yml stop"
echo "   Riavviare i container: $DOCKER_COMPOSE -f docker-compose.wordpress.yml start"
echo "   Rimuovere tutto:      $DOCKER_COMPOSE -f docker-compose.wordpress.yml down -v"
echo "   Vedere i log:         $DOCKER_COMPOSE -f docker-compose.wordpress.yml logs -f"
echo ""
echo "📖 Per maggiori informazioni, consulta il README.md"
echo ""
