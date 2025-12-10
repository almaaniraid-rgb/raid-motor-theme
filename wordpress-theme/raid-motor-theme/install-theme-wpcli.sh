#!/bin/bash
##############################################################################
# Script di automazione WP-CLI per RAID MOTOR Theme
# 
# Questo script automatizza l'installazione e la configurazione del tema,
# inclusi logo, pagine di esempio e servizi.
#
# Utilizzo:
#   bash install-theme-wpcli.sh
#
# Nota: Eseguire questo script dal container WordPress con WP-CLI installato
# Esempio: docker-compose exec wordpress bash -c "wp ..."
##############################################################################

set -e  # Esci in caso di errore

# Colori per output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Variabili di configurazione
THEME_DIR="/var/www/html/wp-content/themes/raid-motor-theme"
LOGO_PATH="${THEME_DIR}/assets/images/logo.png"
THEME_SLUG="raid-motor-theme"

echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}  RAID MOTOR Theme - Setup Automatico  ${NC}"
echo -e "${BLUE}========================================${NC}\n"

# Verifica che WP-CLI sia disponibile
if ! command -v wp &> /dev/null; then
    echo -e "${RED}ERRORE: WP-CLI non trovato!${NC}"
    echo "Assicurati di eseguire questo script in un ambiente con WP-CLI installato."
    exit 1
fi

# Verifica che WordPress sia installato
if ! wp core is-installed --allow-root 2>/dev/null; then
    echo -e "${RED}ERRORE: WordPress non è installato!${NC}"
    echo "Installa WordPress prima di eseguire questo script."
    exit 1
fi

echo -e "${GREEN}✓${NC} WP-CLI e WordPress rilevati\n"

# 1. Importa il logo nella Media Library
echo -e "${YELLOW}[1/6]${NC} Importazione del logo..."
if [ -f "$LOGO_PATH" ]; then
    LOGO_ID=$(wp media import "$LOGO_PATH" --porcelain --allow-root 2>/dev/null || echo "")
    if [ -n "$LOGO_ID" ]; then
        # Imposta il logo come custom_logo
        wp option update custom_logo "$LOGO_ID" --allow-root
        echo -e "${GREEN}✓${NC} Logo importato (ID: $LOGO_ID) e impostato come custom_logo\n"
    else
        echo -e "${YELLOW}⚠${NC} Logo già presente o errore durante l'importazione\n"
    fi
else
    echo -e "${YELLOW}⚠${NC} File logo non trovato in $LOGO_PATH\n"
fi

# 2. Crea le pagine principali
echo -e "${YELLOW}[2/6]${NC} Creazione delle pagine principali..."

declare -a PAGES=("Home" "Chi siamo" "Servizi" "Contatti" "Blog")

for page_title in "${PAGES[@]}"; do
    # Controlla se la pagina esiste già
    PAGE_EXISTS=$(wp post list --post_type=page --title="$page_title" --format=count --allow-root)
    
    if [ "$PAGE_EXISTS" -eq 0 ]; then
        PAGE_ID=$(wp post create \
            --post_type=page \
            --post_title="$page_title" \
            --post_content="<p>Benvenuto nella pagina <strong>$page_title</strong>.</p><p>Questa è una pagina di esempio creata automaticamente. Puoi modificarla dal pannello di amministrazione di WordPress.</p>" \
            --post_status=publish \
            --porcelain \
            --allow-root)
        
        echo -e "${GREEN}  ✓${NC} Creata pagina: $page_title (ID: $PAGE_ID)"
    else
        echo -e "${BLUE}  ℹ${NC} Pagina già esistente: $page_title"
    fi
done

echo ""

# 3. Imposta la pagina Home come homepage
echo -e "${YELLOW}[3/6]${NC} Configurazione della homepage..."
HOME_PAGE_ID=$(wp post list --post_type=page --title="Home" --format=ids --allow-root | awk '{print $1}')
if [ -n "$HOME_PAGE_ID" ]; then
    wp option update show_on_front page --allow-root
    wp option update page_on_front "$HOME_PAGE_ID" --allow-root
    echo -e "${GREEN}✓${NC} Homepage impostata (ID: $HOME_PAGE_ID)\n"
else
    echo -e "${YELLOW}⚠${NC} Impossibile impostare la homepage\n"
fi

# 4. Crea 10 pagine di esempio
echo -e "${YELLOW}[4/6]${NC} Creazione di 10 pagine di esempio..."

for i in {1..10}; do
    PAGE_TITLE="Pagina esempio $i"
    PAGE_EXISTS=$(wp post list --post_type=page --title="$PAGE_TITLE" --format=count --allow-root)
    
    if [ "$PAGE_EXISTS" -eq 0 ]; then
        wp post create \
            --post_type=page \
            --post_title="$PAGE_TITLE" \
            --post_content="<p>Questa è la pagina di esempio numero $i.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>" \
            --post_status=publish \
            --allow-root \
            --quiet
        echo -e "${GREEN}  ✓${NC} Creata: $PAGE_TITLE"
    else
        echo -e "${BLUE}  ℹ${NC} Già esistente: $PAGE_TITLE"
    fi
done

echo ""

# 5. Crea 8 servizi di esempio
echo -e "${YELLOW}[5/6]${NC} Creazione di 8 servizi di esempio..."

declare -a SERVICE_TITLES=(
    "Servizio 1: Consulenza AI"
    "Servizio 2: Sviluppo Software"
    "Servizio 3: Ottimizzazione SEO"
    "Servizio 4: Design UX/UI"
    "Servizio 5: Marketing Digitale"
    "Servizio 6: Cloud Computing"
    "Servizio 7: Sicurezza Informatica"
    "Servizio 8: Analisi Dati"
)

for service_title in "${SERVICE_TITLES[@]}"; do
    SERVICE_EXISTS=$(wp post list --post_type=service --title="$service_title" --format=count --allow-root)
    
    if [ "$SERVICE_EXISTS" -eq 0 ]; then
        SERVICE_ID=$(wp post create \
            --post_type=service \
            --post_title="$service_title" \
            --post_content="<h2>Descrizione del servizio</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p><h3>Caratteristiche principali</h3><ul><li>Esperienza professionale</li><li>Soluzioni personalizzate</li><li>Supporto continuo</li><li>Risultati garantiti</li></ul><p>Contattaci per maggiori informazioni su questo servizio.</p>" \
            --post_excerpt="Breve descrizione del servizio per l'anteprima. Scopri come possiamo aiutarti." \
            --post_status=publish \
            --porcelain \
            --allow-root)
        
        echo -e "${GREEN}  ✓${NC} Creato: $service_title (ID: $SERVICE_ID)"
    else
        echo -e "${BLUE}  ℹ${NC} Già esistente: $service_title"
    fi
done

echo ""

# 6. Flush delle rewrite rules per assicurare che i permalink funzionino
echo -e "${YELLOW}[6/6]${NC} Aggiornamento dei permalink..."
wp rewrite flush --allow-root
echo -e "${GREEN}✓${NC} Permalink aggiornati\n"

# Riepilogo finale
echo -e "${BLUE}========================================${NC}"
echo -e "${GREEN}  ✓ Setup completato con successo!${NC}"
echo -e "${BLUE}========================================${NC}\n"

echo -e "${GREEN}Azioni completate:${NC}"
echo -e "  • Logo importato e configurato"
echo -e "  • 5 pagine principali create (Home, Chi siamo, Servizi, Contatti, Blog)"
echo -e "  • Homepage configurata"
echo -e "  • 10 pagine di esempio create"
echo -e "  • 8 servizi di esempio creati"
echo -e "  • Permalink aggiornati\n"

echo -e "${YELLOW}Prossimi passi:${NC}"
echo -e "  1. Visita il sito per vedere i cambiamenti"
echo -e "  2. Vai su ${BLUE}Aspetto → Personalizza${NC} per modificare il logo"
echo -e "  3. Vai su ${BLUE}Aspetto → Menu${NC} per creare e assegnare un menu alla posizione 'Primary Menu'"
echo -e "  4. Visita ${BLUE}/servizi/${NC} per vedere l'archivio dei servizi"
echo -e "  5. Modifica i servizi in ${BLUE}Dashboard → Servizi${NC}\n"

echo -e "${GREEN}Installazione completata!${NC}\n"
