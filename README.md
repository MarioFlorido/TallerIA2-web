# Taller avanzado de IA

Web estática con las actividades del taller. El contenido vive en `contenido.md`; `index.html` + `app.js` lo cargan y lo pintan.

## Ver en local

`contenido.md` se carga con `fetch`, así que hay que servir la carpeta (no vale abrir `index.html` con doble clic):

```bash
python3 -m http.server 8000
```

y abrir <http://localhost:8000>.

## Editar contenido

Estructura de `contenido.md`: `# FASE n: Título` → `### n. Actividad` (con `> **Tag:**` y `> **Imagen:** img/…`) → secciones `#### …`. Las imágenes van en `img/` (JPG ≤ 1200 px de ancho).
