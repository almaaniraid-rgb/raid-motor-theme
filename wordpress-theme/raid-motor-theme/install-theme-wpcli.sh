#!/usr/bin/env bash

##############################################################################
# Script di installazione e configurazione del tema RAID MOTOR via WP-CLI
#
# Questo script automatizza:
# - Importazione del logo nella Media Library e impostazione come custom_logo
# - Creazione di pagine di base (Home, Chi siamo, Servizi, Contatti, Blog)
# - Creazione di 10 pagine di esempio
# - Creazione di 8 servizi di esempio (Custom Post Type 'service')
# - Configurazione iniziale del tema
#
# Utilizzo: bash install-theme-wpcli.sh
# (da eseguire nel container WordPress o dove WP-CLI è disponibile)
##############################################################################

# Colori per output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Variabili configurazione
THEME_NAME="raid-motor-theme"
LOGO_PATH="wp-content/themes/${THEME_NAME}/assets/images/logo.png"

echo -e "${BLUE}╔══════════════════════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║     Script di Installazione RAID MOTOR Theme via WP-CLI     ║${NC}"
echo -e "${BLUE}╚══════════════════════════════════════════════════════════════╝${NC}"
echo ""

# Verifica che WP-CLI sia disponibile
if ! command -v wp &> /dev/null; then
    echo -e "${RED}✗ ERRORE: WP-CLI non trovato!${NC}"
    echo "  Assicurati di eseguire questo script nel container WordPress"
    echo "  Esempio: docker-compose exec wordpress bash install-theme-wpcli.sh"
    exit 1
fi

echo -e "${GREEN}✓ WP-CLI trovato${NC}"
echo ""

##############################################################################
# 1. IMPORTAZIONE E CONFIGURAZIONE LOGO
##############################################################################
echo -e "${YELLOW}═══ 1. Importazione Logo ═══${NC}"

if [ -f "$LOGO_PATH" ]; then
    echo "Importazione del logo nella Media Library..."
    LOGO_ID=$(wp media import "$LOGO_PATH" --porcelain 2>/dev/null)
    
    if [ ! -z "$LOGO_ID" ]; then
        echo -e "${GREEN}✓ Logo importato con ID: $LOGO_ID${NC}"
        
        # Imposta il logo come custom_logo del tema
        wp option update theme_mods_${THEME_NAME} --format=json '{
            "custom_logo": '$LOGO_ID'
        }' 2>/dev/null
        
        echo -e "${GREEN}✓ Logo impostato come custom_logo del tema${NC}"
    else
        echo -e "${YELLOW}⚠ Logo già presente o errore durante l'importazione${NC}"
    fi
else
    echo -e "${RED}✗ File logo non trovato: $LOGO_PATH${NC}"
fi

echo ""

##############################################################################
# 2. CREAZIONE PAGINE PRINCIPALI
##############################################################################
echo -e "${YELLOW}═══ 2. Creazione Pagine Principali ═══${NC}"

# Array delle pagine principali
declare -A PAGES=(
    ["Home"]="Benvenuto nel sito RAID MOTOR. Scopri i nostri servizi di ricerca AI avanzata."
    ["Chi Siamo"]="Siamo un team specializzato in tecnologie AI e ricerca intelligente. La nostra missione è rendere la ricerca più efficiente e potente."
    ["Servizi"]="Scopri tutti i nostri servizi innovativi. Offriamo soluzioni AI personalizzate per ogni esigenza."
    ["Contatti"]="Contattaci per maggiori informazioni sui nostri servizi. Siamo qui per aiutarti."
    ["Blog"]="Rimani aggiornato con le ultime novità dal mondo dell'AI e della ricerca intelligente."
)

for page_title in "${!PAGES[@]}"; do
    PAGE_EXISTS=$(wp post list --post_type=page --title="$page_title" --format=count 2>/dev/null)
    
    if [ "$PAGE_EXISTS" -eq 0 ]; then
        PAGE_ID=$(wp post create \
            --post_type=page \
            --post_title="$page_title" \
            --post_content="${PAGES[$page_title]}" \
            --post_status=publish \
            --porcelain 2>/dev/null)
        
        if [ ! -z "$PAGE_ID" ]; then
            echo -e "${GREEN}✓ Pagina creata: $page_title (ID: $PAGE_ID)${NC}"
            
            # Imposta Home come pagina principale
            if [ "$page_title" = "Home" ]; then
                wp option update show_on_front 'page' 2>/dev/null
                wp option update page_on_front "$PAGE_ID" 2>/dev/null
                echo -e "${GREEN}  └─ Impostata come pagina principale${NC}"
            fi
            
            # Imposta Blog come pagina dei post
            if [ "$page_title" = "Blog" ]; then
                wp option update page_for_posts "$PAGE_ID" 2>/dev/null
                echo -e "${GREEN}  └─ Impostata come pagina dei post${NC}"
            fi
        fi
    else
        echo -e "${YELLOW}⚠ Pagina già esistente: $page_title${NC}"
    fi
done

echo ""

##############################################################################
# 3. CREAZIONE PAGINE DI ESEMPIO
##############################################################################
echo -e "${YELLOW}═══ 3. Creazione Pagine di Esempio ═══${NC}"

for i in {1..10}; do
    PAGE_TITLE="Pagina esempio $i"
    PAGE_EXISTS=$(wp post list --post_type=page --title="$PAGE_TITLE" --format=count 2>/dev/null)
    
    if [ "$PAGE_EXISTS" -eq 0 ]; then
        PAGE_CONTENT="Questa è la pagina di esempio numero $i. Contenuto dimostrativo per il tema RAID MOTOR.\n\nQuesta pagina può essere modificata dal pannello di amministrazione di WordPress."
        
        PAGE_ID=$(wp post create \
            --post_type=page \
            --post_title="$PAGE_TITLE" \
            --post_content="$PAGE_CONTENT" \
            --post_status=publish \
            --porcelain 2>/dev/null)
        
        if [ ! -z "$PAGE_ID" ]; then
            echo -e "${GREEN}✓ Creata: $PAGE_TITLE (ID: $PAGE_ID)${NC}"
        fi
    else
        echo -e "${YELLOW}⚠ Già esistente: $PAGE_TITLE${NC}"
    fi
done

echo ""

##############################################################################
# 4. CREAZIONE SERVIZI (Custom Post Type)
##############################################################################
echo -e "${YELLOW}═══ 4. Creazione Servizi (CPT 'service') ═══${NC}"

# Array dei servizi con descrizioni
declare -A SERVICES=(
    ["Servizio 1"]="Ricerca AI Avanzata|Sistema di ricerca intelligente basato su algoritmi di machine learning per risultati più accurati e pertinenti."
    ["Servizio 2"]="Analisi Semantica|Analisi approfondita del contenuto con comprensione del contesto e delle relazioni semantiche tra i dati."
    ["Servizio 3"]="Integrazione API|Integrazione completa con API esterne per estendere le funzionalità del sistema di ricerca."
    ["Servizio 4"]="Dashboard Personalizzata|Interfaccia di amministrazione intuitiva con metriche e statistiche in tempo reale."
    ["Servizio 5"]="Machine Learning|Modelli di ML personalizzati per migliorare continuamente la qualità dei risultati di ricerca."
    ["Servizio 6"]="Elaborazione Linguaggio Naturale|Comprensione avanzata delle query in linguaggio naturale per risultati più pertinenti."
    ["Servizio 7"]="Indicizzazione Intelligente|Sistema di indicizzazione ottimizzato per prestazioni elevate e risultati immediati."
    ["Servizio 8"]="Reportistica Avanzata|Report dettagliati e analytics completi per monitorare l'utilizzo e l'efficacia del sistema."
)

for service_title in "${!SERVICES[@]}"; do
    SERVICE_EXISTS=$(wp post list --post_type=service --title="$service_title" --format=count 2>/dev/null)
    
    if [ "$SERVICE_EXISTS" -eq 0 ]; then
        # Separa titolo e contenuto
        IFS='|' read -r excerpt content <<< "${SERVICES[$service_title]}"
        
        # Contenuto completo del servizio
        FULL_CONTENT="<h2>Descrizione del Servizio</h2>
<p>$content</p>

<h3>Caratteristiche Principali</h3>
<ul>
    <li>Prestazioni elevate e scalabilità</li>
    <li>Interfaccia user-friendly</li>
    <li>Supporto tecnico dedicato</li>
    <li>Aggiornamenti costanti</li>
</ul>

<h3>Vantaggi</h3>
<p>Questo servizio offre numerosi vantaggi per la tua azienda, migliorando l'efficienza operativa e riducendo i tempi di ricerca. La tecnologia all'avanguardia garantisce risultati accurati e affidabili.</p>

<h3>Per Chi è Indicato</h3>
<p>Ideale per aziende di ogni dimensione che vogliono migliorare i loro sistemi di ricerca e gestione delle informazioni.</p>"
        
        SERVICE_ID=$(wp post create \
            --post_type=service \
            --post_title="$service_title" \
            --post_content="$FULL_CONTENT" \
            --post_excerpt="$excerpt" \
            --post_status=publish \
            --porcelain 2>/dev/null)
        
        if [ ! -z "$SERVICE_ID" ]; then
            echo -e "${GREEN}✓ Servizio creato: $service_title (ID: $SERVICE_ID)${NC}"
        fi
    else
        echo -e "${YELLOW}⚠ Servizio già esistente: $service_title${NC}"
    fi
done

echo ""

##############################################################################
# 5. FLUSH REWRITE RULES
##############################################################################
echo -e "${YELLOW}═══ 5. Aggiornamento Permalink ═══${NC}"
wp rewrite flush --hard 2>/dev/null
echo -e "${GREEN}✓ Permalink aggiornati${NC}"

echo ""

##############################################################################
# RIEPILOGO FINALE
##############################################################################
echo -e "${BLUE}╔══════════════════════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║                    INSTALLAZIONE COMPLETATA                  ║${NC}"
echo -e "${BLUE}╚══════════════════════════════════════════════════════════════╝${NC}"
echo ""
echo -e "${GREEN}✓ Tema RAID MOTOR configurato con successo!${NC}"
echo ""
echo "Prossimi passi:"
echo ""
echo "1. Visita il sito per vedere il logo e le pagine create"
echo "2. Personalizza il logo da: Aspetto → Personalizza → Identità del sito"
echo "3. Visualizza i servizi visitando: /servizi/"
echo "4. Crea un menu da: Aspetto → Menu"
echo "5. Personalizza le pagine dal pannello di amministrazione"
echo ""
echo -e "${BLUE}═══════════════════════════════════════════════════════════════${NC}"
echo ""
echo "Per assistenza, visita: https://raidmotor.com"
echo ""
