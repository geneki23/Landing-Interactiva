   # 🌌 Portfolio MiArma - Artista Digital

Portfolio interactivo de una sola página para la artista digital ficticia "MiArma", especializada en paisajes de ciencia ficción.

## 📁 Estructura del Proyecto

```
cryo-nova/
├── index.html          # Página principal del portfolio
├── credits.html        # Página de créditos y licencias
├── README.md           # Este archivo
├── assets/
│   ├── images/         # Imágenes del proyecto
│   │   ├── hero.png
│   │   ├── gallery-1.png
│   │   ├── gallery-2.png
│   │   └── gallery-3.png
│   ├── video/          # Vídeos (usuario debe añadir)
│   │   └── reel.mp4
│   └── audio/          # Audio (usuario debe añadir)
│       └── ambient.mp3
├── css/
│   └── styles.css      # Estilos CSS
└── js/
    └── main.js         # JavaScript interactivo
```

---

## 📋 Tabla de Recursos Externos

| Archivo | URL Original | Autor | Licencia |
|---------|--------------|-------|----------|
| hero.png | [Pexels](https://www.pexels.com) / [Pixabay](https://pixabay.com) | Autores Creative Commons | CC0 / Pexels License |
| gallery-1.png | [Pexels](https://www.pexels.com) / [Pixabay](https://pixabay.com) | Autores Creative Commons | CC0 / Pexels License |
| gallery-2.png | [Pexels](https://www.pexels.com) / [Pixabay](https://pixabay.com) | Autores Creative Commons | CC0 / Pexels License |
| gallery-3.png | [Pexels](https://www.pexels.com) / [Pixabay](https://pixabay.com) | Autores Creative Commons | CC0 / Pexels License |
| reel.mp4 | [Pexels Videos](https://www.pexels.com/videos/search/space/) | Autores Creative Commons | Pexels License |
| ambient.mp3 | [FreePD.com](https://freepd.com/) | Autores Creative Commons | CC0 1.0 |
| Orbitron (font) | [Google Fonts](https://fonts.google.com/specimen/Orbitron) | Matt McInerney | OFL 1.1 |
| Inter (font) | [Google Fonts](https://fonts.google.com/specimen/Inter) | Rasmus Andersson | OFL 1.1 |

### Fuentes recomendadas para recursos CC:
- **Imágenes**: [Pexels](https://www.pexels.com), [Pixabay](https://pixabay.com), [Unsplash](https://unsplash.com)
- **Vídeos**: [Pexels Videos](https://www.pexels.com/videos/), [Pixabay Videos](https://pixabay.com/videos/)
- **Audio**: [FreePD](https://freepd.com), [Mixkit](https://mixkit.co/free-stock-music/)

---

## 🛠️ Herramientas Utilizadas

| Tarea | Herramienta |
|-------|-------------|
| Búsqueda de imágenes CC | [Pexels](https://www.pexels.com), [Pixabay](https://pixabay.com), [Unsplash](https://unsplash.com) |
| Edición de código | VS Code / Editor de texto |
| Optimización de imágenes | [Squoosh](https://squoosh.app/), GIMP, Photoshop |
| Conversión de vídeo | [HandBrake](https://handbrake.fr/) (H.264/MP4) |
| Edición de audio | [Audacity](https://www.audacityteam.org/) (MP3 128kbps) |
| Pruebas cross-browser | Chrome DevTools, Firefox, Edge |

---

## 📐 Justificación de Formatos Técnicos

### Imágenes: PNG/WebP
- **¿Por qué PNG para las imágenes generadas?** Los archivos generados mantienen calidad sin pérdida. Para producción, se recomienda convertir a **WebP** para mejor compresión (hasta 30% menor tamaño con calidad similar).
- **Hero image a 1920px**: Ancho óptimo para pantallas Full HD sin sobrecargar el peso.
- **Miniaturas a 400px**: Tamaño suficiente para previews en la galería.

### Vídeo: MP4 (H.264)
- **¿Por qué MP4?** Es el formato más compatible con todos los navegadores modernos.
- **Códec H.264**: Ofrece excelente compresión manteniendo calidad, ideal para web.
- **Peso < 3MB**: Garantiza carga rápida sin sacrificar calidad visual.

### Audio: MP3 (128 kbps)
- **¿Por qué MP3?** Compatibilidad universal con todos los navegadores.
- **128 kbps**: Bitrate óptimo para música ambiental de fondo, buen balance entre calidad y tamaño.
- **Duración 15s**: Suficiente para crear atmósfera sin aumentar el peso de la página.

### Logo: SVG inline
- **¿Por qué SVG?** Escalable sin pérdida de calidad, muy ligero, y permite animaciones/gradientes con CSS.
- **Inline**: Evita peticiones HTTP adicionales y permite control total con CSS.

---

## 📜 Licencia de Esta Obra (Landing Page)

### Licencia Elegida: CC BY-NC 4.0

![CC BY-NC 4.0](https://licensebuttons.net/l/by-nc/4.0/88x31.png)

He elegido la licencia **Creative Commons Atribución-NoComercial 4.0 Internacional (CC BY-NC 4.0)** para este proyecto.

#### ¿Qué significa esta licencia?
- ✅ **Compartir**: Otros pueden copiar y redistribuir el material
- ✅ **Adaptar**: Pueden remezclar, transformar y construir sobre el material
- ⚠️ **Atribución**: Deben dar crédito apropiado
- 🚫 **NoComercial**: No pueden usar el material para fines comerciales

---

### Análisis de Compatibilidad

Las licencias de los assets utilizados son compatibles con CC BY-NC 4.0:

| Asset | Licencia Original | ¿Compatible con CC BY-NC? |
|-------|-------------------|---------------------------|
| Imágenes (Pexels/Pixabay) | CC0 / Pexels License | ✅ Sí - autores Creative Commons |
| Pexels License | Libre, sin atribución requerida | ✅ Sí - menos restrictiva |
| Pixabay License | CC0-like, dominio público | ✅ Sí - sin restricciones |
| FreePD (CC0) | Dominio público | ✅ Sí - sin restricciones |
| Google Fonts (OFL) | Open Font License | ✅ Sí - permite redistribución |

**Justificación**: Todas las licencias utilizadas (CC0, Pexels License, OFL) son **menos restrictivas** que CC BY-NC, por lo tanto:
- No imponen la obligación de "compartir igual" (Share-Alike)
- Permiten uso comercial (aunque yo lo restrinja en mi obra derivada)
- No requieren atribución obligatoria (aunque la proporciono por buenas prácticas)

Esto me permite elegir libremente la licencia CC BY-NC 4.0 para mi obra derivada.

---

### 🤔 Escenario Hipotético: CC BY-SA

> **Pregunta**: "Si una de las imágenes de la galería hubiera tenido una licencia Creative Commons Atribución-CompartirIgual (CC BY-SA), ¿qué licencia estarías obligado a usar para tu landing page? ¿Por qué?"

#### Respuesta:

Si una imagen tuviera licencia **CC BY-SA**, estaría **obligado** a usar la licencia **CC BY-SA** (o una compatible) para toda mi landing page.

**Razón**: La cláusula "CompartirIgual" (Share-Alike) es **viral** o **copyleft**:

1. **Cualquier obra derivada** que incorpore material CC BY-SA debe distribuirse bajo la **misma licencia** (o una compatible).

2. **No podría usar CC BY-NC** porque:
   - CC BY-NC añade la restricción "NoComercial" que no existe en CC BY-SA
   - Las licencias CC BY-SA y CC BY-NC son **incompatibles** entre sí
   - SA exige que la obra derivada mantenga las mismas libertades, incluyendo uso comercial

3. **Opciones compatibles serían**:
   - CC BY-SA 4.0 (la misma licencia)
   - CC BY-SA de versión posterior

4. **Consecuencias prácticas**:
   - Mi landing page podría ser usada comercialmente por terceros
   - Cualquiera que modifique mi trabajo también tendría que usar CC BY-SA
   - Perdería el control sobre el uso comercial de mi obra

**Conclusión**: Por eso es crucial verificar las licencias de todos los recursos **antes** de integrarlos. Un solo asset CC BY-SA "contamina" todo el proyecto con su cláusula copyleft.

---

## ✅ Verificación Cross-Browser

| Navegador | Funcionalidad | Estado |
|-----------|---------------|--------|
| Chrome | Galería, Modal, Responsive | ⏳ Por verificar |
| Firefox | Galería, Modal, Responsive | ⏳ Por verificar |
| Edge | Galería, Modal, Responsive | ⏳ Por verificar |

### Verificación Responsive
- 📱 **Móvil (375px)**: Menú hamburguesa, layout vertical
- 📱 **Tablet (768px)**: Grid adaptativo, navegación completa
- 💻 **Desktop (1920px)**: Experiencia completa

---

## 🚀 Instrucciones de Uso

1. **Clonar o descargar** el proyecto
2. **Añadir multimedia** (si se desea):
   - Colocar vídeo en `assets/video/reel.mp4`
   - Colocar audio en `assets/audio/ambient.mp3`
3. **Abrir** `index.html` en un navegador
4. **Probar** la galería interactiva y el modal de vídeo

---

## 👩‍🎨 Autor

Proyecto educativo creado para demostrar competencias en:
- Gestión de contenidos multimedia (RA3)
- Integración y manipulación dinámica con JavaScript (RA4)
- Licencias Creative Commons y propiedad intelectual

---

*Última actualización: Diciembre 2024*
