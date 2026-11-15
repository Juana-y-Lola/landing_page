---
target: página principal — revisión conjunta con detalle de proyectos
total_score: 23
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 0
target_identity: "file:/Users/seba/dev/wksp/juanaylola/landing_page/src/components/HomePage.astro"
target_fingerprint: "sha256:b3e46bbc83456acfa93718feb1c00b4f6272eed15bfa0f9ee71f68cbfe7722ce"
target_path: /Users/seba/dev/wksp/juanaylola/landing_page/src/components/HomePage.astro
timestamp: 2026-11-15T01-23-15Z
slug: src-components-homepage-astro
---
Method: dual-agent (A: /root/design_review · B: /root/detector_evidence)

**La identidad visual está conseguida; el mayor margen de mejora está en explicar por qué contratarte.** La portada transmite cuidado y cercanía. Las fichas enseñan productos reales, pero todavía explican poco tu criterio y su utilidad para el negocio del visitante.

**Especificidad del diseño.** La combinación de crema, tinta, coral, titulares editoriales y la historia de las gatas tiene personalidad. En cambio, «Ideas digitales para negocios reales» y la presentación de servicios podrían pertenecer a muchos estudios. La oportunidad es hacer aparecer antes al profesional y conectar sus decisiones con problemas concretos de pequeños negocios.

**Evaluación heurística** — escala 0–4; puntuación orientativa. Portada: Persuade. Fichas: Experience/Read.

| Heurística | Portada | Fichas | Observación principal |
|---|---:|---:|---|
| Visibilidad del estado | 3 | 3 | Buena orientación; falta marcar Proyectos activo dentro de una ficha. |
| Lenguaje del usuario | 3 | 2 | Las fichas explican funciones y tecnologías más que necesidades. |
| Control y libertad | 3 | 3 | Regreso, contacto y salidas claros. |
| Consistencia | 3 | 3 | Sistema coherente; «Escríbenos» rompe la voz individual. |
| Prevención de errores | 3 | 3 | Campos requeridos y destinos identificados. |
| Reconocimiento | 3 | 3 | Acciones visibles; el contexto del proyecto no llega al contacto. |
| Flexibilidad y eficiencia | n/a | n/a | Sin operaciones de uso experto que evaluar. |
| Estética y minimalismo | 2 | 2 | Servicios densos; prosa de las fichas demasiado ancha. |
| Recuperación de errores | 3 | n/a | Formulario con reintento y correo alternativo previstos en código; fichas sin operación propia. |
| Ayuda y documentación | n/a | n/a | No requieren documentación operativa. |
| **Total** | **23/32 · Buena** | **19/28 · Aceptables** | Diferentes denominadores por aplicabilidad. |

**Lo que funciona**

- El titular principal tiene presencia y un CTA inequívoco. En móvil sigue visible y mide 54 px de alto.
- La historia personal explica el nombre y aporta una cercanía que otros estudios no pueden copiar sin más.
- El portfolio identifica trabajo real y ofrece webs públicas. La consulta gratuita de 30 minutos, el correo y «Aún no lo sé» reducen la presión de contactar.

**Prioridades**

1. **[P1] Las fichas describen productos, pero no construyen un caso para contratarte.** Pixban repite funciones entre introducción y cuerpo; la web personal apenas añade un párrafo y tecnología. El visitante conoce el producto, pero no las decisiones que demuestran tu capacidad. Estructura cada caso como problema → solución → decisiones → qué demuestra. Añade en Pixban un antes/después del pixelado que haga evidente su utilidad. Usa solo hechos disponibles, sin inventar clientes ni métricas. Evidencia: `src/content/portfolio/es/pixban.md:18`, `src/content/portfolio/es/web-personal-y-blog.md:15`. **Comando sugerido: `$impeccable clarify`.**

2. **[P2] Servicios exige demasiada lectura pequeña antes de mostrar pruebas.** Los cuatro bloques usan texto de 13 px también en móvil; a 390 px, la sección ocupa unos 1876 px de alto. El visitante necesita comparar explicaciones largas para encontrar su necesidad. Resume cada servicio en beneficio, ejemplo y siguiente paso; deja los matices de implementación para una segunda capa. Permite llegar al contacto con el servicio seleccionado. Evidencia: `src/components/HomePage.astro:44`, `src/styles/global.css:136`. **Comando sugerido: `$impeccable distill`.**

3. **[P2] Las fichas tienen una medida de lectura excesiva en escritorio.** La prosa ocupa 1200 px con letra de 16 px; las líneas recorren casi toda la pantalla. Eso dificulta seguir el texto y hace que el cuerpo parezca menos trabajado que el hero. Limita la columna a aproximadamente 65–75ch y reserva el ancho completo para imágenes. Evidencia: `src/components/ProjectPage.astro:51`, `src/styles/global.css:295`. **Comando sugerido: `$impeccable typeset`.**

4. **[P2] La oferta concreta aparece tarde y el contacto pierde contexto.** La consulta gratuita está en la sección final; las fichas terminan todas con «¿Tienes una idea parecida? / Hablemos». Acerca la oferta al CTA inicial y explica qué sucede después de escribir. En los proyectos, relaciona el cierre con la necesidad y conserva el proyecto de origen al llegar al formulario. Evidencia: `src/lib/copy.ts:68`, `src/components/ProjectPage.astro:54`. **Comando sugerido: `$impeccable clarify`.**

**Carga cognitiva y recorrido emocional.** Moderada en la portada por la densidad de servicios y baja en las fichas por su recorrido simple. Hay cinco destinos de navegación más idioma y seis opciones al abrir el selector de contacto; están reconocibles, por lo que su cantidad no supone un bloqueo por sí sola. La portada empieza con confianza, se vuelve más pesada en servicios y recupera cercanía en la historia personal. En las fichas falta el momento de comprender cómo ese trabajo se relaciona con el negocio propio.

**Personas**

- **Jordan, primera visita:** entiende el beneficio general, pero debe traducir «Consultoría IT», «sitio estático» y el stack a su problema concreto.
- **Riley, visitante escéptico:** encuentra «100 % gratuito, seguro y libre» sin contexto sobre qué significa «seguro». Sustituye el absoluto por hechos verificables.
- **Casey, móvil:** dispone de botones cómodos y menú funcional, pero debe recorrer mucho texto antes de las muestras de trabajo. La descripción larga de Pixban también retrasa su captura.

**Detalles menores.** Unifica la voz individual de «Escríbenos». Da más superficie táctil a «Explorar servicios»: mide unos 25 px de alto. No es, por ese dato aislado, un incumplimiento normativo. Marca Proyectos activo en sus fichas.

**Evidencia técnica.** El detector ejecutado una vez sobre `src/components` devolvió **0 hallazgos**, sin reglas activadas ni falsos positivos. Eso no valida la calidad del contenido o la lectura. Ambas evaluaciones coinciden en servicios densos, prosa demasiado ancha y casos poco desarrollados. No hubo desbordamiento horizontal en las tres rutas medidas a 390 px ni errores de consola en las vistas revisadas. El menú móvil abrió y cerró con Escape. El envío real del formulario no se probó.

**Preguntas de diseño.** ¿Qué decisión de cada proyecto explica mejor tu criterio que su lista de tecnologías? ¿Qué debería reconocer un dueño de negocio en los primeros diez segundos para sentir que este estudio puede ayudarlo?
