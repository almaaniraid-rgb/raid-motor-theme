#!/bin/bash
#
# Script di installazione tema RAID MOTOR usando WP-CLI
# Questo script viene eseguito all'interno del container wpcli
# 

set -e

echo "==================================="
echo "RAID MOTOR - Installazione Tema"
echo "==================================="
echo ""

# Attendi che WordPress sia pronto
echo "⏳ Attendo che WordPress sia pronto..."
max_attempts=30
attempt=0

while ! wp core is-installed --allow-root 2>/dev/null; do
    attempt=$((attempt + 1))
    if [ $attempt -ge $max_attempts ]; then
        echo "❌ Timeout: WordPress non è pronto dopo ${max_attempts} tentativi"
        exit 1
    fi
    echo "   Tentativo ${attempt}/${max_attempts}..."
    sleep 2
done

echo "✅ WordPress è pronto!"
echo ""

# Installa WordPress se non già installato
if ! wp core is-installed --allow-root 2>/dev/null; then
    echo "📦 Installazione WordPress..."
    wp core install \
        --url="http://localhost:8080" \
        --title="RAID MOTOR" \
        --admin_user="admin" \
        --admin_password="admin123" \
        --admin_email="admin@raidmotor.local" \
        --skip-email \
        --allow-root
    echo "✅ WordPress installato!"
else
    echo "✅ WordPress già installato"
fi
echo ""

# Attiva il tema RAID MOTOR
echo "🎨 Attivazione tema RAID MOTOR..."
if wp theme is-installed raid-motor-theme --allow-root; then
    wp theme activate raid-motor-theme --allow-root
    echo "✅ Tema RAID MOTOR attivato!"
else
    echo "❌ Tema raid-motor-theme non trovato nella directory temi"
    echo "   Verificare che la directory wordpress-theme/raid-motor-theme sia montata correttamente"
    exit 1
fi
echo ""

# Importa il logo nella media library
echo "🖼️  Importazione logo..."
LOGO_PATH="/var/www/html/wp-content/themes/raid-motor-theme/assets/images/logo.png"
if [ -f "$LOGO_PATH" ]; then
    # Importa il logo
    LOGO_ID=$(wp media import "$LOGO_PATH" --porcelain --allow-root)
    if [ -n "$LOGO_ID" ]; then
        echo "✅ Logo importato con ID: $LOGO_ID"
        
        # Imposta come custom logo
        wp option update theme_mods_raid-motor-theme "{\"custom_logo\":$LOGO_ID}" --format=json --allow-root 2>/dev/null || \
        wp theme mod set custom_logo "$LOGO_ID" --allow-root
        echo "✅ Logo impostato come custom logo del tema"
    else
        echo "⚠️  Errore nell'importazione del logo"
    fi
else
    echo "⚠️  Logo non trovato in: $LOGO_PATH"
fi
echo ""

# Crea menu primario
echo "📋 Creazione menu primario..."
MENU_EXISTS=$(wp menu list --format=count --allow-root)
if [ "$MENU_EXISTS" -eq 0 ]; then
    wp menu create "Menu Principale" --allow-root
    wp menu location assign menu-principale primary --allow-root 2>/dev/null || true
    echo "✅ Menu principale creato"
else
    echo "✅ Menu già esistente"
fi
echo ""

# Crea pagine standard
echo "📄 Creazione pagine standard..."

# Array di pagine da creare
declare -a pages=(
    "Home:Benvenuti in RAID MOTOR - Ricerca AI avanzata con tecnologia multi-origine"
    "Chi Siamo:Scopri chi siamo e la nostra missione nel campo dell'intelligenza artificiale"
    "Servizi:I nostri servizi di ricerca AI e soluzioni avanzate"
    "Contatti:Mettiti in contatto con noi"
    "Blog:Le ultime novità dal mondo RAID MOTOR"
)

for page_data in "${pages[@]}"; do
    IFS=':' read -r page_title page_content <<< "$page_data"
    
    if ! wp post list --post_type=page --title="$page_title" --format=count --allow-root | grep -q "^[1-9]"; then
        PAGE_ID=$(wp post create \
            --post_type=page \
            --post_title="$page_title" \
            --post_content="<p>$page_content</p>[rm_three_logo height=\"360\"]" \
            --post_status=publish \
            --porcelain \
            --allow-root)
        echo "   ✅ Pagina creata: $page_title (ID: $PAGE_ID)"
        
        # Imposta Home come pagina principale
        if [ "$page_title" = "Home" ]; then
            wp option update show_on_front page --allow-root
            wp option update page_on_front "$PAGE_ID" --allow-root
            echo "   ✅ Home impostata come pagina principale"
        fi
        
        # Imposta Blog come pagina degli articoli
        if [ "$page_title" = "Blog" ]; then
            wp option update page_for_posts "$PAGE_ID" --allow-root
            echo "   ✅ Blog impostata come pagina articoli"
        fi
    else
        echo "   ℹ️  Pagina già esistente: $page_title"
    fi
done
echo ""

# Crea pagine aggiuntive di esempio
echo "📄 Creazione pagine di esempio..."
for i in {1..10}; do
    page_title="Pagina Esempio $i"
    if ! wp post list --post_type=page --title="$page_title" --format=count --allow-root | grep -q "^[1-9]"; then
        wp post create \
            --post_type=page \
            --post_title="$page_title" \
            --post_content="<p>Questa è la pagina di esempio numero $i con contenuti dimostrativi.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>" \
            --post_status=publish \
            --allow-root \
            > /dev/null
        echo "   ✅ Creata: $page_title"
    fi
done
echo ""

# Crea 3 agenti AI demo
echo "🤖 Creazione agenti AI demo..."

declare -a agents=(
    "Perplexity:Agente AI avanzato per ricerche approfondite e analisi contestuali:GPT-4:Ricerca semantica, analisi contestuale, sintesi informazioni"
    "Cometa:Agente specializzato in ricerca multi-fonte e aggregazione dati:Claude 3:Aggregazione multi-fonte, ranking intelligente, filtri avanzati"
    "Search-AI:Motore di ricerca AI generalista con capacità predittive:GPT-3.5 Turbo:Ricerca veloce, predizioni, suggerimenti intelligenti"
)

for agent_data in "${agents[@]}"; do
    IFS=':' read -r agent_name agent_desc agent_model agent_capabilities <<< "$agent_data"
    
    if ! wp post list --post_type=agent --title="$agent_name" --format=count --allow-root | grep -q "^[1-9]"; then
        AGENT_ID=$(wp post create \
            --post_type=agent \
            --post_title="$agent_name" \
            --post_content="<h2>Descrizione</h2><p>$agent_desc</p><h2>Funzionalità</h2><ul><li>Ricerca avanzata</li><li>Analisi intelligente</li><li>Risposte contestuali</li></ul>" \
            --post_excerpt="$agent_desc" \
            --post_status=publish \
            --porcelain \
            --allow-root)
        
        # Aggiungi meta fields
        wp post meta add "$AGENT_ID" agent_model "$agent_model" --allow-root
        wp post meta add "$AGENT_ID" agent_capabilities "$agent_capabilities" --allow-root
        
        echo "   ✅ Agente creato: $agent_name (ID: $AGENT_ID)"
    else
        echo "   ℹ️  Agente già esistente: $agent_name"
    fi
done
echo ""

# Crea 8 servizi demo
echo "⚙️  Creazione servizi demo..."

declare -a services=(
    "Ricerca AI Avanzata:Servizio di ricerca intelligente con AI multi-modello"
    "Analisi Semantica:Analisi approfondita del significato e del contesto"
    "Aggregazione Multi-Fonte:Raccolta e sintesi dati da molteplici fonti"
    "Ranking Intelligente:Ordinamento risultati basato su AI"
    "Filtri Contestuali:Filtraggio avanzato basato sul contesto"
    "Sintesi Automatica:Riassunti intelligenti dei contenuti"
    "Suggerimenti Predittivi:Suggerimenti basati su machine learning"
    "API Integration:Integrazione con API esterne e servizi"
)

for service_data in "${services[@]}"; do
    IFS=':' read -r service_name service_desc <<< "$service_data"
    
    if ! wp post list --post_type=service --title="$service_name" --format=count --allow-root | grep -q "^[1-9]"; then
        SERVICE_ID=$(wp post create \
            --post_type=service \
            --post_title="$service_name" \
            --post_content="<h2>Descrizione</h2><p>$service_desc</p><h2>Caratteristiche</h2><ul><li>Velocità elevata</li><li>Precisione garantita</li><li>Scalabilità enterprise</li><li>Supporto 24/7</li></ul><h2>Vantaggi</h2><p>Utilizza le più recenti tecnologie di intelligenza artificiale per offrire risultati accurati e rilevanti.</p>" \
            --post_excerpt="$service_desc" \
            --post_status=publish \
            --porcelain \
            --allow-root)
        
        echo "   ✅ Servizio creato: $service_name (ID: $SERVICE_ID)"
    else
        echo "   ℹ️  Servizio già esistente: $service_name"
    fi
done
echo ""

# Aggiungi voci al menu
echo "📋 Aggiunta voci al menu..."
MENU_ID=$(wp menu list --fields=term_id --format=csv --allow-root | tail -n 1)

if [ -n "$MENU_ID" ]; then
    # Ottieni gli ID delle pagine
    HOME_ID=$(wp post list --post_type=page --title="Home" --field=ID --allow-root | head -n 1)
    CHIAMO_ID=$(wp post list --post_type=page --title="Chi Siamo" --field=ID --allow-root | head -n 1)
    SERVIZI_ID=$(wp post list --post_type=page --title="Servizi" --field=ID --allow-root | head -n 1)
    CONTATTI_ID=$(wp post list --post_type=page --title="Contatti" --field=ID --allow-root | head -n 1)
    BLOG_ID=$(wp post list --post_type=page --title="Blog" --field=ID --allow-root | head -n 1)
    
    # Aggiungi le voci al menu (solo se non esistono già)
    MENU_COUNT=$(wp menu item list "$MENU_ID" --format=count --allow-root)
    
    if [ "$MENU_COUNT" -eq 0 ]; then
        [ -n "$HOME_ID" ] && wp menu item add-post "$MENU_ID" "$HOME_ID" --allow-root
        [ -n "$CHIAMO_ID" ] && wp menu item add-post "$MENU_ID" "$CHIAMO_ID" --allow-root
        [ -n "$SERVIZI_ID" ] && wp menu item add-post "$MENU_ID" "$SERVIZI_ID" --allow-root
        
        # Aggiungi link agli archivi CPT
        wp menu item add-custom "$MENU_ID" "Agenti AI" "/agent" --allow-root
        wp menu item add-custom "$MENU_ID" "Tutti i Servizi" "/service" --allow-root
        
        [ -n "$CONTATTI_ID" ] && wp menu item add-post "$MENU_ID" "$CONTATTI_ID" --allow-root
        [ -n "$BLOG_ID" ] && wp menu item add-post "$MENU_ID" "$BLOG_ID" --allow-root
        
        echo "✅ Voci aggiunte al menu"
    else
        echo "ℹ️  Menu già popolato"
    fi
fi
echo ""

# Flush rewrite rules per i CPT
echo "🔄 Aggiornamento permalink..."
wp rewrite flush --allow-root
echo "✅ Permalink aggiornati"
echo ""

echo "==================================="
echo "✅ Installazione completata!"
echo "==================================="
echo ""
echo "🌐 WordPress disponibile su: http://localhost:8080"
echo "👤 Username: admin"
echo "🔑 Password: admin123"
echo ""
echo "📦 Tema: RAID MOTOR"
echo "🤖 Agenti AI: 3 creati"
echo "⚙️  Servizi: 8 creati"
echo "📄 Pagine: 15+ create"
echo ""
echo "🎉 Buon lavoro con RAID MOTOR!"
echo ""
