# 📝 Nota sul Logo

## Logo Attuale

Il tema include attualmente un logo placeholder generato automaticamente che corrisponde al design del tema:
- Anelli neon concentrici (blu elettrico, viola, arancione)
- Testo "RM" al centro
- Formato PNG 512x512px
- Effetti glow

**Posizione:** `wordpress-theme/raid-motor-theme/assets/images/logo.png`

## Logo Ufficiale da Sostituire

Il logo ufficiale del progetto è disponibile all'URL:
```
https://github.com/user-attachments/assets/40f3d99d-5e92-40aa-8a1c-76e2d74db21d
```

Questo logo presenta:
- Anelli neon concentrici (cyan, viola, arancione)
- Design minimalista e moderno
- Stile coerente con il tema neon 3D

## Come Sostituire il Logo

### Opzione 1: Manualmente
1. Scarica il logo ufficiale dall'URL sopra
2. Rinominalo in `logo.png`
3. Sostituisci il file in `wordpress-theme/raid-motor-theme/assets/images/logo.png`
4. Mantieni le dimensioni 512x512px o superiori

### Opzione 2: Durante l'Installazione
1. Dopo aver eseguito `./install.sh`
2. Accedi a WordPress (http://localhost:8080)
3. Vai su **Aspetto > Personalizza > Identità del sito**
4. Clicca su **Seleziona logo**
5. Carica il logo ufficiale
6. WordPress lo utilizzerà automaticamente al posto del placeholder

### Opzione 3: Tramite WP-CLI
```bash
# Scarica il logo
wget -O logo-official.png "URL_LOGO_UFFICIALE"

# Copia nel container
docker cp logo-official.png raid-motor-wordpress:/tmp/

# Importa in WordPress
docker exec raid-motor-wpcli wp media import /tmp/logo-official.png \
  --post_id=$(docker exec raid-motor-wpcli wp option get page_on_front --allow-root) \
  --featured_image \
  --allow-root

# Imposta come custom logo
LOGO_ID=$(docker exec raid-motor-wpcli wp media import /tmp/logo-official.png --porcelain --allow-root)
docker exec raid-motor-wpcli wp theme mod set custom_logo $LOGO_ID --allow-root
```

## Verifica Compatibilità

Il logo attuale è completamente compatibile con:
- ✅ Three.js texture loading
- ✅ Custom logo WordPress
- ✅ Responsive scaling
- ✅ Retina displays
- ✅ Shortcode `[rm_three_logo]`

Il logo ufficiale dovrebbe funzionare senza modifiche al codice.

## Note Tecniche

Il tema carica il logo in due modi:

1. **Come Custom Logo WordPress:**
   - Gestito da `the_custom_logo()` in `header.php`
   - Fallback a `assets/images/logo.png`

2. **Come Texture Three.js:**
   - Caricato da `three-logo.js`
   - Usa `THREE.TextureLoader`
   - Applicato come sprite 3D

Entrambi i metodi supportano PNG con trasparenza.

## Dimensioni Consigliate

- **Minimo:** 512x512px
- **Consigliato:** 1024x1024px
- **Formato:** PNG con trasparenza
- **Peso:** < 200KB per performance ottimali

---

**Generato:** 2025-12-10  
**Tema:** RAID MOTOR WordPress Theme
