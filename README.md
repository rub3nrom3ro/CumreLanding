# Cumre Inmobiliario

Página de promoción del servicio para facilitar identificación y presentación
de avisos LFPIORPI en la actividad de arrendamiento. Contacto por WhatsApp,
teléfono y correo; no contiene formularios, bases de datos ni analítica.

## Desarrollo
Verificado con Node.js 22.22.0 y pnpm 11.19.0. Usa Node 22 LTS: el compilador presentó un fallo de cierre con Node 24 en Windows.
```
pnpm install --frozen-lockfile
pnpm dev
pnpm build
```
La salida pública es `dist/client`. El sitio se exporta como archivos estáticos;
no necesita servidor Node en producción ni claves de Azure.

## GitHub Pages
1. Crear un repositorio en GitHub y subir este proyecto a la rama `main`.
2. En Settings > Pages, elegir GitHub Actions como origen.
3. Ejecutar el flujo `Publicar Cumre en GitHub Pages` o subir un cambio.
4. Para el dominio propio, configurarlo en Settings > Pages > Custom domain.
5. En el proveedor DNS autoritativo (Azure DNS si allí está delegada la zona),
   crear los registros que indique GitHub. Conservar los MX/TXT de Google Workspace.
6. Activar Enforce HTTPS cuando el certificado esté disponible y volver a ejecutar
   el flujo si se cambió del subdirectorio del repositorio al dominio propio.

El flujo obtiene automáticamente `base_path` de GitHub Pages para soportar tanto
`usuario.github.io/repositorio/` como un dominio personalizado. No se incluyó
CNAME porque aún no se proporcionó el dominio definitivo.

No se ha creado repositorio remoto, subido código ni publicado el sitio.

## Edición
- Textos, enlaces y contacto: `app/page.tsx`.
- Diseño adaptable a celular: `app/globals.css`.
- Título y descripción: `app/layout.tsx`.
- Logos oficiales: `public/images/cumre-logo-color.png` y `cumre-logo-white.png`.

Contacto confirmado: cumreinmobiliario@gmail.com / +52 664 484 1118.
WhatsApp y correo abren aplicaciones externas; no se guarda información en este sitio.
La imagen es ilustrativa, no representa una propiedad ofertada por Cumre.
Se utilizan los logotipos oficiales proporcionados, conservando los PNG originales.

## Fuentes
- Contexto normativo: https://sppld.sat.gob.mx/pld/interiores/arrendamiento.html
- GitHub Pages: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
- Foto: https://unsplash.com/fr/photos/un-salon-avec-une-grande-fenetre-MM7nD2FjI3U
- Licencia: https://unsplash.com/license

Los textos no prometen certificación, afiliación con autoridades, integración
automática con SAT, ausencia de multas ni cumplimiento garantizado.

## Vista previa sin herramientas de Node
Si ya se generó dist/client y tienes Python instalado:
```powershell
python -m http.server 8080 --directory dist/client
```
Abre http://localhost:8080. No abras index.html con doble clic: los recursos requieren HTTP.
